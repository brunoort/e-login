import { Document } from 'mongoose';

export interface User extends Document {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly cpf: string;
  readonly phone: string;
  readonly dataNascimento: Date;
}
