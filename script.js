let estoque = 20;
const preco = 6;

const qtdeSalgados = document.getElementById("qtdeSalgados");
const btnComprar = document.getElementById("btnComprar");
const btnRepor = document.getElementById("btnRepor");

function atualizarTela() {
    qtdeSalgados.textContent = `Salgados disponíveis: ${estoque}`;
}

btnComprar.addEventListener("click", () => {
    if (estoque > 0) {
        estoque--;
        atualizarTela();
    } else {
        alert("Estoque esgotado, Total vendido= R$120,00");
    }
});

btnRepor.addEventListener("click", () => {
    estoque = 20;
    atualizarTela();
});

atualizarTela();
