import { browser, by, element } from 'protractor';

export class ContactPage {
    navigateTo() {
        return browser.get('/contact');
    }

    getNameInput() {
        return element(by.id('name'));
    }
    
    setNameInput(input: string) {
        return this.getNameInput().sendKeys(input);
    }

    getEmailInput() {
        return element(by.id('email'));
    }

    setEmailInput(input: string) {
        return this.getEmailInput().sendKeys(input);
    }

    getMessageInput() {
        return element(by.id('message'));
    }

    getSubmitButton() {
        return element(by.id('submit'));
    }

    getMessages() {
        return element(by.css('#errorMessage, #successMessage'));
    }
}