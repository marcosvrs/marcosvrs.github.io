import { browser, by, element } from 'protractor';

export class ResumePage {
    navigateTo() {
        return browser.get('/resume');
    }

    getHeadings3() {
        return element.all(by.css('h3'));
    }
}
