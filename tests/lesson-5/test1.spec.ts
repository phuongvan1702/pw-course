import{expect, test} from '@playwright/test';

test ('verify form đăng nhập', async ({page}) => {

    await test.step ('Truy cập trang web' , async () => {
        await page.goto('https://material.playwrightvn.com/')
    });
    await test.step ('Mở form đăng ký' , async () => {
        await page.getByRole('link', { name: 'Bài học 1: Register Page' }).click();
    });

    await test.step ('Điền user name' , async () => {
        await page.locator("//input[@id='username']").fill('vanphuong1712');

    });

    await test.step ('Điền email' , async () => {
        await page.locator("//input[@id='email']").pressSequentially('vanphuong1712@gmail.com', {
            delay: 100,
          });
          ;

    });

    await test.step ('Chọn gender' , async () => {
        await page.locator("//input[@id='male']").click();

    });

    await test.step ('Chọn Hobbies' , async () => {
        await page.locator("//input[@id='traveling']").check();
    });

    await test.step ('Chọn Country' , async () => {
        await page.selectOption("//select[@id='country']",'Canada');
    });
    await test.step ('Chọn ngày sinh' , async () => {
        await page.locator("//input[@type='date']").fill('2023-04-15');
    });

    // await test.step ('import profile' , async () => {
    //     await page.setInputFiles("//input[@type='file']", 'test/lesson-2/ex1.js');
    // });
    await test.step ('nhập mô tả' , async () => {
        await page.locator("//textarea[@id='bio']").fill('vanphuong1712');
    });
    await test.step ('Chọn gender' , async () => {
        await page.locator("//button[@type='submit']").click();

    });

});