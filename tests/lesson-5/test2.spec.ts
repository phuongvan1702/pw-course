import{expect, test} from '@playwright/test';

test ('verify Thêm vào giỏ hàng', async ({page}) => {

    await test.step ('Truy cập trang web' , async () => {
        await page.goto('https://material.playwrightvn.com/')
    });
    await test.step ('Chọn sản phẩm' , async () => {
        await page.getByRole('link', { name: 'Bài học 2: Product page' }).click();
    });
    await test.step ('Chọn sản phẩm' , async () => {
        await page.locator("//button[@data-product-id='1']").click();
        await page.locator("//button[@data-product-id='1']").click();
        await page.locator("//button[@data-product-id='2']").click();
        await page.locator("//button[@data-product-id='2']").click();
        await page.locator("//button[@data-product-id='2']").click();
        await page.locator("//button[@data-product-id='3']").click();

    });
});