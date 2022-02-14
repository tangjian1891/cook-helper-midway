import { Controller, Get, Inject, Query } from "@midwayjs/decorator";
import { Context } from "@midwayjs/koa";
import { UserService } from "../service/user.service";

@Controller("user")
export class UserController{
  @Inject()
  ctx:Context
  @Inject()
  userService:UserService

  @Get("/get_user")
  async getUser(@Query('id') id:string){
    console.log('进入了',id);
    const user =await this.userService.getUser(id)
    return user

  }
}