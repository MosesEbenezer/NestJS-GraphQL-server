import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GetWebPageArgs } from './dto/args/get-web-page.args';
import { GetWebPageInput } from './dto/input/get-web-page.input';
import { WebPage } from './models/web-page';
import { WebPageService } from './web-page.service';

@Resolver(() => WebPage)
export class WebPageResolver {
  constructor(private readonly webPageService: WebPageService) {}

  @Query(() => WebPage, { name: 'webPage' })
  getWebPage(@Args() getWebPageArgs: GetWebPageArgs): WebPage {
    return this.webPageService.getWebPage(getWebPageArgs);
  }

  @Mutation(() => WebPage)
  getPage(@Args('getWebPageData') getWebPageData: GetWebPageInput): WebPage {
    return this.webPageService.getWebPage(getWebPageData);
  }
}
