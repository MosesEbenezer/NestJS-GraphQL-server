import { Resolver, Query, Args } from '@nestjs/graphql';
// import { CacheInterceptor, UseInterceptors } from '@nestjs/common';
import { GetWebPageArgs } from './dto/args/get-web-page.args';
import { WebPage } from './models/web-page';
import { WebPageService } from './web-page.service';

@Resolver(() => WebPage)
export class WebPageResolver {
  constructor(private readonly webPageService: WebPageService) {}

  // @UseInterceptors(CacheInterceptor)
  @Query(() => WebPage, { name: 'web', nullable: true })
  getWebPage(@Args() getWebPageArgs: GetWebPageArgs): Promise<WebPage> {
    return this.webPageService.getWebPage(getWebPageArgs);
  }
}
