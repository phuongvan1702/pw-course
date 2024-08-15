
// Bài 1. Sử dụng vòng lặp for...each để in ra từng phần tử của mảng

// let arr = [1, 2, 3];
// arr.forEach((giaTri) => {
//     console.log(giaTri);
// }
// )

// Bài 2.	Tính tổng, tìm giá trị lớn nhất và nhỏ nhất trong một mảng. Ví dụ mảng [1, 2, 3] thì tổng sẽ là 6 (1+2+3) và giá trị lớn nhất là 3

// let mang = [1, 2, 3];
// let tong = 0;
// let min = mang[0];
// let max = mang[0];
// mang.forEach(giaTri => {
//     tong = tong + giaTri;
//     if (giaTri > max) {
//         max = giaTri;
//     }
//     if (giaTri < min) {
//         nin = giaTri;
//     }
// }
// )
// console.log(tong);
// console.log(min);
// console.log(max);
//Bài 3.	Tạo một mảng mới từ một mảng đã cho, trong đó mỗi phần tử được nhân đôi. Ví dụ mảng [1, 2, 3] thì mảng mới sẽ là [2, 4, 6]

// let mang = [1, 2, 3];
// let mangx2 = [];

// mang.forEach((giatri) => {

//     mangx2.push(giatri * 2)
// }
// )
// console.log(mangx2);