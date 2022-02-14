import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@EntityModel('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length:20})
  name: string;

  @Column()
  desction: string;
  
  @Column()
  avatar: string;
}
