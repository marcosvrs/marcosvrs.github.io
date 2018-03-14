import { AboutPage } from './about.po';

describe('About Page', () => {
    let page: AboutPage;

    beforeEach(() => {
        page = new AboutPage();
    });
    
    it('the Heading 2 should be "class Developer extends Engineer {"', () => {
        page.navigateTo();
        expect(page.getHeading2().getText()).toEqual('class Developer extends Engineer {');
    });
});
