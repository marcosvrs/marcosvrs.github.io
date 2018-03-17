import { browser, by, element } from 'protractor';

export class NavbarNav {

  navigateTo() {
    return browser.get('/');
  }

  getUrlPath() {
    return browser.getCurrentUrl().then((Url) => Url.replace(new RegExp('^' + browser.baseUrl), ''));
  }

  gotoHomePage() {
    return element(by.id('home'));
  }

  gotoResumePage() {
    return element(by.id('resume'));
  }

  gotoAboutPage() {
    browser.waitForAngularEnabled(false);
    return element(by.id('about'));
  }

  gotoContactPage() {
    return element(by.id('contact'));
  }
}
