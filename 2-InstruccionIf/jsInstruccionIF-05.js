function mostrar()
{
	var edad;
	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);
	
	if (edad>18 || edad<13)
	{
		alert("no es adolescente");
	}

}//FIN DE LA FUNCIÓN