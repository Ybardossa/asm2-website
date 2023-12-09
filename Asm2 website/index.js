const buttons = document.querySelectorAll('button');

for (const button of buttons) {
  button.addEventListener('click', () => {
    const product = button.closest('.product');
    const productName = product.querySelector('h2').textContent;
    const productPrice = product.querySelector('p').textContent;

    window.location.href = `product-details.html?name=${productName}&price=${productPrice}`;
  });
}