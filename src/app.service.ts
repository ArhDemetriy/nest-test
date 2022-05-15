import { Injectable } from '@nestjs/common';
import { Article } from './article.model';
import { articles } from './articles';

@Injectable()
export class AppService {
  // private getArticles() { return articles }
  async getMain() {
    return {
      articles: await Article.find(),
      // articles: this.getArticles(),
    };
  }
  getById(id: number) {
    return Article.findOne({ id });
  }
}
