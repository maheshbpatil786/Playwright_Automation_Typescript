// tests/ProductPage.spec.ts

import './hooks/testHooks';

import { test, expect } from '../fixtures/customFixture';
import { ENV } from '../utils/Environment';

test('verify products page title', async ({
    loginPage,
    productsPage
}) => {

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        ENV.USERNAME,
        ENV.PASSWORD
    );

    const title = await productsPage.getProductTitle();

    expect(title).toContain('Products');
});