import { expect, test } from './fixtures/fixtures';

test.describe('OrangeHRM Login Flow', () => {
  test('TC01-page-load-and-initial-ui', async ({ page, loginPage }) => {
    await loginPage.open();
    await loginPage.expectLoginFormVisible();
    await expect(page.getByText('Username : Admin')).toBeVisible();
    await expect(page.getByText('Password : admin123')).toBeVisible();
    await expect(loginPage.forgotPasswordLink).toBeVisible();
  });

  test('TC02-valid-user-login', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login('Admin', 'admin123');
    await loginPage.expectDashboardVisible();
  });

  test('TC03-empty-username-submission', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.passwordInput.fill('admin123');
    await loginPage.loginButton.click();
    await loginPage.expectStayOnLoginPage();
    await loginPage.expectValidationMessage('Required');
  });

  test('TC04-empty-password-submission', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.usernameInput.fill('Admin');
    await loginPage.loginButton.click();
    await loginPage.expectStayOnLoginPage();
    await loginPage.expectValidationMessage('Required');
  });

  test('TC05-invalid-credentials', async ({ page, loginPage }) => {
    await loginPage.open();
    await loginPage.login('Admin', 'wrongpass');
    await expect(page.getByText(/Invalid credentials/i)).toBeVisible();
    await loginPage.expectStayOnLoginPage();
  });

  test('TC06-edge-case-whitespace-and-enter-submit', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.usernameInput.fill('   ');
    await loginPage.passwordInput.fill('   ');
    await loginPage.loginButton.click();
    await loginPage.expectStayOnLoginPage();
    await loginPage.expectValidationMessage('Required');

    await loginPage.loginWithKeyboard('Admin', 'admin123');
    await loginPage.expectDashboardVisible();
  });
});
