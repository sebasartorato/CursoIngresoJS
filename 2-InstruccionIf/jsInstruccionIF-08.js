function mostrar()
{
	//Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
    //pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.' 
	
	var edad;
	var estadoCivil;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	estadoCivil=document.getElementById('estadoCivil').value;

	if (edad > 17 && estadoCivil == 'Soltero')
	{
		alert("Es soltero y no es menor");
	}

}//FIN DE LA FUNCIÓN