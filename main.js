const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando" />';
const imgReprovado = '<img src="./images/Reprovado.png" alt="emoji decepcionado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</spam>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</spam>';
const notaminima = parseFloat(prompt("Digite uma nota minima:"))

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    addicionalinha();
    atualizatabela();
    atualizamediafinal();
});

function addicionalinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert (`A atividade: ${inputNomeAtividade.value} já foi inserida`);
    } else {

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaminima ? imgAprovado : imgReprovado }</td>`;
    linha += '<tr>';

    linhas += linha;
    }

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizatabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML - linhas;
}

function atualizamediafinal() {   
    const mediafinal = calculamediafinal();

    document.getElementById('media-final-valor').innerHTML = mediafinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediafinal >= notaminima ? spanAprovado : spanReprovado;

}

function calculamediafinal() {
    let somadasnotas = 0

    for(let i = 0; i < notas.length; i++) {
        somadasnotas += notas[i];
    }

    return somadasnotas / notas.length;
}