import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { UsersController } from './companies.controller';
import { companiesProviders } from './companies.providers';
import { CompaniesService } from './companies.service';

@Module({
  modules: [DatabaseModule],
  controllers: [UsersController],
  components: [CompaniesService, ...companiesProviders]
})
export class UsersModule {}
