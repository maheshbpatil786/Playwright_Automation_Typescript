// pages/ProductsPage.ts

import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {

    private productTitle: Locator;

    constructor(page: Page) {
        super(page);

        this.productTitle = page.locator('.title');
    }

    async getProductTitle() {
        return await this.productTitle.textContent();
    }
}