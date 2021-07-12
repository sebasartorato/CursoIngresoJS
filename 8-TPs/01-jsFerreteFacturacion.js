/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
    var precio2;
    var precio3;
    var suma;
   

    precio1 = document.getElementById('txtIdPrecioUno').value;
    precio1 = parseInt(precio1);

    precio2 = document.getElementById('txtIdPrecioDos').value;
    precio2 = parseInt(precio2);

    precio3 = document.getElementById('txtIdPrecioTres').value;
    precio3 = parseInt(precio3);

    suma = (precio1 + precio2 + precio3);
    
    alert(suma);

    
}
function Promedio () 
{
	var precio1;
    var precio2;
    var precio3;
    var promedio;

    precio1 = document.getElementById('txtIdPrecioUno').value;
    precio1 = parseInt(precio1);

    precio2 = document.getElementById('txtIdPrecioDos').value;
    precio2 = parseInt(precio2);

    precio3 = document.getElementById('txtIdPrecioTres').value;
    precio3 = parseInt(precio3);

    promedio = (precio1 + precio2 + precio3) / 3;

    alert(promedio);
}
function PrecioFinal () 
{
	var precio1;
    var precio2;
    var precio3;
    var precio1Iva;
    var iva1;
    var precio2Iva;
    var iva2;
    var precio3Iva;
    var iva3;

    precio1 = document.getElementById('txtIdPrecioUno').value;
    precio1 = parseInt(precio1);

    precio2 = document.getElementById('txtIdPrecioDos').value;
    precio2 = parseInt(precio2);

    precio3 = document.getElementById('txtIdPrecioTres').value;
    precio3 = parseInt(precio3);

    iva1 = (precio1 * 21 ) / 100;
    precio1Iva = precio1 + iva1;

    iva2 = (precio2 * 21) / 100;
    precio2Iva = precio2 + iva2;

    iva3 = (precio3 * 21) / 100;
    precio3Iva = precio3 + iva3;

    alert("Precio 1 = " + precio1Iva);
    alert("Precio 2 = " + precio2Iva);
    alert("Precio 3 = " + precio3Iva);

}