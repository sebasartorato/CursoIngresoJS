/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;
	var mensaje;
	
	nombre = prompt("Ingrese su nombre", "Sebastian Sartorato");
	mensaje = "su nombre es: " + nombre;

	alert(mensaje);
	

}

