import { browser, by, element } from 'protractor';

export class AboutPage {
    navigateTo() {
        return browser.get('/about');
    }

    getHeading2() {
        return element(by.css('h2'));
    }
}