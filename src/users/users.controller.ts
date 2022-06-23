import { UsersService } from './users.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

type User = {
  id?: number;
  username: string;
  password: string;
};

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  addUser(@Body() user: User) {
    return this.userService.addUser(user);
  }
}
