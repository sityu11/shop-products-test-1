// script.js

const products = [
    { name: "Rock munkavédelmi bakancs", price: 1000, quantity: "10 db", description: "Rock munkavédelmi bakancs, acélkaplis, taplemezes. Minősítés: CE, EN, ISO200345:2011, S1P SRC", image: "image/rock.bakancs.jpg" },
    { name: "Kartondoboz E0 (78x78x82)", price: 45, quantity: "150 db", description: "Kartondoboz E0 Mérete: 78x82x82 mm", image: "image/kartondoboz-e0.jpg" },
    { name: "Kartondoboz F0 (140x190x45)", price: 100, quantity: "120 db", description: "Kartondoboz F0 Mérete: 140x190x45 mm", image: "image/kartondoboz-f0.jpg" },
    { name: "Kartondoboz F1 (140x190x60)", price: 120, quantity: "50 db", description: "Kartondoboy F1 Mérete: 140x190x60 mm", image: "image/kartondoboz-f0.jpg" },
  ];
  
  function displayProducts(productsToShow) {
    const productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';
  
    productsToShow.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
  
      const productImg = document.createElement('img');
      productImg.src = product.image;
      productImg.alt = product.name;
  
      const productName = document.createElement('h2');
      productName.textContent = product.name;
  
      const productPrice = document.createElement('h3');
      productPrice.textContent = `Ár: ${product.price} Ft`;
  
      const productDesc = document.createElement('p');
      productDesc.classList.add('product-desc');
      productDesc.textContent = product.description;

      const productQuantity = document.createElement('p');
      productQuantity.classList.add('product-quantity');
      productQuantity.textContent = product.quantity;
  
      productCard.appendChild(productImg);
      productCard.appendChild(productName);
      productCard.appendChild(productPrice);
      productCard.appendChild(productDesc);
      productCard.appendChild(productQuantity);
  
      productGrid.appendChild(productCard);
    });
  }
  
  function searchProduct() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
  
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm)
    );
  
    if (filteredProducts.length === 0) {
      document.getElementById('noProductFound').style.display = 'block';
    } else {
      document.getElementById('noProductFound').style.display = 'none';
    }
  
    displayProducts(filteredProducts);
  }
  
  displayProducts(products); // Termékek megjelenítése az oldal betöltésekor