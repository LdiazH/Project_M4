//Array prosuctos
const productos = [
    {
        nombre: "Leche",
        precio: 1000,
    
    },
    {
        nombre: "Pan de molde",
        precio: 2000,
    
    },
    {
        nombre: "Queso",
        precio: 1200,
    
    },
    {
        nombre: "Mermelada",
        precio: 890,
    
    },
    {
        nombre: "Azúcar",
        precio: 1300,
    
    },

]
//Array carrito de compras
const carrito = [];

//Funcion comprando
function comprando(){
    let mensaje = "";
for (let i=0; i<productos.length;i++){
    mensaje += [i+1]+".-" + productos[i].nombre+" "+"$" + productos[i].precio +"\n";
}
alert("Productos disponible:"+ "\n"+mensaje);

let menuCompra = prompt("Ingresa el numero del producto que deseas agregar al carrito.");



switch(menuCompra){
    case"1":
        // productos[0].nombre.push(carrito);
        var unidad = parseInt(prompt("Ingresa la cantidad de unidades:"));
        carrito.push({nombre: "leche",unidades: unidad,subtotal:1000*unidad},);
        break;
    case"2":
        var unidad = parseInt(prompt("Ingresa la cantidad de unidades:"));
        carrito.push({nombre: "Pan de molde", unidades: unidad,subtotal:2000*unidad},);
        break;
    case"3":
        var unidad = parseInt(prompt("Ingresa la cantidad de unidades:"));
        carrito.push({nombre: "Queso", unidades: unidad,subtotal:1200* unidad},);
        break;
    case"4":
        var unidad = parseInt(prompt("Ingresa la cantidad de unidades:"));
        carrito.push({nombre: "Mermelada",unidades: unidad,subtotal:890* unidad},);
        break;
    case"5":
        var unidad = parseInt(prompt("Ingresa la cantidad de unidades:"));
        carrito.push({nombre: "Azúcar",unidades: unidad,subtotal:1300*unidad},);
        break;
    default:
        alert("Numero incorrecto, por favor selecciona un producto disponible");
        comprando();
        break; 

}
};

comprando();
console.log(carrito);

//funcion mostrar detalles de la compra
function chart (){
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
// function calcularTotal(){}
// const total = carrito.reduce((acumulador, producto) => {
//     return acumulador += producto.subtotal;
// }, 0);



// function total (){
//     let subtotal = "";
//     let resultado= 0;
// for (let i=0; i<carrito.length;i++){
//     subtotal += [i+1]+".-" + carrito[i].nombre+" "+"$" + carrito[i].precio +"\n";
//     resultado = carrito[i].precio * carrito[i].unidad
// }
// console.log(resultado);

// }
// total(); 