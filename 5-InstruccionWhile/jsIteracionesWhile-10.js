/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.si
3-Cantidad de positivos.si
4-Cantidad de negativos.
5-Cantidad de ceros.si
6-Cantidad de números pares.si
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var contadorNegativos;
	var contadorPositivos;
	var contadorCeros;
	var contadorPares;
	var promedioNegativos;
	var promedioPositivos;
	var diferencia;
	var resto;
	sumaNegativos = 0;
	sumaPositivos = 0;
	contador = 0;
	contadorNegativos = 0;
	contadorPositivos = 0;
	contadorCeros = 0;
	contadorPares = 0;
	promedioNegativos= 0;
	diferencia=0;
	respuesta=true;

	while(respuesta==true)
	{
		numeroIngresado = prompt('Ingrese un numero:');
		numeroIngresado = parseInt(numeroIngresado);

		resto = numeroIngresado %2;

		if (numeroIngresado>0)
		{
			contadorPositivos++;
			sumaPositivos = sumaPositivos + numeroIngresado;			
		}
		else 
		{
			if (numeroIngresado<0)
			{
				contadorNegativos++;
				sumaNegativos = sumaNegativos + numeroIngresado;
			}
			else
			{
				contadorCeros++;
			}
		}

		if (resto == 0)
		{
			contadorPares++;

		}
		
		respuesta=confirm("desea continuar?");

	}//fin del while

	promedioNegativos = sumaNegativos / contadorNegativos;
	promedioPositivos = sumaPositivos / contadorPositivos;
	diferencia = sumaPositivos + sumaNegativos; 


	document.write("la dif de negativos positivos es : "+diferencia);
	document.write("<br>");
	document.write(" la suma de negativos es de: " + sumaNegativos);
	document.write("<br>");
	document.write(" la suma de positivos es de: " + sumaPositivos);
	document.write("<br>");
	document.write(" la cantidad de positivos es de: " + contadorPositivos);
	document.write("<br>");
	document.write(" la cantidad de negativos es de: " + contadorNegativos);
	document.write("<br>");
	document.write(" la cantidad de ceros es de: " + contadorCeros);
	document.write("<br>");
	document.write(" la cantidad de pares es de: " + contadorPares);
	document.write("<br>");
	document.write(" el promedio de negativos es de: " + promedioNegativos);
	document.write("<br>");
	document.write(" el promedio de positivos es de: " + promedioPositivos);




}//FIN DE LA FUNCIÓN