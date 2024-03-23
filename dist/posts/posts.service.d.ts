import { Repository } from 'typeorm';
import { PostsModel } from './entities/posts.entity';
export declare class PostsService {
    private readonly postsRepository;
    constructor(postsRepository: Repository<PostsModel>);
    getAllPosts(): Promise<PostsModel[]>;
    getPostsById(id: number): Promise<PostsModel>;
    createPost(author: string, title: string, content: string): Promise<PostsModel>;
    updatePost(id: number, author?: string, title?: string, content?: string): Promise<PostsModel>;
    deletePost(id: number): Promise<number>;
}
