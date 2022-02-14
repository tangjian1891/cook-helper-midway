import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { User } from '../entity/user';
// import { IUserOptions } from '../interface';
// import {} from 'typeorm'
@Provide()
export class UserService {
  @InjectEntityModel(User)
  userModel:Repository<User>


  async getUser(id:string) {
    console.log('进入');
    const user= await this.userModel.findOne(id)
    console.log('经过这里了吗');
    // console.log(user);
    return user
    // return {
    //   uid: options.uid,
    //   username: 'mockedName',
    //   phone: '12345678901',
    //   email: 'xxx.xxx@xxx.com',
    // };
  }
}
