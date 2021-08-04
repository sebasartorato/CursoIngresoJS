function mostrar()
{
	var nombre;
	var nacionalidad;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var seguir;
	var contadorMayoresSolteros;
	var flagTemperatura;
	var temperaturaMayor;
	var nacionalidadMayorTemp;
	var contadorMujeresSoltViudas;
	var contadorTerceraEdadTemp;
	var acumuladorCasadas;
	var contadorCasadas;
	var promedio;

	seguir = true;
	contadorMayoresSolteros =0;
	flagTemperatura = 0;
	contadorMujeresSoltViudas =0;
	contadorTerceraEdadTemp =0;
	acumuladorCasadas =0;
	contadorCasadas = 0;



	while (seguir==true)
	{
		nombre = prompt('Ingrese el nombre:');

		nacionalidad = prompt ('ingrese nacionalidad: ');

		edad = prompt('Ingrese edad:');
		edad = parseInt(edad);

		while (edad<0)
		{
			edad=prompt('Error. Ingrese numero correcto');
			edad=prompt(edad);
		}

		sexo = prompt('Ingrese sexo');

		while(sexo!= 'f' && sexo!= 'm')
		{
			sexo = prompt('Error. ingrese dato correcto');
		}

		estadoCivil = prompt('Ingrese estado civil');

		while(estadoCivil!= 'soltero' && estadoCivil != 'casado' && estadoCivil != 'viudo')
		{
			estadoCivil = prompt('Error. ingrese dato correcto');
		}

		temperatura = prompt('Ingrese temperatura');
		temperatura = parseInt (temperatura);

		while (isNaN(temperatura) == true)
		{
			temperatura = prompt ('Error. ingrese dato correcto');
			temperatura = parseInt(temperatura);
		}

		if (flagTemperatura == 0 || temperaturaMayor < temperatura)
		{
			flagTemperatura = 1;

			temperaturaMayor = temperatura;
			nacionalidadMayorTemp = nacionalidad;
		}

		switch (estadoCivil)
		{
			case 'soltero':
				if (edad > 17)
				{
					contadorMayoresSolteros++;
				}
			break;
		}

		switch (sexo)
		{
			case 'f':
				if (estadoCivil == 'soltero' || estadoCivil == 'viudo')
				{
					contadorMujeresSoltViudas++;
				}
				else
				{
						acumuladorCasadas = acumuladorCasadas + edad;
						contadorCasadas ++;
				}
			break;
		}

		if (edad > 60 && temperatura > 38)
		{
			contadorTerceraEdadTemp ++;
		}

		seguir=confirm('Desea seguir?: ');

	}

	alert('Nacionaldiad de mayor temp: '+nacionalidadMayorTemp);
	alert('Hay en total mayores de edad solteros: '+contadorMayoresSolteros);
	alert('Hay en total de mujeres solteras o viudas: '+ contadorMujeresSoltViudas);
	alert('Hay en total mayores de 60 con 38 de temperatura: '+contadorTerceraEdadTemp);

	promedio = acumuladorCasadas / contadorCasadas;
	alert('El promedio es: '+promedio);

	
}
