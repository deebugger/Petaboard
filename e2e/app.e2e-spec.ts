import { PetaboardPage } from './app.po';

describe('petaboard App', function() {
  let page: PetaboardPage;

  beforeEach(() => {
    page = new PetaboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Peta works!');
  });
});
