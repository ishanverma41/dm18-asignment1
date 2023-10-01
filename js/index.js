import { renderProductList } from './render.js';
import { fetchData } from './dataFetcher.js';



async function main() {
    try {
        fetchData('/db/products.json').then(productsList => {
            renderProductList(productsList);
        }).catch(error => {
            console.error('Error:', error);
        })

    } catch (error) {
        console.error('Error:', error);
    }
}
main();
