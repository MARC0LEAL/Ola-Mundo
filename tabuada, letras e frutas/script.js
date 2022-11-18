function salvarNome() {
    let nomeJogador = document.getElementById('nome').value
    if (nomeJogador.length == 0) {
        alert('Você esqueceu de preencher o seu nome')
    } else {
        alert(`Olá, ${nomeJogador}! Bem vindo(a)`)
    }
}
function salvarNumero() {
    let resultado = document.getElementById('resultadoTabuada')
    let numeroTabuada = document.getElementById('numero').value
    if(numeroTabuada.length == 0) {
     alert('Esse número não existe')
    } else if (numeroTabuada <= 0 || numeroTabuada > 10) {
        alert('Escolha um numero de 1 a 10')
    } else {
        for (let c = 1; c <= 10; c++) {
            resultado.innerHTML += `${numeroTabuada} X ${c} = ${numeroTabuada * c} <br>`
        }
    }
}
function apagar() {
    document.getElementById('resultadoTabuada').innerHTML = ''
}
let frutasArmazenadas = []
function confirmeFrutas() {
    let confirme = document.getElementById('fruta').value
    let resultado1 = document.getElementById('res1')
    if (confirme.length == 0) {
        alert('Essa fruta não existe')
    } else {
        resultado1.innerHTML += `${confirme} <br>`
    }
    frutasArmazenadas.push(confirme)
}
let resultado3 = document.getElementById('res3')
let resultato4 = document.getElementById('res4')
let resultado5 = document.getElementById('res5')
let resultado6 = document.getElementById('res6')
let resultado7 = document.getElementById('res7')
let resultado8 = document.getElementById('res8')
function botao1() {
    let resultado2 = document.getElementById('res2')
    resultado2.innerHTML = `Lista das frutas escolhidas<br>${frutasArmazenadas}`
    resultado3.innerHTML =`frutas com 3 letras <br>${frutasArmazenadas.filter(a => a.length == 3)}`
    resultato4.innerHTML = `frutas com 4 letras <br>${frutasArmazenadas.filter(a => a.length == 4)}`
    resultado5.innerHTML = `frutas com 5 letras <br>${frutasArmazenadas.filter(a => a.length == 5)}`
    resultado6.innerHTML = `frutas com 6 letras <br>${frutasArmazenadas.filter(a => a.length == 6)}`
    resultado7.innerHTML = `frutas com 7 letras <br>${frutasArmazenadas.filter(a => a.length == 7)}`
    resultado8.innerHTML = `frutas com 8 letras <br>${frutasArmazenadas.filter(a => a.length == 8)}`
}
let videoFruta = document.getElementById('video')
function videoBanana() {
    videoFruta.src = "https://www.youtube.com/embed/eYldFyJBAGg"
    document.getElementById('audio').src = ''
}
function videoMaça() {
    videoFruta.src = "https://www.youtube.com/embed/wTedgL46AWE"
    document.getElementById('audio').src = ''
}
function videoUva() {
    videoFruta.src = "https://www.youtube.com/embed/kz8qvRNmmQw"
    document.getElementById('audio').src = ''
}
function videoAbacate() {
    videoFruta.src = "https://www.youtube.com/embed/eDGkbcwbjko"
    document.getElementById('audio').src = ''
}
function videoMorango() {
    videoFruta.src = "https://www.youtube.com/embed/G66DWJ9fqy0"
    document.getElementById('audio').src = ''
}
function videoGoiaba() {
    videoFruta.src = "https://www.youtube.com/embed/RAM-Xe07cl8" 
    document.getElementById('audio').src = ''
}
function videoMelao() {
    videoFruta.src = "https://www.youtube.com/embed/21t5Dw8hTQY"
    document.getElementById('audio').src = ''
}
function videoMamao() {
    videoFruta.src = "https://www.youtube.com/embed/1gXzEUoMtK8"
    document.getElementById('audio').src = ''
}
function videoMelancia() {
    videoFruta.src = "https://www.youtube.com/embed/ohU0ImeLvBo"
    document.getElementById('audio').src = ''
}
function videoLimao() {
    videoFruta.src = "https://www.youtube.com/embed/DCvBg7dr5bM"
    document.getElementById('audio').src = ''
}
function audio() {
    document.getElementById('audio').src = 'arquivos/audio.mp3'
}