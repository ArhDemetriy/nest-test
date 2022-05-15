import { Injectable } from '@nestjs/common';
import { Article } from './article.model';

@Injectable()
export class AppService {
  async getMain() {
    return {
      articles: await Article.find(),
    };
  }
  getById(id: number) {
    return Article.findOne({ id });
  }
  create() {
    Article.create(new Article('new Article', 'content'))
  }
}
