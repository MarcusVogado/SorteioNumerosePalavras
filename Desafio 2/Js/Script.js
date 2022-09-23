// JavaScript source code
document.addEventListener("DOMContentLoaded", () => {

});

var _resultadoNumber;
var _resultadoPalavra;
var _listNumber;
var _listPalavra;
var _contarPalavra;


async function ApiNumber() {

    _resultadoNumber = await fetch("https://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=50");
    _listNumber = await _resultadoNumber.json();
    document.getElementById("_numeros").innerHTML = "";
    for (let index = 0; index < _listNumber.length; index++) {
        var numero = _listNumber[index];
        let label_ = document.createElement("li");
        label_.innerHTML = "<b>" + numero + "</b>";
        _numeros.appendChild(label_);
    }
}

function SeparaNumeros() {
    document.getElementById("_numPar").innerHTML = "";
    document.getElementById("_numImpar").innerHTML = "";
    if (_listNumber == null) {
        alert("Clique em Exibir Numeros antes de separa-los")
    }
    for (let index = 0; index < _listNumber.length; index++) {
        var numero = _listNumber[index];
        if (numero % 2 == 0) {
            let list_ = document.createElement("li");
            list_.innerHTML = "<b>" + numero + "</b>";
            _numPar.appendChild(list_);
        }
        else {

            let list_ = document.createElement("li");
            list_.innerHTML = "<b>" + numero + "</b>";
            _numImpar.appendChild(list_);
        }
    }
}
function LimparNumeros() {
    document.getElementById("_numeros").innerHTML = "";
}

function PagePalavras() {
    window.location.href = "PagePalavras.html";
}

async function AddPalavras() {
    _resultadoPalavra = await fetch(" https://www.randomnumberapi.com/api/v1.0/randomstring?min=5&max=20&count=30");
    _listPalavra = await _resultadoPalavra.json();
    document.getElementById("_table").innerHTML = "<tr>" +
        "<th>" + "PALAVRA " + "</th>"
        + "<th>" + "QUANTIDADE DE LETRAS" + "</th>"
        + "<th>" + "QUANTIDADE DE VOGAIS" + "</th>"
        + "</tr> ";
    _contarPalavra = 5;
    for (let index = 0; index < _contarPalavra; index++) {
        var palavra = _listPalavra[index];
        var quantidadeLetras = palavra.length;
        var quantidadeVogais = quantidadeLetras - palavra.replace(/[aeiouàãíéê-ú]/gi, '').length;
        let table_ = document.createElement("tr");
        table_.innerHTML = "<th>" + palavra + "</th>" + "<th>" + quantidadeLetras + "</th>" + "<th>" + quantidadeVogais + "</th>";
        _table.appendChild(table_);
    }
}



function AddPalavra() {

    if (_contarPalavra > 9) {
        _contarPalavra = 9;
        alert("Numero Maximo de Palavras atingido")
    }
    if (_contarPalavra <= 9) {

        _contarPalavra = _contarPalavra + 1;

        document.getElementById("_table").innerHTML = "<tr>" +
            "<th>" + "PALAVRA " + "</th>"
            + "<th>" + "QUANTIDADE DE LETRAS" + "</th>"
            + "<th>" + "QUANTIDADE DE VOGAIS" + "</th>"
            + "</tr> ";

        for (let index = 0; index < _contarPalavra; index++) {
            var palavra = _listPalavra[index];
            var quantidadeLetras = palavra.length;
            var quantidadeVogais = quantidadeLetras - palavra.replace(/[aeiouà-ú]/gi, '').length;
            let table_ = document.createElement("tr");
            table_.innerHTML = "<th>" + palavra + "</th>" + "<th>" + quantidadeLetras + "</th>" + "<th>" + quantidadeVogais + "</th>";
            _table.appendChild(table_);
        }
    }
}

function RemovePalavra() {

    if (_contarPalavra == 0) {
        _contarPalavra = 0;
        alert("Numero Mínimo de Palavras atingido")
    }

    if (_contarPalavra <= 10 && _contarPalavra != 0) {

        _contarPalavra = _contarPalavra - 1;

        document.getElementById("_table").innerHTML = "<tr>" +
            "<th>" + "PALAVRA " + "</th>"
            + "<th>" + "QUANTIDADE DE LETRAS" + "</th>"
            + "<th>" + "QUANTIDADE DE VOGAIS" + "</th>"
            + "</tr> ";

        for (let index = 0; index < _contarPalavra; index++) {

            var palavra = _listPalavra[index];
            var quantidadeLetras = palavra.length;
            var quantidadeVogais = quantidadeLetras - palavra.replace(/[aeiouà-ú]/gi, '').length;
            let table_ = document.createElement("tr");
            table_.innerHTML = "<th>" + palavra + "</th>" + "<th>" + quantidadeLetras + "</th>" + "<th>" + quantidadeVogais + "</th>";
            _table.appendChild(table_);

        }

    }

}