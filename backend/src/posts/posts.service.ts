import { Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostsModel } from './entities/posts.entity';


@Injectable()
export class PostsService {

    constructor(
      @InjectRepository(PostsModel)
      private readonly postsRepository: Repository<PostsModel>
    ) {}

    async getAllPosts() {
        return await this.postsRepository.find();
    }

    async getPostsById(id: number){
        const post = await this.postsRepository.findOne({
          where: {
            id
          }
        });
        if(!post){
          throw new NotFoundException('Post not found');
        }
        return post;
    }

    async createPost(author: string, title: string, content: string){

      // 1) create -> 저장할 객체를 생성한다
      let post = this.postsRepository.create({
        author,
        title,
        content,
        likeCount: 0,
        commentCount: 0
      })

      
      
      // 2) save -> 객체를 저장한다.
      post = await this.postsRepository.save(post);
      return post;
    }

    async updatePost(id: number, author?: string, title?: string, content?: string){
        // save의 기능
        // 1) 만약에 데이터가 존재하지 않는다면 (id기준으로) 새로 생성한다.
        // 2) 만약에 데이터가 존재한다면 (같은 id 값이 존재한다면) 존재하던 값을 업데이트한다 
        let post = await this.postsRepository.findOne({
          where: {
            id
          }
        });

        if(!post){
          throw new NotFoundException('Post not found');
        }

        if(author){
          post.author = author;
        }

        if(title){
          post.title = title;
        }

        if(content){
          post.content = content;
        }
        

        // 더티 체킹이 안되네?
        post = await this.postsRepository.save(post);
        return post;

    }

    async deletePost(id: number){
      let post = await this.postsRepository.findOne({
        where:{
          id
        }
      })

      if(!post){
        throw new NotFoundException('Post not found');
      }

      await this.postsRepository.delete(id);

      return id;
    }

}
