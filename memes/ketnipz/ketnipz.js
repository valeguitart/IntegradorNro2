const productos = [
    {
        id: 1,
        nombre: "Ketnipz Uno",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, minus!",
        precio: "$19.50",
        img: './ketnipzpng/ketnip1.png'
    },
    {
        id: 2,
        nombre: "Ketnipz Dos",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, minus!",
        precio: "$12.50",
        img: "./ketnipzpng/ketnip2.png"
    },
    {
        id: 3,
        nombre: "Ketnipz Tres",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, minus!",
        precio: "$10.50",
        img: "./ketnipzpng/ketnip3.png"
    }
]

const productosContenedor = document.getElementById("productos");

function comprarProducto (e){
    alert(`Agregaste el producto ${e.target.parentNode.dataset.productos} en el carrito`);
}

function crearProducto(productos){
    const articulo = document.createElement("article");

    articulo.dataset.productos = productos.id;
    articulo.className = "productos";

    const img = document.createElement('img');
    const nombre = document.createElement('h3');
    const descripcion = document.createElement('p');
    const comprar = document.createElement('button');
    const precio = document.createElement('h4');

    const textoNombre = document.createTextNode(productos.nombre);
    nombre.appendChild(textoNombre);
    nombre.className = 'nombre';

    precio.textContent = productos.precio;
    precio.className = 'precio';

    descripcion.textContent = productos.descripcion;
    descripcion.className = 'descripcion';

    img.src = productos.img;
    img.alt = productos.nombre;
    img.className = 'imagen';

    comprar.textContent = "Agregar al carrito";
    comprar.className = 'agregarCarrito';
    comprar.addEventListener('click', comprarProducto);

    articulo.appendChild(img);
    articulo.appendChild(nombre);
    articulo.appendChild(descripcion);
    articulo.appendChild(precio);
    articulo.appendChild(comprar);
    


    productosContenedor.appendChild(articulo);
}

productos.forEach(crearProducto);

const agregarAlCarrito = document.querySelectorAll('.agregarCarrito');
agregarAlCarrito.forEach((agregarAlCarritoBoton) => {
    agregarAlCarritoBoton.addEventListener('click', clickearBoton);
});

const carrito = document.querySelector('.carrito');

function clickearBoton(event) {
    const boton = event.target;
    const item = boton.closest('.productos');
   
    const itemNombre = item.querySelector('.nombre').textContent;
    
    const itemPrecio = item.querySelector('.precio').textContent;

    const itemImagen = item.querySelector('.imagen').src;

    agregarAlCarritoDeCompra(itemNombre, itemPrecio, itemImagen);
}

function agregarAlCarritoDeCompra(itemNombre, itemPrecio, itemImagen) {

    const elementTitle = carrito.getElementsByClassName('shoppingCartItemTitle');
    
    for (let i = 0; i < elementTitle.length; i++) {
        if(elementTitle[i].innerText === itemNombre){
        let elementQuantiy = elementTitle[i].parentElement.parentElement.parentElement.querySelector('.shoppingCartItemQuantity');
            elementQuantiy.value++;
            actualizarPrecioDelCarrito();
            return;
        }
    }

    const carritoDeCompraFila = document.createElement('div');
    
    const productosEnCarrito = `
    <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImagen} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemNombre}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrecio}</p>
            </div>
        </div>
    <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;

    carritoDeCompraFila.innerHTML = productosEnCarrito;
    carrito.append(carritoDeCompraFila);

    carritoDeCompraFila.querySelector('.buttonDelete').addEventListener('click', eliminarDelCarrito);

    carritoDeCompraFila.querySelector('.shoppingCartItemQuantity').addEventListener('change', quantityChanged);

    actualizarPrecioDelCarrito();
}

function actualizarPrecioDelCarrito(){
    let total = 0;
    const actualizarPrecioDelCarrito = document.querySelector('.shoppingCartTotal');
    
    const shoppingCartItem = document.querySelectorAll('.shoppingCartItem');
    
    shoppingCartItem.forEach((shoppingCartItem) => {
        const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice');
        
        const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$', ''));
        
        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity');

        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);

        total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
    });
    actualizarPrecioDelCarrito.innerHTML = `$${total.toFixed(2)}`;
}

function eliminarDelCarrito(event){
    const botonClick = event.target;
    botonClick.closest('.shoppingCartItem').remove();
    actualizarPrecioDelCarrito();
}

function quantityChanged(event) {
    const input = event.target;
    input.value <= 0 ? (input.value = 1) : null;
    actualizarPrecioDelCarrito();
}