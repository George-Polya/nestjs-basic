import { PostsService } from './posts.service';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    getPosts(): Promise<import("src/posts/entities/posts.entity").PostsModel[]>;
    getPost(id: string): Promise<import("src/posts/entities/posts.entity").PostsModel>;
    createPost(author: string, title: string, content: string): Promise<import("src/posts/entities/posts.entity").PostsModel>;
    patchPost(id: string, author?: string, title?: string, content?: string): Promise<import("src/posts/entities/posts.entity").PostsModel>;
    deletePost(id: string): Promise<number>;
}
