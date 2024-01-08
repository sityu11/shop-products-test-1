// script.js

const products = [
    { name: "Rock munkavédelmi bakancs", price: 1000, description: "Rock munkavédelmi bakancs, acélkaplis, taplemezes. Minősítés: CE, EN, ISO200345:2011, S1P SRC", image: "image/rock.bakancs.jpg" }
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
  
      const productPrice = document.createElement('p');
      productPrice.textContent = `Ár: ${product.price} Ft`;
  
      const productDesc = document.createElement('p');
      productDesc.textContent = product.description;
  
      productCard.appendChild(productImg);
      productCard.appendChild(productName);
      productCard.appendChild(productPrice);
      productCard.appendChild(productDesc);
  
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