//Parcial 2020 ejercicio 2


/*  Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento"), Cantidad de bolsas, Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/



function mostrar()
{

    var tipo;
    var cantidadBolsa;
    var precioBolsa;
    var seguir;
    var descuento;
    var importeTotal;
    var importeConDesc;
    var acumuladorArena;
    var acumuladorCal;
    var acumuladorCemento;
    var acumuladorCantidad;
    var acumuladorTotal;
    var sumaCemento;
    var sumaCal;
    var sumaArena;
    var flagFirst;
    var tipoMasCaro;
    var precioBolsaMasCara;


    seguir = true;
    acumuladorCemento = 0;
    acumuladorCal = 0;
    acumuladorArena = 0;
    acumuladorCantidad =0;
    acumuladorTotal= 0;
    sumaCemento = 0;
    sumaCal = 0;
    sumaArena = 0;
    flagFirst =0;

    while (seguir==true)
    {
        tipo = prompt('Ingrese el tipo de producto: 1-Arena 2- Cemento 3-Cal')

        while (tipo !='arena' &&  tipo!= 'cal' && tipo != 'cemento')
        {
            tipo = prompt('Error, vuelva a ingresar el tipo de producto');
        }                 

        cantidadBolsa = prompt('Ingrese cantidad de bolsas:');
        cantidadBolsa = parseInt (cantidadBolsa);

        while (cantidadBolsa<0)
        {
            cantidadBolsa = prompt('Error, vuelva a ingresar una cantidad válida');
            cantidadBolsa = parseInt (cantidadBolsa);
        }

         precioBolsa = prompt('Ingrese el precio de cada bolsa');
         precioBolsa = parseInt (precioBolsa);

         while (precioBolsa<0)
         {
            precioBolsa = prompt('Error, ingrese un precio valido');
            precioBolsa = parseInt (precioBolsa);
         }

         if(flagFirst==0)
         {
           flagFirst =1;

           precioBolsaMasCara=precioBolsa;
           tipoMasCaro=tipo;

         }
         else 
         {
           if (precioBolsa > precioBolsaMasCara)
           {
            precioBolsaMasCara=precioBolsa;
            tipoMasCaro=tipo;
           }
         }

          switch (tipo)
            {
                case 'arena':
                  acumuladorArena = cantidadBolsa;
                  sumaArena = sumaArena + acumuladorArena;

                break;
                case 'cemento':
                  acumuladorCemento = cantidadBolsa;
                  sumaCemento = sumaCemento + cantidadBolsa;
                  break;
                case 'cal':
                  acumuladorCal = cantidadBolsa;
                  sumaCal = sumaCal + cantidadBolsa;
                  break;
            }



          importeTotal = cantidadBolsa * precioBolsa;
          acumuladorTotal = acumuladorTotal + importeTotal;

          acumuladorCantidad = acumuladorCantidad + cantidadBolsa;


      seguir = confirm('Desea seguir agregando productos?');
    }
    

    alert('El importe total a pagar será de:' +acumuladorTotal);

    
    if (acumuladorCantidad>10 && acumuladorCantidad <30)
    {
        descuento = 15;
  
    }
    else 
    {
        if (acumuladorCantidad>30 )
        {
          descuento = 25;
        }
        else 
        {
          if (acumuladorCantidad<10)
          {
            importeConDesc = "No hay descuento";
            alert(importeConDesc);
          }
        }
    }
     importeConDesc = acumuladorTotal - (acumuladorTotal *  descuento) / 100;
    alert('El importe con descuento será de:' +importeConDesc);
    

   

    if ( sumaArena > sumaCal && sumaArena > sumaCemento)
    {
      alert('Hay más cantidad de bolsas de arena con un total de: '+sumaArena);
    }
    else 
    {
      if (sumaCal >sumaCemento)
      {
        alert('Hay mas cantidad de cal. un total de: '+sumaCal);
      }
      else 
      {
        alert ('Hay mas cantidad de cemento c on untotal de: '+ sumaCemento); 
      }
    }


    
     alert ('El tipo mas caro es: '+tipoMasCaro);
}

