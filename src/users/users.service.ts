import { User } from './user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  getAllUser(): Promise<User[]> {
    return this.usersRepository.find();
  }

  /** @throws user not found */
  getUser(id: NonNullable<User['id']>) {
    return this.usersRepository.findOneOrFail({ where: { id }, comment: 'find user, for client response' })
  }

  addUser(user: User) {
    return this.usersRepository.insert(user);
  }
}
