/*Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/

function mostrar()
{
	var destinoIngresado
	
	destinoIngresado=txtIdDestino.value;
	
	switch(destinoIngresado)
	{
		case 'Bariloche':
		case 'Ushuaia':
		{
			alert('FRIO');
			break;
		}
		default:
		{
			alert('CALOR');
		}
	}

}//FIN DE LA FUNCIÓN