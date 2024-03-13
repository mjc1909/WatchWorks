
import data from "./fetch_data.js" 
import { productsTmpl } from "./templates.js"


const renderData = {}

renderData.init = async () => {


    let productContainer = document.querySelector('.products-container')

    
    const products = await data.fetchProducts()

    if(productContainer) {
        
    

        products.forEach((product) => {
            productContainer.insertAdjacentHTML('beforeend', productsTmpl(product));
        });
        
    }


}

export default renderData;






