import { test, expect } from "@playwright/test";

test("should navigate to the home page and click on New Todo", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // Find an element with the text 'About Page' and click on it
  await page.getByText("New Todo").click();
  await expect(page.getByRole('button', { name: 'Add Todo' })).toBeVisible();

  // The new url should be "/about" (baseURL is used there)
  // await expect(page).toHaveURL("/home/about");
  // The new page should contain an h1 with "About Page"
  // await expect(page.getByRole("heading", { level: 1 })).toContainText(
  //   "About Page",
  // );
});
