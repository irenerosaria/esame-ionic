import { Component, OnInit } from '@angular/core';
import { TweetService, Chat } from '../tweet.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  public chats: Chat[] = [];
  constructor(public tweetService: TweetService){}

  ngOnInit() {
    this.tweetService.all().then(response => {
      this.chats = response;
      console.log(this.chats);
    });
  }
}
