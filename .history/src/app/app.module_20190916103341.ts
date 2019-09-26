import { Module } from '@nestjs/common';

import { ContactsModule } from './contacts/contacts.module';
import { UsersModule } from './users/users.module';

@Module({
    modules: [
        ContactsModule,
        UsersModule,
    ],
})
export class ApplicationModule {}