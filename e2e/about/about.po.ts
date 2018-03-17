import { browser, by, element } from 'protractor';

export class AboutPage {
    navigateTo() {
        browser.waitForAngularEnabled(false);
        return browser.get('/about');
    }

    getHeading2() {
        return element(by.css('h2'));
    }
}
