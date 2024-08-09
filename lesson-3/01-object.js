// //Bài 1:
// let car = {
//     namake : "Toyota",
//     model: "Corolla",
//     year:  "2021",
// }
// console.log("năm sản xuất của xe là:" + car.year);

//const { Console } = require("console");

//Bài 2: 
// let person = {
//     name : "Phương",
//     address : {
//         street: "La Thành",
//         city : "Ha Noi",
//         country: "Việt Nam"

//     },
// }
// console.log("Tên đường là :"+person.address.street);

//Bài 3:Biết object student bao gồm 2 thuộc tính: name và grades. Trong đó grades là một object với 2 thuộc tính kiểu number: math và english

// let student = {
//     name: "Phương",
//     "grades": {
//         "math": 8,
//         "english": 7
//     },
// }
// console.log("điểm môn toán là :" + student["grades"]["math"]);

//Bài 4: Tạo một object product với các thuộc tính là tên các sản phẩm và giá trị là giá của chúng. Dùng vòng lặp for...in để in ra tên và giá của mỗi sản phẩm.

let product = {
    "name": ["sách", "vở", "bút", "thước kẻ", "tẩy"],
    "price": [25000, 5000, 15000, 7000, 3000]
}
for (let i =0 ; i < product.length; i++)
{
    console.log( i + " Có giá là : " + product[i]);
}


// Bài 5: Tạo một object settings để quản lý cài đặt của ứng dụng với các thuộc tính như volume, brightness. Thay đổi volume và in ra object mới.

// let settings = {
//     volume: 500,
//     brightness: 50
// }
// settings.volume = 80;
// console.log(settings);

//Bài 6: 

// let bike = {
//     namake : "Vinbike",
//     model: "F23"
// };
// bike.color = "Red";
// console.log(bike);
//Bài 7: Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi object này

// let employee = {
//     name: "Phương",
//     age: "35"
// };
// delete employee.age;
// console.log(employee);

//Bài 8:

// let school = {
//     "classA": ["An", "Bình", "Châu"],
//     "classB": ["Đào", "Hương", "Giang"]
// }
// for (let i =0 ; i < school.length; i++)
// {
//     console.log(school[[i]]);
// }
