import { test } from "../../fixtures/my-test";

test('Demo custom fixture', async ({ todoPage }) => {
  await todoPage.Logmsg("Hello, I am demo to create custom fixture ");
});