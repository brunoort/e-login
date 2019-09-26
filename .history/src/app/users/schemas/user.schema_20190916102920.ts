import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
    cpf: String,
    email: String,
    phone: String
  },
  {
    collection: 'users',
    read: 'nearest'
  }
);
