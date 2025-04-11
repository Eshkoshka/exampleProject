import { Page } from 'playwright';
import { expect } from '@playwright/test';

export class BasePage {
    public page: Page ;
    constructor(page: Page) {
        this.page = page;
    }
    
    async navigateTo(url) {
        await this.page.goto(url);
    }
    
    async waitForElement(selector) {
        await this.page.waitForSelector(selector);
    }
    
    async clickElement(selector) {
        await this.page.click(selector);
    }

    async expectElementToBeVisible(selector) {
        const element = this.page.locator(selector);
        await expect(element).toBeVisible();
        }
    
    async typeInElement(selector, text) {
        await this.page.fill(selector, text);
    }
    
    async getElementText(selector) {
        return await this.page.textContent(selector);
    }
}