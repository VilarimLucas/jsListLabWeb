window.onload = function () {
    document.getElementById("btn").addEventListener('click', btn_click);
}

function btn_click() {
    var temp = parseFloat(document.getElementById('temp').value);
    var grau = document.getElementById('grau').value
    if (grau == 'celcius') {
        // Convertendo CELSIUS EM FARENHEIT
        temp = (temp*1.8)+32;
        document.getElementById('resultado').innerHTML = `<br><b>TEMPERATURA: </b>${temp}<b>ºF</b>`;
    } else {
        // Convertendo FARENHEIT EM CELSIUS
        temp = (temp-32)/1.8;
        document.getElementById('resultado').innerHTML = `<br><b>TEMPERATURA: </b>${temp}<b>ºC</b>`;
    }
}