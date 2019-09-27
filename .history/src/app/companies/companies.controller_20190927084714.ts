import { Body, Controller, Get, Post } from '@nestjs/common';

import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() contactDto: UserDto) {
    this.usersService.create(contactDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
