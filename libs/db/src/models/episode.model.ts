import { ApiProperty } from "@nestjs/swagger";
import { ModelOptions, Prop } from "@typegoose/typegoose";
@ModelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class Episode{
    @Prop()
    @ApiProperty({description:"课时名称"})
    name:string

    @ApiProperty({description:"链接"})
    @Prop()
    file:string
}