import data from "./fetch_data.js" // henter hele filen
import { singleProductTmpl } from "./templates.js"


const singleView = {}

singleView.init = async () => {

    
    let pagePost = document.querySelector('.page-product')
       
    const products = await data.fetchProducts()
    
        if(pagePost) {
            const search = location.search; // hiver alt ud efter '?' - bruges til at få fat i query string
            const postID = new URLSearchParams(search).get('id') // trækker specifikke værdi'er ud - 'id' giver os det der står efter = (ligmed-tegnet)
    
            const foundProduct = products.find((product) => product.id == postID)
    
            let singleProductContainer = document.querySelector('.single-product-container')
            singleProductContainer.insertAdjacentHTML('beforeend', singleProductTmpl(foundProduct))
    
        }


}

export default singleView;