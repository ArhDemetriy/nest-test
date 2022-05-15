import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

interface TArticle{
  title: string
  content: string
}

@Entity({ name: 'articles' })
export class Article extends BaseEntity implements TArticle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  constructor(title: string, content: string, id?: number) {
    super()
    this.id = id;
    this.title = title;
    this.content = content;
  }
}
