import { ModelOptions, Prop } from "@typegoose/typegoose";
import {ApiProperty} from "@nestjs/swagger";
@ModelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class User{
    @ApiProperty({description:"用户名",example:"admin"})
    @Prop()
    username:string

    @ApiProperty({description:"密码",example:"测试"})
    @Prop()
    password:string


}

