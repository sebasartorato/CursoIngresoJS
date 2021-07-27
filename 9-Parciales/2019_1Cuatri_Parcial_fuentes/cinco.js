/*Bienvenidos (SOLO SWITCH).
una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%*/

function mostrar()
{
    var continente;
    var descuento;
    var dias;
    var precioDia;
    var medioPago;


    continente = txtMarca.value;
    precioDia = 100;
    dias = prompt('Ingrese cantidad de días:');
    medioPago = prompt('Ingrese medio de pago:');


    switch (continente)
    {
        case America:
            switch (medioPago)
            {
                case 'debito':
                    descuento = 60;
                break;
                default:
                    descuento = 50;
                break;
            }
            break;
        case África:
            switch (medioPago)
            {
                case 'mercadoPago':
                case 'efectivo':
                    descuento = 75;
                    break;
                default:
                    descuento = 60;
            } 
            break;
        case Europa:
            switch (medioPago)
            {
                case 'debito':
                    descuento = 35;
                break;
                case 'mercadoPago':
                    descuento = 30;
                break;
                default: 
                    descuento = 25;
                break;
            }
        default:
            descuento = 
            
    }

}
