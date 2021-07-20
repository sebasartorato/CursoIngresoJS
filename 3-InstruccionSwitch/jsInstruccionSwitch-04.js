function mostrar()
{
	/*al seleccionar un mes informar.
	si tiene 28 días.
	si tiene 30 días.
	si tiene 31 días.*/

	var mesDelAño;
	mesDelAño =txtIdMes.value;
	
	switch(mesDelAño)
	{
		case 'Enero':
		case 'Marzo':
		case 'Mayo':
		case 'Julio':
		case 'Agosto':
		case 'Octubre':
		case 'Diciembre':
		{
			alert('Sí tiene 31 días');
			break;
		}
		case 'Abril':
		case 'Junio':
		case 'Septiembre':
		case 'Noviembre':
		{
			alert('Sí tiene 30 días');
			break;
		}
		default:
		{
			alert('Si tiene 28 días');
		}
		
	}
}//FIN DE LA FUNCIÓN