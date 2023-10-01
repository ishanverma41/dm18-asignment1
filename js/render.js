import { createProductItem } from './template.js';

export function renderProductList(products) {
    const productContainer = document.querySelector('.grid');

    if (!productContainer) {
        return;
    }

    products.forEach((product) => {
        const productItem = createProductItem(product);
        const productCardElement = document.createElement('div');
        productCardElement.innerHTML = productItem;
        productContainer.appendChild(productCardElement);
    });
}
