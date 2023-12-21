import {
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  JoinColumn,
  Relation,
} from 'typeorm';
import { IsOptional, IsString, MaxLength, IsDefined, IsBoolean, IsNotEmpty } from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';
import { User } from '../users/users.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
  title?: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ nullable: true })
  @IsString({ always: true })
  review?: string;

  @IsOptional({ always: true })
  @IsBoolean({ always: true })
  @Column({ type: 'boolean', default: true })
  isActive?: boolean;

  @CreateDateColumn({ nullable: true })
  createdAt?: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt?: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt?: Date;

  // many-to-one relationship with the User entity
  // https://docs.nestjs.com/recipes/swc#common-pitfalls
  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn()
  user: Relation<User>;
}
