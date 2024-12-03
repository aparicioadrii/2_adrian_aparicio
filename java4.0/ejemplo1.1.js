// var nombre = prompt ("Dime tu nombre")
// var instituto = prompt ("Nombre del instituto")

// console.log (nombre);

// document.write("<h1>" +nombre + "</h1>")

// document.write(" <table border=\"1\">")
// document.write("<tr><th>Nombre</th><th>Instituto</th></tr>");
// document.write("<tr><td>" + nombre + "</td></tr>")
// document.write("</table>")

 // Asociar eventos con JavaScript

 // Cambiar texto del div con id mi caja cuando salgo de enciam del elemento


 document.getElementById("color_button").onclick = cambiarColor;
 document.getElementById("color_div").onmouseover = hola;
 document.getElementById("color_div").onmouseleave = adios;


function mostrarFexha() {
    var now = Date();
    console.log("Ahora son las" + now);
    // alert ("Ahora son las " + now)
    document.write("<h1>" + now + "</h1>");
}

var micaja = document.getElementById("micaja")

micaja.onmouseover = () => {
    micaja.style.backgroundColor = "green";
    micaja.style.fontSize = "40px"
    


}

micaja.onmouseleave = () => {
    micaja.innerHTML = "Hasta luego!";
}

