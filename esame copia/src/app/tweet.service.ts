import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Notice {
  author: string;
  message: string;
}

export interface Chat {
  id?: number;
  author: string;
  messages?: string;
  likes:string[];
  comment:Notice[];
  image:string;
}
@Injectable({
  providedIn: 'root'
})
export class TweetService {
  private author:string = '';
  public api:string ='https://fake-tweets-api.herokuapp.com/posts'

  constructor(public httpClient: HttpClient) { }

  public all(): Promise<Chat[]> {
    return this.httpClient.get<Chat[]>(this.api).toPromise();
  }

  public getById(id: number): Promise<Chat> {
    return this.httpClient.get<Chat>(`${this.api}/${id}`).toPromise();
  }

  public addComments(chatId: number, comment: Notice): Promise<Notice> {
    return this.httpClient.post<Notice>(`${this.api}/${chatId}/comments`, comment).toPromise();
  }
  public addLike(chatId: number, likes: string): Promise<string> {
    return this.httpClient.post<string>(`${this.api}/${chatId}/likes`, likes).toPromise();
  }
  public newChat(chat: Chat): Promise<Chat> {
    return this.httpClient.post<Chat>(this.api, chat).toPromise();
  }
  getAuthor(): string {
    return this.author;
}
setAuthor(author: string) {
    this.author = author;
}
}
