const form = document.getElementById('form-contato');
const contato = [];
const numero = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaAgenda();
});

function adicionaLinha() {
        const inputNomeContato = document.getElementById('nome-contato');
        const inputNumeroContato = document.getElementById('numero-contato');

        if (contato.includes(inputNomeContato.value)) {
            alert(`O contato ${inputNomeContato.value} já existe!`);
        } else if (numero.includes(inputNumeroContato.value)) {
            alert(`O número ${inputNumeroContato.value} já existe!`);
        }
        else {
            contato.push(inputNomeContato.value);
            numero.push((inputNumeroContato.value));
        
            let linha = '<tr>';
            linha += `<td>${inputNomeContato.value}</td>`;
            linha += `<td>${inputNumeroContato.value}</td>`;
            linha += '</tr>';
        
            linhas += linha; 
        }
    
        inputNomeContato.value='';
        inputNumeroContato.value='';
}

function atualizaTabela() { 
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
