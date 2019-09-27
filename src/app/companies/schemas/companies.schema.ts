import * as mongoose from 'mongoose';

export const CompaniesSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    cnpj: { type: String, require: true, unique: true },
    email: { type: String, require: true},
    phone: String
  },
  {
    collection: 'companies',
    read: 'nearest'
  }
);
