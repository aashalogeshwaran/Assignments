import {test, expect} from '@playwright/test';

//skip testcases

test.describe.skip('Login page ', () =>{
    test('Login page loader', async() => {
    console.log('this is testcase 1');
    });
test('Login testcase 1' , async() => {
    console.log('This is an independent testcase');
    });

test('Login testcase 2' , async() => {
    console.log('This is an independent testcase');
    });

test('Login testcase 3' , async() => {
    console.log('This is an independent testcase');
    });   
    
});

test.describe('Landing page ', () =>{
    test.skip('Login page loader', async() => {
    console.log('this is testcase 4');
    });
test('Login testcase 5' , async() => {
    console.log('This is an independent testcase');
    });

test('Login testcase 6' , async() => {
    console.log('This is an independent testcase');
    });

test('Login testcase 7' , async() => {
    console.log('This is an independent testcase');
    });   
    
});  
    