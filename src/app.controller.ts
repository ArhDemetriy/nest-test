import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getMain() {
    return this.appService.getMain();
  }
  // @Get('item/:itemId')
  // getById(@Param('itemId', ParseIntPipe) itemId: number = 1) {
  //   return this.appService.getById(itemId);
  // }
  // @Get('create')
  // addNew() {
  //   return this.appService.create()
  // }
}
