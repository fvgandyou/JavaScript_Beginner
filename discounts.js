const coupons = [
    {name: "ISYOURTIME", discount: 15},
    {name: "SOMETHINGSPECIAL", discount: 20},
    {name: "YOUAREPREFERENTIAL", discount: 30}
]

function calculatePriceWithDiscount(originalPrice, discount) {
    const priceWithDiscount = (originalPrice * (100 - discount))/100;
    return priceWithDiscount
}

function activePriceDiscount() {
    const originalPriceUser = document.getElementById('inputPrice').value;
    const couponValue = document.getElementById('inputCoupon').value;

// Using objects to determinate the final price of products when is applied a coupons

    const couponValueValidated = function (coupon) {
        return coupon.name === couponValue;
    };

    const userCoupon = coupons.find(couponValueValidated);

    if(!userCoupon) {
        alert("The coupon "+couponValue+" isn't valid")
    }
    else {
        const discount = userCoupon.discount;
        const finalPrice = calculatePriceWithDiscount(originalPriceUser, discount);

        const resultPrice = document.getElementById('finalPrice');
        resultPrice.innerHTML = "The product price with discount is: $"+finalPrice;
    }
}

// const originalPrice = 100;
// const discount = 15;

// console.log({
//     originalPrice,
//     discount,
//     priceWithDiscount
// }); tool to call a object in console.log
