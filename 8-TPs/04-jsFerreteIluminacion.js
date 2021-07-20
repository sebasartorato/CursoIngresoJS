/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var lamparaPrecio;
    var lamparaPrecioXUnidad;
    var lamparaPrecioFinal;
    var lamparaPrecioFinalConIB;
    var ingBruto;
    var cantidadLamparas;
    var marca;
    var descuento;
    var mensaje;

    cantidadLamparas = document.getElementById('txtIdCantidad').value;
    cantidadLamparas = parseInt(cantidadLamparas);
   
    marca = document.getElementById('Marca').value;
 
    lamparaPrecioXUnidad = 35;
    lamparaPrecio = lamparaPrecioXUnidad * cantidadLamparas;


    switch (cantidadLamparas)
    {
        case 5:
        {
            switch(marca)
            {
                case 'ArgentinaLuz':
                {    
                    descuento = 40;
                    break;
                }
                default:
                {
                    descuento = 30;
                    break;
                }
            }
            break;
        }
        case 4:
        {
            switch(marca)
            {
                case 'ArgentinaLuz':
                case 'FelipeLamparas':
                {
                    descuento = 25;
                    break;
                }
                default:
                {
                    descuento = 20;
                    break;
                }
            }
            break;
        }
        case 3:
        {
            switch(marca)
            {
                case 'ArgentinaLuz':
                {
                    descuento = 15;
                    break;
                }
                case 'FelipeLamparas':
                {
                    descuento = 10;
                    break;
                }
                default:
                {
                    descuento = 5;
                    break;
                }
            }
            break;
        }
        case 1:
        case 2:
        {
            switch(marca)
            {
                case 'ArgentinaLuz':
                case 'FelipeLamparas':
                case 'JeLuz':
                case 'HazIluminacion':
                {
                    descuento = 0;
                    break;
                }
            }
            break;
        }
        default:
        {
            descuento = 50;
            break;
        }
    }

    lamparaPrecioFinal = lamparaPrecio - (lamparaPrecio * descuento) / (100);
    
    document.getElementById('txtIdprecioDescuento').value = lamparaPrecioFinal;
    
    ingBruto = (lamparaPrecioFinal * 10 ) / 100;

    if (lamparaPrecioFinal>120)
    {
        lamparaPrecioFinalConIB = lamparaPrecioFinal + ingBruto;
        document.getElementById('txtIdprecioDescuento').value=lamparaPrecioFinalConIB;
        mensaje = "Usted pagó " + ingBruto + " de IIBB.";
        alert(mensaje);
    }
    
}

