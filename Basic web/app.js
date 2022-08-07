
// console.log("Marien Online");
// const height = 200;
// var Nickname = "MaMa";
// const ismale = false;
// let money = null;
// const bigNumber = 10n
// console.log(height , Nickname , ismale , money , bigNumber);
// // ------------------ object------------//
// const person ={
//     name : "Tus" ,
//     age : 1000 ,
//     city : "Bangkok" ,
//     height : 184 ,
// }
// console.log(person);
// console.log(person.me);

// person.name = "Thararat"
// console.log(Person.name);
// Person.weight = 70

// console.log(Person);

// const animals = ["Fish","Cat","Dog"]

// console.log(animals); 

// animal.push("Tiger") //เพิ่มคำหลังสุด

// console.log(animals);

// animals.pop() //ลบคำหลังสุด

// console.log(animals);

// animals.unshift("tiger"); //เพิ่มคำหน้าสุด

// console.log(animals);

// animal.shift(); // ลบคำหน้าสุด

// console.log(animals);
// let x = 1 + 2 ** 2

// const inp = prompt("Type Ur Result")

// document.getElementById("result").innerText = inp;

function show() {
    const int_value = Number(document.getElementById('inp').value);
    if (int_value >= 80) {
        document.getElementById("result").innerText = "Grade 4 Very Good";
    }
    else if (int_value >= 70) {
        document.getElementById("result").innerText = "Grade 3 Good";
    }
    else if (int_value >= 60) {
        document.getElementById("result").innerText = "Grade 2 Nice";
    }
    else if (int_value >= 50) {
        document.getElementById("result").innerText = "Grade 1 Nice Try";
    }
    else if (int_value >= 40) {
        document.getElementById("result").innerText = "ไม่ผ่านน้าา พยายามเข้า";
    }
    else if (int_value < 40) {
        document.getElementById("result").innerText = "ไม่ผ่านน้าาพยายามเข้า";
    }
    else 
        document.getElementById("result").innerText = "ไม่มีคำตอบให้เว้ยยย";
}