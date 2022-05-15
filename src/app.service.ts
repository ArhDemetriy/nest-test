import { Injectable } from '@nestjs/common';
import { articles } from './articles';

@Injectable()
export class AppService {
  private getArticles() { return articles }
  getMain() {
    return { articles: this.getArticles() };
  }
  getById(id: number) {
    return this.getArticles().find(article => article.id === id);
  }
}
