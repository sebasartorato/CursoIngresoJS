function mostrar()
{
	//tomo la edad  
	var edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if (edad<18)
	{
		alert("Es menor");
			if (edad>12)
		{	
			alert("Es adolescente");
		}
	}
	

}//FIN DE LA FUNCIÓN