import { ModelOptions, Prop, Ref } from "@typegoose/typegoose";
import {ApiProperty} from "@nestjs/swagger";
import { Episode } from "./episode.model";
@ModelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class Course{
    @ApiProperty({description:"课程名称"})
    @Prop()
    name:string

    @ApiProperty({description:"封面"})
    @Prop()
    cover:string

    @Prop({type:()=>[Episode]})
    episodes:Ref<Episode>[]

}

