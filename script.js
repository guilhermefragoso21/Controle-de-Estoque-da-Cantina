// SCRIPT.JS atualizado para funcionar com os botões do HTML

// Quantidade inicial de salgados
let salgados = 20;
const precoSalgado = 5;

// Atualiza o texto inicial
const texto = document.getElementById("qtdeSalgados");
texto.textContent = `Salgados disponíveis: ${salgados} (R$${precoSalgado} cada)`;

// Botão: Comprar 1 salgado
document.getElementById("btnComprar").onclick = function () {
    if (salgados > 0) {
        salgados--;
        texto.textContent = `Salgados disponíveis: ${salgados} (R$${precoSalgado} cada)`;
    } else {
        alert("Acabaram os salgados!");
    }
};

// Botão: Repor estoque
document.getElementById("btnRepor").onclick = function () {
    salgados = 20;
    texto.textContent = `Salgados disponíveis: ${salgados} (R$${precoSalgado} cada)`;
};

