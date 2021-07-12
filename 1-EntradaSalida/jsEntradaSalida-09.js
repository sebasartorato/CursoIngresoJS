/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var nuevoSueldo;
	var porcentaje;

	sueldo=document.getElementById('txtIdSueldo').value;
	sueldo=parseInt(sueldo);


	porcentaje=prompt('Ingrese el porcentaje de aumento');
	porcentaje=parseInt(porcentaje);
	
	nuevoSueldo = (sueldo * porcentaje) / 100 + sueldo;


	document.getElementById('txtIdResultado').value=nuevoSueldo;


}
