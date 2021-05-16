import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GetWebPageArgs } from './dto/args/get-web-page.args';
import { GetWebPageInput } from './dto/input/get-web-page.input';
import { WebPage } from './models/web-page';
import { WebPageService } from './web-page.service';

@Resolver(() => WebPage)
export class WebPageResolver {
  constructor(private readonly webPageService: WebPageService) {}

  @Query(() => WebPage, { name: 'webpage' })
  getWebPage(@Args() getWebPageArgs: GetWebPageArgs): WebPage {
    return this.webPageService.getWebPage(getWebPageArgs);
  }

  @Mutation((returns) => WebPage, { name: 'webpage' })
  async getPage(@Args('page') page: GetWebPageInput): Promise<WebPage> {
    return this.webPageService.getWebPage(page);
  }
}
