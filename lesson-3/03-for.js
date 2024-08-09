// Bài 1
// let tong = 0;
// for (let i =1; i<=100; i++){
//     tong = tong +i          
// }
// console.log(tong);

// Bài 3.	Tạo một mảng chứa các số lẻ từ 1 đến 99.

// let soLe = [];
// for (let i = 1; i < 100; i += 2) {
//     soLe.push(i); 

// }
// console.log(soLe);

// Bài 5.	Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
// {“month”: 2, “total”: 100}

let doanhThu = [
    { "month": 1, "total": 100 },
    { "month": 2, "total": 200 },
    { "month": 3, "total": 150 },
    { "month": 4, "total": 120 },
    { "month": 5, "total": 180 },
    { "month": 6, "total": 250 },
    { "month": 7, "total": 300 },
    { "month": 8, "total": 220 },
    { "month": 9, "total": 130 },
    { "month": 10, "total": 170 },
    { "month": 11, "total": 140 },
    { "month": 12, "total": 190 }
];

let tongDoanhThu = 0;
for (let i = 0; i < doanhThu.length; i++) {
    tongDoanhThu = tongDoanhThu + doanhThu[i].total;
}

console.log({ tongDoanhThu });

