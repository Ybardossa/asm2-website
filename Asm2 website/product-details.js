const productName = document.querySelector('h2');
const productPrice = document.querySelector('p');
const productImage = document.querySelector('img');

const urlParams = new URLSearchParams(window.location.search);
const product_name = urlParams.get('name');
const product_price = urlParams.get('price');
const product_image = `img/${urlParams.get('name')}.jpg`;

productName.textContent = product_name;
productPrice.textContent = `Price: ${product_price}`;
productImage.src = product_image;

const addToCartButton = document.querySelector('button');
addToCartButton.addEventListener('click', () => {
  const product = {
    name: product_name,
    price: product_price,
  };

  addToCart(product);
});

function addToCart(product) {

  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];


  const existingProduct = cartItems.find(item => item.name === product.name);

  if (existingProduct) {
   
    existingProduct.quantity += 1;
  } else {
    
    product.quantity = 1;
    cartItems.push(product);
  }

  
  localStorage.setItem('cart', JSON.stringify(cartItems));

 
  window.location.href = 'cart.html';
}
