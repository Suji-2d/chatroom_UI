export class ChatMessageDto{
    user: string;
    message: string;
    time: string;

    constructor(user: string,message: string){
        var date = new Date();
        this.user =user;
        this.message = message;
        this.time = date.toLocaleTimeString();
    }
}