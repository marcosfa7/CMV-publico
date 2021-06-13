var peliculas =[];//Array con mis elementos

function leerXML() {
  // lee desde GitHub.
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      cargarArray(this);
    }
  };
  xhr.open("GET", "https://marcosfa7.github.io/CMV-publico/06-04-Viernes/datos.xml", true);
  // xhr.open("GET", "datos.xml", true);
  xhr.send();
}

function cargarArray(xml) {
  var i;
  var usrNom;
  var usrFoto;
  var elemento = [];
  var xmlDoc = xml.responseXML;

  var x = xmlDoc.getElementsByTagName("elemento");
  // obtenemos algo así como x=[{USR1},{USR2}...,{CANDIDO}]

  // tabla es una variable string que contiene codigo
  // html para poder mostrar en pantalla el XML con formato tabla

  let tabla = "<table><tr><th>NOMBRE</th><th>FOTOS</th></tr>";
  //let tabla2 ="";
  for (i = 0; i < x.length; i++) {
    // leo las etiquetas que me interesan del objeto
    let usrNom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
    let usrFoto = x[i].getElementsByTagName("foto")[0].childNodes[0].nodeValue;
    // actualizo la tabla de visualización
    tabla += "<tr><td>" + usrNom + "</td><td>" + usrFoto  + "</td></tr>";
    //tabla += "<tr><td>" + usrNom + "</td><td>" + "<div class=\"divOrla\"><img class=\'imgOrla\' src=\""+ usrFoto +"\"/></div>" + "</td></tr>";Este es el bueno
    //tabla2 += "<tr><td>" + "<div class=\"divOrla\"><img class=\'imgOrla\' src=\""+ usrFoto +"\"/></div>" + "</td></tr>";
    // actualizo el array bidimensional con los usuarios registrados
    elemento = [usrNom, usrFoto];
    peliculas.push(elemento);
  }
  tabla += "</table>"
  document.getElementById("mensaje").innerHTML = tabla;

  // muestro en consola el array de orla
  // una vez depurado, comentamos el codigo siguiente
    peliculas.forEach((elemento) => {
      elemento.forEach((datos) => {
          console.log(datos);
       });
  });
}


function mostrar() {
  $( "#mensaje2" ).toggle();
  //$("#mensaje2").show();
  // muestro en pantalla el array de usuarios registrados
  // en formato tabla en el id solicitado
  let bloque = "<section id=\"miOrla\" class='flex'> ";//bloque de imagenes que mostraremos en pantalla
  //peliculas.forEach((elemento) => {
  for (let i=0;i<peliculas.length;i++){
    //elemento.forEach((orla) => {
      //bloque = "";
      //for (i = 0; i < orla.length; i++) {
        // leo las etiquetas que me interesan del objeto
        let elemTit = peliculas[i][0];
        let elemImg = peliculas[i][1];
        // actualizo la tabla de visualización
        //bloque += "<div class=\"divOrla\"><img class=\"imgOrla\" src=\" + elemImg + \"/></div>";
        //tabla += "<tr><td>" + usrNom + "</td><td>" + "<div class=\"divOrla\"><img class=\'imgOrla\' src=\""+ usrFoto +"\"/></div>" + "</td></tr>";
        //bloque += "<div class=\"divOrla\"><img class=\"imgOrla\" src=\" + elemImg + \"/></div>";
        bloque +=
          `<figure class="container">
            <img class="img2" src="${elemImg}">
            <div class="text">
              <h3>${elemTit}</h3>
            </div>
          </figure>`;
        // actualizo el array bidimensional con los usuarios registrados
      //}
      
    //});
  };
  bloque += "</section>"
  document.getElementById("mensaje2").innerHTML = bloque;
}