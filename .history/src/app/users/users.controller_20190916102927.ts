import { Body, Controller, Get, Post } from '@nestjs/common';

import { ContactsService } from './contacts.service';
import { ContactDto } from './dto/contact.dto';
import { Contact } from './interfaces/contact.interface';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  async create(@Body() contactDto: ContactDto) {
    this.contactsService.create(contactDto);
  }

  @Get()
  async findAll(): Promise<Contact[]> {
    return this.contactsService.findAll();
  }
}
