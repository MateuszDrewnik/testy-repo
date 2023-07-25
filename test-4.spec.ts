import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://telemedi.com/pl/');
  await page.getByRole('button', { name: 'Zezwól na wszystkie' }).click();
  await page.getByRole('link', { name: 'Zaloguj się' }).click();
  await page.getByPlaceholder('E-mail, PESEL lub identyfikator').click();
  await page.getByPlaceholder('E-mail, PESEL lub identyfikator').fill('telemeditest@gmail.com');
  await page.getByPlaceholder('Hasło').click();
  await page.getByPlaceholder('Hasło').fill('Telemeditest12!');
  await page.getByRole('button', { name: 'Zaloguj się', exact: true }).click();
  await page.waitForTimeout(30000);
  await page.getByRole('button', { name: 'Umów się' }).click();
  await page.getByRole('button', { name: 'Recepta Konsultacja z ankietą medyczną' }).click();
  await page.locator('div').filter({ hasText: /^Wpisz nazwę leku$/ }).nth(1).click();
  await page.locator('#react-select-2-input').fill('Afastural');
  await page.waitForTimeout(30000);
  await page.getByText('Afastural, Fosfomycinum, 3 g, 1 sasz. 8 g').click();
  await page.locator('label').filter({ hasText: 'Wybierz wielkość opakowania' }).click();
  await page.getByText('1 sasz. 8 g').click();
  await page.locator('label').filter({ hasText: 'Akceptuję, że to lekarz decyduje, na jaką ilość leku zostanie wystawiona recepta' }).click();
  await page.getByRole('button', { name: 'Wybierz' }).click();
  await page.waitForTimeout(30000);
  await page.getByText('Korzystam z pakietu TelemediGO i zniżki 50% przez cały rok na wszystkie konsulta').click();
  await page.getByText('Zaznacz wszystkie').click();
  await page.getByRole('button', { name: 'Umów za 59.00 PLN' }).click();
  await page.waitForTimeout(29999);
  await page.waitForTimeout(29999);

  await expect(page.locator('div.column.column-1 em.row div:nth-child(2)')).toHaveText(['59,00 zł']);
});