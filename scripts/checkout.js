import { deleteProduct } from "../data/cart.js";
import { product ,getfrombackend} from "../data/products.js";
import { moneyCurrency } from "./utils/moneycurrecy.js ";
import { displayproducts } from "./amazon.js";
console.log(moneyCurrency);
console.log(getfrombackend());

// generate the checkout page for the emlements inside the cart and present them
//loop through the cart array and get the product id and quantity
getfrombackend(()=>{
const storedCart = localStorage.getItem("cart");
let cart = storedCart ? JSON.parse(storedCart) : [];
//console.log(`this is the cart`, cart);
function updatedcartfunction() {
  let cartSummary = "";

  cart.forEach((item) => {
    const productId = item.id;

    let matchingProduct = product.find((p) => p.id === productId);
    if (matchingProduct) {
      
      cartSummary += `
      <div class="cart-item-container js-remove-class-${matchingProduct.image}">
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
                  $${moneyCurrency(matchingProduct.getMoneyCurrency())}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${
                      item.quantity
                    }</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete delete-quantity-link link-primary" data-product-id="${
                    matchingProduct.id
                  }">
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
              <input type="radio" checked class="delivery-option-input" name="${
                matchingProduct.id
              }">
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
              <input type="radio" class="delivery-option-input" name="${
                matchingProduct.id
              }">
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
              <input type="radio" class="delivery-option-input" name="${
                matchingProduct.id
              }">
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
  // lets get the cart summery

  let totalPrice = 0;
  cart.forEach((item) => {
    const productId = item.id;
    let matchingProduct = product.find((p) => p.id === productId);
    if (matchingProduct) {
      totalPrice += (matchingProduct.priceCents * item.quantity) / 100;

      // console.log(`this is the total price`, totalPrice);
    }
  });
  let tax = Number((totalPrice * 0.1).toFixed(2));
  let itemsNumber = cart.length;

  // console.log(typeof itemsNumber);

  // let generate the html with the dom of class payment-summery-class

  document.querySelector(
    ".payment-summery-class"
  ).innerHTML = `          <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>item are : ${itemsNumber}</div>
            <div class="payment-summary-money">$${totalPrice.toFixed(2)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">Free Shipping</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${totalPrice.toFixed(2)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${tax}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${(tax + totalPrice).toFixed(
              3
            )}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
          `;

  // lets present the title to pick the cart item quantity
  document.querySelector(".checkout-header-middle-section").innerHTML = `
 Checkout (<a class="return-to-home-link"
            href="amazon.html">${itemsNumber} items</a>)
`;

  // Delete from cart functionality
  document.querySelectorAll(".delete").forEach((deleteButton) => {
    deleteButton.addEventListener("click", () => {
      const productId = deleteButton.getAttribute("data-product-id");
      deleteProduct(productId);

      const container = document.querySelector(`.js-remove-class-${productId}`);
      if (container) {
        container.remove();
          //  updatedcartfunction();
      }

      // Update localStorage
      // localStorage.clear();
      if (localStorage == null) {
        localStorage.setItem("cart", JSON.stringify(cart));
      
      }
    });
  });
  // renderCart();

  // update the order summery page with the total price of the products in the cart
  /*  
Follow js Rulea
1.save data
2.generate the html
3.make it intrative
*/
  // can we loop through the cart and get the products and match the product id and return the price

 
}
updatedcartfunction();
// makeApiCall();
});