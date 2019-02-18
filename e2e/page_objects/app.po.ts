import { browser, by, element } from 'protractor';

export class AppPage {

  private title = element(by.css('[e2e-title]'));

  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return this.title.getText() as Promise<string>;
  }
}
