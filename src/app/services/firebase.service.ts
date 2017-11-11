import { Injectable, isDevMode } from '@angular/core';
import { initializeApp, app as firebase } from 'firebase';

import { firebaseConfig as firebaseConfigProd } from 'app/firebase.config.prod';
import { firebaseConfig as firebaseConfigDev } from 'app/firebase.config';

@Injectable()
export class FirebaseService {

  public app: firebase.App;
  constructor() {
    let firebaseConfig: any;
    if (isDevMode()) {
      firebaseConfig = firebaseConfigDev;
    } else {
      firebaseConfig = firebaseConfigProd;
    }
    this.app = initializeApp(firebase);
  }

}
