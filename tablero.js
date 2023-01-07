var tableros = document.getElementById('container');
var showNum = document.getElementById('numero');
var elBodysh = document.getElementById("cuerposh");

var playedNum = [0];

var cont = 0;
var detener = true;
var cartas = [];


var utilidades = {
    ordenarBurbuja: function(a) {
        var swapp;
        var n = a.length - 1;
        var x = a;
        do {
            swapp = false;
            for (var i = 0; i < n; i++) {
                if (x[i] > x[i + 1]) {
                    var temp = x[i];
                    x[i] = x[i + 1];
                    x[i + 1] = temp;
                    swapp = true;
                }
            }
            n--;
        } while (swapp);
        return x;
    },

    crearAleatorio: function(cantidad, inicio, fin) {
        let aleatorio = [];
        while (cantidad > 0) {
            let numero = Math.floor(Math.random() * (fin - inicio)) + inicio;
            let repetidos = aleatorio.find(item => item == numero);
            if (repetidos != undefined) {
                cantidad++;
            } else {
                aleatorio.push(numero);
                this.ordenarBurbuja(aleatorio);
            }
            cantidad--;
        }
        return (aleatorio);
    }
}

var tablas = {
    filas: 3,
    columnas: 15,
    crear: function() {
        for (let i = 1; i < 91; i++) {
            var celda = document.createElement('div');
            celda.className = 'celdas';
            celda.id = i;
            celda.appendChild(document.createTextNode(i));
            tableros.appendChild(celda);
        }
    },
    jugar: setInterval(function() {
        if (detener == true) {
            //cont = 0;
            clearInterval(this.jugar);
        } else {
            cont++;
            var numero = utilidades.crearAleatorio(1, 1, 90);
            var pintar = document.getElementById(numero);
            var comprovar;
            playedNum.forEach(function(element, index) {
                if (numero == element) {
                    comprovar = element
                }
            });
            console.log(comprovar);
            if (cont < 91) {
                if (comprovar == undefined) {
                    pintar.style = "background-color : yellow";
                    playedNum.push(numero);
                    showNum.innerHTML = numero;
                } else {
                    cont--;
                    //this.jugar();
                }
            } else {
                document.getElementById("juegar").disabled = true;
            }
        }
    }, 1000),
    crearCartillas: function() {
        document.getElementById("cuerposh").innerHTML = "";
        cartas = [];
        let contcart = 1;
        var valor = document.getElementById("numCart").value;

        do {
            let pabloq = this.llenarcartillas();
            cartas.push(pabloq);
            var nuevaCart = document.createElement("div");
            nuevaCart.className = "Cartilla";
            nuevaCart.id = "cartilla_" + contcart;
            nuevaCart.style = "border: 5px solid #456852";
            for (let j = 0; j < 27; j++) {
                var celda = document.createElement('div');
                celda.className = 'celdas';
                celda.id = "cart:" + contcart + "-celda:" + j;
                if (pabloq[j] == 0) {
                    celda.style = "background-color: gray";
                } else {
                    celda.appendChild(document.createTextNode(pabloq[j]));
                }
                nuevaCart.appendChild(celda);
            }
            elBodysh.appendChild(nuevaCart);
            elBodysh.appendChild(document.createElement("br"));
            elBodysh.appendChild(document.createElement("br"));
            contcart++;
        } while (contcart <= valor)
    },
    llenarcartillas: function() {
        let cartnum = [];
        let blockednum = utilidades.crearAleatorio(12, 0, 26);
        let valores = [];
        let sumador = 0;
        for (let p = 0; p < 10; p++) {
            switch (p) {
                case 1:
                    cartnum.push(utilidades.crearAleatorio(3, 1, 10))
                    break;
                case 2:
                    cartnum.push(utilidades.crearAleatorio(3, 11, 20))
                    break;
                case 3:
                    cartnum.push(utilidades.crearAleatorio(3, 21, 30))
                    break;
                case 4:
                    cartnum.push(utilidades.crearAleatorio(3, 31, 40))
                    break;
                case 5:
                    cartnum.push(utilidades.crearAleatorio(3, 41, 50))
                    break;
                case 6:
                    cartnum.push(utilidades.crearAleatorio(3, 51, 60))
                    break;
                case 7:
                    cartnum.push(utilidades.crearAleatorio(3, 61, 70))
                    break;
                case 8:
                    cartnum.push(utilidades.crearAleatorio(3, 71, 80))
                    break;
                case 9:
                    cartnum.push(utilidades.crearAleatorio(3, 81, 90))
                    break;
            }
        }
        for (let a = 0; a < 3; a++) {
            for (let b = 0; b < 9; b++) {
                valores.push(cartnum[b][a]);
            }
        }
        for (let t = 0; t < 26; t++) {
            for (let f = 0; f < 26; f++) {
                if (blockednum[t] == f) {
                    valores[f] = 0;
                }
            }
        }
        return (valores)
    }



}

//module.exports = crear;
//window.onload = tablas.dibujar();