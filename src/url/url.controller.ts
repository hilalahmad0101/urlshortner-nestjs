import { Controller, Get, Post, Body,  Param, Res } from '@nestjs/common';
import { UrlService } from './url.service';
import { CreateUrlDto } from './dto/create-url.dto';

@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post()
  create(@Body() createUrlDto: CreateUrlDto) {
    return this.urlService.create(createUrlDto);
  }

  @Get()
  findAll() {
    return this.urlService.findAll();
  }

  @Get(':code')
 async redirect(@Param('code') code: string,@Res() res:any) {
    const url= await this.urlService.findOne(code);
    return res.redirect(url);
  }

}
