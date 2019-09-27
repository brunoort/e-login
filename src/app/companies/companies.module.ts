import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CompaniesController } from './companies.controller';
import { companiesProviders } from './companies.providers';
import { CompaniesService } from './companies.service';

@Module({
  modules: [DatabaseModule],
  controllers: [CompaniesController],
  components: [CompaniesService, ...companiesProviders]
})
export class CompaniesModule {}
