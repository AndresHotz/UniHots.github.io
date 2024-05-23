document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        product.addEventListener('click', () => {
            alert(`Has seleccionado ${product.querySelector('h2').textContent}`);
        });
    });
});
