import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateUrlDto {

  @IsNotEmpty({ message: 'Original URL is required' })
  @IsString()
  @IsUrl({}, { message: 'Must be a valid URL' })
  originalUrl: string;
}
