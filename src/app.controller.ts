import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getMain() {
    return this.appService.getMain();
  }
  @Get(':pageName')
  getById(@Req() request: any) {
  // getById(@Req() request: Request) {
    console.clear()
    console.debug(request.params)
    return this.appService.getById(1);
  }
}
