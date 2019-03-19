import { Component } from '@angular/core';
import { TweetService } from '../tweet.service';
import{Chat} from 'src/app/tweet.service';
import { ToastController } from '@ionic/angular';
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
  constructor(public TweetService: TweetService, public toastController: ToastController) {
  }
  set() {
    
    this.TweetService.newChat(this.chat).then(() => {
      this.presentToast('created!');
    });
  }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
