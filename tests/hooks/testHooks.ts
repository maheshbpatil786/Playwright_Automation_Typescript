// tests/hooks/testHooks.ts

import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {

    console.log('===================================');
    console.log('Starting Test : ' + test.info().title);
    console.log('===================================');

});

test.afterEach(async ({ page }, testInfo) => {

    if (testInfo.status !== testInfo.expectedStatus) {

        await page.screenshot({
            path: `screenshots/${testInfo.title}.png`,
            fullPage: true
        });

    }

}); 