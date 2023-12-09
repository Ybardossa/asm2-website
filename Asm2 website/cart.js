document.addEventListener('DOMContentLoaded', () => {
  const cartTable = document.getElementById('cart-table');
  const totalPrice = document.getElementById('total-price');
  const refreshCartButton = document.getElementById('refresh-cart');
  const checkoutButton = document.getElementById('checkout');

  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  function displayCartItems() {
    while (cartTable.lastElementChild) {
      cartTable.removeChild(cartTable.lastElementChild);
    }

    cartItems.forEach((item, index) => {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td><input type="checkbox" class="product-checkbox" data-index="${index}"></td>
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>${item.price}</td>
        <td>${item.quantity * parseFloat(item.price.replace(/[^\d.]/g, ''))}$</td>
      `;
      cartTable.appendChild(newRow);
    });

    const total = cartItems.reduce((acc, item) => {
      return acc + item.quantity * parseFloat(item.price.replace(/[^\d.]/g, ''));
    }, 0);

    totalPrice.textContent = `Total : ${total}`;
  }

  cartItems.forEach(item => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>${item.price}</td>
      <td>${item.quantity * parseFloat(item.price.replace(/[^\d.]/g, ''))}$</td>
    `;
    cartTable.appendChild(newRow);
  });

  const total = cartItems.reduce((acc, item) => {
    const totalValue = item.quantity * parseFloat(item.price.replace(/[^\d.]/g, ''));
    return acc + totalValue;
  }, 0);

  totalPrice.textContent = `Total : ${total}`;

  refreshCartButton.addEventListener('click', () => {
    const confirmRefresh = confirm('Are you sure you want to renew the carts?');
    if (confirmRefresh) {
      cartItems.length = 0;
      localStorage.setItem('cart', JSON.stringify(cartItems));
      displayCartItems();
    }
  });

  checkoutButton.addEventListener('click', () => {
    if (cartItems.length === 0) {
      alert('Please choose a product');
    } else {
      const confirmPurchase = confirm('Are you sure you want to buy our product');
      if (confirmPurchase) {
        alert('Thank you for choosing our product.');
      } else {
        // Handle the case when the user cancels the purchase
      }
    }
  });
});
