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
 
            // Calculate the total price
  total += parseFloat(product.price.replace(/[^0-9.]/g, ''));
});

totalPriceElement.textContent = `Total Price: Ksh${total.toFixed(2)}`;
}

    // Function to handle the "Add to Cart" button click
    function handleAddToCartClick(product) {
        cart.push(product);
        updateCartDisplay();
        //alert(`Added to Cart: ${product.title}`);
    }

    // Function to remove items from the cart
    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCartDisplay();
    }

     // Function to handle the checkout process
     function handleCheckout() {
        // Simulate a transaction process (replace with your actual logic)
        // If successful, display the success popup
        showSuccessPopup();
    }

    // Function to show the success popup
    function showSuccessPopup() {
        const successPopup = document.getElementById("success-popup");
        successPopup.style.display = "block";

        // Close the popup when the "x" button is clicked
        const closeBtn = successPopup.querySelector(".close");
        closeBtn.addEventListener("click", () => {
            successPopup.style.display = "none";
            
            // Clear the cart after successful transaction
            cart.length = 0;
            updateCartDisplay();
        });
    }

    // Attach a click event handler to the checkout button
    const checkoutButton = document.getElementById("checkout-button");
    checkoutButton.addEventListener("click", handleCheckout);

    // Function to fetch and display products
    function fetchProducts() {
        fetch(base_url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);

                if (Array.isArray(data)) {
                    const productsList = document.getElementById("products-list");

                    data.forEach((product) => {
                        const productElement = document.createElement("div");
                        productElement.className = "product";

                        const img = document.createElement("img");
                        img.src = product.image_url;
                        img.alt = product.title;

                        const title = document.createElement("div");
                        title.className = "title";
                        title.textContent = product.title;

                        const description = document.createElement("div");
                        description.className = "description";
                        description.textContent = product.description;

                        const price = document.createElement("div");
                        price.className = "price";
                        price.textContent = `Price: ${product.price}`;

                        const cartButton = document.createElement("button");
                        cartButton.className = "cart-button";
                        cartButton.textContent = "Add to Cart";

                         // Add a click event handler to the "Add to Cart" button
                         cartButton.addEventListener("click", () => {
                            handleAddToCartClick(product);
                        });

                        // Append all elements to the product container
                        productElement.appendChild(img);
                        productElement.appendChild(title);
                        productElement.appendChild(description);
                        productElement.appendChild(price);
                        productElement.appendChild(cartButton);




