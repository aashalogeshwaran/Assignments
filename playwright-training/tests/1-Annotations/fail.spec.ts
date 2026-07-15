import {test, expect} from '@playwright/test';

//fail testcases using fail annotation. This will mark the test as expected to fail and will be executed.

    test.fail('Testcase 1', async() => {
    console.log('this is testcase 1');
    expect(1).toBe(2);
    }); // pass


  test.fail('Testcase 2', async() => {
    console.log('this is testcase 1');
    expect(1).toBe(1);
    }); // fail
  
