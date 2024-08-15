//Bài 1:

let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K8";
let crew = ["Phuong", "Tu", "Nam", "Hanh", "Ruby", "Trinh"];
function launchShip(crew) {

    console.log(`Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`);
}
launchShip(crew);

//Bài 2: 
function calculateDistance(speed, time) {
    let Distance = speed * time;
    console.log(`Khoảng cách từ trái đất đến hành tinh bí ẩn là : ${Distance} km`);
}
calculateDistance(1000, 24);

// Bài 3:
function convertTimeToHex(time) {
    let timeToHex = time.toString(16);
    console.log(`Thời gian trên hành tinh bí ẩn hiện tại là : ${timeToHex}`);
}
convertTimeToHex(120);

// Bài 4:

function decryptCode(inputCode) {
    let resultCode = '';

    for (let i of inputCode) {

        if (i === i.toUpperCase()) {
            resultCode = resultCode + i.toLowerCase();
        }
        else {
            resultCode = resultCode + i.toUpperCase();
        }
    }
    return resultCode;
}

let inputCode = "K8 Challenge";
let resultCode = decryptCode(inputCode);
console.log(`Mật mã là : ${resultCode}`);

// Bài 5:
function returnToEarth() {
    console.log(`Chuẩn bị trở về ${departurePlanet}!`);
}
returnToEarth();