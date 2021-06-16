var peliculas = [];//Array con mis elementos

    function leerXML() {
        // lee desde GitHub.
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                cargarSeries(this);
            }
        };
        xhr.open("GET", "https://marcosfa7.github.io/CMV-publico/ProyectoSinAngular/datos.xml", true);
        // xhr.open("GET", "datos.xml", true);
        xhr.send();
    }

    function cargarSeries(xml) {
        var i;
        var usrNom;
        var usrFoto;
        var pie;
        var detalle;
        var elemento = [];
        var xmlDoc = xml.responseXML;

        var x = xmlDoc.getElementsByTagName("elemento");
        // obtenemos algo así como x=[{USR1},{USR2}...,{CANDIDO}]

        // tabla es una variable string que contiene codigo
        // html para poder mostrar en pantalla el XML con formato tabla

        //let tabla2 ="";
        for (i = 0; i < x.length; i++) {
            // leo las etiquetas que me interesan del objeto
            let usrNom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
            let usrFoto = x[i].getElementsByTagName("foto")[0].childNodes[0].nodeValue;
            let pie = x[i].getElementsByTagName("pie")[0].childNodes[0].nodeValue;
            let detalle = x[i].getElementsByTagName("detalle")[0].childNodes[0].nodeValue;
            /*if (detalle.length > 200) {
              detalle = detalle.substring(0, 200);
              detalle += "...";
            }*/
            // actualizo la tabla de visualización
            elemento = [usrNom, usrFoto, pie, detalle];
            peliculas.push(elemento);
        }
        mostrarSeries();
    }

    function mostrarSeries() {
        let bloque = null;
        for (let i = 0; i < peliculas.length; i++) {
            let elemTit = peliculas[i][0];
            let elemImg = peliculas[i][1];
            let elemPie = peliculas[i][2];
            let elemDetalle = peliculas[i][3];
            bloque = `
        <div class="col" style: "height: auto">
          <div class="carta" class="card shadow-sm" >
            <div class="adelante">
              <img style="height:300px" src="`+ elemImg + `" alt="serie"/>
              <rect width="100%" height="100%" fill="#55595c"></rect><text class="tit" style="text-align:center; font-weight: bold;font-size: 40px;font-family: 'Indie Flower', cursive" x="50%" y="50%" fill="#eceeef">`+ elemTit + ` </text>
              
            </div>
            <div class="atras">
              <div class="card-body">
                <text class="tit" style="text-align:center; font-weight: bold;font-size: 20px;font-family: 'Indie Flower', cursive" x="50%" y="50%" fill="#eceeef">`+ elemPie + ` </text>
                <p class="card-text">`+ elemDetalle + ` </p>              
              </div>
            </div>
          </div>
        </div>`;
            document.getElementById("peliculas").innerHTML += bloque;
        };

        $("button").click(function () {
            $(".adelante").toggleClass("noche");
            $(".atras").toggleClass("noche");
            $(".carta").toggleClass("noche");
            $(".encabezado").toggleClass("noche");
            $(".elementoMenu").toggleClass("noche");
        });

    }