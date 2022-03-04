let player = true
let estaX = true
let acabou = false
let placarXO = [0, 0]


function aparecerXO(id) {
    if (!acabou) {
        botao = window.document.getElementById(`botao-${id}`)
        if (botao.value == "X" || botao.value == "O") {
            botao.value = " "
            botao.style = "background-color: aliceblue;"
            player = !player
        } else {
            if (player == true){
                botao.value = 'X'
                botao.style = "background-color: cadetblue"
                player = false
            } else {
                botao.value = "O"
                botao.style = "background-color: darkred"
                player = true
            }
        }
        verificarSeGanhou()
    }
    
}

function trocarXporO(){
    botaoXO = window.document.getElementById('XO')
    
    if (estaX == true) {
        botaoXO.value = 'O'
        botaoXO.style = "background-color: darkred"
        
    } else if(estaX == false) {
        botaoXO.value = 'X'
        botaoXO.style = "background-color: cadetblue"
          
    }
    estaX = !estaX
    iniciar()
}

let possibilidade = [[0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8],
                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8],
                    [0, 4, 8],
                    [6, 4, 2]]

function verificarSeGanhou() {
    var jogoPosicoes = []

    for (var i = 0; i < 9; i++) {
        botao = window.document.getElementById(`botao-${i}`)
        jogoPosicoes.push(botao.value)
    }
    
    for (var j = 0; j < 8; j++) {
        if (jogoPosicoes[possibilidade[j][0]] != ' ' && jogoPosicoes[possibilidade[j][0]] == jogoPosicoes[possibilidade[j][1]] && jogoPosicoes[possibilidade[j][1]] == jogoPosicoes[possibilidade[j][2]]) {
            var placar = window.document.getElementById("placar")
            if (jogoPosicoes[possibilidade[j][0]] == 'X') {
                placarXO[0]++
            } else {
                placarXO[1]++
            }
            placar.innerHTML = `X:${placarXO[0]} O:${placarXO[1]}`
            acabou = true
        }
    }

}

function iniciar() {
    for (var i = 0; i < 9; i++) {
        botao = window.document.getElementById(`botao-${i}`)
        botao.value = " "
        botao.style = "background-color: aliceblue;"
        console.log(`botao-${i}`)
    }
    player = estaX
    acabou = false
}

function limparPlacar() {
    placarXO[0] = placarXO[1] = 0
    placar.innerHTML = `X:${placarXO[0]} O:${placarXO[1]}`
    iniciar()
}