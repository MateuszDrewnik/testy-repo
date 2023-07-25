Wykonaj test automatyczny do narzędzia visual studio z użyciem Playwright
Przejście na adres: w zadaniu
- Logowanie z użyciem:
loginu: w zadaniu
hasła: w zadaniu
- Przejście do sekcji ‘Umów się’ -> ‘Recepta’
- Wyszukanie i wybranie leku ‘Afastural’
- Wybranie opcji ‘1 sasz. 8 g’ jako wielkość opakowania
- Akceptacja checkbox’a
- Kliknięcie przycisku ‘Wybierz’
- Odznaczenie checkbox’a ‘Korzystam z pakietu TelemediGO…’
- Zaznaczenie checkbox’a ‘Zaznacz wszystkie’
- Kliknięcie przycisku ‘Umów za…’


await page.locator('div.column.column-1 em.row div:nth-child(2)');
await page.locator('div.column.column-1 em.row div:nth-child(2)');
await expect(page.$('div.column.column-1 em.row div:nth-child(2)')).toHaveText('59,00 zł');
await expect(page.$('div.column.column-1 em.row div:nth-child(2)')).toHaveText(["59,00 zł"]);
