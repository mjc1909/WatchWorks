import { basketProductTmpl } from "./templates.js"
import data from "./fetch_data.js"



const products = {}

products.init = async () => {


    
    const productOutput = document.querySelector('.product-list')
    
    
    let productsArray = JSON.parse(localStorage.getItem('productList'))  || []
    
    const products = await data.fetchProducts();
    
    const removeFromBasket =  () => {
    
        const productRemove = document.querySelectorAll('.delete')
        
    
        productRemove.forEach((btn) =>{
        
        btn.addEventListener('click', (event) =>{
            const productId = event.target.getAttribute('id')
        const index = productsArray.findIndex(product => product.id == productId )
            
        productsArray.splice(index, 1)
        
           localStorage.setItem('productList', JSON.stringify (productsArray))
        render_products()
        
        })
        
        
    })
    
    

}
    
    const render_products = () => {
        
        if(productsArray.length != 0){
            productOutput.innerHTML = "";
            
            productsArray.forEach(post => {
                productOutput.insertAdjacentHTML('beforeend', basketProductTmpl(post))
                
            })
            removeFromBasket()

        }else {
            productOutput.innerHTML = 'Der er ingen varer i kurven'
        }
        
    }
    
    render_products()

    const basketBtn = document.querySelectorAll('.b-2')

    const addToBasket = async (event) => {
        const productId = event.target.getAttribute('id');
 
        const productToAdd = products.find(product => product.id == productId)

        if(!productsArray.includes(productToAdd)){
            productsArray.push(productToAdd)

        

             localStorage.setItem('productList',JSON.stringify(productsArray))
            }
            
            render_products()

        
    }

    
    basketBtn.forEach(btn => {
        btn.addEventListener('click', addToBasket)
    })
    
    
    
}






export default products;