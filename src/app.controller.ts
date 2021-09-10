import { Controller, Get, Render } from '@nestjs/common';

//* 페이지 렌딩 부분
@Controller()
export class AppController {
  @Render('home')
  @Get()
  home() {}
}
