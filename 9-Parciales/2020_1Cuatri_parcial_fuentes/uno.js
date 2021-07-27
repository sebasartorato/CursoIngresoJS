/*Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
-el tipo (validar "barbijo" , "jabón" o "alcohol") ,
-el precio (validar entre 100 y 300),
-la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
-la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

function mostrar()
{
	var tipo;
	var cantidad;
	var precio;
	var cantidadAlcoholBarato;
	var cantidadAlcohol;
	var acumuladorAlcohol;
	var acumuladorBarbijo;
	var acumuladorJabon;
	var fabricanteJabon;
	var precioAlcoholBarato;
	var cantidadJabon;
	var cantidadBarbijo;
	var precioBarbijo;
	var precioJabon;
	var alcoholBaratoFabricante;
	var contador;	
	var flagFirst;
	var promedioAlcohol;
	var promedioBarbijo;
	var promedioJabon;

	contador = 0;
	acumuladorAlcohol = 0;
	acumuladorBarbijo = 0;
	acumuladorJabon = 0;
	cantidadAlcohol = 0;
	cantidadBarbijo = 0;
	cantidadJabon = 0;
	flagFirst = "es el primero";

	while (contador<5)
	{

		contador ++;
		tipo = prompt ('ingrese el tipo de producto');

		precio = prompt ('Ingrese precio ');
		precio = parseInt(precio);
				while (precio<100 || precio>300)
				{
					precio = prompt ('Ingrese precio');
					precio= parseInt(precio);
				}
		cantidad = prompt ('Ingrese cantidad');
		cantidad = parseInt (cantidad);
				while (cantidad<0)
				{
					cantidad = prompt ('Ingrese cantidad');
					cantidad = parseInt (cantidad);
				}
		
		marca = prompt('Ingrese marca');
		fabricante=prompt('ingrese fabricante');

		if(tipo=="alcohol")
		{
			
			if(flagFirst=="es el primero")
			{
				flagFirst = " ya no es";
				
				precioAlcoholBarato = precio;
				cantidadAlcoholBarato = cantidad;
				alcoholBaratoFabricante = fabricante;

			}
			else 
			{
				if (precio < precioAlcoholBarato)
				{
					precioAlcoholBarato = precio;
					cantidadAlcoholBarato = cantidad;
					alcoholBaratoFabricante = fabricante;
				}
			}

		}
		switch (tipo)
		{
			case 'alcohol':
				acumuladorAlcohol ++;
				cantidadAlcohol = cantidadAlcohol + cantidad;
				promedioAlcohol = cantidadAlcohol / acumuladorAlcohol;
				break;
			case 'barbijo':
				acumuladorBarbijo ++;
				cantidadBarbijo = cantidadBarbijo + cantidad;
				promedioBarbijo = cantidadBarbijo / acumuladorBarbijo;
				break;
			case 'jabon':
				acumuladorJabon ++;
				cantidadJabon = cantidadJabon + cantidad;
				promedioJabon = cantidadJabon / acumuladorJabon;
				break;	

		}
		
	}

	if (cantidadAlcohol>cantidadBarbijo && cantidadAlcohol >cantidadJabon)
		{
			alert('El alcohol es el mas abundante y su promedio es' + promedioAlcohol);
		}
		else
		{
			if (cantidadBarbijo > cantidadJabon)
			{
				alert ('El barbijo es el mas abundante y su promedio es' + promedioBarbijo);
			}
			else 
			{
				alert ('El jabon es el mas abundante y su promedio es' + promedioJabon);
			}
		}
		
	alert('alcohol mas barato es: ' + alcoholBaratoFabricante + ' y sale: $' + precioAlcoholBarato);

	alert('En total hay '+ cantidadJabon + ' jabones');
}
