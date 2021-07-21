/*
al presionar el botón, pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	numeroIngresado = parseInt(numeroIngresado);


	while (numeroIngresado > 10 || numeroIngresado < 0)
	{	
		numeroIngresado = prompt("Vuelva a ingresar un número entre 0 y 10.");
		
	} 

	document.getElementById('txtIdNumero').value=numeroIngresado;
}//FIN DE LA FUNCIÓN