//A una pareja se le pide los datos para mostrar un mensaje " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".

function mostrar()
{
    var nombre1;
    var nombre2;
    var peso1;
    var peso2;
    var pesosSumados;
    var promedioPeso;
    var mensaje;

    nombre1 = prompt ("Ingrese el primer nombre: " , "-");

    nombre2 = prompt("Ingrese el segundo nombre: ", "-");

    peso1 = prompt("Ingrese el peso de la primer persona: " , "0");
    peso1 = parseInt(peso1);

    peso2 = prompt("Ingrese el peso de la segunda persona: ", "0");
    peso2 = parseInt(peso2);

    pesosSumados = peso1 + peso2;

    promedioPeso = pesosSumados / 2;

    mensaje = "Ustedes se llaman: ";
    mensaje = mensaje + nombre1;
    mensaje = mensaje + " y ";
    mensaje = mensaje + nombre2; 
    mensaje = mensaje + " pesan ";
    mensaje = mensaje + peso1;
    mensaje = mensaje + " y ";
    mensaje = mensaje + peso2;
    mensaje = mensaje + " kilos, que sumados son: ";
    mensaje = mensaje + pesosSumados;
    mensaje = mensaje + " kilos y el proemdio de peso: ";
    mensaje = mensaje + promedioPeso;

    alert(mensaje);


}
