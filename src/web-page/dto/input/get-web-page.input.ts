import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsUrl } from 'class-validator';

@InputType()
export class GetWebPageInput {
  @Field()
  @IsNotEmpty()
  @IsUrl()
  pageUrl: string;
}
