import { test as base } from '@playwright/test';
import { BasePage } from '../pages/Basepage';

// Declare the types of your fixtures.
type MyFixtures = {
  todoPage: BasePage;
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  todoPage: async ({ page }, use) => {
    // Set up the fixture.
    const basePage = new BasePage(page);
    await basePage.PrepareForFeature("demo");

    // Use the fixture value in the test.
    await use(basePage);

    // Clean up the fixture.
    await basePage.Cleanup("clean");
  },
  // More can add here if your fixture include more members
});
export { expect } from '@playwright/test';