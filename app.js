const player1 = document.querySelector('#Player1');
const scorePlayer1 = document.querySelector('#firstScorePlayer');
const player2 = document.querySelector('#Player2');
const scorePlayer2 = document.querySelector('#secondScorePlayer');
const reset = document.querySelector('#Reset');
const selectDiv = document.querySelector('.SelectDiv');
const selectActiveValue = document.querySelector('select');
let baseScorePlayer1 = 0;
let baseScorePlayer2 = 0;

const h1 = document.querySelector('#ScoreKeeperH1')
const winner = document.createElement('h1');
h1.append(winner)
winner.innerText = ''   


player1.addEventListener('click', () => {
    let selectValue = parseInt(selectActiveValue.value);
    selectDiv.classList.add('SelectDivNone');
    baseScorePlayer1 += 1;
    scorePlayer1.innerText = baseScorePlayer1;
    if (selectValue === baseScorePlayer1){
        player1.classList.add('buttonAfterGamePlayer');
        player1.style.backgroundColor = 'rgb(113, 188, 113)';
        player2.classList.add('buttonAfterGamePlayer');
        player2.style.backgroundColor = 'rgb(255, 120, 120)';
        winner.innerText = 'Player 1 Wins!';
    }
})

player2.addEventListener('click', () => {
    let selectValue = parseInt(selectActiveValue.value);
    selectDiv.classList.add('SelectDivNone');
    baseScorePlayer2 += 1;
    scorePlayer2.innerText = baseScorePlayer2;
    if(selectValue === baseScorePlayer2) {
        player1.classList.add('buttonAfterGamePlayer');
        player1.style.backgroundColor = 'rgb(113, 188, 113)';
        player2.classList.add('buttonAfterGamePlayer');
        player2.style.backgroundColor = 'rgb(255, 120, 120)';
        winner.innerText = 'Player 2 Wins!';
    }
})

reset.addEventListener('click', () => {
    
    baseScorePlayer1 = 0;
    baseScorePlayer2 = 0;
    scorePlayer1.innerText = 0;
    scorePlayer2.innerText = 0;
    selectDiv.classList.remove("SelectDivNone");
    player1.classList.remove('buttonAfterGamePlayer');
    player2.classList.remove('buttonAfterGamePlayer');
    player1.style.backgroundColor = 'rgb(57, 197, 57)';
    player2.style.backgroundColor = 'rgb(250, 67, 67)';
    winner.innerText = '';
})

