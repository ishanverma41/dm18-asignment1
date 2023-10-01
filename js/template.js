export function createProductItem(product) {

    const stockTxtColor = product.stock === "In Stock" ? "text-green-500" : "text-red-500";

    return `
    <div class="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 flex flex-col">
      <div class="relative flex-grow">
        <img src="${product.image}" alt="${product.name}" class="w-full h-52 object-cover rounded-t-lg">
         </div>
      <div class="mt-4  grid justify-items-center text-justify">
        <h2 class="text-lg font-semibold mb-2">${product.name}</h2>
        <p class="text-indigo-900  text-xl  font-bold ">$${product.price.toFixed(2)}</p>   
        <p class="text-gray-500 mt-2">Company: ${product.company}</p>
        <p class="text-gray-500">Category: ${product.category}</p>
        <p class="text-gray-500">Code: #${product.productCode}</p>
        <p class="${stockTxtColor} font-semibold">${product.stock}</p> 
        </div>
    </div>
  `;
}
