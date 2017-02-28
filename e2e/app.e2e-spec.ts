import { NHCPOCUCLUPage } from './app.po';

describe('nhc-poc-uclu App', function() {
  let page: NHCPOCUCLUPage;

  beforeEach(() => {
    page = new NHCPOCUCLUPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
