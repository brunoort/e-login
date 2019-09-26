import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';
import { Contact } from './interfaces/contact.interface';
import { ContactDto } from './dto/contact.dto';

@Component()
export class ContactsService {
  constructor(
    @Inject('ContactModelToken') private readonly contactModel: Model<Contact>
  ) {}

  async create(contactDto: ContactDto): Promise<Contact> {
    const createdContact = new this.contactModel(contactDto);
    return await createdContact.save();
  }

  async findAll(): Promise<Contact[]> {
    return await this.contactModel.find().exec();
  }
}
