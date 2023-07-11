import { ConflictException, HttpException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { comparePassword, encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const name = createUserDto.name
    const user = await this.userRepository.findOne({
      where: { name } 
    })
    if(user){
      throw new ConflictException('User with the same name already exists.');
      }

    const password = encodePassword(createUserDto.password);
    const newUser = this.userRepository.create({ ...createUserDto, password });
    await this.userRepository.save(newUser);
    return newUser;

  }

  async login({ name, password }: CreateUserDto) {
    const user = await this.userRepository.findOne({where: {name}});    
    if (!user) {
        throw new HttpException("User not found", HttpStatus.UNAUTHORIZED);
		}
    
    const areEqual = await comparePassword(password, user.password);
		if (!areEqual) {
			throw new HttpException("Invalid credentials", HttpStatus.UNAUTHORIZED);
		}

    return "Login Successful";

  }
}
