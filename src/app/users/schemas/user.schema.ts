import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    name: { type: String, require: true},
    cpf: { type: String, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    phone: String,
    password: String,
    dataNascimento: Date
  },
  {
    collection: 'users',
    read: 'nearest'
  }
);
