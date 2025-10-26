import { expect } from '@playwright/test';

const url = process.env.BASE_URL;
const homepageHeaderText = 'UI Test AutomationPlayground';

export class HomePage {
  constructor(page) {
    this.page = page;
    this.homepageHeader = page.locator('#title');
  }

  async goToHomePage() {
    await this.page.goto(url);
    await expect(this.page).toHaveURL(url);
    await expect(this.homepageHeader).toBeVisible();
    await expect(this.homepageHeader).toHaveText(homepageHeaderText);
  }
}
