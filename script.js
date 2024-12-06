document.getElementById("revealBouquet").addEventListener("click", function() {
    const bouquetContainer = document.getElementById("bouquetContainer");
    bouquetContainer.classList.remove("hidden"); // Remove hidden class
    const bouquet = document.getElementById("bouquet");
    bouquet.classList.add("fadeIn"); // Add fadeIn animation class to the bouquet
  });
  