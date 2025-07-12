// Shopify Product Script
document.addEventListener("DOMContentLoaded", function () {
  console.log("Shopify script loaded");

  const addToCartBtn = document.querySelector(".buy-button");
  const variantSelect = document.querySelector("#variant-select");
  const quantityInput = document.querySelector("#quantity");

  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", function () {
      const selectedVariant = variantSelect ? variantSelect.value : "default";
      const quantity = quantityInput ? parseInt(quantityInput.value) : 1;

      const productData = {
        variant: selectedVariant,
        quantity: quantity,
      };

      // Simulate add to cart
      console.log("Added to cart:", productData);
      alert("Product added to cart!");
    });
  }

  // Optional: Facebook Pixel Tracking
  if (typeof fbq !== "undefined") {
    fbq("track", "ViewContent", {
      content_name: document.title,
      content_category: "Boski Suit",
      value: 7499,
      currency: "PKR"
    });
  }
});