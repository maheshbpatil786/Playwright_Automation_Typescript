import { test as setup, expect } from '@playwright/test';
import { ENV } from '../../utils/Environment';

const authFile = '.auth/user.json';

setup('authenticate', async ({ page }) => {

    await page.goto('/');

    await page.locator('#user-name')
        .fill(ENV.USERNAME);

    await page.locator('#password')
        .fill(ENV.PASSWORD);

    await page.locator('#login-button')
        .click();

    await expect(page.locator('.title'))
        .toHaveText('Products');

    await page.context().storageState({
        path: authFile
    });

});