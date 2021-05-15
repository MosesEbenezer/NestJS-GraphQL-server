import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class WebPage {
  @Field()
  pageUrl: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  largestImage: string;
}
