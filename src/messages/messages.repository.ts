import { Injectable } from "@nestjs/common";
import { readFileSync, writeFileSync } from "fs";

@Injectable()
export class MessagesRepository {
    public findAll() {
        const messages = this._readMessages();
        return messages;
    }

    public findOne(id: string) {
        const messages = this._readMessages();
        return messages[id];
    }

    public create(content: string) {
        const messages = this._readMessages();
        const id = new Date().getTime().toString();
        messages[id] = { id, content };
        writeFileSync("messages.json", JSON.stringify(messages));
        return id;
    }

    private _readMessages() {
        const fileContent = readFileSync("messages.json", {
            encoding: "utf-8",
        });
        return JSON.parse(fileContent);
    }
}
