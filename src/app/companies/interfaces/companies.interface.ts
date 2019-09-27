import { Document } from 'mongoose';

export interface Companies extends Document {
  readonly name: string;
  readonly email: string;
  readonly cnpj: string;
  readonly phone: string;
}
