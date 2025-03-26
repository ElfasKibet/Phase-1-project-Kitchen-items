document.addEventListener("DOMContentLoaded", () => {
  const base_url =
    "https://my-json-server.typicode.com/ElfasKibet/Phase-1-project-Kitchen-items/apiProducts";
  console.log("API base URL:", base_url);

      // Shopping cart to store selected products
      const cart = [];

      // Function to update the cart display
      function updateCartDisplay() {
          const cartItems = document.getElementById("cart-items");
          const totalPriceElement = document.getElementById("total-price");
          cartItems.innerHTML = '';
  
          let total = 0;

          // Populate the cart items and calculate the total price
        cart.forEach((product, index) => {
            const cartItem = document.createElement("li");
            cartItem.textContent = `${product.title} - Price: ${product.price}`;

            
            // Add a button to remove items from the cart
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.addEventListener("click", () => {
                removeFromCart(index);
            });

            cartItem.appendChild(removeButton);
            cartItems.appendChild(cartItem);



