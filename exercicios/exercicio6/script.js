window.onload = function () {
    document.getElementById("btn").addEventListener('click', btn_click);
}

function btn_click() {
    var altura = parseFloat(document.getElementById('altura').value);
    var sexo = document.getElementById('sexo').value;
    var peso = 0;

    if (sexo == 'masc') {
        // Calculo de peso ideal para homens
        peso = (altura*72.7)-58;
        document.getElementById('resultado').innerHTML = `<br><b>Peso Ideal Masculino: </b>${peso} kg`;
    } else {
        // Calculo de peso ideal para mulheres
        peso = (altura*62.1)-44.7;
        document.getElementById('resultado').innerHTML = `<br><b>Peso Ideal Feminino: </b>${peso} kg`;
    }
}