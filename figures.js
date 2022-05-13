//Square Code

console.group("Squares")
const squareSide = 5;

console.log("The sides of square measure: "+squareSide+" cm");

const perimeterSquare = squareSide * 4;
console.log("The perimeter of square measure: "+perimeterSquare+" cm");

const areaSquare = squareSide * squareSide;
console.log("The area of square is: "+areaSquare+" cm2");
console.groupEnd()

// Triangle Code

console.group("Triangles")
const triangleSideA = 5;
const triangleSideB = 4;
const triangleSideC = 5;

console.log("The base side of triangle measure: "+triangleSideB+" cm");

const perimeterTriangle = triangleSideA + triangleSideB + triangleSideC;
console.log("The perimeter of triangle measure: "+perimeterTriangle+" cm");

const areaTriangle = (Math.sqrt((triangleSideA*triangleSideA)-((triangleSideB/2)*(triangleSideB/2)))*triangleSideB/2).toFixed(3);

console.log("The area of triangle is: "+areaTriangle+" cm2");
console.groupEnd()

// Circle Code

console.group("Circles")
const radio = 4;
const diameter = radio * 2;
const pi = Math.PI;
const girth = (diameter * pi).toFixed(3);
const areaCircle = ((radio*radio)*pi).toFixed(3);

console.log("The radio of circle measure: "+radio+" cm");

console.log("The diameter of circle measure: "+diameter+" cm");

console.log("The girth of circle measure: "+girth+" cm");

console.log("The area of circle is: "+areaCircle+" cm2");

console.groupEnd()