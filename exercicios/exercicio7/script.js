var valores = [];

        function adicionarValor() {
            var valor = parseInt(document.getElementById('valor').value);
            if (!isNaN(valor)) {
                valores.push(valor);
                document.getElementById('valor').value = ''; // Limpa o campo de entrada
            }
        }

        function mostrarValores() {
            document.getElementById('resultado').innerHTML = `<hr><b>Valores Inseridos:</b> ${valores.join(', ')}`;
        }

        function mostrarMaiorValor() {
            if (valores.length > 0) {
                var maiorValor = Math.max.apply(null, valores);
                document.getElementById('resultado').innerHTML = `<hr><b>Maior Valor: </b> ${maiorValor}`;
            }
        }

        function mostrarMenorValor() {
            if (valores.length > 0) {
                var menorValor = Math.min.apply(null, valores);
                document.getElementById('resultado').innerHTML = `<hr><b>Menor Valor: </b> ${menorValor}`;
            }
        }