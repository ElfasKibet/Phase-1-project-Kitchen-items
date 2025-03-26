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
          
