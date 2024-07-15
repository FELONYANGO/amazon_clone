import {cart, deleteProduct} from "../data/cart.js";
import {product} from "../data/products.js";
import { moneyCurrency } from "./utils/moneycurrecy.js ";
// generate the checkout page for the emlements inside the cart and present them
//loop through the cart array and get the product id and quantity
// console.log(cart);

let cartSummery ;

cart.forEach((item) => {
    const productId = item.productId;

    /* lets loop through products array and find the  id that matches the one in the cart*/
    let matchingProdut;

    product.forEach((product) => {
        if(product.id === productId){
            matchingProdut = product;
        }
    }
    );
    // console.log(matchingProdut.image);
    

//   generate the checkout product container 
cartSummery +=
`

    <div class="cart-item-container">
   
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>
 <div class = "flex flex-row gap-4 justify-between">
            <div>
            <div class="cart-item-details-grid">
              <img class="product-image" src="${matchingProdut.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProdut.name}
                <div class="product-price">
                  $${moneyCurrency(matchingProdut.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${item.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class=" delete delete-quantity-link link-primary" data-product-id="${matchingProdut.id}">
                    Delete
                  </span>
                </div>
              </div></div>

           <div>
           
               <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name=${matchingProdut.id}">
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
                  <input type="radio"
                    class="delivery-option-input"
                    name=${matchingProdut.id}">
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
                  <input type="radio"
                    class="delivery-option-input"
                    name=${matchingProdut.id}">
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
          </div>

 </div>

`

});

// lets display it in the order-summary container 


document.querySelector(".js-order-summary").innerHTML = cartSummery;




// console.log(cartSummery);

let newCart ;

// function to delet form the cart 
document.querySelectorAll(".delete").forEach((deleteButton) => {
   deleteButton.addEventListener("click", () => {
    //  get the data from the attribe of this button  and log it in the console
    const productId = deleteButton.getAttribute("data-product-id");
// call the deleteProduct function
   deleteProduct(productId);
   console.log(cart);
 
   });
  

});