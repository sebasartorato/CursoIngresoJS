
function mostrar()
{
    var trianguloLado;
    var perimetro;
    var mensaje;

    trianguloLado = prompt("Ingrese la medida del triangulo", "0");
    trianguloLado = parseInt(trianguloLado);

    perimetro = (trianguloLado) + trianguloLado + trianguloLado ;
    
    
    mensaje = "El perimetro es de: ";
    mensaje = mensaje + perimetro;
   
    alert(mensaje);


}
