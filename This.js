// context thisni 4 hil usulda funksiyalarga bog`lash mumkin;

"use strict"
//  1-usul Oddiy funksiyalarda this = window, agarda 'use strict ' = undefined
// function showThis(a, b) {
//     console.log(this);
//     function calc() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(calc());
// }
// showThis(8, 10);

// ------------------------------------------


// 2-usul: Context this objectlarda = object 
// const obj = {
//     a: 8,
//     b: 10,
//     calc: function () {
//         console.log(this.a + this.b);
//     },
// }

// obj.calc();



// -------------------------------------------

// 3-usul Context this constructor va Classlarda = yangi object copy
// function Car(name, color) {
//     this.name = name;
//     this.color = color;
//     this.hi = function () {
//         console.log("hi");
//     };
// }
// const mers = new Car("mers", "black");
// console.log(mers);
// mers.hi();

// -------------------------------------


// 4-usul Context this qo`l yordamida ergashtitirish; call , apply, bind;

// function hello(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const person = {
//     name:'sanjarbek',  
// };

// hello.call(person, 'qobulov');
// hello.apply(person, ['qobulov']);


// function calc(num) {
//     return this * num;
// }

// const double = calc.bind(2);
// console.log(double(30));



// const ob = {
//     name: "sal",
//     id: 'om',
//     date: {
        
//         func() {
//             console.log();
//         }
//     }
// } 

// ob.date.func();;








// function maxNumbers(arr) {
//    if (arr.length === 1)return arr;
//    if(arr.length === 0)return arr;
//    const sorted = arr.sort((a, b) => b - a);
//    return [sorted[0],sorted[1]]
    
// }

// console.log(maxNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// console.log(maxNumbers([11, 2, 6, 7, 20, 19, 20, 3, 4]))
// console.log(maxNumbers([11]));
// console.log(maxNumbers([]));


// const num = Number(true)
// const num1 = Number(false);

// console.log(`${num}${num1}${num1}`);

// const matem = {
//     qoshish(a,b) {
//         return a + b;
//     },
//     ayirish(a,b) {
//         return a - b;
//     },
//     pow(a, b) {
//         return a ** b;
//     },
//     kopaytirish(a, b) {
//         return a * b;
//     },
//     yahlitlash(a) {
//         return parseInt(a);
//     },
//     cout(...args) {
//         let ar = [...args];
//         for (let i = 0; i < ar.length; i++){
//             console.log(ar[i])
//         }
//     }
// };
// const { qoshish, ayirish, pow,kopaytirish,yahlitlash, cout} = matem;    // distrakchi

// console.log(pow(4, 5));
// console.log(yahlitlash(4.56456));
// cout(pow(4, 5))




// const student = {
//     lessons: [],
//     addles(lesson) {
//         this.lessons.push(lesson);
//     },
//     showLes() {
//         return this.lessons;
//     }
// }
// student.addles('Js');
// console.log(student.showLes());



// const symb1 ='b';
// let symb2;

// switch(symb1){
//     case 'a':
//         symb2 = '1';
//     case 'b':
//         symb2 = '2';
//     case 'c':
//         symb2 = '3';
//         break;
//     default:
//         symb2 = '4' 
// }
// console.log(symb2);


let numbers = [1, 2, 4, 6, 4, 20, 5, 3, 2, 2, 4, 5, 1, 7, 8, 5, 9, 1, 1, 1, 1, 10]

// let result = [...new Set(numbers)]
// console.log(result)

// let result = numbers.filter((num, index) => numbers.indexOf(num) !== index)

// console.log(result)

// numbers.forEach((n, index) => {
//     console.log(`${n} => ${index} => ${numbers.indexOf(n)}`)
// })

var a = [['table tennis', 'tennis'], ['football', 'soccer'], ['basketball', 'valleyball']];
console.log(a[1][1]);




let numbers = [ 1,2,4,6,4,20,5,3,2,2,4,5,1,7,8,5,9,1,1,1,1,10]

function tartiblash(arr){
    let output = []
    let ishora;
    for(let i=0; i<arr.length; i++){
        ishora = false;
        for(let j=0; j<arr.length; j++){
            if(arr[i] < output[j]){
                ishora = true;
                output.splice(j,0,arr[i])
                break;
            }
        }
        if(!ishora){
            output.push(arr[i])
        }
    }
    return output;
}
console.log(tartiblash(numbers))