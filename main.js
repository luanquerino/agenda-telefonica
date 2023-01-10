const form = document.getElementById('form-contato');
const contatos = [];
const numeros = [];

let = linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    totalContatos();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (contatos.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já foi adicionado`);
    } else {
        contatos.push(inputNomeContato.value);
        numeros.push(parseInt(inputNumeroContato.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';
    
        const corpoContato = document.querySelector('tbody');
        corpoContato.innerHTML = linha;

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML= linhas;
}

function totalContatos() {
    let somaDosContatos = 0;

    for (let i = 0; i < contatos.length; i++) {
        somaDosContatos += contatos[i];
    }

    return soma = contatos.length;
}


