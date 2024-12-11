// Navigation to gender-specific pages
function navigateToPage(page) {
    window.location.href = page;
}

// Handling category selection (optional functionality)
document.getElementById("product-category").addEventListener("change", function () {
    const category = this.value;
    const container = document.getElementById("product-table-container");
    const title = document.getElementById("category-title");

    if (category) {
        title.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        container.classList.remove("hidden");
    } else {
        container.classList.add("hidden");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // Add navigation to women and men sections
    document.getElementById("women-button").addEventListener("click", () => {
        window.location.href = "./women.html"; // Redirect to women.html
    });

    document.getElementById("men-button").addEventListener("click", () => {
        window.location.href = "./men.html"; // Redirect to men.html
    });
});

document.getElementById('apply-filters').addEventListener('click', () => {
    const category = document.getElementById('category').value;
    const priceRange = document.getElementById('price-range').value;

    const products = document.querySelectorAll('.product-card');
    products.forEach((product) => {
        const matchesCategory = category === '' || product.dataset.category === category;
        const matchesPrice =
            priceRange === '' ||
            (priceRange === 'low' && +product.dataset.price < 20) ||
            (priceRange === 'mid' && +product.dataset.price >= 20 && +product.dataset.price <= 50) ||
            (priceRange === 'high' && +product.dataset.price > 50);

        if (matchesCategory && matchesPrice) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});



  // Add smooth scroll for links if required.
  document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

 // JavaScript to handle table visibility based on category selection
 const categorySelect = document.getElementById('product-category');
 const tables = {
     skincare: document.getElementById('skincare-table'),
     perfumes: document.getElementById('perfumes-table'),
     candles: document.getElementById('candles-table')
 };

 categorySelect.addEventListener('change', function () {
     const selectedCategory = this.value;

     // Hide all tables
     Object.values(tables).forEach(table => table.style.display = 'none');

     // Show the selected category's table
     if (tables[selectedCategory]) {
         tables[selectedCategory].style.display = 'table';
     }
 });

 // Sample data for categories and items
const productData = {
    skincare: [
        { item: "Body Lotion", price: "$20", description: "Hydrating and nourishing lotion." },
        { item: "Face Wash", price: "$15", description: "Gentle and refreshing cleanser." }
    ],
    perfumes: [
        { item: "Fragrance Mist", price: "$25", description: "Light and refreshing scent." },
        { item: "Eau de Parfum", price: "$50", description: "Long-lasting luxury fragrance." }
    ],
    candles: [
        { item: "Vanilla Candle", price: "$18", description: "Sweet vanilla aroma." },
        { item: "Lavender Candle", price: "$22", description: "Relaxing lavender fragrance." }
    ]
};

const productCategory = document.getElementById("product-category");
const productTableContainer = document.getElementById("product-table-container");
const categoryTitle = document.getElementById("category-title");
const productTableBody = document.querySelector("#product-table tbody");

productCategory.addEventListener("change", (event) => {
    const category = event.target.value;

    // Update category title
    categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);

    // Clear existing rows
    productTableBody.innerHTML = "";

    // Add new rows
    productData[category].forEach((product) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${product.item}</td>
            <td>${product.price}</td>
            <td>${product.description}</td>
        `;
        productTableBody.appendChild(row);
    });

    // Show the table
    productTableContainer.classList.remove("hidden");
});


