import {test, expect} from '@playwright/test';

    test('Assignment 14', async({page}) => {
	
// Assignment 14
// ===========
// 1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
// 2.verify application logo is displayed
    const logo = page.locator('//img[@class="logo"]');
    await logo.isVisible();
// 3.Verify application caption displayed as "Experience the difference"
    const captionText = await page.textContent('//*[@id="topPanel"]/p');
    await expect(captionText).toBe('Experience the difference');
// 4.Enter invalid username
    const usernameInput = page.locator('//*[@id="loginPanel"]/form/div[1]/input');
    await usernameInput.fill('invalidUser');
// 5.Enter empty Password
    const passwordInput = page.locator('//*[@id="loginPanel"]/form/div[2]/input');
    await passwordInput.fill('');
// 6.Click on login button
    const loginButton = page.locator('//*[@id="loginPanel"]/form/div[3]/input');
    await loginButton.click();
// 7.Verify the error message "Please enter a username and password."
    const errorMessage = await page.textContent('//*[@id="rightPanel"]/p');
    await expect(errorMessage).toBe('Please enter a username and password.');
// 8.Click on admin page link
    const adminPagelink = page.getByText('Admin Page');
    await adminPagelink.click();
// 9.select the option "soap" from dba mode radio button
    const soapRadioBtn = page.locator('//*[@id="accessMode1"]');
    await soapRadioBtn.check();
// 10.Scroll to element dropdown
   const dropdown = page.locator('//*[@id="loanProvider"]');
   await dropdown.scrollIntoViewIfNeeded();
// 11.Select the option web service from the dropdown
   await dropdown.selectOption({label : 'Web Service'});
// 12.click on submit button
    const submitBtn = page.locator('//*[@id="adminForm"]/input');
    await submitBtn.click();
// 13.verify submission is successful by validating success message
    const successMessage = await page.textContent('//*[@id="rightPanel"]/p/b');
    await expect(successMessage).toBe('Settings saved successfully.');
// 14.Click on services page link
    const servicesPagelink = await page.locator('//*[@id="headerPanel"]/ul[1]/li[3]/a');
    await servicesPagelink.click();
// 15.wait for service page
    await page.waitForTimeout(5000);
// 16.Scroll down till bookstore services table
    const bookstoreTable = page.locator('//*[@id="rightPanel"]/table[2]');
    await bookstoreTable.scrollIntoViewIfNeeded();
// 17.get total rows of books store services table
    const rowCount = await bookstoreTable.locator('//*[@id="rightPanel"]/table[2]/tbody/tr[1]/td[1]').count();
    console.log(`Total rows in the bookstore services table: ${rowCount}`);
// 18.get total columns of books store services table
    const columnCount = await bookstoreTable.locator('//*[@id="rightPanel"]/table[2]/tbody/tr[1]').count();
    console.log(`Total columns in the bookstore services table: ${columnCount}`);
// 19.Print table data (row wise and column wise data)
    
    });