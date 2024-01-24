import { test, expect } from "@playwright/test";

test("should navigate to the home page", async ({ page }) => {
  await page.goto("/");
});

test("should be able to fetch Todos and display them", async ({ page }) => {
  await page.goto("/");
  const list = page.locator('.todo-list > .todo');
  await expect(list).toHaveCount(200);
});

test("should be able to fill up todo title and create a new Todo", async ({ page }) => {
  // await page.goto("/");
  // await page.getByText("New Todo").click();
  // await expect(page.getByTestId("todo-title-input")).toBeVisible();
  // await page.getByTestId("todo-title-input").fill("My Todo Title");
  // await page.getByTestId("add-todo-button").click();
});
