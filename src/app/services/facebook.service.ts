/// <reference path="../../../node_modules/@types/facebook-js-sdk/index.d.ts" />

import { Injectable } from '@angular/core';

@Injectable()
export class FacebookService {

  constructor() {
      FB.init({
        appId: '1650216745007910',
        xfbml: true,
        version: 'v2.11'
      });
    this.fbInit(document, 'script', 'facebook-jssdk');
  }

  private fbInit(d, s, id) {
    let js;
    const fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
  }
}
