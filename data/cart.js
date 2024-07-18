export let cart = [
 
    
];


// function to delet product from the cart 
// data/cart.js
export function deleteProduct(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
    

