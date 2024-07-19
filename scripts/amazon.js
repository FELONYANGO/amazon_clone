// import { moneyCurrency } from './utils/moneycurrency.js';

import { cart } from "../data/cart.js";
import { product } from "../data/products.js";
 import { moneyCurrency } from "../scripts/utils/moneycurrecy.js";

// // Create the array of products in the page
// console.log(` this is moneycurrecncy ${{moneyCurrency}}`);

let productHtml = "";
product.forEach(function(product) {
  productHtml += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image" src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="${product.getUrl()}">
        <div class="product-rating-count link-primary">
          ${product.getRatingStars()}
        </div>
      </div>

      <div class="product-price">
        $${product.getMoneyCurrency()}
      </div>

      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png"> Added
      </div>

      <button class="js-add-to-cart-button add-to-cart-button button-primary" data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;
});

document.querySelector(".js-products").innerHTML = productHtml;

// Add to cart functionality
document.querySelectorAll(".js-add-to-cart-button").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.getAttribute("data-product-id");
    console.log(productId);

    let productInCart = cart.find((product) => product.id === productId);
    if (productInCart) {
      productInCart.quantity += 1;
    } else {
      cart.push({
        id: productId,
        quantity: 1
      });
    }

    let cartQuantity = 0;
    cart.forEach((product) => {
      cartQuantity += product.quantity;
    });
    document.querySelector(".js-cart-quantity").textContent = cartQuantity;
    localStorage.setItem('cart', JSON.stringify(cart));
  
    console.log(cart);
console.log(`this is the cart ${cart}`);

  });
});
