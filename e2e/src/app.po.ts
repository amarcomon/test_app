import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class AppPage {
  navigateToLogin() {
    return browser.get('/login');
  }

  getAvatar(): ElementFinder {
    return element(by.css('ion-avatar'));
  }

  getFormTitle(): ElementFinder {
    return element(by.css('.title'));
  }

  getMailInput(): ElementFinder {
    return element(by.css('input[type="mail"]'));
  }

  getPasswordInput(): ElementFinder {
    return element(by.css('input[type="password"]'));
  }

  getReminder(): ElementFinder {
    return element(by.css('.remind'));
  }

  geButtonSubmit() {
    return element(by.css('button'));
  }

  getErrorMessages(): ElementArrayFinder {
    return element.all(by.css('.error-message'));
  }
}
