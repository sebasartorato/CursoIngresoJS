/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/


function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temp;
	var seguir;
	var flagFirst;
	var nombreTempMayor;
	var tempMayor;
	var contadorSoltViudo;
	var contadorCasado;
	var contadorMayorViudo;
	var contadorFiebre;
	var contadorHombresSolteros;
	var edadAcumuladaHombresSolteros;
	
	seguir = true;
	flagFirst = 0;
	contadorSoltViudo =0;
	contadorCasado = 0;
	contadorMayorViudo =0;
	contadorFiebre =0;
	contadorHombresSolteros =0;
	edadAcumuladaHombresSolteros = 0;

	while (seguir==true)
	{
		nombre = prompt('Ingrese el nombre de la persona:');

		edad = prompt('Ingrese la edad:');
		edad = parseInt(edad);

		while (edad<0)
		{
			edad=prompt('Edad incorrecta, vuelva a ingresar una edad válida');
			edad=parseInt(edad);
		}
		
		sexo = prompt('Ingrese el sexo: M o F:');

		while (sexo != 'f' && sexo!= 'm')
		{
			sexo=prompt('Dato incorrecto. Indique el sexo');
		}

		estadoCivil = prompt('Indique el estado civil');
		
		while (estadoCivil != 'soltero' && estadoCivil != 'casado' && estadoCivil != 'viudo')
		{
			estadoCivil = prompt('Dato incorrecto. Vuelva a ingresar');
		}

		temp = prompt('Indique la temperatura:');
		temp = parseInt (temp);

		while (temp<0)
		{
			temp=prompt('Dato incorrecto. Indique la temperatura');
			temp=parseInt(temp);
		}

		if (flagFirst==0)
		{
			flagFirst=1;
			tempMayor = temp;
			nombreTempMayor = nombre;
		}
		else 
		{
			if (temp>tempMayor)
			{
				tempMayor = temp;
				nombreTempMayor = nombre;
			}
		}

		if (edad>17)
		{
			if (estadoCivil == 'viudo')
			{
				contadorMayorViudo++;
			}
		}
		
		
		switch(sexo)
		{
			case 'm':
				switch(estadoCivil)
				{
					case 'soltero':
					case 'viudo':
						contadorSoltViudo++;
						break;
					default:
						contadorCasado++;
						break;
				}
			break;
		}

		if (edad > 59 && temp > 37)
		{
			contadorFiebre++;
		}

		if (sexo=='m' && estadoCivil == 'soltero')
		{
			contadorHombresSolteros++;
			edadAcumuladaHombresSolteros = edadAcumuladaHombresSolteros + edad;
		}
		seguir = confirm('Desea seguir agregando gente?');
	}

	alert ('El nombre de la persona con mayor T es: '+nombreTempMayor);
	alert('Hay un total de '+contadorMayorViudo + ' viudos.');
	alert('Hay hombres solteros/viudos en total: '+contadorSoltViudo);
	alert('Hay personas grandes con mas de 38°: '+contadorFiebre);

	promedioHombresSolteros = edadAcumuladaHombresSolteros / contadorHombresSolteros;

	alert('El promedio de edad entre hombres solteros es de: '+promedioHombresSolteros);

}
