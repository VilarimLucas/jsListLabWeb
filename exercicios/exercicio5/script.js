window.onload = function () {
    document.getElementById("btn").addEventListener('click', btn_click);
}

function btn_click() {
    var comp = parseFloat(document.getElementById('comp').value);
    var larg = document.getElementById('larg').value;
    var area = comp * larg;
    var custo = (area*36).toFixed(2);
    document.getElementById('resultado').innerHTML = `<br><b>ÁREA DO PISO: </b> ${area} m²<br><b>CUSTO DO ASSENTAMENTO: </b>R$ ${custo}`;
}