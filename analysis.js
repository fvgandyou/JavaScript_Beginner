const salaries = colombia.map(
    function (person) {
        return person.salary;
    }
)

const totalSalaries = salaries.reduce(
    function (sum=0, value) {
        return sum+value;
    }
)

const mean = totalSalaries/salaries.length;

const orderSalaries = salaries.sort((a, b) => a-b);

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