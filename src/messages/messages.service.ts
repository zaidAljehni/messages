import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";

@Injectable()
export class MessagesService {
    constructor(private _messagesRepository: MessagesRepository) {}

    public findAll() {
        return this._messagesRepository.findAll();
    }

    public findOne(id: string) {
        return this._messagesRepository.findOne(id);
    }

    public create(content: string) {
        return this._messagesRepository.create(content);
    }
}
