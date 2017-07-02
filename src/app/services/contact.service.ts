import { Injectable, isDevMode } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { FirebaseService } from 'app/services/firebase.service';
import { Contact } from 'app/models/contact.model';

@Injectable()
export class ContactService {

  constructor(private http: Http, private firebase: FirebaseService) { }

  public sendContactMessage(message: Contact) {
    let url = '/API/sendMessage';
    let headers = new Headers({'Content-Type': 'application/json'});
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
