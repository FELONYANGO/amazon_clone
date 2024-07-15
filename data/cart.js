export let cart = [
    // {
    //     productId :"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    //     quantity: 1
    // },
    // {
    //     productId :"15b6fc6f-327a-4ec4-896f-486349e85a3d",
    //     quantity: 3
    // },
    // {
    //     productId :"83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    //     quantity: 2
    // },
    
    // {
    //     productId :"54e0eccd-8f36-462b-b68a-8182611d9add",
    //     quantity: 2
    // }
    
];


// function to delet product from the cart 
export function deleteProduct(productId) {
  //create new array
  let newCart = [];
//   loop through an exizting cart
    cart.forEach((cartItem)=>{
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    }
    );

    cart = newCart;
   
}   

