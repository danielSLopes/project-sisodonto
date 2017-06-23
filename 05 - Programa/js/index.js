start();
var i = 0;
function start() {
    var buttonAdd = document.getElementById('adicionar');
    
    buttonAdd.onclick = function() { 
        addNewValue();
        
    }
}

function addNewValue() {
    var inputProduto = document.getElementById('p1');
    var inputQuantidade = document.getElementById('q1');
    if (inputProduto.value.trim() == '' || inputQuantidade.value.trim() == '') {
        alert('Preencha os campos!')
    } else {
        var item = document.createElement('option');
        var list = document.getElementById('lista');
        list.appendChild(item);

        var texto = document.createTextNode('Quantidade: ' + inputQuantidade.value + ' - Produto: ' + inputProduto.value);
        item.appendChild(texto);

    }

    i++;
    localStorage.setItem("PRODUTO "+i,inputProduto.value);
    localStorage.setItem("QUANTIDADE "+i,inputQuantidade.value);

  
}
