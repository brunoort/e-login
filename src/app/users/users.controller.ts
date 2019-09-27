import { Body, Controller, Get, Post, BadRequestException, HttpException, HttpStatus } from '@nestjs/common';

import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  @Post()
  async create(@Body() contactDto: UserDto) {
    const result = this.usersService.create(contactDto)
    .then(res => {
      return res;
    }
    ).catch(err => {
      return new Promise(function (resolve, reject) {
        reject();
      });
    });
  }
  
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
