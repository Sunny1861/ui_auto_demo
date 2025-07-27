

# UI test Demo with Playwright 

This is a sample UI test project using Playwright. Show that how to implement UI automation using playwright with [Page object models](https://playwright.dev/docs/pom). The UI site test agaist on https://www.advantageonlineshopping.com

The case maybe fail if it run on firefox in headless, suggest to use chromuim browser for learning purpose

## Getting Started

To run this project locally, you will need:

- Clone this project to locally
- Download and install Node.js, config the node to path.
- `npm install` in side your project directory
- `npx playwright install` in side your project directory,[install playwright](https://playwright.dev/docs/intro#installing-playwright)
- Visual Studio Code


### Terminal Commands to run Test

Before run test, you need to check playwright.config.ts to sure the baseURL using https://www.advantageonlineshopping.com
Inside the clone project's directory, you can run several commands

- `npx playwright test`
    Runs all tests.

- `npx playwright test --ui`
    Starts the interactive UI mode.

- `npx playwright test --project=chromium`
    Runs the tests only on Desktop Chrome.

- `npx playwright test --project=chromium --headed --grep "Test product price and quantity after adding product to shopping cart"`
    Runs the filter tests only on Desktop Chrome with browser UI

- `npx playwright test --project=chromium --grep "Demo custom fixture"`
    Runs the filter tests only on Desktop Chrome, see how custom fixture using in playwright

- `npx playwright test --debug`
    Runs the tests in debug mode.    

### CI Integration

There is a demo ci integration on this proj, any commit in this project on branch main will run `npx playwright test --project=chromium --grep "Demo custom fixture"`, more detail .github/workflows/playwright.yml
[CI check on actions tab](https://github.com/Sunny1861/ui_auto_demo/actions)

## License

[MIT](https://github.com/Sunny1861/ui_auto_demo/blob/main/LICENSE)


