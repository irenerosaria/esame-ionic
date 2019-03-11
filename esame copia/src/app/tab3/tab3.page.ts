import { Component } from '@angular/core';
import { TweetService } from '../tweet.service';
import{Chat} from 'src/app/tweet.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public chat: Chat = {
    id: null,
  author: '',
  messages: '',
  likes:[],
  comment:[],
  image: ''
  };
  constructor(public TweetService: TweetService) {
  }
  set() {
    
    this.TweetService.newChat(this.chat).then(() => {

    });
  }
}
