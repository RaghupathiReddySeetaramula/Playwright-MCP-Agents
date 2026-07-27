import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly forgotPasswordLink: Locator;
  readonly loginHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.forgotPasswordLink = page.getByText('Forgot your password?');
    this.loginHeading = page.getByRole('heading', { name: 'Login' });
  }

  async open() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await this.page.waitForLoadState('networkidle');
  }

  async expectLoginFormVisible() {
    await expect(this.loginHeading).toBeVisible();
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async loginWithKeyboard(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.passwordInput.press('Enter');
  }

  async expectValidationMessage(message: string) {
    await expect(this.page.getByText(message, { exact: false }).first()).toBeVisible();
  }

  async expectDashboardVisible() {
    await expect(this.page).toHaveURL(/\/dashboard\/index/);
    await expect(this.page.getByRole('heading', { name: /Dashboard/i })).toBeVisible();
  }

  async expectStayOnLoginPage() {
    await expect(this.page).toHaveURL(/\/auth\/login/);
    await expect(this.loginHeading).toBeVisible();
  }
}
