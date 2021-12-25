import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message';
import { MessagesService } from './messages.service';


@Controller('messages')
export class MessagesController {
    ;

    constructor(private messagesService:MessagesService)
    {
     
    }

    @Get()
    async listMessages()
    {
        return await this.messagesService.findAll();
    }

    @Post()
    async creteMessage(@Body() body:CreateMessageDto){
        console.log({body});
        return await this.messagesService.create(body.content);

    }

    @Get('/:id')
    async getMessage(@Param('id') id:string){
        console.log({id});
        const message = await this.messagesService.findOne(id);
        if(!message)
        {
            throw new NotFoundException('Message not found');
        }
        return message;
    }



}
