import { basketProductTmpl } from "./templates.js";
import data from "./fetch_data.js";

const products = {
    productsArray: [],

    init: async () => {
        const productOutput = document.querySelector('.product-list');
        const productsData = await data.fetchProducts();

        products.productsArray = productsData;

        products.renderProducts();
        products.attachEventListeners();
    },

    renderProducts: () => {
        const { productsArray } = products;

        if (productsArray.length !== 0) {
            const productOutput = document.querySelector('.product-list');
            productOutput.innerHTML = "";

            productsArray.forEach(product => {
                productOutput.insertAdjacentHTML('beforeend', basketProductTmpl(product));
            });

            products.removeFromBasket();
        } else {
            const productOutput = document.querySelector('.product-list');
            productOutput.innerHTML = 'Der er ingen varer i kurven';
        }
    },

    addToBasket: (event) => {
        const productId = event.target.getAttribute('id');
        const productToAdd = products.productsArray.find(product => product.id === productId);

        if (!products.productsArray.includes(productToAdd)) {
            products.productsArray.push(productToAdd);
        }

        products.renderProducts();
    },

    removeFromBasket: () => {
        const productRemove = document.querySelectorAll('.delete');

        productRemove.forEach(btn => {
            btn.addEventListener('click', (event) => {
                const productId = event.target.getAttribute('id');
                const index = products.productsArray.findIndex(product => product.id === productId);

                products.productsArray.splice(index, 1);
                products.renderProducts();
            });
        });
    },

    attachEventListeners: () => {
        const basketBtn = document.querySelectorAll('.b-2');

        basketBtn.forEach(btn => {
            btn.addEventListener('click', products.addToBasket);
        });
    }
};

export default products;
