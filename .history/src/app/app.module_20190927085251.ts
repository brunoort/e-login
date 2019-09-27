import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';

@Module({
    modules: [
        UsersModule,
        CompaniesModule,
    ],
})
export class ApplicationModule {}