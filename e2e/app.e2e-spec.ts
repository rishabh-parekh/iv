import { PalavPage } from './app.po';

describe('palav App', () => {
  let page: PalavPage;

  beforeEach(() => {
    page = new PalavPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
