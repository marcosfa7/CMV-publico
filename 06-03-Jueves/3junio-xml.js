// ejercicios con arrays


// pasos ejercicio con XML:
// generar el array desde el XML
// AÑADIR un botón para cada orden:
// 1 - ascendente por nombre de usuario
// 2 - asecendente por clave de usuario
// 3 - mostrar solamente el usuario solicitado
//    (input - .slice .indexOf)

// variable global de la pagina
// un array con un elemento por cada usuario del XML
// en realidad será un array de arrays, una matriz bidimensional
let registrados = [];


function leerXML() {
  // lee desde GitHub.
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      cargarArray(this);
    }
  };
  xhr.open("GET", "https://marcosfa7.github.io/CMV-publico/", true);
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

  let tabla = "<table><tr><th>NOMBRE</th><th>FOTO</th></tr>";
  for (i = 0; i < x.length; i++) {
    // leo las etiquetas que me interesan del objeto
    let usrNom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
    let usrPsw = x[i].getElementsByTagName("foto")[0].childNodes[0].nodeValue;
    // actualizo la tabla de visualización
    tabla += "<tr><td>" + usrNom + "</td><td>" + usrFoto + "</td></tr>";
    // actualizo el array bidimensional con los usuarios registrados
    let elemento = [usrNom, usrFoto];
    datos.push(elemento;
  }
  tabla += "</table>"
  document.getElementById("mensaje").innerHTML = tabla;

  // muestro en consola el array de usuarios registrados
  // una vez depurado, comentamos el codigo siguiente
  //  registrados.forEach((usuario) => {
  //    usuario.forEach((datos) => {
  //        console.log(datos);
  //     });
  //});
}

function ascNombre() {
  //Ordeno primero la matriz global ascendente por nombre
  datos.sort(
    (usuario1, usuario2) =>
      usuario1[0].localeCompare(usuario2[0]),
  );
  mostrar();
}

function mostrarFoto() {
  //obtenemos el usuario del campo input y
  //validamos que exista en el array
  //si no, mostramos un alert y no hacemos nada
  //si existe actualizamos el elemento con id clavebuscada
  //mostrar la clave

  //sintaxis jQuery: nombre = $("#nom").val()
  let inputClave =document.getElementById("nom");
  let usuarios=[];
  for (i = 0; i < datos.length; i++) {
    // leo las etiquetas que me interesan del objeto
    usrNom = datos[i][0];
    usrFotos = datos[i][1];
    if(usrNom==inputClave.value){
      elementos.push(datos[i]);
      break;    
    }
    
  }
  if (elementos.length>0){
    tabla = "<table><tr><th>EMPLEADO</th><th>CLAVE</th></tr>";
    elementos.forEach((usuario) => {
      tabla += "<tr><td>" + usuario[0] + "</td><td>" + usuario[1] + "</td></tr>";
    });
    tabla += "</table>"
    document.getElementById("claveBuscada").innerHTML = tabla;
  }else{
    alert("No existe");
  }
  

}

function desClave() {
  //Ordeno la matriz global
  //descendente por clave
  datos.sort(
    (usuario2, usuario1) =>
      usuario1[1].localeCompare(usuario2[1]),
  );
  mostrar();
}


function mostrar() {
  // muestro en pantalla el array de usuarios registrados
  // en formato tabla en el id solicitado
  let tabla = "";
  datos.forEach((elemento) => {
    elemento.forEach((datos) => {
      tabla = "<table><tr><th>USUARIO</th><th>FOTO</th></tr>";
      for (i = 0; i < datos.length; i++) {
        // leo las etiquetas que me interesan del objeto
        usrNom = datos[i][0];
        usrFoto = datos[i][1];
        // actualizo la tabla de visualización
        tabla += "<tr><td>" + usrNom + "</td><td>" + usrFoto + "</td></tr>";
        // actualizo el array bidimensional con los usuarios registrados
      }
      tabla += "</table>"
    });
  });
  document.getElementById("solicitado").innerHTML = tabla;
}



      // nombre del primer usuario
      //let indiceCampoNombre=0;
      //let indiceCampoClave=1;
      // obtengo el nombre del primer usuario
      //let nomUsr1 = registrados[0][indiceCampoNombre];
      // clave del usuario 3
      //let claUsr3 = registrados[2][indiceCampoClave];

