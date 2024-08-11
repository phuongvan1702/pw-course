// Bài 1.	In ra tên và giá trị của mỗi thuộc tính trong một đối tượng. Ví dụ: object student = {“name”: “Alex”, “age”: 10} thì in ra
// name=Alex
// age=10
// let student = {
//     name: "Alex",
//     age: 10
// };
// for (let i in student) {
//     if(student[i]){
//     console.log(`${i} = ${student[i]}`);
//     }
// }

// // Bài 2.	Tính tổng các giá trị số của các thuộc tính trong một đối tượng. Ví dụ: object student={“name”: “Alex”, “age”: 10, “salary”: 20} thì in ra tổng
// // 30 (=10+20).


// let student = {
//         name: "Alex",
//         age: 10,
//         salary : 20
// }
// let tong = 0;
//     for (let i in student) {
//         if (typeof student[i] === "number") {
//             tong = tong + student[i]; 
//         }
//     }
//     console.log(tong);

// // Bài 3:

// let student = {
//     name: "Alex",
//     age: 10
// };

// let tenThuocTinh = [];

// for (let i in student) {
    
//         tenThuocTinh.push(i);   
// }
// console.log(tenThuocTinh); 