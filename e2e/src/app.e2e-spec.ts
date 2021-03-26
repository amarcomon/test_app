import { AppPage } from './app.po';

describe('Login Page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should render login page elements', () => {
    page.navigateToLogin();

    const pageElements = [
      page.getAvatar(),
      page.getFormTitle(),
      page.getMailInput(),
      page.getPasswordInput(),
      page.getReminder(),
      page.geButtonSubmit(),
    ];
    pageElements.forEach((pageElement) => {
      expect(pageElement).toBeDefined();
    });
  });

  it('should show error messages if form it is not filled properly', async () => {
    await page.navigateToLogin();
    const mailInput = page.getMailInput();
    const passwordInput = page.getPasswordInput();
    const submitButton = page.geButtonSubmit();
    await mailInput.sendKeys('wrongmail');
    await passwordInput.sendKeys('test');
    await submitButton.click();

    const errorMessages = await page.getErrorMessages();

    expect(errorMessages.length).toEqual(2);
  });

  it('should not show error messages if form it is filled properly', async () => {
    await page.navigateToLogin();
    const mailInput = page.getMailInput();
    const passwordInput = page.getPasswordInput();
    const submitButton = page.geButtonSubmit();
    await mailInput.sendKeys('proper@mail.com');
    await passwordInput.sendKeys('testpass');
    await submitButton.click();

    const errorMessages = await page.getErrorMessages();

    expect(errorMessages.length).toEqual(0);
  });
});
