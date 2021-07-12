/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var perimetro; 
    var cantidad; 

    largo = document.getElementById('txtIdLargo').value;
    largo = parseInt(largo);

    ancho = document.getElementById('txtIdAncho').value;
    ancho = parseInt(ancho);

    perimetro = (largo + ancho) * 2 ;
    
    cantidad = perimetro * 3;
    cantidad = parseInt(cantidad);

    alert("La cantidad de hilos de alambre a comprar será de: " + cantidad);

}
function Circulo () 
{
	var perimetro;
    var radio; 
    var cantidad; 

    radio = document.getElementById('txtIdRadio').value;
    radio = parseInt(radio);

    perimetro = 2 * 3.14 * radio;

    cantidad = perimetro * 3;
    

    alert("La cantidad de hilos de alambre a comprar será de: " + cantidad);
}
function Materiales () 
{
	var largo;
    var ancho; 
    var area;
    var cantidadCemento;
    var cantidadCal;
    var mensaje1;
    var mensaje2;

    largo = document.getElementById('txtIdLargo').value;
    largo = parseInt(largo);

    ancho = document.getElementById('txtIdAncho').value;
    ancho = parseInt(ancho);

    area = ancho * largo;
    

    cantidadCemento = area * 2;

    cantidadCal = area * 3;

    mensaje1 = "La cantidad de bolsas de cemento serán de: ";
    mensaje1 = mensaje1 + cantidadCemento;

    mensaje2 = "La cantidad de bolsas de cal serán de: ";
    mensaje2 = mensaje2 + cantidadCal; 

    alert(mensaje1);
    alert(mensaje2);




}