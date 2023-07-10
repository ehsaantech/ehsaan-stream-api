import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    ClassSerializerInterceptor,
    UseInterceptors,
    ParseIntPipe,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UserService } from 'src/service/user.service';
  
@UseInterceptors(ClassSerializerInterceptor)
@Controller('api/v1/user')
export class UserController {
    constructor(private readonly userService: UserService) {}
  
    @Post('/register')
    @UsePipes(ValidationPipe)
    create(@Body() createUserDto: CreateUserDto) {
      return this.userService.createUser(createUserDto);
    }

    @Post('/login')
    @UsePipes(ValidationPipe)
    login(@Body() createUserDto: CreateUserDto) {
      return this.userService.login(createUserDto);
    }
  }
  