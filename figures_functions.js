//Square Code

function perimeterSquare(squareSide) {
    return squareSide * 4;
}

perimeterSquare();

function areaSquare(squareSide) {
    return squareSide * squareSide;
}

areaSquare();

// Triangle Code

function perimeterTriangle(sideA, sideB, base) {
    return sideA + sideB + base;
}

perimeterTriangle();

function areaTriangle(sideA, sideB, base) {

    semiPerimeter = perimeterTriangle(sideA, sideB, base)/2;

    heightTriangle = (2*Math.sqrt(semiPerimeter*((semiPerimeter-sideA)*(semiPerimeter-sideB)*(semiPerimeter-base)))/base).toFixed(3);

    return heightTriangle * base / 2;

}

areaTriangle();

// Circle Code

var pi = Math.PI;

function diameterCircle(radio) {
    return radio * 2;
}

diameterCircle();

function girth(radio) {
    diameter = diameterCircle(radio);
    return (diameter * pi).toFixed(3);
}

girth();

function areaCircle(radio) {
    return ((radio*radio)*pi).toFixed(3);
}

areaCircle();

// Conecting with HTML

function calculateSquarePerimeter() {
    const input = document.getElementById("inputSquare");
    value = input.value;

    const perimeter = perimeterSquare(value);
    alert(perimeter);
}

function calculateSquareArea() {
    const input = document.getElementById("inputSquare");
    value = input.value;

    const area = areaSquare(value);
    alert(area);
}

function calculateTrianglePerimeter() {
    const inputA = document.getElementById("inputSideA");
    valueA = Number(inputA.value);
    const inputB = document.getElementById("inputSideB");
    valueB = Number(inputB.value);
    const inputC = document.getElementById("inputBase");
    valueC = Number(inputC.value);

    const perimeter = perimeterTriangle(valueA, valueB, valueC);
    alert(perimeter);
}

function calculateTriangleArea() {
    const inputA = document.getElementById("inputSideA");
    valueA = Number(inputA.value);
    const inputB = document.getElementById("inputSideB");
    valueB = Number(inputB.value);
    const inputC = document.getElementById("inputBase");
    valueC = Number(inputC.value);

    const area = areaTriangle(valueA, valueB, valueC);
    alert(area);
}

function calculateCircleDiameter() {
    const input = document.getElementById("inputCircle");
    value = input.value;

    const diameter = diameterCircle(value);
    alert(diameter);
}

function calculateGirth() {
    const input = document.getElementById("inputCircle");
    value = input.value;

    const girthEnd = girth(value);
    alert(girthEnd);
}

function calculateCircleArea() {
    const input = document.getElementById("inputCircle");
    value = input.value;

    const area = areaCircle(value);
    alert(area);
}