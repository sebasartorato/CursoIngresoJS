function mostrar()
{
	//Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
	var edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if (edad > 12 && edad < 18)
	{
		alert('Es adolescente');
	}
	

}//FIN DE LA FUNCIÓN