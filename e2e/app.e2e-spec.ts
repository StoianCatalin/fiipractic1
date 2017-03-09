import { FiipracticPage } from './app.po';

describe('fiipractic App', () => {
  let page: FiipracticPage;

  beforeEach(() => {
    page = new FiipracticPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fii works!');
  });
});
