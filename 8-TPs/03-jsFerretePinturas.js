/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaFah;
	var temperaturaCen;
	var mensaje;

	temperaturaFah = document.getElementById('txtIdTemperatura').value;
	temperaturaFah = parseInt(temperaturaFah);

	temperaturaCen = (temperaturaFah - 32) * 0.555;

	mensaje = temperaturaFah + " Fahrenheit son ";
	mensaje = mensaje + temperaturaCen;
	mensaje = mensaje + " centígrados";

	alert(mensaje);



}

function CentigradosFahrenheit () 
{
	var temperaturaCen;
	var temperaturaFah;
	var mensaje;

	temperaturaCen = document.getElementById('txtIdTemperatura').value;
	temperaturaCen = parseInt(temperaturaCen);

	temperaturaFah = (temperaturaCen / 0.555) + 32;

	mensaje = temperaturaCen + " centígrados son ";
	mensaje = mensaje + temperaturaFah;
	mensaje = mensaje + " Fahrenheit";

	alert(mensaje);

}
