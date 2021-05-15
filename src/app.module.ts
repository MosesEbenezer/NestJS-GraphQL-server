import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { WebPageModule } from './web-page/web-page.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    WebPageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
