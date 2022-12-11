import { Controller, Get, Post, Param, Body } from "@nestjs/common";
import { CreateMessageDto } from "./dto/create-message.dto";
import { MessagesService } from "./messages.service";

@Controller("messages")
export class MessagesController {
    constructor(private _messagesService: MessagesService) {}

    @Get()
    public getMessages() {
        return this._messagesService.findAll();
    }

    @Get("/:id")
    public getMessage(@Param("id") id: string) {
        return this._messagesService.findOne(id);
    }

    @Post()
    public createMessage(@Body() body: CreateMessageDto) {
        return this._messagesService.create(body.content);
    }
}
