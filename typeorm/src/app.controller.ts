import { Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserModel } from './entity/user.entity';

@Controller()
export class AppController {
  constructor(
    @InjectRepository(UserModel)
    private readonly userRepository: Repository<UserModel>
  ) {}

  @Post('users')
  create(){
    return this.userRepository.save({
   
    });
  }

  @Get('users')
  getHello(){
    return this.userRepository.find();
  }

  @Patch('users/:id')
  async patchUser(@Param('id') id: string){
    let user = await this.userRepository.findOne({
      where:{
        id: parseInt(id)
      }
    })

    return this.userRepository.save({
      ...user,
      title: user.title+"0"
    })
  }

}
