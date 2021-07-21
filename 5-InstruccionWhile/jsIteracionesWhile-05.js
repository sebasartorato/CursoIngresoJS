/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while (sexoIngresado != 'm' && sexoIngresado != 'f')
	{
		
		sexoIngresado = prompt('Vuelva a ingresar f o m');

	}
	document.getElementById('txtIdSexo').value = sexoIngresado;
	
}//FIN DE LA FUNCIÓN