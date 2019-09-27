import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { UsersController } from './companies.controller';
import { companiesProviders } from './companies.providers';
import { CompanyService } from './companies.service';

@Module({
  modules: [DatabaseModule],
  controllers: [UsersController],
  components: [CompanyService, ...companiesProviders]
})
export class UsersModule {}
