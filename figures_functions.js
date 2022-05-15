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
    
    const resultPerimeter = document.getElementById("resultSquare");
    resultPerimeter.innerHTML = "The square perimeter with length of "+value+" for each side is "+perimeter+" cm";
}

function calculateSquareArea() {
    const input = document.getElementById("inputSquare");
    value = input.value;

    const area = areaSquare(value);
    
    const resultArea = document.getElementById("resultSquare");
    resultArea.innerHTML = "The square area with length of "+value+" for each side is "+area+" cm<sup>2</sup>";
}

function calculateTrianglePerimeter() {
    const inputA = document.getElementById("inputSideA");
    valueA = Number(inputA.value);
    const inputB = document.getElementById("inputSideB");
    valueB = Number(inputB.value);
    const inputC = document.getElementById("inputBase");
    valueC = Number(inputC.value);

    if(valueA > 0 && valueB > 0 && valueC > 0) {
        const perimeter = perimeterTriangle(valueA, valueB, valueC);
    
        const resultPerimeter = document.getElementById("resultTriangle");
        resultPerimeter.innerHTML = "The triangle perimeter is "+perimeter+" cm";
    }
    else {
        const resultPerimeter = document.getElementById("resultTriangle");
        resultPerimeter.innerHTML = "Please, write a correct number in the fields";
    }
    
}

function calculateTriangleArea() {
    const inputA = document.getElementById("inputSideA");
    valueA = Number(inputA.value);
    const inputB = document.getElementById("inputSideB");
    valueB = Number(inputB.value);
    const inputC = document.getElementById("inputBase");
    valueC = Number(inputC.value);

    if(valueA > 0 && valueB > 0 && valueC > 0) {
        const area = areaTriangle(valueA, valueB, valueC);

        const resultArea = document.getElementById("resultTriangle");
        resultArea.innerHTML = "The triangle area is "+area+" cm<sup>2</sup>";
    }
    else {
        const resultPerimeter = document.getElementById("resultTriangle");
        resultPerimeter.innerHTML = "Please, write a correct number in the fields";
    }
}

function calculateCircleDiameter() {
    const input = document.getElementById("inputCircle");
    value = input.value;

    const diameter = diameterCircle(value);
    
    const resultDiameter = document.getElementById("resultCircle");
    resultDiameter.innerHTML = "The circle diameter is "+diameter+" cm";
}

function calculateGirth() {
    const input = document.getElementById("inputCircle");
    value = input.value;

    const girthEnd = girth(value);
    
    const resultGirth = document.getElementById("resultCircle");
    resultGirth.innerHTML = "The girth value is "+girthEnd+" cm";
}

function calculateCircleArea() {
    const input = document.getElementById("inputCircle");
    value = input.value;

    const area = areaCircle(value);
    
    const resultArea = document.getElementById("resultCircle");
    resultArea.innerHTML = "The circle area is "+area+" cm<sup>2</sup>";
}