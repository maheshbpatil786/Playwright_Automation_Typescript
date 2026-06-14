// pages/LoginPage.ts

import { Page, Locator, test } from '@playwright/test';
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

        await test.step('Navigate to Login Page', async () => {
            await this.page.goto('/');
        });

    }

    async login(user: string, pass: string) {

        await test.step('Enter Username', async () => {
            await this.fill(this.username, user);
        });

        await test.step('Enter Password', async () => {
            await this.fill(this.password, pass);
        });

        await test.step('Click Login Button', async () => {
            await this.click(this.loginBtn);
        });

    }
}