window.onload = function () {
    document.getElementById("btn").addEventListener('click', btn_click);
}

function btn_click() {

    // Pegando os nomes dos produtos
    var nome1 = document.getElementById('nome1').value;
    var nome2 = document.getElementById('nome2').value;
    var nome3 = document.getElementById('nome3').value;

    //pegando os preços
    var preco1 = parseFloat(document.getElementById('preco1').value);
    var preco2 = parseFloat(document.getElementById('preco2').value);
    var preco3 = parseFloat(document.getElementById('preco3').value);

    //quantidades dos produtos
    var qnt1 = parseInt(document.getElementById('qnt1').value);
    var qnt2 = parseInt(document.getElementById('qnt2').value);
    var qnt3 = parseInt(document.getElementById('qnt3').value);

    total1 = preco1*qnt1;
    total2 = preco2*qnt2;
    total3 = preco3*qnt3;

    total = total1+total2+total3;

    if (nome1 == '' || nome2 == '' || nome3 == '' || preco1 == 0 || preco2 == 0 || preco3 == 0 || qnt1 == 0 || qnt2 == 0 || qnt3 == 0) {
        document.getElementById('resultado').innerHTML = `Preencha todos os campos`;
    } else {
        document.getElementById('resultado').innerHTML = `<hr>
    <table class="table table-dark">
    <thead>
        <th>Nome do Produto</th>
        <th>Preço (R$)</th>
        <th>Quantidade</th>
        <th>Total (R$)</th>
    </thead>
    <tbody>
        <tr>
            <td>${nome1}</td>
            <td>R$ ${preco1}</td>
            <td>${qnt1}</td>
            <td class="table-active">R$ ${total1}</td>
        </tr>
        <tr>
            <td>${nome2}</td>
            <td>R$ ${preco2}</td>
            <td>${qnt2}</td>
            <td class="table-active">R$ ${total2}</td>
        </tr>
        <tr>
            <td>${nome3}</td>
            <td>R$ ${preco3}</td>
            <td>${qnt3}</td>
            <td class="table-active">R$ ${total3}</td>
        </tr>
    </tbody>
    <tfoot  class="table-success">
        <tr>
            <td>total: </td>
            <td>R$ ${preco1+preco2+preco3}</td>
            <td>${qnt1+qnt2+qnt3}</td>
            <td class="table-active">R$ ${total}</td>
        </tr>
    </tfoot>
</table>
    `;
    }
}