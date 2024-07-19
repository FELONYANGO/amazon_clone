// import cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

console.log(cart);
// make the class for the cart.js file
class cartClass {
    cart;
    constructor(cart) {
        this.cart = cart;
    }
    addItem(item) {
        this.cart.push(item);
    }
    removeItem(item) {
        this.cart = this.cart.filter((cartItem) => cartItem !== item);
    }
    getItems() {
        return this.cart;
    }
    getCost() {
        return this.cart.reduce((acc, item) => acc + item.price, 0);
    }
    getItemCount() {
        return this.cart.length;
    }
 
}

const ShoeCart = new cartClass();
console.log(ShoeCart);

const shirtCart = new cartClass();
console.log(shirtCart);
 
