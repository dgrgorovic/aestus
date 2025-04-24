import { test, expect } from '@playwright/test';
//prvi test za uspjesnu registraciju novog korisnika 
test.describe('Registracija korisnika', () => {
  test('Registracija s validnim podacima', async ({ page }) => {

    //
    const uniqueEmail = `dg_${Date.now()}@mail.com`;
    // ide na url deklariran u playwright.config.ts fileu 
    await page.goto('/');
    //klikne i ispunjava podatke za unos
    await page.getByText('Registriraj se').click();
    await page.getByLabel('firstAndLastName').click();
    await page.getByLabel('firstAndLastName').fill('dgrgorovic');
    await page.getByLabel('email').click();
    //MAIL SE MORA MIJENJATI SVAKI PUT
    await page.getByLabel('email').fill(uniqueEmail);
    //prepoznaje prikaz validacije za lozinku  
    await expect(page.getByText('Treba sadržavati barem 10 znakova, 1 broj, 1 veliko, 1 malo slovo i 1 poseban zn')).toBeVisible();

    //unos lozinke
    await page.getByLabel('password', { exact: true }).click();
    await page.getByLabel('password', { exact: true }).fill('Danijeltest1!');
    await page.getByLabel('confirmPassword').click();
    await page.getByLabel('confirmPassword').fill('Danijeltest1!');
    //klik na registriraj se
    await page.getByRole('button', { name: 'Registriraj se' }).click();
    //prepoznaje i prikazuje prikaz uspjesne registracije
    await expect(page.getByText('Uspješno ste se registrirali u aplikaciju.')).toBeVisible();



    
  });

  //ovdje
  test('validacija registracije sa postojećim mailom', async ({ page }) => {
    await page.goto('/');

    await page.getByText('Registriraj se').click();
    

    await page.getByLabel('firstAndLastName').click();
    await page.getByLabel('firstAndLastName').fill('dgrgorovic');
    await page.getByLabel('email').click();
    await page.getByLabel('email').fill('dgrg11@mail.com');
    
    await page.getByLabel('password', { exact: true }).click();
    await page.getByLabel('password', { exact: true }).fill('Danijeltest1!');
    await page.getByLabel('confirmPassword').click();
    await page.getByLabel('confirmPassword').fill('Danijeltest1!');

    await page.getByRole('button', { name: 'Registriraj se' }).click();

   //prepoznaje i prikazuje prikaz poruke da vec postoji korisnik sa tom email adresom
    await expect (page.getByText('Već postoji registrirani račun s tom email adresom.')).toBeVisible();


});


})




