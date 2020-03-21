//CODIGO
//VARIABLES GLOBALES PARA VALIDAR AL FINAL
var nombregood = false;
var dnigood = false;
var telefonogood = false;
var fechagood = false;
var adultosgood = false;
var niñosgood = false;

//FILTRO NOMBRE
function nombre() {
    var name = document.getElementById("name").value;

    if (name.length >= 3 && name.length <= 15 && /^[a-zA-Z]+$/.test(name)) {
        document.getElementById("name").style.borderColor = "#00ff15"
        nombregood = true;
    } else {
        document.getElementById("name").style.borderColor = "red"
    }
}

//FILTRO TELEFONO
function telefono() {
    var phone = document.getElementById("phone").value;

    if (phone != "" && phone.length == 9 && /^[0-9]+$/.test(phone)) {
        document.getElementById("phone").style.borderColor = "#00ff15"
        telefonogood = true;
    } else {
        document.getElementById("phone").style.borderColor = "red"
    }
}

//FILTRO DNI
function dniok() {
    var mydni = document.getElementById("dni").value;
    var cadena = "TRWAGMYFPDXBNJZSQVHLCKET";
    var numeroDni = mydni.substring(0, 8);
    var valetra = mydni.substring(8, 9);
    var posicion = numeroDni % 23;
    var letra = cadena.substring(posicion, posicion + 1)

    if (letra == valetra && mydni.length == 9) {
        document.getElementById("dni").style.borderColor = "#00ff15"
        dnigood = true;
    } else {
        document.getElementById("dni").style.borderColor = "red"
        dnigood = false;
    }

}

//FILTRO FECHA SALIDA
function fecha() {
    var a = document.getElementById("datestart").value;
    var b = document.getElementById("dateend").value;

    if (a < b) {
        document.getElementById("dateend").style.borderColor = "#00ff15"
        fechagood = true;
    } else {
        document.getElementById("dateend").style.borderColor = "red"
        fechagood = false;
    }
}

//FILTRO ADULTOS
function adultos() {
    var a = document.getElementById("check1").value;

    if (a.length > 0 && a.length < 2 && /^[0-9]+$/.test(a)) {
        document.getElementById("check1").style.borderColor = "#00ff15"
        adultosgood = true;
    } else {
        document.getElementById("check1").style.borderColor = "red"
        adultosgood = false;
    }
}

//FILTRO NIÑOS
function niños() {
    var a = document.getElementById("check2").value;

    if (a.length > 0 && a.length < 2 && /^[0-9]+$/.test(a)) {
        document.getElementById("check2").style.borderColor = "#00ff15"
        niñosgood = true;
    } else {
        document.getElementById("check2").style.borderColor = "red"
        niñosgood = false;
    }
}

//VALIDAMOS PARA VER SI TODOS LOS DATOS SON CORRECTOS
function valido() {
    if (nombregood, dnigood, telefonogood, fechagood, adultosgood, niñosgood == true) {
        alert("     TODO CORRECTO\n     ENVIANDO\n     DATOS");
    } else {
        alert("VERIFICA LOS DATOS");
    }
}