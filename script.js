// Passo 1 – Declarando variáveis

// Nome da cantina
var nomeCantina = "Cantina da Escola";
console.log("Bem-vindo à " + nomeCantina);

// Quantidade de salgados disponíveis
let salgados = 20;
console.log("Temos " + salgados + " salgados disponíveis.");

// Preço fixo de cada salgado
const precoSalgado = 5;
console.log("Cada salgado custa R$" + precoSalgado);

// Passo 2 – Atualizando valores

// Cantina vendeu 5 salgados
salgados = salgados - 5;
let totalVendido = 5 * precoSalgado;

console.log("Agora restam " + salgados + " salgados.");
console.log("A cantina vendeu R$" + totalVendido);

// Passo 3 – Teste rápido

// Tentando alterar uma constante (gera erro)
// precoSalgado = 6; // Descomente para testar o erro

// Diferença entre var e let
if (true) {
    var testeVar = "Sou var";
    let testeLet = "Sou let";

    console.log(testeVar); // funciona
    console.log(testeLet); // funciona
}

console.log(testeVar); // funciona (var é global)
console.log(testeLet); // ERRO: testeLet não existe fora do bloco

// Criando elementos para interação
const titulo = document.createElement("h3");
titulo.textContent = "Controle de Salgados";
document.body.appendChild(titulo);

// Mostra quantidade atual
const textoSalgados = document.createElement("p");
textoSalgados.textContent = "Salgados disponíveis: " + salgados;
document.body.appendChild(textoSalgados);

// Botão para comprar salgado
const botaoComprar = document.createElement("button");
botaoComprar.textContent = "Comprar 1 salgado";
botaoComprar.onclick = function () {
    if (salgados > 0) {
        salgados--;
        textoSalgados.textContent = "Salgados disponíveis: " + salgados;
    } else {
        alert("Acabaram os salgados!");
    }
};
document.body.appendChild(botaoComprar);

/*
Objetivo do exercício:
- var é global e pode causar problemas.
- let pode mudar, mas respeita o escopo do bloco.
- const é constante e não pode ser alterado.
*/
