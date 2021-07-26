/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;
	var flagFirst;
	contador=0;
	acumulador=0;
	sumaPositivos=0;
	multiplicacionNegativos=0;
	respuesta='si';
	flagFirst=0;

	while (respuesta == 'si')
	{
		contador++;
		numeroIngresado = prompt('Ingrese un numero:');
		numeroIngresado = parseInt(numeroIngresado);
		respuesta = prompt('Desea agregar otro numero?');

		if (flagFirst==0)
		{
			if (numeroIngresado<0)
			{
				flagFirst=1;
				multiplicacionNegativos=1;
			}
		}
		
		if (numeroIngresado>0)
		{
			acumulador = acumulador + numeroIngresado;
			sumaPositivos = acumulador;
		}
		else
		{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}

	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN