import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { Companies } from './interfaces/companies.interface';
import { CompaniesDto } from './dto/companies.dto';

@Component()
export class CompaniesService {
  constructor(
    @Inject('CompanyModelToken') private readonly companyModel: Model<Companies>
  ) {}

  async create(companyDto: CompaniesDto): Promise<Companies> {
    const createdCompany = new this.companyModel(companyDto);
    return await createdCompany.save();
  }

  async findAll(): Promise<Companies[]> {
    return await this.companyModel.find().exec();
  }
}
