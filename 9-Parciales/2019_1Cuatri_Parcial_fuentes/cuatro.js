//Pedir dos números y mostrar el resultado: 
//Si son iguales los muestro concatenados.
//Si el primero es mayor, los resto,
//de lo contrario los sumo.
//Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje "la resta es xxx y superó el 10".


function mostrar()
{
    var numero1;
    var numero2;
    var suma;
    var resta;
    var mensaje;

    numero1 = prompt('Ingrese el primer numero', "0");
    numero1 = parseInt(numero1);

    numero2 = prompt('Ingrese el segundo numero', "0");
    numero2 = parseInt(numero2);

    resta = numero1 - numero2;
    suma = numero1 + numero2;

    if (numero1 > numero2)
    {
        if (resta > 10)
        {
            mensaje = "La resta es " + resta + " y superó al 10.";
        }
        else 
        {
            mensaje = "La resta es igual a: " + resta;
        }
    }
    else
    {
        if (numero1 < numero2)
        {
            mensaje = "La suma es igual a: " + suma;
        }
    }


alert(mensaje);
}
