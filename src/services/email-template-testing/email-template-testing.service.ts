import { JarvisService } from '../../shared/services/jarvis.service';
import { PostType } from '../../shared/graphql/jarvis';
import { EmailService } from '../../shared/services/email.service';
import moment from 'moment';
import { getTopCities, getTopIssues } from '../../shared/utils/chart-helper';
import {
  DATE_FORMAT_NO_YEAR,
  DATE_LONG_FORMAT,
  getActivityIconSVG,
  getArticleIconSVG,
  getProtestIconSVG,
} from 'jarvis-common';
import {
  createHtmlImageTagFromBuffer,
  formatDatePeriod,
  HTMLEmailMessage,
} from 'jarvis-common';
import {
  createBarChartConfiguration,
  generateBarChartBuffer,
} from '../../shared/utils/chart-helper';
import dotenv from 'dotenv';
import { inject, injectable, optional } from 'inversify';
import { InvocationContext } from '@azure/functions';
import { Logger } from '../../shared/utils/logger';
import { configService } from '../../shared/config/config.service';
dotenv.config();

@injectable()
export class EmailTemplateTestingService {
  locationIssues = new Set();
  private readonly logger: Logger;

  constructor(
    private readonly jarvisService: JarvisService,
    private readonly emailService: EmailService,
    @inject(InvocationContext)
    @optional()
    private readonly invocationContext?: InvocationContext,
  ) {
    console.log(String.raw`
     ____.                  .__        
    |    |____ __________  _|__| ______
    |    \__  \\_  __ \  \/ /  |/  ___/
/\__|    |/ __ \|  | \/\   /|  |\___ \ 
\________(____  /__|    \_/ |__/____  )
              \/                    \/  Email Template Testing Utility`);
    this.logger = new Logger('EmailTemplateTestingService', invocationContext);
    this.logger.info(
      `connecting to: ${configService.getValue('GRAPHQL_SERVER')}`,
    );
  }

  async emailActionsSample() {
    const now = moment().utc();
    const today = now.startOf('day');

    let daysBack = -1;
    if (today.day() === 1) {
      // monday
      // get all articles since last Friday at 6am
      this.logger.info('its Monday, pulling for last 3 days');
      daysBack = -3;
    }
    let daysForward = 3;
    if (today.day() === 5) {
      // friday
      // get activities/protests through the weekend
      this.logger.info('its Friday, looking ahead for next 3 days');
      daysForward = 3;
    }

    const previousEpoch = moment().utc().add(daysBack, 'days').startOf('day');
    const nextEpoch = moment()
      .utc()
      .add(daysForward, 'days')
      .startOf('day')
      .add(-1, 'second');

    // load the content
    const newArticles = await this.jarvisService.getArticlesByCreatedDateWindow(
      previousEpoch.toDate(),
      today.toDate(),
      //audiences
    );
    //const newArticles = [];
    const newProtests = await this.jarvisService.getActionsByDateWindow(
      previousEpoch.toDate(),
      today.toDate(),
      true,
      'lastModifiedDate',
      //audiences
    );
    const highlightProtests = newProtests
      .filter(
        (x) => x.type !== PostType.RawAction && !x?.title?.startsWith('-'),
      )
      .sort((x, y) => new Date(x.date).getTime() - new Date(y.date).getTime());
    const notifications =
      await this.jarvisService.getServiceAndPlatformNotifications();

    const newActivities = await this.jarvisService.getActionsByDateWindow(
      previousEpoch.toDate(),
      today.toDate(),
      false,
      'lastModifiedDate',
      // audiences
    );
    const highlightActions = newActivities
      .filter(
        (x) => x.type !== PostType.RawAction && !x?.title?.startsWith('-'),
      )
      .sort((x, y) => new Date(x.date).getTime() - new Date(y.date).getTime());

    const upcomingProtests = await this.jarvisService.getActionsByDateWindow(
      today.toDate(),
      nextEpoch.toDate(),
      true,
      'actionDate',
      //audiences
    );

    const emailMessage = new HTMLEmailMessage();
    emailMessage.setTitle(
      `FORESIGHT - (template test) Daily Update for ${today.format(
        DATE_LONG_FORMAT,
      )}`,
    );
    emailMessage.setSummaryHeader(`Today's Summary:
   ${getActivityIconSVG('black')}, ${getProtestIconSVG(
      'black',
    )}, ${getArticleIconSVG('black')}
       `);
    notifications.forEach((x) => emailMessage.addNotification(x.notice));

    // add articles
    const articleTitle = `${
      newArticles.length
    } Articles added since ${previousEpoch.format(DATE_FORMAT_NO_YEAR)}`;
    emailMessage.addSummaryLineItem(articleTitle, 'articles');
    emailMessage.createSection('Articles', articleTitle, 'articles');
    newArticles.forEach((x) =>
      emailMessage.addSectionContent('Articles', emailMessage.articleMarkup(x)),
    );

    // add highlighted protests
    const protestTitle = `${
      highlightProtests.length
    } Highlighted protests added since ${previousEpoch.format(
      DATE_FORMAT_NO_YEAR,
    )}`;
    emailMessage.addSummaryLineItem(protestTitle, 'highlightProtests');
    emailMessage.createSection('Protests', protestTitle, 'highlightProtests');
    highlightProtests.forEach((x) =>
      emailMessage.addSectionContent('Protests', emailMessage.actionMarkup(x)),
    );

    // add highlighted actions
    const actionTitle = `${
      highlightActions.length
    } Highlighted activities added since ${previousEpoch.format(
      DATE_FORMAT_NO_YEAR,
    )}`;
    emailMessage.addSummaryLineItem(actionTitle, 'highlightActions');
    emailMessage.createSection('Actions', actionTitle, 'highlightActions');
    highlightActions.forEach((x) =>
      emailMessage.addSectionContent('Actions', emailMessage.actionMarkup(x)),
    );

    const upcomingProtestsTitle = `${
      upcomingProtests.length
    } Protests to occur between ${formatDatePeriod(today, nextEpoch)}`;
    emailMessage.addSummaryLineItem(upcomingProtestsTitle, 'upcomingProtests');
    emailMessage.createSection(
      'Charts1',
      upcomingProtestsTitle,
      'upcomingProtests',
    );
    const issues = getTopIssues(upcomingProtests).slice(0, 10); // Use slice instead of splice to not modify array

    const config = createBarChartConfiguration();
    config.labels = issues.map((x: { name: string }) => x.name);
    config.dataValues = issues.map((x: any) => x.count);
    const issueChartBuffer = await generateBarChartBuffer(config);
    emailMessage.addSectionContent(
      'Charts1',
      `<p>Top 10 Issues</p>
       <p align="center">${createHtmlImageTagFromBuffer(issueChartBuffer)}</p>`,
    );

    const cities = getTopCities(upcomingProtests).slice(0, 10);
    const cityConfig = createBarChartConfiguration();
    cityConfig.labels = cities.map((x: { city: string }) => x.city);
    cityConfig.dataValues = cities.map((x: any) => x.count);
    const cityChartBuffer = await generateBarChartBuffer(cityConfig);
    emailMessage.addSectionContent(
      'Charts1',
      `<p>Top 10 Cities</p>
       <p align="center">${createHtmlImageTagFromBuffer(cityChartBuffer)}</p>`,
    );

    await this.emailService.sendHTMLEmailMessage(
      ['chris@foresightreports.com'],
      emailMessage,
    );
    this.logger.info('done');
  }
}
