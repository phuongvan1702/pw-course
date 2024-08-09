// Bài 1.	Viết một hàm để tính chỉ số BMI (Body Mass Index) dựa trên chiều cao (mét) và cân nặng (kg) và trả về phân loại BMI (Thiếu cân, Bình thường, Thừa cân, Béo phì).
// Biết:
// ○	Chiều cao được tính theo đơn vị mét (VD: 1.75m)
// ○	Cân nặng tính theo kg
// ○	Công thức tính BMI: cân nặng / (chiều cao*chiều cao)
// ○	BMI < 18.5: thiếu cân
// ○	BMI < 25: Bình thường
// ○	BMI < 30: Thừa cân
// ○	BMI >= 30: Béo phì

// function bodyMassIndex(chieucao, cannang) {

//   const  bmi = cannang/(chieucao*cannang) ;
//       if (bmi < 18.5){
//         console.log ("thiếu cân");
//       }
//     else if (bmi <25){
//         console.log ("Bình thường");
//     }
//     else if (bmi <30){
//         console.log ("Thừa cân");
//     }
//     else{
//         console.log ("Béo phì");
//     }

// }
//  const bmi= bodyMassIndex(1.57,45);

// Bài 2.	Viết một hàm để chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại. Hàm sẽ nhận vào giá trị nhiệt độ và loại nhiệt độ ('C' hoặc 'F') và trả về nhiệt độ đã chuyển đổi.
// Biết công thức chuyển đổi:
// ○	Từ độ C sang độ F: độ F = (độ C) * 9/5 + 32;
// ○	Từ độ F sang độ C: (độ F - 32) * 5 / 9;

// function chuyenDoi(nhietdo,loainhietdo) {

//       const  nhietdochuyendoidoF = nhietdo*9/5+32;
//       const  nhietdochuyendoidoC = (nhietdo-32) *5/9;
//           if (loainhietdo === "C"){
//             return nhietdochuyendoidoF;
//           }
//         else if (loainhietdo === "F"){
//             return nhietdochuyendoidoC;
//         }
//     }
//      const ct= chuyenDoi(15,"F");
//      console.log(ct);

// Bài 3.	Khai báo một mảng các phần tử bất kì. Viết một hàm để tính tổng của các phần tử trong một mảng số.

// let sotunhien=[1,2,3,4,5,6,7,8,9];
// function tinhTong (mang) {
//     let b = 0;
//     for (let i =0; i< sotunhien.length; i++){
//         b = b + sotunhien[i];
        
//     }
//     return b;
// }
// const ketqua=tinhTong(sotunhien)
// console.log(ketqua);

// Bài 4.	Viết một hàm để lọc ra các số nguyên tố từ một mảng số đã cho.
// Biết:
// ○	Số 0, số 1 không phải số nguyên tố.
// ○	Các số nguyên tố là số chỉ chia hết cho 1 và chính nó

// let sotunhien=[1,2,3,4,5,6,7,8,9,10,11];
// function soNguyenTo (mang) {
//     for (let i =0; i< sotunhien.length; i++){
//         let b= sotunhien[i];
//        if (b ==1&& b==b&&b){
//        }
//     }
//     return b;
    
// }
// const ketqua=soNguyenTo(sotunhien);
// console.log(ketqua);

// Bài 5.	Tạo một function để cập nhật email cho người dùng trong một danh sách, dựa trên tên người dùng.
// Đoạn code giả mã (pseudo code) như sau:
// // Khai báo mảng global các object có 2 thuộc tính: name, email
// // Khai báo hàm có 2 tham số: name, newEmail
// // Sử dụng vòng for, duyệt trong mảng, nếu gặp phần tử nào có tên trùng với tham số name, cập nhật giá trị email về newEmail
// let global = [
//    {name: "Phuong", email :"Phuong@gmail.com"},
//    {name: "dung", email :"dung@gmail.com"},
//    {name: "Mit", email :"name1@gmail.com"}];

