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
