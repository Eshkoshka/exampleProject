import { BasePage } from './basePage.ts';

export class NavigationPage extends BasePage {
    constructor(page) {
        super(page);
    }

    public logoToLinkedIn = this.page.locator('.nav-logo');


    
}