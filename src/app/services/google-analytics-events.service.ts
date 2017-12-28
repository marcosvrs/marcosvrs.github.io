/// <reference path="../../../node_modules/@types/google.analytics/index.d.ts" />

import { isDevMode, Injectable } from '@angular/core';
import { googleAnalyticsID as googleAnalyticsIDProd } from 'app/ga.config.prod';
import { googleAnalyticsID as googleAnalyticsIDDev } from 'app/ga.config';

@Injectable()
export class GoogleAnalyticsService {
  /**
   * Auxiliary Google Analytics Service for Emit events
   */

  public gaNewElem: any = {};
  public gaElems: any = {};

  constructor() {
    this.gaInit(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga', this.gaNewElem, this.gaElems);
    ga('create', isDevMode() ? googleAnalyticsIDDev : googleAnalyticsIDProd, 'auto');
  }

  private gaInit(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * <any>new Date(); a = s.createElement(o),
      m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m);
  }

  public emitEvent(eventCategory: string, eventAction: string, eventLabel: string = null, eventValue: number = null) {
    ga('send', 'event', {
      eventCategory: eventCategory,
      eventAction: eventAction,
      eventLabel: eventLabel,
      eventValue: eventValue
    });
  }

  public emitPageView(newPage?: string) {
    if (newPage) {
      ga('set', 'page', newPage);
    }
    ga('send', 'pageview');
  }
}
