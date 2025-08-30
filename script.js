const cart = [];
const cartCount = document.getElementById("cart-count");
const cartItemsList = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", (event) => {
        const productElement = event.target.closest(".product");
        const productId = productElement.getAttribute("data-id");
        const productName = productElement.querySelector("h3").textContent;
        const productPrice = parseFloat(productElement.querySelector("p").textContent.slice(1));

        addToCart(productId, productName, productPrice);
    });
});

function addToCart(id, name, price) {
    cart.push({ id, name, price });
    updateCart();
}

function updateCart() {
    const cartCountValue = cart.length;
    cartCount.textContent = cartCountValue;

    cartItemsList.innerHTML = "";
    let totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

document.getElementById("checkout").addEventListener("click", () => {
    if (cart.length > 0) {
        alert("Checkout successful! Total amount: $" + totalPriceElement.textContent);
        // Clear cart after checkout
        cart.length = 0;
        updateCart();
    } else {
        alert("Your cart is empty!");
    }
});