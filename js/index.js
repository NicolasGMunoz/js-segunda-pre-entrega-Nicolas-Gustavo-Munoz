/* Creamos el array de los productos de la tienda */
const productos = [
    {
        id: 1,
        name: "Mate 3D Naruto",
        precio: 3000
    },

    {
        id: 2,
        name: "Mate 3D Harry Potter",
        precio: 3000
    },

    {
        id: 3,
        name: "Mate 3D Pokebola",
        precio: 2500
    },

    {
        id: 4,
        name: "Figura Baby Groot 3D",
        precio: 1500
    },

    {
        id: 5,
        name: "Figura Kurama 3D",
        precio: 2500
    },

    {
        id: 6,
        name: "Stand Auriculares 3D",
        precio: 2000
    },

    {
        id: 7,
        name: "Cuchillo Mariposa 3D",
        precio: 1500
    },
]

/* Inicializamos las variables necesarias */
let productosArray = [];
let carrito = [];
let verdad = true;

/* Creamos la clase constructor  */
class Producto {
    constructor (id, name, precio){
        this.id = id;
        this.name = name;
        this.precio = precio;
    }
}

/* Funcion que pushea los productos */
function cargaDeProductos() {
for (const producto of productos){
    productosArray.push(new Producto(producto.id, producto.name, producto.precio))
    }
}
cargaDeProductos();


function verProductos(){
    for (const producto of productosArray) {
        alert(producto.name + "\n" + "$" + producto.precio)
    }
 
    program()
}

function buscarProducto(){
    let productoBuscado = prompt("Ingrese el producto que deseas: \n1) Mate 3D Naruto \n2) Mate 3D Harry Potter \n3) Mate 3D Pokebola \n4) Figura Baby Groot 3D \n5) Figura Kurama 3D \n6) Stand Auriculares 3D \n7) Cuchillo Mariposa 3D")
    let productoEncontrado = productosArray.find((producto) => {
        return producto.id == productoBuscado
    })
    if (productoEncontrado){
        alert(`Tenemos stock de ${productoEncontrado.name} y su valor es de $${productoEncontrado.precio}`);
        let opcion = prompt ("Agregar al carrito = 1\nVolver al menu = 2");
        if (opcion == 1){
            carrito.push(productoEncontrado)
            alert("Su producto se encuentra en el carrito")
            }
             else {
            program()
            }

    }else{
        alert("El producto no fue encontrado");
    }

    program();
}

/* Funcion para ver los productos del carrito */
function verCarrito(){
    for (const producto of carrito) {
        alert(producto.name + "\n" + "$" + producto.precio)
    }
    let comprar = prompt("Desea finalizar la compra: \nSi = 1 \nNO = 2");
    if (comprar == 1){
        let montoFinal = carrito.reduce((i, producto) => {
            return i + producto.precio
        }, 0)
        alert (`El monto final es $${montoFinal}`);
    }else {
        program();
    }

}


function program() {
    while (verdad){
        let opcion = prompt("Ingrese una opción: \n1) Ver Productos \n2) Buscar Producto \n3) Ver Carrito \n4) Eliminar Producto Del Carrito  \n5) Finalizar Compra   \n6)Ver Formas de Pago \n8) Salir");
        switch (opcion) {
            case "1":
                verProductos();
                break;
            case "2":
                buscarProducto();
                break;
            case "3":
                verCarrito();
                break;
            case "4":
                alert ("Ingresaste la opcion 3");
                break;
            case "5":
                alert ("Ingresaste la opcion 4");
                break;
            case "6":
                alert ("Ingresaste la opcion 5");
                break;
            case "7":
                alert ("Ingresaste la opcion 6");
                break;
            case "8":
                verdad = false;
                break;
            default:
                alert("Ingres una opcion valida");
                opcion = prompt("Ingrese una opción: \n1) Ver Productos \n2) Buscar Producto \n3) Ver Carrito \n4) Eliminar Producto Del Carrito  \n5) Finalizar Compra   \n6)Ver Formas de Pago \n8) Salir");
                break;
        }
    }
}



program();