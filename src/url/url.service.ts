import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUrlDto } from './dto/create-url.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Url } from './entities/url.entity';
import { Repository } from 'typeorm';
import * as shortid from 'shortid';

@Injectable()
export class UrlService {

  constructor(
    @InjectRepository(Url)
    private urlRepo: Repository<Url>
  ) {
  }

  async create(createUrlDto: CreateUrlDto) {
    const shortCode = shortid.generate();
    const url = this.urlRepo.create({ originalUrl:createUrlDto.originalUrl, shortCode });
    return await this.urlRepo.save(url);
  }

  async findAll() {
     return await this.urlRepo.find();
  }

  async findOne(shortCode: string): Promise<string> {
    const url = await this.urlRepo.findOneByOrFail({ shortCode  });
    return url.originalUrl;
  }
}
