import { Controller, Get } from '@midwayjs/decorator';

@Controller('/qwer')
export class HomeController {
  @Get('/')
  async home(): Promise<string> {
    throw new Error("就会报错")
    return 'Hello Midwayjs!';
  }
}
