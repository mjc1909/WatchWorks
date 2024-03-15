import renderData from "./render_data.js"
import singleView from "./single_view.js"
import products from "./basket.js"

const app = {}

app.init = async () => {


    
    await renderData.init()

    await singleView.init()

    await products.init()


    }

app.init()
















