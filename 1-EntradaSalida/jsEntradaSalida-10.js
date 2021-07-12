/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var descuento;
	var importeNuevo;
	

	importe = document.getElementById('txtIdImporte').value;
	importe=parseInt(importe);

	porcentaje = prompt("Porcentaje de descuento");
	porcentaje = parseInt(porcentaje);

	importeNuevo = importe - (importe * porcentaje / 100);

	document.getElementById('txtIdResultado').value=importeNuevo;



}
