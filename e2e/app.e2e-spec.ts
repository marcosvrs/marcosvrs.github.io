import { Marcosvrs.Github.IoPage } from './app.po';

describe('marcosvrs.github.io App', () => {
  let page: Marcosvrs.Github.IoPage;

  beforeEach(() => {
    page = new Marcosvrs.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
