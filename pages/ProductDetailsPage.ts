import { Page } from "@playwright/test";
import { sleep } from "../utils/Utils";

export class ProductDetailsPage {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Todo: support G11N
    async AddToCard() : Promise<void> {
        await this.page.getByRole('button', { name: 'ADD TO CART' }).click();
    }

    async SetQuantity(quantity: number): Promise<void> {
        for(let i=0; i< quantity -1; i++) {
            await this.page.locator('e-sec-plus-minus div').nth(3).click();
        }
    }

    async SelectCateogry(title: string) : Promise<void> {
        await this.page.getByTitle(title).click();
    }
}