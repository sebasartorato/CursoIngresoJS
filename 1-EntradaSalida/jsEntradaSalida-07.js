/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var suma;
	var mensaje;
	
	primerNumero=document.getElementById('txtIdNumeroUno').value;
	primerNumero=parseInt(primerNumero);
	
	segundoNumero=document.getElementById('txtIdNumeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	suma=primerNumero+segundoNumero;

	mensaje="la suma es" + suma;

	alert(mensaje);
}

function restar()
{

	var primerNumero;
	var segundoNumero;
	var resta;
	var mensaje;

	primerNumero=document.getElementById('txtIdNumeroUno').value;
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('txtIdNumeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	resta=primerNumero-segundoNumero;
	mensaje="la resta es: " + resta ;

	alert(mensaje);


}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var multiplicacion;
	var mensaje;

	primerNumero=document.getElementById('txtIdNumeroUno').value;
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('txtIdNumeroDos').value;
	segundoNumero=parseInt(segundoNumero);


	multiplicacion = primerNumero * segundoNumero;
	mensaje = "la multiplicacion es: " + multiplicacion;

	alert(mensaje);

}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var division;
	var mensaje;

	primerNumero=document.getElementById('txtIdNumeroUno').value;
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('txtIdNumeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	division = primerNumero / segundoNumero;
	mensaje = "la division es: "+division;

	alert(mensaje);

}

