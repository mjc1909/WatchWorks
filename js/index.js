import renderData from "./render_data.js"
import singleView from "./single_view.js"

const app = {}

app.init = async () => {


    
    await renderData.init()

    await singleView.init()


    }

app.init()
















