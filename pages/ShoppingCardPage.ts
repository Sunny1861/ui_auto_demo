import { Page, Locator, expect } from "@playwright/test";

export class ShoppingCardPage {

    // This is just for Demo, more functions and elements in shpopping card should be added in true product test
    // Note, this design also not consider the G11N case, should consider and support it in morden app
    // using key to find associate string in stead of hard code here
    private readonly page: Page;
    private readonly cartTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartTable = page.locator('[id="shoppingCart"]').locator('tr');
    }

    /*
    The index start with 1
    */
    async getProductNameAt(index: number): Promise<string> {
        var product_info = this.cartTable.nth(index).locator('td');
        return await product_info.nth(1).innerText();
    }

     /*
    The index start with 1
    */
    async getProductQuantityAt(index: number): Promise<string> {
        var product_info = this.cartTable.nth(index).locator('td');
        return await product_info.nth(4).innerText();
    }

     /*
    The index start with 1
    */
    async getProductPriceAt(index: number): Promise<string> {
        var product_info = this.cartTable.nth(index).locator('td');
        return await product_info.nth(5).locator('p').innerText();
    }

     async getTotalPrice(index: number): Promise<string> {
        var total_price = this.cartTable.last();
        let raw_res =  await total_price.innerText();
        raw_res = raw_res.replace("CHECKOUT (","");
        raw_res = raw_res.replace(")","");
        return raw_res;
    }
} 