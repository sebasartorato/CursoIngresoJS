/*Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un estudiante, la edad (validar) , el sexo (validar) y la nota del final (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de varones aprobados
b) El promedio de notas de los menores de edad
c) El promedio de notas de los adolescentes.
d) El promedio de notas de los mayores
e) El promedio de notas por sexo masculino y femenino*/


function mostrar()
{
    var nombre;
    var edad;
    var sexo;
    var notaFinal;
    var varonAprobado;
    var contadorMenores;
    var acumulador;
    var acumuladorAdolescente;
    var acumuladorMayores;
    var acumuladorNotaMujer;
    var acumuladorNotaVaron;
    var promedioNotasAlumnosMen;
    var promedioNotasAlumnosAdo;
    var promedioNotasMayores;
    var promedioNotasHombres;
    var promedioNotasMujeres;
    var contadorAdolescente;
    var flagFirst;
    var contadorMayores;
    var contadorVarones;
    var contadorMujeres;

    seguir = true;
    varonAprobado = 0;
    contadorMenores = 0;
    contadorAdolescente = 0;
    contadorMayores = 0;
    contadorVarones = 0;
    contadorMujeres = 0;
    acumulador = 0;
    acumuladorAdolescente = 0;
    acumuladorMayores = 0;
    acumuladorNotaVaron=0;
    acumuladorNotaMujer = 0;

    while (seguir == true)
    {
        nombre = prompt('Ingrese el nombre del alumno/a: ');
        edad = prompt('Ingrese la edad: ');
        edad = parseInt(edad);
        sexo = prompt('Ingrese el sexo: ');
        notaFinal = prompt('Nota final: ');
        notaFinal =parseInt(notaFinal);       
        
            if (sexo == 'm')
            {
                contadorVarones++;
                acumuladorNotaVaron = acumuladorNotaVaron + notaFinal;
                if (notaFinal >6)
                {
                    varonAprobado++;
                }
            }
            else 
            {
                if (sexo=='f')
                {
                    contadorMujeres++;
                    acumuladorNotaMujer = acumuladorNotaMujer + notaFinal;
                }
            }
            if (edad < 18) 
            {
                contadorMenores++;
                acumulador = acumulador + notaFinal;

                if (edad>12)
                {
                    contadorAdolescente++;
                    acumuladorAdolescente = acumuladorAdolescente + notaFinal;
                }
            }
            else 
            {
                if (edad>17)
                {
                    contadorMayores++;
                    acumuladorMayores = acumuladorMayores + notaFinal;
                }
            }

        seguir = confirm('Desea continuar?');
    }



    promedioNotasAlumnosMen = acumulador / contadorMenores;
    promedioNotasAlumnosAdo = acumuladorAdolescente / contadorAdolescente;
    promedioNotasMayores = acumuladorMayores / contadorMayores;
    promedioNotasHombres = acumuladorNotaVaron / contadorVarones;
    promedioNotasMujeres = acumuladorNotaMujer / contadorMujeres;
    
    document.write('Aprobaron ' + varonAprobado + ' varones');     //a
    document.write("<br>");
    document.write('Promedio final de menores de edad es: ' + promedioNotasAlumnosMen); //b
    document.write("<br>");
    document.write('Promedio final de adolescentes es: ' + promedioNotasAlumnosAdo); //c
    document.write("<br>");
    document.write('Promedio final de mayores es: ' + promedioNotasMayores); //d
    document.write("<br>");
    document.write('Promedio final de varones es: ' + promedioNotasHombres);
    document.write("<br>");
    document.write('Promedio final de mujeres es: ' + promedioNotasMujeres);
    


    






   
}
