import { Document } from 'mongoose';

export interface Company extends Document {
  readonly name: string;
  readonly email: string;
  readonly cnpj: string;
  readonly phone: string;
}
