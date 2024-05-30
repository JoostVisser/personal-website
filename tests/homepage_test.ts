import { expect, test } from '@playwright/test';

test('home page has expected Joost header', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: "Hey, I'm Joost" })).toBeVisible();
});

test('click resume goes to resume page ', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Check my resume' }).click();
	await expect(page.getByRole('heading', { name: 'Resume' })).toBeVisible();
	await expect(page).toHaveURL("resume");
})
