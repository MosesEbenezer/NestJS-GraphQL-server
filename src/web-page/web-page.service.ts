import { Injectable } from '@nestjs/common';
import { GetWebPageArgs } from './dto/args/get-web-page.args';
import { WebPage } from './models/web-page';

@Injectable()
export class WebPageService {
  private webpages: WebPage[] = [];

  public getWebPage(getWebPageArgs: GetWebPageArgs): WebPage {
    // where do we parse the url and save the required fields ?
    return this.webpages.find(
      (page) => page.pageUrl === getWebPageArgs.pageUrl,
    );
  }
}
