import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { join } from 'path';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'mysql',
      database: 'nestjsxtest',
      autoLoadEntities: true,
      synchronize: false,
      entities: [join(__dirname, './**/*.entity{.ts}')],
    }),
    UsersModule,
    PostsModule,
  ],
})
export class AppModule {}
