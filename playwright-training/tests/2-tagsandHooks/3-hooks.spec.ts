import {test, expect} from '@playwright/test';

//before all
//after all
//before each
//after each



test.afterEach('Login testcase 1' , async() => {
    console.log('This is an after each testcase');
    });

test('Login testcase 2' , async() => {
    console.log('testcase 2');
    });

test('Login testcase 3' , async() => {
    console.log('testcase 3');
    });   
    
