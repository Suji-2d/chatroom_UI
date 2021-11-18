import { Injectable } from '@angular/core';
import { ChatMessageDto } from './models/chatMessageDto';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  webSocket!: WebSocket;
  chatMessages: ChatMessageDto[] = [];

  constructor() { }

  public openWebSocket(){
    this.webSocket = new WebSocket('ws://chatroom-api-1118.herokuapp.com/chat');

    this.webSocket.onopen = (event)=>{
      console.log('OPEN : ',event);
    }

    this.webSocket.onmessage = (event) => {
      const chatMessageDto = JSON.parse(event.data);
      this.chatMessages.push(chatMessageDto);
    } 

    this.webSocket.onclose = (event) => {
      console.log('CLOSE : ',event);
    }
  }

  public sendMessage(chatMessageDto : ChatMessageDto){
    this.webSocket.send(JSON.stringify(chatMessageDto));
  }

  public closeWebSocket(){
    this.webSocket.close();
  }
  
  
}
