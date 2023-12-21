import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Post } from './posts.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService extends TypeOrmCrudService<Post> {
  constructor(@InjectRepository(Post) postsRepo: Repository<Post>) {
    super(postsRepo);
  }
}
