// function to convert money to currency format

export function moneyCurrency (priceCents){

    let price =  (priceCents / 100).toFixed(2);
    // console.log(price);
    return  price;
}