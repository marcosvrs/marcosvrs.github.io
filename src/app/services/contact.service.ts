import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Contact } from '../models/contact.model';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) { }

  public sendContactMessage(message: Contact) {
    const url = '/API/sendMessage';
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    if (isDevMode()) {
      console.log('url: ' + url);
      console.log('headers: ');
      console.log(headers);
      console.log('message: ');
      console.log(message);
    }
    return this.http.post(url, message, { headers: headers });
  }

}
