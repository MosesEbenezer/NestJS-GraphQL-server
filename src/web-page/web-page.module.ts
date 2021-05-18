import { Module, CacheModule } from '@nestjs/common';
import { WebPageResolver } from './web-page.resolver';
import { WebPageService } from './web-page.service';

@Module({
  imports: [
    CacheModule.register(),
    // CacheModule.register({
    //   ttl: 5,
    //   max: 100,
    // }),
  ],
  providers: [WebPageResolver, WebPageService],
})
export class WebPageModule {}
