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
    const mensagemSucesso = `O contato: <b>${inputNomeContato.value}</b> foi adicionado à lista`;

    if (numeros.includes(parseInt(inputNumeroContato.value))) {
        alert(`O número: ${inputNumeroContato.value} já foi adicionado`);
    } if (contatos.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já existe, use um nome diferente`);
    } else {
        contatos.push(inputNomeContato.value);
        numeros.push(parseInt(inputNumeroContato.value));
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
    
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

function sucesso() {
    let mensagemSucesso = document.getElementsByClassName('success-message');
}


