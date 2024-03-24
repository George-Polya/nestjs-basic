import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModel } from './posts/entities/posts.entity';

@Module({
  imports: [
    PostsModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // 데이터베이스 타입
      host: 'localhost', // 데이터베이스 호스트
      port: 5432, // 데이터베이스 포트
      username: 'postgres', // 데이터베이스 사용자 이름
      password: 'postgres', // 데이터베이스 사용자 비밀번호
      database : 'postgres',
      entities : [
        PostsModel,
      ],
      synchronize : true, // typeORM이 엔티티와 데이터베이스를 동기화할지 여부, 프로덕션 환경에서는 false로 설정
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
