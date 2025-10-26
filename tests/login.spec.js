// @ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { HomePage } from '../pages/HomePage.js';
import { users } from '../testData/users.js';

let homePage;
let loginPage;
const validUser = users.valid.username;
const validPass = users.valid.password;

test.describe('Login Feature', () => {
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    await homePage.goToHomePage();
  });

  test('Successful login with valid credentials', async ({ page }) => {
    //Given I navigate to sample app

    await loginPage.goToSampleApp();

    //When I enter valid username and password
    await loginPage.fillUserNameField(validUser);
    await loginPage.fillPasswordField(validPass);
    await loginPage.clickLoginButton();

    //Then welcome message with my username should be displayed
    await loginPage.LoginTextToContainUsername(validUser);
  });
});
