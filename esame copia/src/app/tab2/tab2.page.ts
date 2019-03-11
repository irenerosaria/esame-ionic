import { Component, OnInit } from '@angular/core';
import { TweetService,Chat } from '../tweet.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public chat: Chat = {
    id: null,
    author: '',
    messages: '',
    likes:[],
    comment:[],
    image: ''
    
    };

  constructor(public chatService: TweetService) {
    this.chat.author=this.chatService.getAuthor();
  }

  set() {
    this.chatService.newChat(this.chat).then(() => {});
  }

}
