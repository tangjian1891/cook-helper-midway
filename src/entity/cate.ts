import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@EntityModel('cate')
export class Cate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length:20})
  cateName: string;

  @Column()
  desction: string;

  @Column()
  avatar: string;
}
