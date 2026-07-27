import { expect, Page } from '@playwright/test';

export class BasePage {
  constructor(protected readonly page: Page) {}

  async waitForPageLoad() {
    await this.page.waitForLoadState('domcontentloaded');
  }

  async expectTitleToContain(text: string | RegExp) {
    await expect(this.page).toHaveTitle(text);
  }
}
