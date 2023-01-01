
const button1 = document.querySelector('.button1')
const button2 = document.querySelector('.button2')

const player1 = document.querySelector('.player1')
const player2 = document.querySelector('.player2')


const resetButton = document.querySelector('.reset')

let p1score = 0;
let winningScore = 7;
let p2score = 0;
isGameOver = false


button1.addEventListener('click', () => {
    if (!isGameOver) {
        p1score += 1;
    } if (p1score === winningScore) {
        isGameOver = true;
        player1.classList.add('winner')
        player2.classList.add('loser')
    }
    player1.textContent = p1score
})

button2.addEventListener('click', () => {
    if (!isGameOver) {
        p2score += 1;
    } if (p2score === winningScore) {
        isGameOver = true;
        player2.classList.add('winner')
        player1.classList.add('loser')
    }
    player2.textContent = p2score
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1score = 0;
    p2score = 0;
    player1.textContent = 0;
    player2.textContent = 0;
    player1.classList.remove('winner', 'loser')
    player2.classList.remove('winner', 'loser')
}

const winningScoreSelect = document.querySelector('#playto');

winningScoreSelect.addEventListener('change', () => {
    winningScore = parseInt(this.value);
    // alert(this.value);
    reset();
})

// winningScoreSelect.addEventListener('change', () => {
//     alert('vfqsef')
// })

