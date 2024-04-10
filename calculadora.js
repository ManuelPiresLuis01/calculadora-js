/* declaração de variaveis pra os botons da calculadora */
var saida = document.getElementById("saida");
var apagar1 = document.getElementById("x");
var apagarTudo = document.getElementById("c");
var apagarTudo2 = document.getElementById("ce");
var maisMenos = document.getElementById("d");
var um = document.getElementById("um");
var dois = document.getElementById("dois");
var tres = document.getElementById("tres");
var quatro = document.getElementById("quatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var sete = document.getElementById("sete");
var oito = document.getElementById("oito");
var nove = document.getElementById("nove");
var zero = document.getElementById("zero");
var ponto = document.getElementById("ponto");
var igual = document.getElementById("igual");
var dividir = document.getElementById("dividir");
var multi = document.getElementById("multi");
var menos = document.getElementById("menos");
var mais = document.getElementById("mais");

/** Declaração da operação */
var number1;
var number2;
var signal;
var result;

/* escrevendo numeros na console */
um.addEventListener("click", function () {
    output("1");
})
dois.addEventListener("click", function () {
    output("2");
})
tres.addEventListener("click", function () {
    output("3");
})
quatro.addEventListener("click", function () {
    output("4");
})
cinco.addEventListener("click", function () {
    output("5");
})
seis.addEventListener("click", function () {
    output("6");
})
sete.addEventListener("click", function () {
    output("7");
})
oito.addEventListener("click", function () {
    output("8");
})
nove.addEventListener("click", function () {
    output("9");
})
zero.addEventListener("click", function () {
    output("0");
})
ponto.addEventListener("click", function () {
    output(".");
})


/** funções para apagar na tela*/
apagarTudo.addEventListener("click", function () {
    eraseAll();
})
apagarTudo2.addEventListener("click", function () {
    eraseAll();
})

apagar1.addEventListener("click", function () {
    eraseAll();
})

/** funcoes geral */
function eraseAll() {
    saida.innerHTML = "";
}
function output(v) {
    var valor = v;
    saida.innerHTML += valor;
}

/** operações */
dividir.addEventListener("click", function () {
    number1 = saida
    eraseAll();
    signal = "/";
})

multi.addEventListener("click", function () {
    number1 = saida
    eraseAll();
    signal = "*";
})

menos.addEventListener("click", function () {
    number1 = saida
    eraseAll();
    signal = "-";
})

mais.addEventListener("click", function () {
    number1 = saida
    eraseAll();
    signal = "+";
})

igual.addEventListener("click", function () {
    switch (signal) {
        case "+":
            number2=saida;
            result = parseDouble(number1) + parseDouble(number2);
            eraseAll()
            output(result)
        case "-":
            number2=saida;
            result = parseDouble(number1) - parseDouble(number2);
            eraseAll()
            output(result)
        case "*":
            number2=saida;
            result = parseDouble(number1) * parseDouble(number2);
            eraseAll()
            output(result)
        case "/":
            number2=saida;
            result = parseDouble(number1) / parseDouble(number2);
            eraseAll()
            output(result)
        default:
            eraseAll()
            output(saida)
    }
})
