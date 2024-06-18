var setaDireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    Leonardo.style ="disPlay:none"
    Bruna.style ="disPlay:flex"
    setaDireita.style ="disPlay:none"
    setaEsquerda.style ="disPlay:flex; margin-top: 55px;"
}

function RolarParaEsquerda() {
    Leonardo.style ="disPlay:flex"
    Bruna.style ="disPlay:none"
    setaDireita.style ="disPlay:flex; margin-top: 55px;"
    setaEsquerda.style ="disPlay:none"
}