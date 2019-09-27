"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const companies_schema_1 = require("./schemas/companies.schema");
exports.companiesProviders = [
    {
        provide: 'CompanyModelToken',
        useFactory: (connection) => connection.model('Company', companies_schema_1.CompaniesSchema),
        inject: ['DbConnectionToken']
    }
];
//# sourceMappingURL=companies.providers.js.map