import { expect } from '@playwright/test';

const url = process.env.BASE_URL + '/sampleapp';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.sampleAppHeader = page.locator('h3', { hasText: 'Sample App' });
    this.userNameField = page.getByPlaceholder('User Name');
    this.passwordField = page.getByPlaceholder('********');
    this.loginButton = page.locator('#login');
    this.loginText = page.locator('#loginstatus');
  }

  async goToSampleApp() {
    await this.page.goto(url);
    await expect(this.page).toHaveURL(url);
    await expect(this.sampleAppHeader).toBeVisible();
  }
  async fillUserNameField(username) {
    await this.userNameField.fill(username);
  }
  async fillPasswordField(pass) {
    await this.passwordField.fill(pass);
  }
  async clickLogoutButton() {
    await this.logoutButton.click();
  }
  async clickLoginButton() {
    await this.loginButton.click();
  }
  async LoginTextToContainUsername(username) {
    const text = `Welcome, ${username}!`;
    await expect(this.loginText).toHaveText(text);
  }
}
