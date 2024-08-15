import{expect, test} from '@playwright/test';

test ('verify form Personal notes', async ({page}) => {

    await test.step ('Truy cập trang web' , async () => {
        await page.goto('https://material.playwrightvn.com/')
    });
    await test.step ('add notes' , async () => {
        await page.getByRole('link', { name: 'Bài học 4: Personal notes' }).click();
    });
    await test.step ('Thêm mới' , async () => {

            // let newspaper = [];
            // for (let i; i <=3; i++){
            // const title = page.locator(`//a[@data-medium='Item-${i}']`);
            // const content = page.locator(`//a[@data-medium='Item-${i}']`);

            // newspaper.push(page.locator(`//a[@data-medium='Item-${i}']`));
            // }
        
        let newspaper = [
            {title:"Ukraine lập chính quyền quân sự trên lãnh thổ Nga",content:"Tư lệnh Syrsky thông báo quân đội Ukraine đã thiết lập chính quyền quân sự tại vùng lực lượng này kiểm soát ở tỉnh Kursk của Nga."},
            {title:"Cựu bí thư Bắc Ninh Nguyễn Nhân Chiến bị truy tố 'nhận hối lộ' 14 tỷ đồng",content:"Ông Nguyễn Nhân Chiến, cựu bí thư Tỉnh ủy Bắc Ninh, nhận hối lộ 13 tỷ đồng từ bà Nguyễn Thị Thanh Nhàn trong 7 năm và một tỷ đồng từ cán bộ khác, cơ quan điều tra cáo buộc."},
            {title:"Hà Nội có món ăn nào được công nhận là di sản quốc gia?",content:"Từ những gánh hàng rong phục vụ dân lao động, món ăn này dần trở nên phổ biến, trở thành niềm tự hào của ẩm thực Việt."},
            ];

        const title = page.locator("//input[@id='note-title']");
        const content = page.locator("//textarea[@id='note-content']");
        const AddNote = page.locator("//button[@id='add-note']");

        for (let i = 0; i < newspaper.length; i++){
            await title.fill (newspaper[i].title);
            await content.fill (newspaper[i].content);
            await AddNote.click ();
        }
    });
});