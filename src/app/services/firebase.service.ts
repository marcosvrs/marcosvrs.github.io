import { Injectable, isDevMode } from '@angular/core';
import { initializeApp } from 'firebase';

import { firebaseConfig } from 'app/firebase.config.prod';
import { firebaseConfigDev } from 'app/firebase.config';

@Injectable()
export class FirebaseService {

  public app: firebase.app.App;
  constructor() {
    var firebase: any = {};
    if (isDevMode()) {
      firebase = firebaseConfigDev;
    } else {
      firebase = firebaseConfig;
    }
    this.app = initializeApp(firebase);
  }

}
