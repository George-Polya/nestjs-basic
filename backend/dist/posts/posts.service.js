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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const posts_entity_1 = require("./entities/posts.entity");
let PostsService = class PostsService {
    constructor(postsRepository) {
        this.postsRepository = postsRepository;
    }
    async getAllPosts() {
        return await this.postsRepository.find();
    }
    async getPostsById(id) {
        const post = await this.postsRepository.findOne({
            where: {
                id
            }
        });
        if (!post) {
            throw new common_1.NotFoundException('Post not found');
        }
        return post;
    }
    async createPost(author, title, content) {
        let post = this.postsRepository.create({
            author,
            title,
            content,
            likeCount: 0,
            commentCount: 0
        });
        post = await this.postsRepository.save(post);
        return post;
    }
    async updatePost(id, author, title, content) {
        let post = await this.postsRepository.findOne({
            where: {
                id
            }
        });
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
        post = await this.postsRepository.save(post);
        return post;
    }
    async deletePost(id) {
        let post = await this.postsRepository.findOne({
            where: {
                id
            }
        });
        if (!post) {
            throw new common_1.NotFoundException('Post not found');
        }
        await this.postsRepository.delete(id);
        return id;
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(posts_entity_1.PostsModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PostsService);
//# sourceMappingURL=posts.service.js.map