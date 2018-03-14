import { ContactPage } from './contact.po';

describe('Contact Page', () => {
    let page: ContactPage;

    beforeAll(() => {
        page = new ContactPage();
        page.navigateTo();
    });
    
    it('should auto generate the message text', () => {
        expect(page.getSubmitButton()).toBeTruthy();
        expect(page.getSubmitButton().click()).toThrowError();
        expect(page.getNameInput()).toBeTruthy();
        page.setNameInput('Marcos');
        expect(page.getEmailInput()).toBeTruthy();
        page.setEmailInput('me@marcosvrs.com');
        expect(page.getMessageInput()).toBeTruthy();
        expect(page.getMessageInput().getText()).toEqual('Hey Marcos!\nI just came to say hello!\n\nSincerely,\nMarcos\nme@marcosvrs.com');
        page.getSubmitButton().click();
        expect(page.getMessages()).toBeTruthy();
    });
});
