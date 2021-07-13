
//Bienvenidos.
//Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
//Nombre: Sebastian Sartorato
//Division i


function mostrar()
{
    var precio;
    var porcentajeDesc;
    var precioFinalconDesc;

    precio = prompt("Ingrese el precio: " , "0");
    precio = parseInt(precio);

    porcentajeDesc = prompt("Ingrese el descuento deseado", "0");
    porcentajeDesc = parseInt(porcentajeDesc);

    
    precioFinalconDesc = precio -  (precio * porcentajeDesc) / 100;

    document.getElementById('elPrecioFinal').value = precioFinalconDesc;
   

}
