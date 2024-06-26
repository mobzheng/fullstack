import { Episode } from '@libs/db/models/episode.model';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Controller('episode')
@ApiTags("课时")
@Crud({
    model:Episode
})
export class EpisodeController {
    constructor(@InjectModel(Episode) private readonly model : ReturnModelType<typeof Episode>){

    }
}
