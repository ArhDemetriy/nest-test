import { UsersService } from './users.service';
import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';

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
    return this.userService.getAllUser();
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number)
  {
    return this.userService.getUser(id)
      .catch(e => {
        console.log('getUser error:', e)
        return 'user not found'
      })
  }

  @Get('new/:id')
  createUsers(@Param('id', ParseIntPipe) id: number)
  {
    if (!Number.isFinite(id))
      id = Date.now()
    return this.userService.addUser({ username: 'newUser' + id, password: 'passwordUser' + id })
  }

  @Post()
  addUser(@Body() user: User) {
    return this.userService.addUser(user);
  }
}
