"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBarChartConfiguration = createBarChartConfiguration;
exports.generateBarChartBuffer = generateBarChartBuffer;
exports.getTopIssues = getTopIssues;
exports.getTopCities = getTopCities;
const jsdom_1 = __importDefault(require("jsdom"));
const d3_node_1 = __importDefault(require("d3-node"));
const { JSDOM } = jsdom_1.default;
function createBarChartConfiguration(labels = [], dataValues = [], chartTitle = '') {
    // Define chart dimensions and margins
    const width = 500;
    const height = 300;
    const margin = { top: 20, right: 30, bottom: 80, left: 40 };
    return { width, height, margin, labels, dataValues, chartTitle };
}
// Function to render a chart and return a Base64 buffer
async function generateBarChartBuffer(config) {
    const { width, height, margin, labels, dataValues, chartTitle } = config;
    const d3n = new d3_node_1.default();
    const d3 = d3n.d3;
    // Set up a virtual DOM
    const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
    const body = d3.select(dom.window.document).select('body');
    // Create SVG
    const svg = body
        .append('svg')
        .attr('xmlns', 'http://www.w3.org/2000/svg')
        .attr('width', width)
        .attr('height', height);
    // Create scales
    const xScale = d3
        .scaleBand()
        .domain(labels)
        .range([margin.left, width - margin.right])
        .padding(0.1);
    const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(dataValues) || 0])
        .range([height - margin.bottom, margin.top]);
    // Add x-axis
    svg
        .append('g')
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(xScale).tickSize(0)) //  Removes tick marks
        .call((g) => g.select('.domain')) // Removes the bottom black line
        .selectAll('text')
        .attr('transform', 'rotate(-40)')
        .attr('text-anchor', 'end')
        .select('.domain') // Remove top black line
        .remove();
    // Add Y-Axis Grid Lines BEFORE rendering bars
    svg
        .append('g')
        .attr('class', 'grid')
        .attr('transform', `translate(${margin.left},0)`)
        .call(d3.axisLeft(yScale))
        .selectAll('line')
        .attr('stroke', '#ddd')
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', '4,4');
    // Add Bars
    svg
        .selectAll('.bar')
        .data(dataValues)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', (_, i) => xScale(labels[i]) || 0)
        .attr('y', (d) => yScale(d))
        .attr('width', xScale.bandwidth())
        .attr('height', (d) => height - margin.bottom - yScale(d))
        .attr('fill', 'rgba(133, 21, 32, 0.6)')
        .attr('stroke', 'rgba(133, 21, 32, 1)')
        .attr('stroke-width', 1);
    // Add Labels to Bars
    svg
        .selectAll('.bar-label')
        .data(dataValues)
        .enter()
        .append('text')
        .attr('class', 'bar-label')
        .attr('x', (_, i) => (xScale(labels[i]) || 0) + xScale.bandwidth() / 2)
        .attr('y', (d) => yScale(d) - 5)
        .attr('text-anchor', 'middle')
        .text((d) => d)
        .style('font-family', 'Arial, sans-serif') // Dynamic font family
        .style('font-size', '8px');
    // Add chart title
    if (chartTitle) {
        svg
            .append('text')
            .attr('x', width / 2)
            .attr('y', margin.top)
            .attr('text-anchor', 'middle')
            .style('font-size', '16px')
            .style('font-weight', 'bold')
            .text(chartTitle);
    }
    // Convert the SVG to a string
    const svgString = body.html();
    // Encode as Base64 and return as a Buffer
    return Buffer.from(svgString);
}
/**
 * Retrieves the top issues from a list of actions.
 * @param actions - An array of action objects.
 * @returns An array of issues sorted by occurrence.
 */
function getTopIssues(actions) {
    let issues = [];
    issues = issues.concat
        .apply([], actions.map((x) => x.issues
        ? x.issues
            .filter((y) => y?.id != null)
            .map((y) => ({
            name: y.name,
            id: y.id,
        }))
        : []))
        .filter((value, index, self) => index === self.findIndex((t) => t.name === value.name))
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
    for (const issue of issues) {
        const issueActions = actions.filter((x) => x.issues?.find((y) => y.name === issue.name));
        issue.count = issueActions.length;
    }
    issues.sort((a, b) => (a.count > b.count ? -1 : b.count > a.count ? 1 : 0));
    return issues;
}
/**
 * Retrieves the top cities from a list of actions.
 * @param actions - An array of action objects.
 * @returns An array of cities sorted by occurrence.
 */
function getTopCities(actions) {
    let cities = [];
    cities = cities.concat
        .apply([], actions.map((x) => {
        return {
            city: x?.location?.city ?? '',
            province: x?.location?.province ?? '',
            country: x?.location?.country ?? '',
            id: x?.location?.id ?? '',
            count: 0,
        };
    }))
        .filter((value, index, self) => index === self.findIndex((t) => t.city === value.city))
        .sort((a, b) => (a.city > b.city ? 1 : b.city > a.city ? -1 : 0));
    for (const city of cities) {
        const cityActions = actions.filter((x) => x?.location?.city === city.city);
        city.count = cityActions.length;
    }
    cities.sort((a, b) => (a.count > b.count ? -1 : b.count > a.count ? 1 : 0));
    return cities;
}
//# sourceMappingURL=chart-helper.js.map