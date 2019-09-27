import * as mongoose from 'mongoose';

export const CompaniesSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
    cnpj: String,
    email: String,
    phone: String
  },
  {
    collection: 'companies',
    read: 'nearest'
  }
);
