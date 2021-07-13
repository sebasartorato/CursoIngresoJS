function mostrar()
{
	//Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).

	var edad;
	var mensaje;
	
	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if (edad>17)
	{
		mensaje = "Es mayor de 18";
	}

	else 
	{
		if (edad < 13)
		{
			mensaje = "Es niño";
		}
		else 
		{
			mensaje = "Es adolescente";
		}
	}
	
	

	alert(mensaje);
}

