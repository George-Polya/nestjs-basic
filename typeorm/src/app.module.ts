import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './entity/user.entity';
import { Student, Teacher } from './entity/person.entity';
import { Airplane, Book, Car, Computer, SingleClass } from './entity/inheritance.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserModel, 
      Student, 
      Teacher,
      Book,
      Car,
      SingleClass,
      Computer,
      Airplane,
    ]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'typeormstudy',
      entities: [
        UserModel, 
        Student, 
        Teacher, 
        Book, 
        Car,
        SingleClass,
        Computer,
        Airplane,
      ],
      synchronize: true,
      logging: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
