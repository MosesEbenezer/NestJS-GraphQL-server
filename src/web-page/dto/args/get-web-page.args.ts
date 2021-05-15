import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsUrl } from 'class-validator';

@ArgsType()
export class GetWebPageArgs {
  @Field()
  @IsNotEmpty()
  @IsUrl(undefined, { message: 'WebPage Url is not valid.' })
  pageUrl: string;
}
