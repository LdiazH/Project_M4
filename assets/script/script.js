//Array productos
const productos = [
    {   
        id:"1",
        nombre: "Leche",
        precio: 1000,
    
    },
    {
        id:"2",
        nombre: "Pan de molde",
        precio: 2000,
    
    },
    {
        id:"3",
        nombre: "Queso",
        precio: 1200,
    
    },
    {
        id:"4",
        nombre: "Mermelada",
        precio: 890,
    
    },
    {
        id:"5",
        nombre: "Azúcar",
        precio: 1300,
    
    },

]
//Array carrito de compras
const carrito = [];

//Funcion comprando
function comprando(){
    //primer mensaje   
    let mensaje = "";
for (let i=0; i<productos.length;i++){
    mensaje += [i+1]+".-" + productos[i].nombre+" "+"$" + productos[i].precio +"\n";
}
alert("Productos disponible:"+ "\n"+mensaje);

let menuCompra = prompt("Ingresa el numero del producto que deseas agregar al carrito.");

// let product = productos.map((item)=>{
//     let newItem = item.nombre
//     let price = item.precio
//     return {newItem, price}
// });
// console.log(product)



//seleccion de unidades a comprar
switch(menuCompra){
    case"1":
        addProductcart("1");
        break;
    case"2":
        addProductcart("2");
        break;
    case"3":
        addProductcart("3");
        break;
    case"4":
        addProductcart("4");
        break;
    case"5":
        addProductcart("5");
        break;
    default:
        alert("Numero incorrecto, por favor selecciona un producto disponible");
        comprando();
        break; 
};

function addProductcart (id){
    var unidad = parseInt(prompt("Ingresa la cantidad de unidades:"));
    const producto = productos.find((item)=>{
        return item.id == id
    });
    producto.unidades = unidad;
    producto.subtotal = producto.precio*unidad;

    carrito.push(producto);
}



};

comprando();
console.log(carrito);

//funcion mostrar detalles de la compra
function chart (){
    //detalle carrito de compras
    let mensaje2=""
    let subTotal =0
    for (let j=0; j<carrito.length;j++){
        mensaje2 += carrito[j].unidades+" "+carrito[j].nombre+"(s)"+" "+"agregados al carrito"+"\n";
        subTotal += carrito[j].subtotal;
}



alert(mensaje2+"\n"+"Total Carrito:"+" "+"$"+subTotal);


}

chart();

//Funcion Seguir

function seguir(){
    //Calculo del total del carrito
    const total = carrito.reduce((acumulador, producto) => {
        return acumulador += producto.subtotal;
    }, 0);
    
    console.log(total)
    
    //pregunta seguir comprando
    let yesOrNot = prompt("¿Deseas seguir agregando productos? (s/n)");

    if(yesOrNot === "s"){
        comprando();
        chart();
        seguir();

    }else if(yesOrNot==="n"){
        alert(`Total de la compra:$ ${total}`);
    }

}
seguir();

alert("Muchas Gracias por su compra, vuelva pronto");
