export const productsTmpl = (product) => 

    `
    <div class="div-1">
    <p>${product.model}</p>
    <a href="post.html?id=${product.id}"><img class="productImg" src="${product.image}"></a>
    <p class="p-1">${product.price} kr.</p>
    <button class="b-1"><a href="post.html?id=${product.id}">Læs mere ></a></button>
    </div>
    
    `;

    export const singleProductTmpl = (product) =>
    `
    <div class="div-2">
    <h2>${product.brand}</h2>
    <p class="p-2">${product.model}</p>
    <img class="productImg2" src="${product.image}">
    <p class="p-2">${product.price} kr.</p>
    <button class="b-2"><a>Læg I Kurv</a></button>
    <br>
    <br>
    <p class="p-2">Beskrivelse</p>
    <p class="p-4">Lorem ipsum dolor sit amet consectetur <br> adipisicing elit. Culpa consectetur, quis dicta <br> reiciendis temporibus perspiciatis magni, assumenda enim <br> ratione nemo, sed itaque iste deleniti vitae quasi <br> delectus quam cumque. Aliquid deleniti, quisquam <br> similique modi ipsam assumenda? Fugiat, enim, <br> maiores explicabo repellendus iste quod accusamus nam, <br> similique aliquam nobis optio cumque.</p>
    <br>
    <p class="p-2">Specifikationer</p>

    <p class="p-3">År: ${product.year}</p>
    <p class="p-3">Urværk: ${product.movement}</p>
    <p class="p-3">Materiale: ${product.case_material}</p>

    </div>
    `;

    