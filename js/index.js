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
let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");
let domicilio = prompt("Ingrese su domicilio");
let dni = prompt("Ingrese su dni");

/* Creamos la clase constructor de la persona */
class Persona{
    constructor (obj){
        this.nombre = obj.nombre
        this.edad = obj.edad
        this.domicilio = obj.domicilio
        this.dni = obj.dni
    }
    verPersona = () =>{
        return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nDNI: ${this.dni}\nDomicilio: ${this.domicilio}`
    }
}
/* Creamos el objeto persona */
const persona = new Persona({
    nombre: nombre,
    edad: edad,
    domicilio: domicilio,
    dni: dni
})


/* Creamos la clase constructor de los productos  */
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


/* Funcion para ver los productos */
function verProductos(){
   
    let condi = Number(prompt ("1) Ver todos los productos \n2) Filtrar por Precio"))
    if (condi === 1){
        for (const producto of productosArray) {
            alert(producto.name + "\n" + "$" + producto.precio)
        }
    }else if (condi === 2){
        let min = parseInt(prompt("Ingrese el precio minimo"));
        let max = parseInt(prompt("Ingrese el precio maximo"));
        if (min > max) {
            alert("El precio minimo no puede ser mayor al precio maximo");
            buscarRangoDePrecios();
        }else {
            let productos = productosArray.filter(producto => producto.precio >= min && producto.precio <= max);
            if (productos.length > 0) {
                for (const producto of productos) {
                    alert(producto.name + "\n" + "$" + producto.precio)
                }
            }
        }
    }
    
    program()
}

/* Funcion para buscar y agregar un producto al carrito */ 
function buscarProducto(){
    let productoBuscado = Number(prompt("Ingrese el producto que deseas: \n1) Mate 3D Naruto \n2) Mate 3D Harry Potter \n3) Mate 3D Pokebola \n4) Figura Baby Groot 3D \n5) Figura Kurama 3D \n6) Stand Auriculares 3D \n7) Cuchillo Mariposa 3D \n8) Volver al menu"));
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

    }else if(productoBuscado === 8 ){
        program();
    }else{
        alert("El producto no fue encontrado");
    }

    program();
}

/* Funcion para ver los productos del carrito */
function verCarrito(){
    for (const producto of carrito) {
        alert(producto.id + ")" +"\n"+ producto.name + "\n" + "$" + producto.precio)
    }
    if (carrito.length > 0 ){
        let comprar = Number(prompt("Desea finalizar la compra: \nSi = 1 \nNO = 2"));
        if (comprar == 1){
            let montoFinal = carrito.reduce((i, producto) => {
                return i + producto.precio
            }, 0)
            finalizarCompra();
        }else {
            program();
        }   
    }else{
        alert ("Su carrito esta vacio");3
        program();
    }

}

/* Funcion para calcular el interes del pago */
function interes() {
    let montoFinal = carrito.reduce((i, producto) => {
        return i + producto.precio
    }, 0)
    let interes = 0;
    let cuotas = Number(prompt ("Ingrese la cantidas de cuotas: \n1 Pago sin interes\n3 Pagos 5% de interes \n6 Pagos 10% de interes\n12 Pagos 15% de interes"));
    switch (cuotas) {
        case 1:
            monto = montoFinal;
            alert("Usted abonara: $" + monto + "\nEn un solo pago");
            break;
        case 3:
            monto =montoFinal * 0.05 +montoFinal;
            interes = monto / 3;
            alert("Usted abonara: $" + monto + "\nEn 3 cuotas de: $" + interes);
            break;
        case 6:
            monto =montoFinal * 0.10 +montoFinal;
            interes = monto / 6;
            alert("Usted abonara: $" + monto + "\nEn 6 cuotas de: $" + interes);
            break;
        case 12:
            monto =montoFinal * 0.15 +montoFinal;
            interes = monto / 12;
            alert("Usted abonara: $" + monto + "\nEn 12 cuotas de: $" + interes);
            break;
        default:
            alert("Ingreso una opción incorrecta o no ingreso niguna opción");
            finalizarCompra();
            break;
    }

}
/* Funcion para concretar la compra */
function concretarPago(){
    let sN = Number(prompt ("1) Pagar \n2) Cancelar"));
    if (sN === 1){
        alert ("Pago realizado con exito")
    }else if (sN === 2){
        alert ("Operacion cancelada");
        program();
    }else{
        alert("Opcion incorrecta");
        finalizarCompra();
    }
}

/* Funcion para finalizar la compra */
function finalizarCompra(){
    for (const producto of carrito) {
    }
    let montoFinal = carrito.reduce((i, producto) => {
        return i + producto.precio
    }, 0)
    if (carrito.length > 0 ){
        alert (`El monto final es $${montoFinal}`);
        let comprar = Number(prompt("Desea finalizar la compra: \nSi = 1 \nNO = 2"));
        if (comprar == 1){
        let met = prompt ("1)Efectivo\n2)Tarjeta de Credito\n3)Transferencia\n4)Volver al menu");
        switch (met){
            case "1":
                alert("Abonando en efectivo tiene un 5% de descuento en el local." + `\nEl monto a abonar es $${montoFinal - montoFinal*0.05}`)
                concretarPago();
                break;
            case "2":
                alert("Se aceptan las siguientes tarjetas: \n VISA - MASTERCARD - AMERICAN EXPRESS \n1 Pago sin interes\n3 Pagos 5% de interes \n6 Pagos 10% de interes\n12 Pagos 15% de interes")
                interes();
                concretarPago();
                break;
            case "3":
                alert("El cbu es: 0000000000000000000000001" + `El monto a abonar es $${montoFinal}`)
                concretarPago();
                break;
            case "4":
                program()
                break;
            default:
                alert("Opcion ingresada incorrecta")
                program()
                break;    
        }
        }else {
           program();
        }   
    }else{
        alert ("Su carrito esta vacio");3
        program();
    }
}

/* Funcion para ver las formas de pago */
function formaDePago(){
    let fdp = prompt("Formas de pago (Ingrese la opción para más información): \n1)Efectivo\n2)Tarjeta de Credito\n3)Transferencia\n4)Volver al menu");
    switch (fdp){
        case "1":
            alert("Abonando en efectivo tiene un 5% de descuento en el local.")
            formaDePago()
            break;
        case "2":
            alert("Se aceptan las siguientes tarjetas: \n VISA - MASTERCARD - AMERICAN EXPRESS \n1 Pago sin interes\n3 Pagos 5% de interes \n6 Pagos 10% de interes\n12 Pagos 15% de interes")
            formaDePago()
            break;
        case "3":
            alert("El cbu es: 0000000000000000000000001")
            formaDePago()
            break;
        case "4":
            program()
            break;
        default:
            alert("Opcion ingresada incorrecta")
            program()
            break;    
    }
}

/* Funcion para eliminar un producto */ 
function eliminarProducto(){
    if (carrito.length > 0){
        let id = parseInt(prompt("Ingrese el número del producto que desea eliminar el carrito"));
        const index = carrito.findIndex(producto => producto.id === id)
        if (index !== -1){
            carrito.splice(index, 1);
            alert("El producto fue eliminado del carrito")
        }
        verCarrito();
    }else{
        alert ("Su carrito esta vacio");3
        program();
    }

}


/* Simulador de login */
while(verdad){
    if(nombre === "" || edad === "" || domicilio === "" || dni === "" ){
        alert("DEBE COMPLETAR TODOS LOS DATOS PARA PODER INGRESAR AL MENU")
        nombre = prompt("Ingrese su nombre");
        edad = prompt("Ingrese su edad");
        domicilio = prompt("Ingrese su domicilio");
        dni = prompt("Ingrese su dni");
    }else{
        program();
    }
}

/* Programa */
function program() {
    while (verdad){
        let opcion = prompt("Ingrese una opción: \n1) Ver Productos \n2) Buscar Producto \n3) Ver Carrito \n4) Eliminar Producto Del Carrito  \n5) Finalizar Compra   \n6) Ver Formas de Pago \n7) Ver Datos del Cliente \n8) Salir");
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
                 eliminarProducto();
                break;
            case "5":
                finalizarCompra();
                break;
            case "6":
                formaDePago();
                break;
            case "7":
                alert(persona.verPersona())
                break;
            case "8":
                verdad = false;
                break;
            default:
                alert("Ingres una opcion valida");
                opcion = prompt("Ingrese una opción: \n1) Ver Productos \n2) Buscar Producto \n3) Ver Carrito \n4) Eliminar Producto Del Carrito  \n5) Finalizar Compra   \n6) Ver Formas de Pago \n7) Ver Datos del Cliente \n8) Salir");
                break;
        }
    }
}
