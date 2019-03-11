import { Component, OnInit } from '@angular/core';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  public author: string;
  constructor(public chatService: TweetService) {
  }

  ngOnInit() {
    this.author = this.chatService.getAuthor();
  }

  set() {
    this.chatService.setAuthor(this.author);
  }

}
