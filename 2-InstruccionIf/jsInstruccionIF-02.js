function mostrar()
{
	//tomo la edad  
	
	var edad;
	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad<18)
	{
		alert("Es menor");
	}
	else
	{
		alert("Es mayor");
	}


}//FIN DE LA FUNCIÓN