"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const database_module_1 = require("../database/database.module");
const companies_controller_1 = require("./companies.controller");
const companies_providers_1 = require("./companies.providers");
const companies_service_1 = require("./companies.service");
let CompaniesModule = class CompaniesModule {
};
CompaniesModule = __decorate([
    common_1.Module({
        modules: [database_module_1.DatabaseModule],
        controllers: [companies_controller_1.CompaniesController],
        components: [companies_service_1.CompaniesService, ...companies_providers_1.companiesProviders]
    })
], CompaniesModule);
exports.CompaniesModule = CompaniesModule;
//# sourceMappingURL=companies.module.js.map