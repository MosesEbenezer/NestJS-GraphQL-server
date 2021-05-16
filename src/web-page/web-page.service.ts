/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable } from '@nestjs/common';
import { GetWebPageArgs } from './dto/args/get-web-page.args';
import { WebPage } from './models/web-page';
const Meta = require('html-metadata-parser');

@Injectable()
export class WebPageService {
  private webpages: WebPage[] = [];

  public async getWebPage(getWebPageArgs: GetWebPageArgs): Promise<WebPage> {
    let res = this.webpages.find(
      (page) => page.pageUrl === getWebPageArgs.pageUrl,
    );

    if (!res) {
      const result = await Meta.parser(getWebPageArgs.pageUrl);
      const images = result.images;
      let largestImage;

      if (images.length != 0) {
        const sortedImages = images
          .sort((a, b) => b.width + b.height - (a.width + b.height))
          .filter((img) => {
            return img.width > 0 && img.height > 0;
          });

        largestImage = sortedImages[0];
      } else {
        largestImage = result.og.images[0];
      }

      const metaObj: WebPage = {
        pageUrl: getWebPageArgs.pageUrl,
        title: result.meta.title,
        description: result.meta.description,
        largestImage: largestImage || null,
      };

      this.webpages.push(metaObj);
      res = metaObj;

      console.log('response', res);
    }

    return res;
  }
}
