"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const posts_service_1 = require("./posts.service");
let posts = [
    {
        id: 1,
        author: 'John Doe',
        title: 'My first post',
        content: 'This is my first post on this blog. I hope you like it.',
        likeCount: 10,
        commentCount: 5
    },
    {
        id: 2,
        author: 'Jane Doe',
        title: 'My second post',
        content: 'This  is my second post on this blog. I hope you like it.',
        likeCount: 10,
        commentCount: 5
    },
    {
        id: 3,
        author: 'John Doe',
        title: 'My third post',
        content: 'This is my third post on this blog. I hope you like it.',
        likeCount: 10,
        commentCount: 5
    }
];
let PostsController = class PostsController {
    constructor(postsService) {
        this.postsService = postsService;
    }
    getPosts() {
        return posts;
    }
    getPost(id) {
        const post = posts.find(post => post.id === +id);
        if (!post) {
            throw new common_1.NotFoundException('Post not found');
        }
        return post;
    }
    createPost(author, title, content) {
        const post = {
            id: posts[posts.length - 1].id + 1,
            author,
            title,
            content,
            likeCount: 0,
            commentCount: 0
        };
        posts = [
            ...posts,
            post
        ];
        return post;
    }
    patchPost(id, author, title, content) {
        const post = posts.find(post => post.id === +id);
        if (!post) {
            throw new common_1.NotFoundException('Post not found');
        }
        if (author) {
            post.author = author;
        }
        if (title) {
            post.title = title;
        }
        if (content) {
            post.content = content;
        }
        posts = posts.map(prevPost => prevPost.id === +id ? post : prevPost);
        return post;
    }
    deletePost(id) {
        const post = posts.find(post => post.id === +id);
        if (!post) {
            throw new common_1.NotFoundException('Post not found');
        }
        posts = posts.filter(post => post.id !== +id);
        return id;
    }
};
exports.PostsController = PostsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], PostsController.prototype, "getPosts", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], PostsController.prototype, "getPost", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('author')),
    __param(1, (0, common_1.Body)('title')),
    __param(2, (0, common_1.Body)('content')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Object)
], PostsController.prototype, "createPost", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('author')),
    __param(2, (0, common_1.Body)('title')),
    __param(3, (0, common_1.Body)('content')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "patchPost", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "deletePost", null);
exports.PostsController = PostsController = __decorate([
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostsController);
//# sourceMappingURL=posts.controller.js.map