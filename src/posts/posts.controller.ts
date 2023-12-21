import { Controller } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Crud, CrudController, CrudRequest, Override, ParsedRequest } from '@nestjsx/crud';
import { Post } from './posts.entity';

@Crud({
  model: {
    type: Post,
  },
  params: {
    id: {
      field: 'id',
      type: 'number',
      primary: true,
    },
  },
})
@Controller('posts')
export class PostsController implements CrudController<Post> {
  constructor(public service: PostsService) {}

  get base(): CrudController<Post> {
    return this;
  }

  @Override('getManyBase')
  getAll(@ParsedRequest() req: CrudRequest) {
    return this.base.getManyBase(req);
  }
}
