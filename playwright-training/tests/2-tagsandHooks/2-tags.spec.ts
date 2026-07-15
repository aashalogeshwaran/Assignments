import {test, expect} from '@playwright/test';

//execute only the specific tag testcases



test('Login testcase 1' ,{tag: ['@smoke']}, async() => {
    console.log('This is an smoke independent testcase');
    });

test('Login testcase 2' ,{tag: ['@regression']}, async() => {
    console.log('This is an regression testcase');
    });

test('Login testcase 3' , async() => {
    console.log('This is an smoke testcase');
    
    });   
    
test.describe("describe testcase",{tag: ['@smoke']}, async() => {
    test('Login testcase 1' , async() => {
    console.log('This is an smoke testcase1');
    });

test('Login testcase 2' , async() => {
    console.log('This is an smoke testcase2');
    });

test('Login testcase 3' , async() => {
    console.log('This is an smoke testcase3');
    }); 
});