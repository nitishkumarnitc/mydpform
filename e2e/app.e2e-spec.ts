import { MydpformPage } from './app.po';

describe('mydpform App', () => {
  let page: MydpformPage;

  beforeEach(() => {
    page = new MydpformPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
