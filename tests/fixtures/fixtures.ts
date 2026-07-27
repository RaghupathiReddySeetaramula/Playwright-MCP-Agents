import { test as base, expect } from '@playwright/test';
import { BasePage } from '../pages/base.page';
import { LoginPage } from '../pages/login.page';

type OrangeHrmFixtures = {
  basePage: BasePage;
  loginPage: LoginPage;
};

export const test = base.extend<OrangeHrmFixtures>({
  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

test.beforeEach(async ({ page }) => {
  await page.goto('about:blank');
  await page.context().clearCookies();
});

export { expect };