//    function upDateEmail (name,newEmail){
//     for(let i=0; i<global.length; i++){

//     if ( global[i].name ===name){
//         global[i].email=newEmail;
//         console.log ("Cập nhật email thành công")

//     }
//    }
// }
//    const ct = upDateEmail("Mit","mit@gmail.com");
//    console.log(global);

// Bài 6.	Viết một hàm tính điểm trung bình của các sinh viên dựa trên điểm số lưu trong một mảng các object.


// let diemsinhvien = [
//        {name: "Phuong", score :8},
//        {name: "dung", score :9},
//        {name: "Mit", score :10}];

// function diemTrungBinh (a) {
//     let b = 0;
//     for (let i =0; i< diemsinhvien.length; i++){
//         b = b + diemsinhvien[i].score;  
//     }
//     return b/diemsinhvien.length;
// }
//  const ketqua=diemTrungBinh(diemsinhvien)
//  console.log(ketqua);


// bai 7.	Viết một hàm để kiểm tra xem tất cả sản phẩm trong một mảng có giá lớn hơn 0 không.
// Biết giỏ hàng là một mảng chứa các object sản phẩm. Sản phẩm có cấu trúc: {“name”: “product 1”, price: 100 }

// let sanpham = [
//            {name: "bút", score :8000},
//            {name: "sách", score :9000},
//            {name: "bút chì", score :0},
//            {name: "vở", score :10000}];
    
//     function kiemtra (a) {
//         for (let i =0; i< sanpham.length; i++){
//             if (sanpham[i].score>0){
//             console.log(sanpham[i].score);  
//             }
//         }
//     }
//      const ketqua=kiemtra(sanpham)
    
    //  Bài 8.	Viết hàm có một tham số là giờ, in ra cửa hàng còn mở cửa hay không. Biết cửa hàng mở cửa từ 9 giờ sáng đến 9 giờ tối.
    // function kiemtragiomocua(gio) {
    //        if (gio >= 9 && gio <=21){
    //             console.log ("mở cửa");
    //         }
    //         else{
    //             console.log ("đóng cửa");
    //         }
        
    //     }
    //      const gio = kiemtragiomocua(9);

// Bài 9.	Viết hàm có tham số là tuổi, in ra mức giá vé vào cổng tùy theo độ tuổi: trẻ em dưới 5 tuổi miễn phí, người lớn từ 18 tuổi trở lên là 100k, và trẻ em từ 6 đến 17 tuổi là 50k.

// function kiemtragiave(tuoi) {
//     if (tuoi < 5 ){
//         console.log ("miễn phí");
//     }
//     else if (tuoi >= 6 && tuoi <=17){
//          console.log ("50");
//      }
//      else{
//          console.log ("100k");
//      }
 
//  }
//   const tuoi = kiemtragiave(23);

// Bai 10.	Viết hàm in ra tên tháng dựa vào số tháng được nhập vào. Sử dụng câu lệnh switch...case để xử lý.

// function tenThang(thang) {

//     switch (thang) {
//         case 1:
//             console.log("Tháng 1");
//             break;
//         case 2:
//             console.log("Tháng 2");
//             break;
//         case 3:
//             console.log("Tháng 3");
//             break;
//         case 4:
//             console.log("Tháng 4");
//             break;
//         case 5:
//             console.log("Tháng 5");
//             break;
//         case 6:
//             console.log("Tháng 6");
//             break;
//         case 7:
//             console.log("Tháng 7");
//             break;
//         case 8:
//             console.log("Tháng 8");
//             break;
//         case 9:
//             console.log("Tháng 9");
//             break;
//         case 10:
//             console.log("Tháng 10");
//             break;
//         case 11:
//             console.log("Tháng 11");
//             break;
//         case 12:
//             console.log("Tháng 1");
//             break;
//         default:
//             console.log("Tháng không hợp lệ");
//             break;
//     }
//     const st = tenThang(3)
//     console.log(st);
// }
