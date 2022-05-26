
const salaries = colombia.map(({salary}) => (salary));

const totalSalaries = salaries.reduce(
    function (sum=0, value) {
        return sum+value;
    }
)

const mean = totalSalaries/salaries.length;

const orderSalaries = salaries.sort((a, b) => a-b);

// General Median Formula
function calculateMedian(orderSalaries) {

    const medium = orderSalaries.length/2;
    let median;

    function isPar(number) {
        return (number % 2 === 0);
    }

    if(isPar(orderSalaries.length)) {
        let elementOne = orderSalaries[parseInt(medium) - 1];
        let elementTwo = orderSalaries[parseInt(medium)];

        median = (elementOne + elementTwo)/2;
    } else {
        median = orderSalaries[parseInt(medium)];
    }
    return median;
}

// Top10 Median Formula (splice modified the origin array if you dont want to modify the original array use slice)

function calculateMedianTop10 (orderSalaries) {
    const condTop10 = (orderSalaries.length*0.9) - Math.floor(orderSalaries.length*0.9);
    
    // if(condTop10 > 0.5) {
    //     const salariesTop10 = orderSalaries.splice(Math.ceil(orderSalaries.length*0.9), Math.floor(orderSalaries.length*0.1));
    
    //     medianTop10 = calculateMedian(salariesTop10);

    //     return medianTop10;
    // } else {
    //     const salariesTop10 = orderSalaries.splice(Math.floor(orderSalaries.length*0.9), Math.ceil(orderSalaries.length*0.1));
    
    //     medianTop10 = calculateMedian(salariesTop10);

    //     return medianTop10;
    // }

    // Slice Method

    if(condTop10 > 0.5) {
        const salariesTop10 = orderSalaries.slice(-Math.floor(orderSalaries.length*0.1));

        medianTop10 = calculateMedian(salariesTop10);

        return medianTop10;
    } else {
        const salariesTop10 = orderSalaries.slice(-Math.ceil(orderSalaries.length*0.1));

        medianTop10 = calculateMedian(salariesTop10);

        return medianTop10;
    }
}

