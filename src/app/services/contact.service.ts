import { Injectable, isDevMode } from '@angular/core';
import { Http, Headers } from '@angular/http';

import firebaseConfig from 'app/firebase.config.json';
import { Contact } from 'app/models/contact.model';

@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  public sendContactMessage(message: Contact) {
    const url = 'https://us-central1-' + firebaseConfig.projectId + '.cloudfunctions.net/sendMessage';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
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
