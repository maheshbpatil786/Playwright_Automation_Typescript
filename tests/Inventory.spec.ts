// tests/Inventory.spec.ts

import './hooks/testHooks';

import {
    test,
    expect
} from '../fixtures/authenticatedFixture';

test('@smoke verify inventory page', 
    async ({ authenticatedPage }) => {

        const title =
            await authenticatedPage.getProductTitle();

        expect(title).toBe('Products');

    }
);