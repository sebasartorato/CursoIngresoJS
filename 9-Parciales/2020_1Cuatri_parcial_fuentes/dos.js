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
    var sumaCemento;
    var sumaCal;
    var sumaArena;
    var flagFirst;
    var tipoMasCaro;
    var precioBolsaMasCara;

    seguir = true;
    sumaCemento = 0;
    sumaCal = 0;
    sumaArena = 0;
    flagFirst =0;

    while (seguir==true)
    {
        tipo = prompt('Ingrese el tipo de producto: 1-Arena 2- Cemento 3-Cal')
        tipo = parseInt(tipo);

        while (tipo < 1 || tipo > 3)
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



      seguir = confirm('Desea seguir agregando productos?');
    }
    
    importeTotal = cantidadBolsa * precioBolsa;
    importeConDesc = importeTotal - (importeTotal *descuento) / 100;
    
    if (cantidadBolsa>10 && cantidadBolsa <30)
    {
        descuento = 15;  
    }
    else 
    {
        if (cantidadBolsa>30 )
        {
          descuento = 25;
        }
        else 
        {
          if (cantidadBolsa<10)
          {
            importeconDesc = "No hay descuento";
          }
        }
    }

    
    switch (tipo)
    {
        case 1:
          acumuladorArena = cantidadBolsa;
          sumaArena = sumaArena + acumuladorArena;
        break;
        case 2:
          acumuladorCemento = cantidadBolsa;
          sumaCemento = sumaCemento + cantidadBolsa;
          break;
        case 3:
          acumuladorCal = cantidadBolsa;
          sumaCal = sumaCal + cantidadBolsa;
          break;
    }

    if (acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento)
    {
      alert('Hay más cantidad de bolsas de arena con un total de: '+acumuladorArena);
    }
    else 
    {
      if (acumuladorCal > acumuladorCemento)
      {
        alert('Hay mas cantiddad de cal. un total de: '+acumuladorCal);
      }
      else 
      {
        alert ('Hay mas cantidad de cemento c on untotal de: '+ acumuladorCemento); 
      }
    }



    
    


}
