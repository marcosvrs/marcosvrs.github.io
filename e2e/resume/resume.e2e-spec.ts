import { ResumePage } from './resume.po';

describe('Resume Page', () => {
    let page: ResumePage;

    beforeAll(() => {
        page = new ResumePage();
        page.navigateTo();
    });

    it('should display three Headings 3', () => {
        expect(page.getHeadings3().count()).toEqual(3);
    });

    it('the first Heading 3 should be TECHNOLOGIES', () => {
        expect(page.getHeadings3().first().getText()).toEqual('TECHNOLOGIES');
    });

    it('the second Heading 3 should be WORK EXPERIENCE', () => {
        expect(page.getHeadings3().get(1).getText()).toEqual('WORK EXPERIENCE');
    });

    it('the third Heading 3 should be EDUCATION', () => {
        expect(page.getHeadings3().last().getText()).toEqual('EDUCATION');
    });
});
