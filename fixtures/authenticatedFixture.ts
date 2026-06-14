// fixtures/authenticatedFixture.ts

import { test as base } from './customFixture';
import { ProductsPage } from '../pages/ProductsPage';
import { ENV } from '../utils/Environment';

type AuthFixture = {
    authenticatedPage: ProductsPage;
};

export const test = base.extend<AuthFixture>({

    authenticatedPage: async (
        { loginPage, productsPage },
        use
    ) => {

        await loginPage.navigateToLoginPage();

        await loginPage.login(
            ENV.USERNAME,
            ENV.PASSWORD
        );

        await use(productsPage);
    }

});

export { expect } from '@playwright/test';