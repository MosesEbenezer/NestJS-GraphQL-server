import { Module } from '@nestjs/common';
import { WebPageResolver } from './web-page.resolver';
import { WebPageService } from './web-page.service';

@Module({
  providers: [WebPageService, WebPageResolver],
})
export class WebPageModule {}
