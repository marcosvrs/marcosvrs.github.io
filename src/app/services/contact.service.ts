import { Injectable, isDevMode } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { FirebaseService } from 'app/services/firebase.service';
import { Contact } from 'app/models/contact.model';

@Injectable()
export class ContactService {

  constructor(private http: Http, private firebase: FirebaseService) { }

  public sendContactMessage(message: Contact) {
    console.log(this.firebase.app.name);
    let url = this.firebase.app.name + 'API/sendMessage';
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
