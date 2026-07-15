import {test, expect} from '@playwright/test';

//skip testcases using fixme annotation. This will mark the test as expected to fail and will not be executed.


    test.fixme('Testcase 1', async() => {
    console.log('this is testcase 1');
    expect(1).toBe(1);
    });




    