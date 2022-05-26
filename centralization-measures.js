//MEAN

function calculateMean(listMean) {
    // let sumList = 0;

    // for(let i=0; i < listMean.length; i++) {
    // sumList = sumList + listMean[i];
    // } Using 'for' to navigator into the array

    const sumList = listMean.reduce( // the method reduce is using to calculate sums (subtraction, multiplication) directly in the array function
        (accruedValue, newElement) => Number(accruedValue) + Number(newElement), 0        
    )

    const mean = Number((sumList / listMean.length).toFixed(4));

    return mean;
}

//MEDIAN

function calculateMedian(listMedian) {

    listMedian.sort((a, b) => a -b); //ordering an array
    const medium = listMedian.length / 2;
    let median;

    function isPar(number) {
        if(number % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    if(isPar(listMedian.length)) {
        let elementOne = listMedian[parseInt(medium) - 1];
        let elementTwo = listMedian[parseInt(medium)];

        // median = Number(((elementOne + elementTwo)/2).toFixed(4)); is one option

        median = calculateMean([elementOne, elementTwo]);//Using the previous mean formula

    } else {
        median = listMedian[parseInt(medium)];
    }
    return median;
}

//MODE

function calculateMode(listModeStart) {

    const listModeEnd = {};

    // create the object through the initial array, count times that repeat any number
    listModeStart.map(
        function (element) {
            if(listModeEnd[element]) {
                listModeEnd[element] += 1;
            } else {
                listModeEnd[element] = 1;
            }
        }
    )

    // the method Object.entries() allows that a object is transformed to array (contain another inner array)
    const arrayModeEnd = Object.entries(listModeEnd).sort(
        function (elementA, elementB) {
            return elementA[1] - elementB[1]; // function to compare two elements of array, is similar to sort((a, b) => a - b) ascending, descending is sort((a, b) => b - a)
        }
    );

    return mode = arrayModeEnd[arrayModeEnd.length-1][0];
}

//Interactive with HTML

const numbersArray = [];
function getNumbersArray() {
    numbersUser = document.getElementById('numbersArray').value;
    if(numbersUser === '') {
        alert("the space isnt a number");
    } else {
        return numbersArray.push(numbersUser);
    }
}

function showDates() {
    stringArray = numbersArray.join(', ');//Using join to cocatenear the elements of array into a string
    const dates = document.getElementById('dates');
    return dates.innerHTML = stringArray;
}

function showMean() {
    const resultMean = document.getElementById('resultMean');
    return resultMean.innerHTML = calculateMean(numbersArray);
}

function showMedian() {
    const resultMedian = document.getElementById('resultMedian');
    return resultMedian.innerHTML = calculateMedian(numbersArray);
}

function showMode() {
    const resultMode = document.getElementById('resultMode');
    return resultMode.innerHTML = calculateMode(numbersArray);
}
//BONUS WEIGHTED MEAN

const notes = [
    {note: 4.8, credit: 3},
    {note: 5.0, credit: 2},
    {note: 3.6, credit: 1},
    {note: 4.1, credit: 2},
    {note: 3.9, credit: 3}
]

const notesWithCredits = notes.map(
    function (noteElement) {
        return noteElement.note*noteElement.credit;
    }
);

const sumNotesWithCredits = notesWithCredits.reduce(
    function (sum=0, newValue) {
        return sum + newValue;
    }
)

const allCredits = notes.map(
    function (credits) {
        return credits.credit;
    }
)

const sumCredits = allCredits.reduce(
    function (sum=0, newValue) {
        return sum + newValue;
    }
)

const weightedMean = sumNotesWithCredits/sumCredits;