import { Inject, Controller, Get, Query } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';
import { HttpService } from '@midwayjs/axios';
import * as  fs from "fs/promises"
@Controller('/')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Inject()
  httpService: HttpService;

  @Get()
  async getUser(@Query() query) {
    console.log('接口来了', query);
    // console.log(query.);
    // const user = await this.userService.getUser({ uid });
    let res= await fs.readFile("./src/view/index.html")
    console.log(res);
    return res.toString();
  }
  @Get('/access_token')
  async getAccessToken() {
    let res = await this.httpService.get(
      'https://api.weixin.qq.com/cgi-bin/token',
      {
        params: {
          grant_type: 'client_credential',
          appid: 'wxd2e23063ea86b7dc',
          secret: '852b75bd2d0630c27a38ec70092f6aa1',
        },
      }
    );
    console.log(res.data);
    return res.data;
  }
  @Get('/get_count')
  async getCount() {
    let res2 = await this.httpService.get(
      'https://api.weixin.qq.com/cgi-bin/token',
      {
        params: {
          grant_type: 'client_credential',
          appid: 'wxd2e23063ea86b7dc',
          secret: '852b75bd2d0630c27a38ec70092f6aa1',
        },
      }
    );
    console.log(res2.data);
    let res = await this.httpService.post(
      'https://api.weixin.qq.com/cgi-bin/openapi/quota/get?access_token=' +
        res2.data.access_token,
      {
        cgi_path: '/cgi-bin/token',
      }
    );
    console.log('这里');
    console.log(res.data);
    return res.data;
  }
  @Get('/create_menu')
  async createMenu() {
    let res2 = await this.httpService.get(
      'https://api.weixin.qq.com/cgi-bin/token',
      {
        params: {
          grant_type: 'client_credential',
          appid: 'wxd2e23063ea86b7dc',
          secret: '852b75bd2d0630c27a38ec70092f6aa1',
        },
      }
    );
    console.log(res2.data);
    let res = await this.httpService.post(
      'https://api.weixin.qq.com/cgi-bin/menu/create?access_token=' +
        res2.data.access_token,
      {
        button: [
          {
            type: 'click',
            name: '今日歌曲',
            key: 'V1001_TODAY_MUSIC',
          },
          {
            name: '菜单',
            sub_button: [
              {
                type: 'view',
                name: '搜索',
                url: 'http://www.soso.com/',
              },
              {
                type: 'miniprogram',
                name: 'wxa',
                url: 'http://mp.weixin.qq.com',
                appid: 'wx286b93c14bbf93aa',
                pagepath: 'pages/lunar/index',
              },
              {
                type: 'click',
                name: '赞一下我们',
                key: 'V1001_GOOD',
              },
            ],
          },
        ],
      }
    );
    console.log('这里');
    console.log(res.data);
    return res.data;
  }
}
