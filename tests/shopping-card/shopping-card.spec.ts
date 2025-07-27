import { test, expect, Page } from '@playwright/test';
import { ShoppingCardPage } from '../../pages/ShoppingCardPage';
import { Homepage } from '../../pages/HomePage';


const HP_ZBOOK_17_G2_MOBILE_WORKSTATION = "HP ZBOOK 17 G2 MOBILE WORKSTATION";
const HP_Z8000_BLUETOOTH_MOUSE = "HP Z8000 BLUETOOTH MOUSE";
const HP_ELITE_X2_1011_G1_TABLET = "HP ELITE X2 1011 G1 TABLET";
/*
 Scenario:  
1. Go to https://www.advantageonlineshopping.com/'
2. Add the following products to the cart:
• 1 × HP ZBOOK 17 G2 MOBILE WORKSTATION (Gray)
• 2 × HP Z8000 BLUETOOTH MOUSE (Black)
• 1 × HP ELITE X2 1011 G1 TABLET (Black)
3. Go to the shopping cart.
4. Verify:
• The correct quantity of each product.
• The individual and total prices are accurate.
*/
test('Test product price and quantity after adding product to shopping cart', async ({ page }) => {
  await page.goto('/');

  // add product 1 to shopping card
  const homePage = new Homepage(page);
  await homePage.SearchProduct(HP_ZBOOK_17_G2_MOBILE_WORKSTATION);
  await page.locator('[id="8"]').click();
  await page.getByTitle('GRAY').click();
  await page.getByRole('button', { name: 'ADD TO CART' }).click();


  // Adding  product 2 to shopping card
  await homePage.SearchProduct(HP_Z8000_BLUETOOTH_MOUSE);
  await page.locator('[id="33"]').click();
  await page.locator('e-sec-plus-minus div').nth(3).click();
  await page.getByRole('button', { name: 'ADD TO CART' }).click();


  // Adding product 3 to shopping card
  await homePage.SearchProduct(HP_ELITE_X2_1011_G1_TABLET);
  await page.locator('[id="17"]').click();
  await page.getByRole('button', { name: 'ADD TO CART' }).click();
  await page.getByRole('link', { name: 'ShoppingCart' }).click();

  const scPage = new ShoppingCardPage(page);

  // Verify product 3 info in shopping card
  expect(await scPage.getProductNameAt(1)).toBe(HP_ELITE_X2_1011_G1_TABLET);
  expect(await scPage.getProductQuantityAt(1)).toBe("1");
  expect(await scPage.getProductPriceAt(1)).toBe("$1,279.00");

  // Verify product 2 info in shopping card
  expect(await scPage.getProductNameAt(2)).toBe(HP_Z8000_BLUETOOTH_MOUSE);
  expect(await scPage.getProductQuantityAt(2)).toBe("2");
  expect(await scPage.getProductPriceAt(2)).toBe("$101.98");

  // Verify product 1 info in shopping card
  expect(await scPage.getProductNameAt(3)).toBe(HP_ZBOOK_17_G2_MOBILE_WORKSTATION);
  expect(await scPage.getProductQuantityAt(3)).toBe("1");
  expect(await scPage.getProductPriceAt(3)).toBe("$1,799.00");

  // Verify the total prices
  expect(await scPage.getTotalPrice(1)).toBe("$3,179.98");
});