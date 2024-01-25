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
  await page.goto("/");
  await page.getByTestId("new-todo-button").click();
  await expect(page.getByTestId("todo-title-input")).toBeVisible();
  await page.getByTestId("todo-title-input").fill("My Todo Title");
  await page.getByTestId("add-todo-button").click();
  const list = page.locator('.todo-list > .todo');
  await expect(list).toHaveCount(201);
});

test("should be able to toggle the completeness of a Todo", async ({ page }) => {
  await page.goto("/");
  const completeness = await page.locator('#toggle-todo-1').textContent();
  await page.getByTestId("toggle-todo-1").click();
  await expect(page.locator("#toggle-todo-1")).toHaveText(completeness === "Completed" ? "Incomplete" : "Completed");
});

test("should be able to delete a Todo", async ({ page }) => {
  await page.goto("/");
  const todo = page.locator('#todo-1');
  await expect(todo).toBeVisible();
  await page.getByTestId('delete-todo-1').click();
  await expect(todo).not.toBeVisible();
});

