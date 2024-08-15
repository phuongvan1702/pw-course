// // Bài 1: 
// let chuoi = "Playwright";
// for (let kyTu of chuoi) {
//     console.log(kyTu);
// }

// // Bài 2:

// function findLastInDexAndFirstInDeX(arr, value) {
//     let lastInDex = 0;
//     let firstInDex = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             firstInDex = i;
//             break;
//         }
//     }
//     for (let i = arr.length; i >= 0; i--) {
//         if (arr[i] === value) {
//             lastInDex = i;
//             break;
//         }
//     }
//     console.log(`Index vi tri dau tien là ${firstInDex}`);
//     console.log(`Index vi tri cuối cùng là ${lastInDex}`);
// }
// const arr = [1, 2, 3, 4, 3, 55, 23];
// let value = 3;
// findLastInDexAndFirstInDeX(arr, value);

// // Bài 3:
// let chuoi = "Playwright";
// let mangNghichDao = [];
// for (let i = chuoi.length - 1; i >= 0; i--) {
//     mangNghichDao.push(chuoi[i]);
// }
// console.log(mangNghichDao);

// // Bài 4.	Lọc ra tất cả các phần tử duy nhất trong một mảng. Ví dụ với mảng [1, 2, 3, 1, 2, 4,5] thì các phần tử duy nhất (xuất hiện 1 lần) là: [3, 5]

function timPhanTuDuyNhat(arr) {
    let newArr = []

    for (let i of arr) {
        let count = 0;

        for (let j of arr) {

            if (i === j) {
                count = count + 1;
            }
        }

        if (count === 1) {
            newArr.push(i);
        }
    }
    console.log(newArr);
}
let arr = [1, 2, 3, 1, 2, 4, 5];
timPhanTuDuyNhat(arr);
