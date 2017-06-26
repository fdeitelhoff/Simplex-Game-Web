import { browser, by, element } from 'protractor';

export class SimplexAngularPixiTestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sapt-root h1')).getText();
  }
}
