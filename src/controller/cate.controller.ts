import { Controller, Get, Inject } from "@midwayjs/decorator";
import { Context } from "@midwayjs/koa";
import { CateService } from "../service/cate.service";

@Controller("cate")
export class CateController{
  @Inject()
  ctx:Context
  @Inject()
  cateService:CateService

  @Get("/get_cate")
  async getUser (){
    const cateArr =await this.cateService.getCate()
    return cateArr
  }
}