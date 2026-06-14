// tests/NegativeLogin.spec.ts

import './hooks/testHooks';

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('verify invalid login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        'wrongUser',
        'wrongPassword'
    );

    await expect(page).toHaveURL(/inventory/);

});