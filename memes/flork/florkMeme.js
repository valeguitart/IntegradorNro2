const productos = [
    {
        id: 1,
        nombre: "Flork Uno",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, minus!",
        precio: "$13.50",
        img: './Flork Png/Flork-1.png'
    },
    {
        id: 2,
        nombre: "Flork Dos",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, minus!",
        precio: "$13.50",
        img: "./Flork Png/Flork-2.png"
    },
    {
        id: 3,
        nombre: "Flork Tres",
        descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, minus!",
        precio: "$13.50",
        img: "./Flork Png/Flork-3.png"
    }
]

const productosContenedor = document.getElementById("productos");

function comprarProducto (e){
    alert(`Gracias por comprar el producto ${e.target.parentNode.dataset.productos}`);
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
    descripcion.className = 'precio';

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