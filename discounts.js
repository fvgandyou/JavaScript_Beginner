function calculatePriceWithDiscount(originalPrice, discount) {
    const priceWithDiscount = (originalPrice * (100 - discount))/100;
    return priceWithDiscount
}

function activePriceDiscount() {
    const originalPriceUser = document.getElementById('inputPrice').value;
    const originalDiscountUser = document.getElementById('inputDiscount').value;

    const finalPrice = calculatePriceWithDiscount(originalPriceUser,originalDiscountUser);

    const resultPrice = document.getElementById('finalPrice');
    resultPrice.innerHTML = "The product price with discount is: $"+finalPrice;
}

// const originalPrice = 100;
// const discount = 15;

// console.log({
//     originalPrice,
//     discount,
//     priceWithDiscount
// }); tool to call a object in console.log
