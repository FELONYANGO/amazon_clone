import {deleteProduct} from "../data/cart.js";
import {product} from "../data/products.js";
import { moneyCurrency } from "./utils/moneycurrecy.js ";
// generate the checkout page for the emlements inside the cart and present them
//loop through the cart array and get the product id and quantity
const storedCart = localStorage.getItem('cart');
let cart = storedCart ? JSON.parse(storedCart) : [];
console.log(`this is the cart`, cart);

let cartSummary = '';

cart.forEach((item) => {
  const productId = item.id; // Ensure this is 'id'

  let matchingProduct = product.find(p => p.id === productId);
  console.log(matchingProduct); // Check if matchingProduct is found

  if (matchingProduct) {
    cartSummary += `
      <div class="cart-item-container">
        <div class="delivery-date">
          Delivery date: Tuesday, June 21
        </div>
        <div class="flex flex-row gap-4 justify-between">
          <div>
            <div class="cart-item-details-grid">
              <img class="product-image" src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">
                  $${moneyCurrency(matchingProduct.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${item.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete delete-quantity-link link-primary" data-product-id="${matchingProduct.id}">
                    Delete
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
            <div class="delivery-option">
              <input type="radio" checked class="delivery-option-input" name="${matchingProduct.id}">
              <div>
                <div class="delivery-option-date">
                  Tuesday, June 21
                </div>
                <div class="delivery-option-price">
                  FREE Shipping
                </div>
              </div>
            </div>
            <div class="delivery-option">
              <input type="radio" class="delivery-option-input" name="${matchingProduct.id}">
              <div>
                <div class="delivery-option-date">
                  Wednesday, June 15
                </div>
                <div class="delivery-option-price">
                  $4.99 - Shipping
                </div>
              </div>
            </div>
            <div class="delivery-option">
              <input type="radio" class="delivery-option-input" name="${matchingProduct.id}">
              <div>
                <div class="delivery-option-date">
                  Monday, June 13
                </div>
                <div class="delivery-option-price">
                  $9.99 - Shipping
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
});

document.querySelector(".js-order-summary").innerHTML = cartSummary;

console.log(cartSummary);

// Delete from cart functionality
document.querySelectorAll(".delete").forEach((deleteButton) => {
  deleteButton.addEventListener("click", () => {
    const productId = deleteButton.getAttribute("data-product-id");
    deleteProduct(productId);

    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
  });
});