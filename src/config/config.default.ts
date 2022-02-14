import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1644384120664_7796',
  koa: {
    port: 8500,
  },
  orm: {
    /**
     * 单数据库实例
     */
    type: 'mysql',
    host: '49.234.13.241',
    port: 3306,
    username: 'root',
    password: 'root123',
    database: 'cook-helper',
    synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true
    logging: false,
  },
} as MidwayConfig;
