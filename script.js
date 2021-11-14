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


