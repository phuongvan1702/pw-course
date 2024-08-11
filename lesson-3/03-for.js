// // Bài 1
// let tong = 0;
// for (let i = 1; i <= 100; i++) {
//     tong = tong + i
// }
// console.log(tong);

// //Bài 2: In bảng cửu chương từ 2 đến 9.

// for (let i = 1; i < 10; i++) {
//     console.log("Bảng cửu chương " + i)
//     for (let j = 1; j <= 10; j++)
//         console.log(i + " * " + j + " = " + i * j);
// }

// // Bài 3.	Tạo một mảng chứa các số lẻ từ 1 đến 99.

// let soLe = [];
// for (let i = 1; i < 100; i += 2) {
//     soLe.push(i);

// }
// console.log(soLe);

// //Bài 4.	In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ: user-1@example.com, user2@example.com, ..., user10@example.com).

// for (let i = 1; i <= 10; i++) {
//     console.log(`user${i} có email là user${i}@gmail.com`);
// }

// // Bài 5.	Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
// // {“month”: 2, “total”: 100}

// let doanhThu = [
//     { "month": 1, "total": 100 },
//     { "month": 2, "total": 200 },
//     { "month": 3, "total": 150 },
//     { "month": 4, "total": 120 },
//     { "month": 5, "total": 180 },
//     { "month": 6, "total": 250 },
//     { "month": 7, "total": 300 },
//     { "month": 8, "total": 220 },
//     { "month": 9, "total": 130 },
//     { "month": 10, "total": 170 },
//     { "month": 11, "total": 140 },
//     { "month": 12, "total": 190 }
// ];

// let tongDoanhThu = 0;
// for (let i = 0; i < doanhThu.length; i++) {
//     tongDoanhThu = tongDoanhThu + doanhThu[i].total;
// }
// console.log(`Tong Doanh Thu: ${tongDoanhThu}`);

