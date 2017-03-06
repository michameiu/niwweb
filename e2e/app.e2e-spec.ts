import { NiwwebPage } from './app.po';

describe('niwweb App', () => {
  let page: NiwwebPage;

  beforeEach(() => {
    page = new NiwwebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
