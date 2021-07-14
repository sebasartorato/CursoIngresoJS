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
    var lamparaPrecioFinal;
    var lamparaPrecioXUnidad;
    var lamparaPrecioFinalConIng;
    var cantidadLamparas;
    var marca;
    var descuento;
    var ingBruto;
    var mensaje;

    lamparaPrecioXUnidad = 35;
    lamparaPrecioXUnidad = parseInt(lamparaPrecioXUnidad);

    lamparaPrecioFinal = parseInt(lamparaPrecioFinal);
    ingBruto=parseInt(ingBruto);
    
    cantidadLamparas = document.getElementById('txtIdCantidad').value;
    cantidadLamparas = parseInt(cantidadLamparas);

    marca = document.getElementById('Marca').value;

    ingBruto = (lamparaPrecioFinal * 10 ) / 100;


   //A

    if (cantidadLamparas > 5)
    {
        lamparaPrecio = lamparaPrecioXUnidad * cantidadLamparas;
        descuento = (lamparaPrecio * 50 ) / 100;
        lamparaPrecioFinal = lamparaPrecio - descuento;
        document.getElementById('txtIdprecioDescuento').value=lamparaPrecioFinal;
    }
    //B
    else
    {
        if (cantidadLamparas == 5 && marca == 'ArgentinaLuz')
        {
            lamparaPrecio = lamparaPrecioXUnidad * cantidadLamparas;
            descuento = (lamparaPrecio * 40 ) / 100;
            lamparaPrecioFinal = lamparaPrecio - descuento;
            document.getElementById('txtIdprecioDescuento').value=lamparaPrecioFinal;

        }
        else
        {
            if (cantidadLamparas == 5 && marca != 'ArgentinaLuz')
            {
                lamparaPrecio = lamparaPrecioXUnidad * cantidadLamparas;
                descuento = (lamparaPrecio * 30 ) / 100;
                lamparaPrecioFinal = lamparaPrecio - descuento;
                document.getElementById('txtIdprecioDescuento').value=lamparaPrecioFinal;
            
            }
            else
            {
                if (cantidadLamparas == 4 && marca == 'ArgentinaLuz' && marca == 'FelipeLamparas')
                {
                    lamparaPrecio = lamparaPrecioXUnidad * cantidadLamparas;
                    descuento = (lamparaPrecio * 25 ) / 100;
                    lamparaPrecioFinal = lamparaPrecio - descuento;
                    document.getElementById('txtIdprecioDescuento').value=lamparaPrecioFinal;

                }
                else
                {
                    if (cantidadLamparas == 4 && marca != 'ArgentinaLuz' && marca != 'FelipeLamparas')
                    {
                        lamparaPrecio = lamparaPrecioXUnidad * cantidadLamparas;
                        descuento = (lamparaPrecio * 20 ) / 100;
                        lamparaPrecioFinal = lamparaPrecio - descuento;
                        document.getElementById('txtIdprecioDescuento').value=lamparaPrecioFinal; 
                    }
                    else
                    {
                        if (cantidadLamparas == 3 && marca == 'ArgentinaLuz')
                        {
                            lamparaPrecio = lamparaPrecioXUnidad * cantidadLamparas;
                            descuento = (lamparaPrecio * 15 ) / 100;
                            lamparaPrecioFinal = lamparaPrecio - descuento;
                            document.getElementById('txtIdprecioDescuento').value=lamparaPrecioFinal;
                        }
                        else
                        {
                            if (cantidadLamparas == 3 && marca == 'FelipeLamparas')
                            {
                                lamparaPrecio = lamparaPrecioXUnidad * cantidadLamparas;
                                descuento = (lamparaPrecio * 10 ) / 100;
                                lamparaPrecioFinal = lamparaPrecio - descuento;
                                document.getElementById('txtIdprecioDescuento').value=lamparaPrecioFinal;
                            }
                            else
                            { 
                                if (cantidadLamparas == 3 && marca != 'ArgentinaLuz' && marca != 'FelipeLamparas')
                                {
                                    lamparaPrecio = lamparaPrecioXUnidad * cantidadLamparas;
                                    descuento = (lamparaPrecio * 5 ) / 100;
                                    lamparaPrecioFinal = lamparaPrecio - descuento;
                                    document.getElementById('txtIdprecioDescuento').value=lamparaPrecioFinal; 
                                    
                                }
                                else
                                {
                                    if (lamparaPrecioFinal > 119)
                                    {
                                       ingBruto = (precio * 10 ) / 100;
                                       lamparaPrecioFinalConIng = lamparaPrecioFinal + ingBruto;
                                       mensaje = "Usted pago " , lamparaPrecioFinalConIng;
                                       mensaje = mensaje + " de IIBB siendo ";
                                       mensaje = mensaje + ingBruto;
                                       mensaje = mensaje + " el impuesto que se pagó. ";
                                       document.getElementById('txtIdprecioDescuento').value=mensaje; 
                                    }
                                }
                                }

                                }
                            }
                            }
                        } 
                    }
                }
            }            
