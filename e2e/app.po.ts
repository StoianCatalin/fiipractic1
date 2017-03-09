import { browser, element, by } from 'protractor';

export class FiipracticPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fii-root h1')).getText();
  }
}
