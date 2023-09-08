window.onload = function () {
    document.getElementById("btn").addEventListener('click', btn_click);
}

function btn_click() {
    var km = parseFloat(document.getElementById('km').value);
    var custo = parseFloat(document.getElementById('custo').value);
    var custoTotal = (km * custo).toFixed(2);

    var totalLitro = km/8;

    document.getElementById('resultado').innerHTML = `<hr><b>Total de Litros de Combustível gasto: </b>${totalLitro} litro(s)<br><b>Total gasto: </b>R$ ${custoTotal}`;
}