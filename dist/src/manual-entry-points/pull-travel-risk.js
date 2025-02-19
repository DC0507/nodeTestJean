"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio = __importStar(require("cheerio"));
const xml2js_1 = __importDefault(require("xml2js"));
const fastest_levenshtein_1 = require("fastest-levenshtein");
async function scrapeCanadianAdvisories() {
    const url = 'https://travel.gc.ca/travelling/advisories';
    try {
        const now = new Date();
        const response = await fetch(url);
        if (!response.ok)
            throw new Error(`HTTP error! Status: ${response.status}`);
        const html = await response.text();
        const $ = cheerio.load(html);
        const advisories = [];
        $('table tbody tr').each((index, element) => {
            const countryElement = $(element).find('td a');
            const countryName = countryElement.text().trim();
            const link = countryElement.attr('href');
            const recommendation = $(element).find('td:nth-child(3)').text().trim(); // Adjust this if necessary
            const lastUpdated = $(element).find('td:nth-child(4)').text().trim();
            let riskLevel = 'Unknown';
            if (recommendation.startsWith('Exercise a high degree of caution')) {
                riskLevel = 'Medium';
            }
            else if (recommendation.startsWith('Take normal security precautions')) {
                riskLevel = 'Low';
            }
            else if (recommendation.startsWith('Avoid non-essential travel')) {
                riskLevel = 'High';
            }
            else if (recommendation.startsWith('Avoid all travel')) {
                riskLevel = 'Very High';
            }
            advisories.push({
                asof: new Date(lastUpdated),
                advisorySource: 'Canada',
                country: countryName,
                isoCode: getCountryISOCode(countryName),
                risk: riskLevel,
                recommendation: recommendation,
                description: '',
                url: `https://travel.gc.ca${link}`,
            });
        });
        console.log(advisories);
    }
    catch (error) {
        console.error(error);
    }
}
async function scrapeUSAdvisories() {
    const RSS_FEED_URL = 'https://travel.state.gov/_res/rss/TAsTWs.xml';
    try {
        const response = await fetch(RSS_FEED_URL);
        if (!response.ok)
            throw new Error(`HTTP error! Status: ${response.status}`);
        const xmlText = await response.text();
        // Convert XML to JSON
        const parser = new xml2js_1.default.Parser({ explicitArray: false });
        const jsonData = await parser.parseStringPromise(xmlText);
        // Extract advisories with parsed title
        const advisories = jsonData.rss.channel.item.map((item) => {
            const titleRegex = /^(.*?)\s*-\s*Level\s*(\d+):\s*(.*)$/;
            const matches = item.title.match(titleRegex);
            const [_, country, level, description] = matches || [
                '',
                'Unknown',
                '0',
                'Unknown',
            ];
            let riskLevel = 'Unknown';
            switch (parseInt(level)) {
                case 1:
                    riskLevel = 'Low';
                    break;
                case 2:
                    riskLevel = 'Medium';
                    break;
                case 3:
                    riskLevel = 'High';
                    break;
                case 4:
                    riskLevel = 'Very High';
                    break;
            }
            return {
                asof: new Date(item.pubDate),
                advisorySource: 'US',
                country: country.trim(),
                isoCode: getCountryISOCode(country.trim()),
                risk: riskLevel,
                recommentation: description.trim(),
                //title: item.title,
                //description: item.description,
                url: item.link,
            };
        });
        console.log(advisories);
    }
    catch (error) {
        console.error(error);
    }
}
async function fetchPage(url) {
    const response = await fetch(url);
    if (!response.ok)
        throw new Error(`HTTP error! Status: ${response.status}`);
    return response.text();
}
function removeDiacritics(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
async function scrapeUKAdvisories() {
    const BASE_URL = 'https://www.gov.uk/foreign-travel-advice';
    try {
        console.log(`Fetching country list from ${BASE_URL}...`);
        const homeHtml = await fetchPage(BASE_URL);
        const $ = cheerio.load(homeHtml);
        const countries = [];
        // Extract country names and advisory links
        $('.govuk-list a').each((index, element) => {
            const countryName = $(element).text().trim();
            const link = BASE_URL + $(element).attr('href');
            countries.push({ countryName, link });
        });
        console.log(`Found ${countries.length} countries. Fetching advisories...`);
        // Fetch advisories for each country
        const advisories = countries.map(async (country) => {
            console.log(`Fetching advisory for: ${country.countryName}`);
            try {
                const advisory = {};
                advisory.country = removeDiacritics(country.countryName);
                advisory.isoCode = getCountryISOCode(country.countryName);
                advisory.advisorySource = 'UK';
                advisory.risk = 'Medium';
                advisory.recommendation = 'No explicit risk warnings found.';
                advisory.asof = new Date();
                advisory.url =
                    BASE_URL +
                        '/' +
                        removeDiacritics(country.countryName)
                            .toLowerCase()
                            .replaceAll(' ', '-')
                            .replaceAll('/', '-')
                            .replaceAll(',', '-')
                            .replaceAll('--', '-');
                const countryHtml = await fetchPage(advisory.url);
                const $country = cheerio.load(countryHtml);
                const updatedDate = $country('.gem-c-metadata__list dt')
                    .filter((i, el) => $(el).text().trim() === 'Updated:')
                    .next('dd')
                    .text()
                    .trim();
                advisory.asof = updatedDate ? new Date(updatedDate) : null;
                // Extract travel warnings (searching for warning keywords)
                const riskStatements = [];
                $country('p, h2, h3, li').each((index, element) => {
                    const text = $(element).text().trim();
                    if (text.toLowerCase().includes('advises against all travel')) {
                        advisory.risk = 'Very High';
                        advisory.recommendation = text;
                    }
                    else if (text
                        .toLowerCase()
                        .includes('advises against all but essential travel')) {
                        advisory.risk = 'High';
                        advisory.recommendation = text;
                    }
                });
                console.log(advisory);
                return advisory;
            }
            catch (error) {
                console.error(`Error fetching ${country.countryName}: ${error}`);
                country.riskStatements = ['Error fetching advisory.'];
            }
        });
        console.log(advisories);
    }
    catch (error) {
        console.error(`Error scraping advisories: ${error}`);
    }
}
const countryISOMap = {
    Afghanistan: 'AF',
    Albania: 'AL',
    Algeria: 'DZ',
    Andorra: 'AD',
    Angola: 'AO',
    'Antigua and Barbuda': 'AG',
    Argentina: 'AR',
    Armenia: 'AM',
    Australia: 'AU',
    Austria: 'AT',
    Azerbaijan: 'AZ',
    Bahamas: 'BS',
    Bahrain: 'BH',
    Bangladesh: 'BD',
    Barbados: 'BB',
    Belarus: 'BY',
    Belgium: 'BE',
    Belize: 'BZ',
    Benin: 'BJ',
    Bhutan: 'BT',
    Bolivia: 'BO',
    'Bosnia and Herzegovina': 'BA',
    Botswana: 'BW',
    Brazil: 'BR',
    Brunei: 'BN',
    Bulgaria: 'BG',
    'Burkina Faso': 'BF',
    Burundi: 'BI',
    Cambodia: 'KH',
    Cameroon: 'CM',
    Canada: 'CA',
    'Cape Verde': 'CV',
    'Central African Republic': 'CF',
    Chad: 'TD',
    Chile: 'CL',
    China: 'CN',
    Colombia: 'CO',
    Comoros: 'KM',
    'Democratic Republic of the Congo': 'CD',
    'Congo-Kinshasa': 'CD',
    'DR Congo': 'CD',
    DRC: 'CD',
    'Congo (Kinshasa)': 'CD',
    'Republic of the Congo': 'CG',
    'Congo-Brazzaville': 'CG',
    Congo: 'CG',
    'Congo (Brazzaville)': 'CG',
    'Costa Rica': 'CR',
    Croatia: 'HR',
    Cuba: 'CU',
    Cyprus: 'CY',
    Czechia: 'CZ',
    Denmark: 'DK',
    Djibouti: 'DJ',
    Dominica: 'DM',
    'Dominican Republic': 'DO',
    Ecuador: 'EC',
    Egypt: 'EG',
    'El Salvador': 'SV',
    'Equatorial Guinea': 'GQ',
    Eritrea: 'ER',
    Estonia: 'EE',
    Eswatini: 'SZ',
    Ethiopia: 'ET',
    Fiji: 'FJ',
    Finland: 'FI',
    France: 'FR',
    Gabon: 'GA',
    Gambia: 'GM',
    Georgia: 'GE',
    Germany: 'DE',
    Ghana: 'GH',
    Greece: 'GR',
    Grenada: 'GD',
    Guatemala: 'GT',
    Guinea: 'GN',
    'Guinea-Bissau': 'GW',
    Guyana: 'GY',
    Haiti: 'HT',
    Honduras: 'HN',
    Hungary: 'HU',
    Iceland: 'IS',
    India: 'IN',
    Indonesia: 'ID',
    Iran: 'IR',
    Iraq: 'IQ',
    Ireland: 'IE',
    Israel: 'IL',
    Italy: 'IT',
    Jamaica: 'JM',
    Japan: 'JP',
    Jordan: 'JO',
    Kazakhstan: 'KZ',
    Kenya: 'KE',
    Kiribati: 'KI',
    Kuwait: 'KW',
    Kyrgyzstan: 'KG',
    Laos: 'LA',
    Latvia: 'LV',
    Lebanon: 'LB',
    Lesotho: 'LS',
    Liberia: 'LR',
    Libya: 'LY',
    Liechtenstein: 'LI',
    Lithuania: 'LT',
    Luxembourg: 'LU',
    Madagascar: 'MG',
    Malawi: 'MW',
    Malaysia: 'MY',
    Maldives: 'MV',
    Mali: 'ML',
    Malta: 'MT',
    Mauritania: 'MR',
    Mauritius: 'MU',
    Mexico: 'MX',
    Moldova: 'MD',
    Monaco: 'MC',
    Mongolia: 'MN',
    Montenegro: 'ME',
    Morocco: 'MA',
    Mozambique: 'MZ',
    Myanmar: 'MM',
    Namibia: 'NA',
    Nauru: 'NR',
    Nepal: 'NP',
    Netherlands: 'NL',
    'New Zealand': 'NZ',
    Nicaragua: 'NI',
    Niger: 'NE',
    Nigeria: 'NG',
    'North Korea': 'KP',
    'North Macedonia': 'MK',
    Norway: 'NO',
    Oman: 'OM',
    Pakistan: 'PK',
    Palestine: 'PS',
    Panama: 'PA',
    'Papua New Guinea': 'PG',
    Paraguay: 'PY',
    Peru: 'PE',
    Philippines: 'PH',
    Poland: 'PL',
    Portugal: 'PT',
    Qatar: 'QA',
    Romania: 'RO',
    Russia: 'RU',
    Rwanda: 'RW',
    'Saint Kitts and Nevis': 'KN',
    'Saint Lucia': 'LC',
    'Saint Vincent and the Grenadines': 'VC',
    Samoa: 'WS',
    'San Marino': 'SM',
    'Saudi Arabia': 'SA',
    Senegal: 'SN',
    Serbia: 'RS',
    Seychelles: 'SC',
    'Sierra Leone': 'SL',
    Singapore: 'SG',
    Slovakia: 'SK',
    Slovenia: 'SI',
    'Solomon Islands': 'SB',
    'South Africa': 'ZA',
    'South Korea': 'KR',
    Spain: 'ES',
    'Sri Lanka': 'LK',
    Sudan: 'SD',
    Sweden: 'SE',
    Switzerland: 'CH',
    Syria: 'SY',
    Taiwan: 'TW',
    Tajikistan: 'TJ',
    Tanzania: 'TZ',
    Thailand: 'TH',
    Togo: 'TG',
    Tonga: 'TO',
    Tunisia: 'TN',
    Turkey: 'TR',
    Uganda: 'UG',
    Ukraine: 'UA',
    'United Arab Emirates': 'AE',
    'United Kingdom': 'GB',
    'United States': 'US',
    Uruguay: 'UY',
    Uzbekistan: 'UZ',
    Vanuatu: 'VU',
    'Vatican City': 'VA',
    Venezuela: 'VE',
    Vietnam: 'VN',
    Yemen: 'YE',
    Zambia: 'ZM',
    Zimbabwe: 'ZW',
};
function getCountryISOCode(countryName) {
    const normalized = countryName.trim().toLowerCase();
    if (countryISOMap[countryName]) {
        return countryISOMap[countryName];
    }
    const closestMatch = (0, fastest_levenshtein_1.closest)(normalized, Object.keys(countryISOMap).map((key) => key.toLowerCase()));
    return (countryISOMap[Object.keys(countryISOMap).find((key) => key.toLowerCase() === closestMatch)] || null);
}
// async function main() {
//   await scrapeCanadianAdvisories();
//   await scrapeUSAdvisories();
// }
// main().catch(console.error);
//scrapeCanadianAdvisories();
//scrapeUKAdvisories();
scrapeUSAdvisories();
//# sourceMappingURL=pull-travel-risk.js.map