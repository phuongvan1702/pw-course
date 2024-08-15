import{expect, test} from '@playwright/test';

test ('verify form add list todo', async ({page}) => {

    await test.step ('Truy cập trang web' , async () => {
        await page.goto('https://material.playwrightvn.com/')
    });
    await test.step ('add list todo' , async () => {
        await page.getByRole('link', { name: 'Bài học 3: Todo page' }).click();
    });
    await test.step ('Add Task' , async () => {
        const task = page.locator("//input[@id='new-task']");
        const addTask = page.locator("//button[@id='add-task']");

        for (let i =1; i <=100; i++){
            await task.fill (`task${i}`);
            await addTask.click ();
        }


    });
});