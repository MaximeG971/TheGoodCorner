import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  JoinTable,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Category } from "./category";
import { Tag } from "./tag";

@Entity()
export class Ad extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  owner: string;

  @Column()
  price: number;

  @Column()
  location: string;

  @ManyToOne(() => Category, (category) => category.ad)
  category: Category;

  @ManyToMany(() => Tag)
  @JoinTable()
  tags: Tag[];
}
