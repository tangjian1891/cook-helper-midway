import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { Cate } from '../entity/cate';
// import { IUserOptions } from '../interface';
// import {} from 'typeorm'
@Provide()
export class CateService {
  @InjectEntityModel(Cate)
  cateModel:Repository<Cate>
  

async getCate(){
    const cateArr= await this.cateModel.find()
    return cateArr
}
}
