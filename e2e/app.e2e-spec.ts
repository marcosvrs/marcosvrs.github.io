import { AppPage } from './app.po';

describe('ng-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('the Heading 1 should be Marcos Vinícius Rubido', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Marcos Vinícius Rubido');
  });
});
