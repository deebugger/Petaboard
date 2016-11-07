import { browser, element, by } from 'protractor';

export class PetaboardPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('Peta-root h1')).getText();
  }
}
