// function to convert money to currency format

export function moneyCurrency (priceCentss){
    
        // throw new Error("the code does not give the right value");
    let price =  (priceCentss / 100).toFixed(2);
    // console.log(price);
    return  price;

}