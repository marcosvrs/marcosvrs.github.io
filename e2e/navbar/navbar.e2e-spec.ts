import { NavbarNav } from './navbar.po';

describe('Navbar navigation', () => {
  let page: NavbarNav;
  
  beforeAll(() => {
    page = new NavbarNav();
    page.navigateTo();
  });

  it('should open the Resume Page', () => {
    page.gotoResumePage().click();
    expect(page.getUrlPath()).toEqual('/resume');
  });

  it('should open the About Page', () => {
    page.gotoAboutPage().click();
    expect(page.getUrlPath()).toEqual('/about');
  });

  it('should open the Contact Page', () => {
    page.gotoContactPage().click();
    expect(page.getUrlPath()).toEqual('/contact');
  });

  it('should open the Home Page', () => {
    page.gotoHomePage().click();
    expect(page.getUrlPath()).toEqual('/');
  });
});
