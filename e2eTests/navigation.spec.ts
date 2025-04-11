import { test, expect } from '@playwright/test';
import { BasePage } from '../pageObject/basePage';
import { NavigationPage } from '../pageObject/navigationPage';

test.describe('Navigation Tests', () => {
let basePage: BasePage;
let navigationPage : NavigationPage;

  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    navigationPage = new NavigationPage(page);
    await page.goto('https://www.linkedin.com/');
  });

  test('navigate to linkedIn page', async ({ page }) => {
    await basePage.expectElementToBeVisible(navigationPage.logoToLinkedIn);
  });

  test('search by name and surname', async ({ page }) => {
    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
});
