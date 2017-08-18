import { IlluminateStoriesPage } from './app.po';

describe('Illuminate Stories App', () => {
  let page: IlluminateStoriesPage;

  beforeEach(() => {
    page = new IlluminateStoriesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
