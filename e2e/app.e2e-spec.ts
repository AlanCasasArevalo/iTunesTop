import { ITunesTopPage } from './app.po';

describe('i-tunes-top App', () => {
  let page: ITunesTopPage;

  beforeEach(() => {
    page = new ITunesTopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
