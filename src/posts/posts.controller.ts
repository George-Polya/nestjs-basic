import { Controller, Get, NotFoundException, Param, Post, Body, Put, Delete} from '@nestjs/common';
import { PostsService } from './posts.service';

interface PostModel {
  id: number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

let posts : PostModel[] = [
  {
    id:1,
    author : 'John Doe',
    title: 'My first post',
    content: 'This is my first post on this blog. I hope you like it.',
    likeCount: 10,
    commentCount: 5

  },
  {
    id:2,
    author : 'Jane Doe',
    title: 'My second post',
    content: 'This  is my second post on this blog. I hope you like it.',
    likeCount: 10,
    commentCount: 5
  },
  {
    id:3,
    author : 'John Doe',
    title: 'My third post',
    content: 'This is my third post on this blog. I hope you like it.',
    likeCount: 10,
    commentCount: 5
  
  }
]

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  
  // 1) GET /posts

  // 2) GET /posts/:id

  // 3) POST /posts

  // 4) PUT /posts/:id

  // 5) DELETE /posts/:id

  @Get()
  getPosts() : PostModel[]{
    return posts;
  }

  @Get(':id')
  getPost(@Param('id') id: string) : PostModel{
    const post =  posts.find(post => post.id === +id);
    if(!post){
      throw new NotFoundException('Post not found');
    }
    return post;
  }

  @Post()
  createPost(
    @Body('author') author: string,
    @Body('title') title: string,
    @Body('content') content: string
  ): PostModel{
      const post = {
        id: posts[posts.length - 1].id + 1,
        author,
        title,
        content,
        likeCount: 0,
        commentCount: 0
      }
      posts = [
        ...posts,
        post
      ]
      return post;

  }

  @Put(':id')
  patchPost(
    @Param('id') id: string,
    @Body('author') author?: string,
    @Body('title') title?: string,
    @Body('content') content?: string
  ) {
    const post = posts.find(post => post.id === +id);

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

    posts = posts.map(prevPost =>prevPost.id === +id ? post: prevPost);

    return post;
  }

  @Delete(':id')
  deletePost(@Param('id') id: string){
    const post = posts.find(post => post.id === +id)

    if(!post){
      throw new NotFoundException('Post not found');
    }

    posts = posts.filter(post => post.id !== +id);
    return id;
  }
}