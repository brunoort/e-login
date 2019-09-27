import { Body, Controller, Get, Post } from '@nestjs/common';

import { CompaniesService } from './companies.service';
import { CompaniesDto } from './dto/companies.dto';
import { Companies } from './interfaces/companies.interface';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  async create(@Body() companyDto: CompaniesDto) {
    this.companiesService.create(companyDto);
  }

  @Get()
  async findAll(): Promise<Companies[]> {
    return this.companiesService.findAll();
  }
}
