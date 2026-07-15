//annotations 

//test
//test.describe


//test.only
//test.skip
//test.fixme
//test.slow
//test.fail


//npx playwright test 1-Annotations/annotations.spec.ts 
//npx playwright test 1-Annotations/annotations.spec.ts --grep "Login test"


import { test, expect } from '@playwright/test';

test('Login testcase 1' , async() => {
    console.log('This is an independent testcase');

});


//test.describe

test.describe('Login page ', () =>{
    test('Login page loader', async() => {
    console.log('this is testcase 1');
    });

    test('Enter valid user name and password', async() => {
    console.log('this is testcase 2');
    });

    test('Click on login button', async() => {
    console.log('this is testcase 3');
    });

});














