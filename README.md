

# UI test Demo using Playwright 

This is a sample UI test project using Playwright. Show that how to implement UI automation using playwright with [Page object models](https://playwright.dev/docs/pom). The UI site test agaist on https://www.advantageonlineshopping.com

The case maybe fail if it run on firefox in headless, suggest to use chromuim browser for learning purpose

## Getting Started

To run this project locally, you will need:

- Clone this project to locally
- Download and install Node.js, config the node to path.
- npm install in side your project directory
- Install playwright in side your project directory, `npm init playwright@latest` ,[install playwright](https://playwright.dev/docs/intro#installing-playwright)
- Playwright browsers(This is option, you can select to install browsers when installing playwright above) 
- Visual Studio Code

### Tips for playwright install

you may need interactive with install process, select with these options

* Ok to proceed? (y) y
* Do you want to use TypeScript or JavaScript? · TypeScript
* Where to put your end-to-end tests? · tests
* Add a GitHub Actions workflow? (y/N) · true
* Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) › true

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

## License

[MIT] See the details in LICENSE file


