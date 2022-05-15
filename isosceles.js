var sideA;
var sideB;
var base;

function isoscelesHeight(sideA, sideB, base) {
    if(sideB == sideA && sideA != base) {
        const height = Math.sqrt((sideA*sideA)-((base/2)*(base/2))).toFixed(2);
        console.log("The height of isosceles triangle is: "+height+" cm");
    }
    else if(sideA == sideB && sideB == base) {
        console.log("The triangle isn't isosceles, is equilateral")
    }
    else {
        console.log("The triangle isn't isosceles, maybe it could be a rectangle or a scalene triangle");
    }
}

isoscelesHeight(sideA, sideB, base);