import { Controller, Get, NotFoundException, Param, Post, Body, Put, Delete} from '@nestjs/common';
import { PostsService } from './posts.service';



@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  
  // 1) GET /posts

  // 2) GET /posts/:id

  // 3) POST /posts

  // 4) PUT /posts/:id

  // 5) DELETE /posts/:id

  @Get()
  getPosts() {
    return this.postsService.getAllPosts();
  }

  @Get(':id')
  getPost(@Param('id') id: string){
    return this.postsService.getPostsById(+id);
  }

  @Post()
  createPost(
    @Body('author') author: string,
    @Body('title') title: string,
    @Body('content') content: string
  ) {
    return this.postsService.createPost(author, title, content);
  }

  @Put(':id')
  patchPost(
    @Param('id') id: string,
    @Body('author') author?: string,
    @Body('title') title?: string,
    @Body('content') content?: string
  ) {
    return this.postsService.updatePost(+id,author, title, content)
  }

  @Delete(':id')
  deletePost(@Param('id') id: string){
    return this.postsService.deletePost(+id);
  }
} 