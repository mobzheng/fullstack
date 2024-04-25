import { ModelOptions, Prop } from "@typegoose/typegoose";
import {ApiProperty} from "@nestjs/swagger";
@ModelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class Course{
    @ApiProperty({description:"课程名称",example:"英语口语"})
    @Prop()
    name:string

    @ApiProperty({description:"密码",example:"测试"})
    @Prop()
    cover:string

    

}

