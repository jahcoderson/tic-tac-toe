const xAndO = document.querySelectorAll('.selection')
const topRow = document.querySelector('#toprow')
const middleRow = document.querySelector('#middlerow')
const bottomRow = document.querySelector('#bottomrow')
const firstColumn = document.querySelectorAll('tr td:nth-of-type(1)')
const secondColumn = document.querySelectorAll('tr td:nth-of-type(2)')
const thirdColumn = document.querySelectorAll('tr td:nth-of-type(3)')
const firstDiagonal = document.querySelectorAll('tr:nth-of-type(1) td:nth-of-type(1), tr:nth-of-type(2) td:nth-of-type(2), tr:nth-of-type(3) td:nth-of-type(3)')
const secondDiagonal = document.querySelectorAll('tr:nth-of-type(1) td:nth-of-type(3), tr:nth-of-type(2) td:nth-of-type(2), tr:nth-of-type(3) td:nth-of-type(1)')
const gameBoard = document.querySelector('table')
const startGame = document.querySelector('#start')
const xWinner = document.querySelector('#xwin')
const oWinner = document.querySelector('#owin')
const reset = document.querySelector('#reset')
let rows = [topRow, middleRow, bottomRow]
gameBoard.style.display = 'none'
xWinner.hidden = 'true'
oWinner.hidden = 'true'
let playerOnes = 1
let playerTwos = 2
let gameOver = false
leftColumn = []
middleColumn = []
rightColumn = []
diagonal1 = []
diagonal2 = []
function tie() {
    if (leftColumn.length + middleColumn.length + rightColumn.length + diagonal1.length + diagonal2.length === 135) {
        console.log("Tie Game")
        gameOver = true

    }
}
function game(playerOne, playerTwo) {
    if (playerOne === 1 && gameOver === false) {
        playerOnes = 0
        return "X"
    }
    else if (playerTwo === 2 && gameOver === false) {
        playerOnes = 1
        return "O"
    }
}
for (let choice of xAndO) {
    choice.addEventListener('click', () => {
        if (choice.textContent === '' && gameOver === false) {
            choice.textContent = game(playerOnes, playerTwos)
            winnerRows()
            winnerColumns()
            winnerDiagonal()
        }

        else if (gameOver === true) { console.log('The game is over') }

        else if (choice.textContent !== '') {
            tie()
        }

    })

}

if (gameOver === true) {
    gameBoard.style.opacity = '0.5'
    gameBoard.style.backgroundColor = 'black'
}

function winnerRows() {

    for (let game of rows) {
        switch (game.innerText) {
            case "X\tX\tX": console.log('X Winner!')
                gameOver = true;
                gameBoard.style.opacity = '0.5'

                xWinner.hidden = '';
                xWinner.style.transition = 'all 2s';
                break;
            case "O\tO\tO": console.log('O Winner!')
                gameOver = true;
                gameBoard.style.opacity = '0.5'

                oWinner.hidden = '';
                break;
        }

    }



}

function winnerColumns() {

    for (column of firstColumn) {
        leftColumn.push(column.innerText)
        if (leftColumn.slice(-3)[0] === 'X' && leftColumn.slice(-3)[1] === 'X' && leftColumn.slice(-3)[2] === 'X') {
            gameOver = true;
            xWinner.hidden = '';
            console.log('X winner')
            gameBoard.style.opacity = '0.5'


        } else if (leftColumn.slice(-3)[0] === 'O' && leftColumn.slice(-3)[1] === 'O' && leftColumn.slice(-3)[2] === 'O') {
            gameOver = true;
            oWinner.hidden = '';
            console.log('O Winner!')
            gameBoard.style.opacity = '0.5'
        }


    }
    for (column of secondColumn) {
        middleColumn.push(column.innerText)
        if (middleColumn.slice(-3)[0] === 'X' && middleColumn.slice(-3)[1] === 'X' && middleColumn.slice(-3)[2] === 'X') {
            gameOver = true;
            xWinner.hidden = '';
            console.log('X winner')
            gameBoard.style.opacity = '0.5'


        } else if (middleColumn.slice(-3)[0] === 'O' && middleColumn.slice(-3)[1] === 'O' && middleColumn.slice(-3)[2] === 'O') {
            gameOver = true;
            oWinner.hidden = '';
            console.log('O Winner!')
            gameBoard.style.opacity = '0.5'
        }


    }
    for (column of thirdColumn) {
        rightColumn.push(column.innerText)
        if (rightColumn.slice(-3)[0] === 'X' && rightColumn.slice(-3)[1] === 'X' && rightColumn.slice(-3)[2] === 'X') {
            gameOver = true;
            xWinner.hidden = '';
            console.log('X winner')
            gameBoard.style.opacity = '0.5'



        } else if (rightColumn.slice(-3)[0] === 'O' && rightColumn.slice(-3)[1] === 'O' && rightColumn.slice(-3)[2] === 'O') {
            gameOver = true;
            oWinner.hidden = '';
            console.log('O Winner!')
            gameBoard.style.opacity = '0.5'
        }


    }


}

function winnerDiagonal() {
    for (diagonal of firstDiagonal) {
        diagonal1.push(diagonal.innerText)
        if (diagonal1.slice(-3)[0] === 'X' && diagonal1.slice(-3)[1] === 'X' && diagonal1.slice(-3)[2] === 'X') {
            gameOver = true;
            xWinner.hidden = '';
            console.log('X winner')
            gameBoard.style.opacity = '0.5'
        }
        else if (diagonal1.slice(-3)[0] === 'O' && diagonal1.slice(-3)[1] === 'O' && diagonal1.slice(-3)[2] === 'O') {
            gameOver = true;
            oWinner.hidden = '';
            console.log('O winner')
            gameBoard.style.opacity = '0.5'
        }




    }
    for (diagonal of secondDiagonal)
        diagonal2.push(diagonal.innerText)
    if (diagonal2.slice(-3)[0] === 'X' && diagonal2.slice(-3)[1] === 'X' && diagonal2.slice(-3)[2] === 'X') {
        gameOver = true;
        xWinner.hidden = '';
        console.log('X Winner!')
        gameBoard.style.opacity = '0.5'
    } else if (diagonal2.slice(-3)[0] === 'O' && diagonal2.slice(-3)[1] === 'O' && diagonal2.slice(-3)[2] === 'O') {
        gameOver = true;
        oWinner.hidden = ''
        console.log('O winner')
        gameBoard.style.opacity = '0.5'
    }


}

startGame.addEventListener('click', () => {
    gameBoard.style.display = 'flex'
    startGame.hidden = 'true'
    reset.style.display = 'block'
})

reset.addEventListener('click', () => {
    leftColumn = [];
    middleColumn = [];
    rightColumn = [];
    diagonal1 = [];
    diagonal2 = [];
    gameOver = false;
    oWinner.hidden = 'true'
    xWinner.hidden = 'true'
    gameBoard.style.opacity = ''
    gameBoard.style.backgroundColor = ''
    for (let choice of xAndO) {
        choice.textContent = ''
    }

}
)









