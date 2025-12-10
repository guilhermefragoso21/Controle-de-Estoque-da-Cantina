// Script da Cantina da Escola

let quantidade = 20;
let preco = 5;

const quantidadeSpan = document.getElementById("quantidade");
const mensagem = document.getElementById("mensagem");
const btnComprar = document.getElementById("comprar");
const btnRepor = document.getElementById("repor");
const precoSpan = document.getElementById("preco");

precoSpan.textContent = preco;
quantidadeSpan.textContent = quantidade;

// Comprar salgado
btnComprar.addEventListener("click", () => {
    if (quantidade > 0) {
        quantidade--;
        quantidadeSpan.textContent = quantidade;
        mensagem.textContent = "Você comprou 1 salgado!";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "Estoque esgotado!";
        mensagem.style.color = "red";
    }
});

// Repor estoque
btnRepor.addEventListener("click", () => {
    quantidade = 20;
    quantidadeSpan.textContent = quantidade;
    mensagem.textContent = "Estoque reabastecido!";
    mensagem.style.color = "blue";
});
