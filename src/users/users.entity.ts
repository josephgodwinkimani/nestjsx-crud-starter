import {
  Entity,
  Column,
  OneToMany,
  BeforeInsert,
  BeforeUpdate,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  Relation,
} from 'typeorm';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsOptional, IsNotEmpty, IsString, MaxLength, IsEmail } from 'class-validator';
import { Post } from '../posts/posts.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @MaxLength(255, { always: true })
  @IsEmail({ require_tld: false }, { always: true })
  @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
  email: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @Column({ type: 'varchar', length: 255, nullable: false })
  password?: string;

  // https://docs.nestjs.com/recipes/swc#common-pitfalls
  @OneToMany(() => Post, (post) => post.user)
  @JoinColumn()
  posts: Relation<Post[]>;

  @CreateDateColumn({ nullable: true })
  createdAt?: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt?: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.password) {
      // SHA-256 hashing
      const crypto = require('crypto');
      const hash = crypto.createHash('sha256').update(this.password).digest('hex');
      this.password = hash;
    }
  }
}
