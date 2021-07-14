function mostrar()
{
		//Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
	//"EXCELENTE" para notas igual a 9 o 10,
	//"APROBÓ" para notas mayores a 4,
	//"Vamos, la proxima se puede" para notas menores a 4
	
	var notaExamen;

	notaExamen = Math.floor(Math.random() * 10) + 1;
	notaExamen = parseInt(notaExamen);

	if (notaExamen > 8 && notaExamen == 10)
	{
		alert(notaExamen + ' EXCELENTE');
	}
	else
	{
		if (notaExamen < 9 && notaExamen > 4)
		{
			alert(notaExamen + ' APROBÓ');
		}
		else  
		{
			if (notaExamen < 4)
			{
				alert(notaExamen + " Vamos, la proxima se puede");
			}
		}
	}


}//FIN DE LA FUNCIÓN