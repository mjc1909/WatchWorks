export const productsTmpl = (product) => 

    `
    <p class="p-1">${product.title}</p>
    <img class="productImg" src="${product.image}">
    <p>${product.price} kr.</p>
    
    `;