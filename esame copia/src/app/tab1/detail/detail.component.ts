import { Component, OnInit } from '@angular/core';
import { TweetService, Chat, Notice } from 'src/app/tweet.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public notice: Notice = {
    message: '',
    author: ''
  };
  public chat: Chat = {
  id: null,
  author: '',
  messages: '',
  likes:[],
  comment:[],
  image: ''
  
  };
  constructor(public tweetService: TweetService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.notice.author = this.tweetService.getAuthor();
    this.loadChatAndMessages();
    
  }
  
  loadChatAndMessages() {
    console.log('#loadChatAndMessages');
    if (this.tweetService) {
      this.tweetService.getById(this.route.snapshot.params.id).then(response => {
        this.chat = response;
      });
    }
  }
  send() {
    if (this.notice.author){
      this.tweetService.addComments(this.chat.id, this.notice).then(() => {
        this.notice.message = ''; // reset dell'input
        this.loadChatAndMessages();
      });
      this.tweetService.addLike(this.chat.id,this.chat.author).then(()=>{
        this.chat.likes= [];
         this.loadChatAndMessages();
       });


    }
  }
}
