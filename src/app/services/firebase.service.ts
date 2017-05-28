import { Injectable, isDevMode } from '@angular/core';
import * as Firebase from 'firebase';

import { firebaseConfig } from 'app/firebase.config.prod';
import { firebaseConfigDev } from 'app/firebase.config';

@Injectable()
export class FirebaseService {

  public app: firebase.app.App;
  private firebase;
  constructor() {
    if (isDevMode()) {
      this.firebase = firebaseConfigDev;
    } else {
      this.firebase = firebaseConfig;
    }
    this.app = Firebase.initializeApp(this.firebase, 'https://us-central1-' + this.firebase.projectId + '.cloudfunctions.net/');
  }

}
