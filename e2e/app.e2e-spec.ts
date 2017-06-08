import { EstoqueSaeDigitalPage } from './app.po';

describe('estoque-sae-digital App', () => {
  let page: EstoqueSaeDigitalPage;

  beforeEach(() => {
    page = new EstoqueSaeDigitalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
