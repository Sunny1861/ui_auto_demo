import { Locator, Page } from "@playwright/test";

export class Homepage {
    // This is just for Demo, more functions and elements in home page should be added in true product test
    // Note, this design also not consider the G11N case, should consider and support it in morden app
    // using key to find associate string in stead of hard code here
    private readonly page: Page;
    private readonly searchbtn: Locator;
    private readonly searchTextbox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchbtn = page.getByTitle('SEARCH');
        this.searchTextbox = page.getByRole('textbox', { name: 'Search' });
    }

    async SearchProduct(productInfo: string): Promise<void> {
        await this.page.getByTitle('SEARCH').click();
        await this.page.getByRole('textbox', { name: 'Search' }).fill(productInfo);
        await this.page.getByRole('textbox', { name: 'Search' }).press('Enter');
    }

    async GotoProductDetails(productSelector: string ): Promise<void> {
        await this.page.locator(productSelector).click();
    }

    async GotoShoppingCard(): Promise<void> {
        await this.page.getByRole('link', { name: 'ShoppingCart' }).click();
    }
}