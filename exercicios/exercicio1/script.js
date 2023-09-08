window.onload = function () {
    document.getElementById("btn").addEventListener('click', btn_click);
}

function btn_click() {
    var num = parseInt(document.getElementById('num').value);

    var intervalo='';
    var soma = 0;
    // Verifique se o número é um valor válido
    if (!isNaN(num) && num > 0) {
        for (var i = 1; i <= num; i++) {
            intervalo += i + ' ';
            soma += i;
        }
        document.getElementById('intervalo').innerHTML = `<b>INTERVALO:</b> ${intervalo}`;
        document.getElementById('resultado').innerHTML = `<b>SOMATÓRIA DO INTERVALO:</b> ${soma}`;

    } else {
        // Se o número não for válido, exiba uma mensagem de erro
        document.getElementById('resultado').textContent = 'Digite um número válido.';
    }
}