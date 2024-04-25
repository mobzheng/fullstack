import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/user.models';

const models = TypegooseModule.forFeature([User])

// 标记为全局对象
@Global()
@Module({
  imports:[
    TypegooseModule.forRoot('mongodb://localhost/fullstack'),
    // 导入模型
    models
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
