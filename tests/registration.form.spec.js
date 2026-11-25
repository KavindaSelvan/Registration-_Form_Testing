import { test, expect } from '@playwright/test';

test('registration form  test', async ({ page }) => {
  
await page.goto("https://demoqa.com/automation-practice-form");
await expect(page.getByRole('textbox', { name: 'First Name' })).toBeEmpty();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Kavinda ');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Selvan');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('kavin@gmail.com');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('radio', { name: 'Male', exact: true }).press('0');
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('0767009023');
  await page.locator('#dateOfBirthInput').click();
  await page.getByRole('combobox').nth(1).selectOption('2002');
  await page.getByRole('combobox').first().selectOption('5');
  await page.getByRole('gridcell', { name: 'Choose Friday, June 14th,' }).click();
  await page.locator('#subjectsInput').click();
  await page.locator('#subjectsInput').fill('Maths');
  await page.getByRole('option', { name: 'Maths' }).click();
  await page.locator('div').filter({ hasText: /^Reading$/ }).click();
  await page.getByRole('checkbox', { name: 'Reading' }).check();
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Ragala,St.Leonards Estate Halagaranoya.');
  await page.locator('#state').click();
  await page.getByRole('option', { name: 'Uttar Pradesh' }).click();
  await page.locator('#react-select-4-input').click();
  await page.getByRole('option', { name: 'Lucknow' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  


});