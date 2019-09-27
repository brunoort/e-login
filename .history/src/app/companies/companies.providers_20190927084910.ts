import { Connection } from 'mongoose';
import { CompaniesSchema } from './schemas/companies.schema';

export const companiesProviders = [
  {
    provide: 'CompanyModelToken',
    useFactory: (connection: Connection) =>
      connection.model('Company', CompaniesSchema),
    inject: ['DbConnectionToken']
  }
];
