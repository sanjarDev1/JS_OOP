// Factory funksiyalar
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('doira');
        }
    };
}

const circle1 = createCircle(2);
// console.log(circle1);

const circle2 = createCircle(3);
// console.log(circle2);
console.log(circle1.constructor);



//  constructor function

//  BuPascalCase
//  buCamelCase

function Circle(radius) {
    this.raduis = radius;
    this.draw = function () {
        console.log('doira');
    }
}

const circle = new Circle(1);
circle.color = 'green';
circle.move = function () {

}
delete circle.color;
console.log(circle.constructor);

