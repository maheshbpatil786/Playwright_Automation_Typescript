// tests/InventoryStorage.spec.ts

import { test, expect } from '@playwright/test';

test(
    'verify inventory page using stored login',
    async ({ page }) => {

        await page.goto(
            'https://www.saucedemo.com/inventory.html'
        );

        await expect(
            page.locator('.title')
        ).toHaveText('Products');

    }
);