/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var flagFirst;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var seguir;
	
	//iniciar variables
	flagFirst = true;
	seguir = true;

	while(seguir==true)
	{
		numeroIngresado = prompt('Ingrese un numero:');
		numeroIngresado = parseInt(numeroIngresado);

		if (flagFirst == true || numeroIngresado<numeroMinimo)
		{
			numeroMinimo = numeroIngresado;			
		}
		if (flagFirst == true || numeroIngresado>numeroMaximo)
		{
			numeroMaximo = numeroIngresado;	
		}
		flagFirst=false;
		seguir=confirm("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN