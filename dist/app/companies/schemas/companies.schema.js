"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.CompaniesSchema = new mongoose.Schema({
    name: { type: String, require: true },
    cnpj: { type: String, require: true, unique: true },
    email: { type: String, require: true },
    phone: String
}, {
    collection: 'companies',
    read: 'nearest'
});
//# sourceMappingURL=companies.schema.js.map