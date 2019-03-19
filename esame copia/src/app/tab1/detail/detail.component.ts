import { Component, OnInit } from '@angular/core';
import { TweetService, Chat, Notice } from 'src/app/tweet.service'
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
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
  public chat: Chat;
  constructor(public tweetService: TweetService, public route: ActivatedRoute,public toastController: ToastController) { }

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
    if (!this.notice.author){
      this.presentToast('Set Author in tab2');
    }
    else {
      this.tweetService.addComments(this.chat.id, this.notice).then(() => {
        this.notice.message = ''; // reset dell'input
        this.loadChatAndMessages();
        this.presentToast(' comment ok.');
      });
      
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }


  // send1(){
  //   if(this.notice){
  //       this.tweetService.addLike(this.chat.id,this.notice.author).then(()=>{
  //       this.chat.likes= [this.notice.author];
  //       this.loadChatAndMessages();
  //     });
  //   }
  // }


}
