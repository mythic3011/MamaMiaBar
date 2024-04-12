// Cart js
// Cart items and total then update cart total
// Clear cart button
// Add to cart button
// Cart total

const cart = document.getElementById("cart");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// Add to cart button
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const productId = button.dataset.productId;
        const quantity = button.dataset.quantity;
        const product = products.find((product) => product.id === productId);
        if (product) {
            const newItem = createCartItem(product, quantity);
            cartItems.appendChild(newItem);
            updateCartTotal();
        }
    });
});

function createCartItem(product, quantity) {
    const item = document.createElement("div");
    item.classList.add("cart-item");
    item.dataset.productId = product.id;
    item.dataset.quantity = quantity;
    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.classList.add("cart-item-image");
    const productName = document.createElement("h3");
    productName.textContent = product.name;
    productName.classList.add("cart-item-name");
    const productPrice = document.createElement("p");
    productPrice.textContent = product.price;
    productPrice.classList.add("cart-item-price");
    const productQuantity = document.createElement("p");
    productQuantity.textContent = quantity;
    productQuantity.classList.add("cart-item-quantity");
    const productRemoveButton = document.createElement("button");
    productRemoveButton.classList.add("cart-item-remove");
    productRemoveButton.textContent = "X";
    productRemoveButton.addEventListener("click", function () {
        item.remove();
        updateCartTotal();
    });
    item.appendChild(productImage);
    item.appendChild(productName);
    item.appendChild(productPrice);
    item.appendChild(productQuantity);
    item.appendChild(productRemoveButton);
    return item;
}

function updateCartTotal() {
    let total = 0;
    Array.from(cartItems.children).forEach((item) => {
        const productId = item.dataset.productId;
        const quantity = item.dataset.quantity;
        const product = products.find((product) => product.id === productId);
        if (product) {
            total += product.price * quantity;
        }
    });
    cartTotal.textContent = total.toFixed(2);
}

// Clear cart button
const clearCartButton = document.getElementById("clear-cart");
clearCartButton.addEventListener("click", function () {
    cartItems.innerHTML = "";
    updateCartTotal();
});

