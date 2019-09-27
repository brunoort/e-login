import { Connection } from 'mongoose';

import { CompaniesSchema } from './schemas/companies.schema';

export const usersProviders = [
  {
    provide: 'CompanyModelToken',
    useFactory: (connection: Connection) =>
      connection.model('Company', CompaniesSchema),
    inject: ['DbConnectionToken']
  }
];
