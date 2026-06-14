// pages/LoginPage.ts

import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

    private username: Locator;
    private password: Locator;
    private loginBtn: Locator;

    constructor(page: Page) {
        super(page);

        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginBtn = page.locator('#login-button');
    }

    async navigateToLoginPage() {
        await this.page.goto('/');
    }

    async login(user: string, pass: string) {
        await this.fill(this.username, user);
        await this.fill(this.password, pass);
        await this.click(this.loginBtn);
    }
}