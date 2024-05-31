const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

const P1Score = document.getElementById("score--0");
const P1CurrentScore = document.getElementById("current--0");

const P2Score = document.getElementById("score--1");
const P2CurrentScore = document.getElementById("current--1");

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');



scores = [0, 0];
currentScore = 0;
activePlayer = 0;

const reset = () => {

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;

    P1Score.innerText = 0;
    P1CurrentScore.innerText = 0;
    P2Score.innerText = 0;
    P2CurrentScore.innerText = 0;

    player1.classList.add('player--active');
    player1.classList.remove('player--winner');

    player2.classList.remove('player--active');
    player2.classList.remove('player--winner');
};
reset()
btnNew.addEventListener('click', reset);


const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    // player 1 is the 0
    if (activePlayer == 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
    const dice = Math.floor(Math.random() * 6) + 1;

    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).innerText = currentScore;
    } else {
        switchPlayer();
    }

});

btnHold.addEventListener('click', function () {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
        playing = false;

        document.querySelector(`.player--${activePlayer}`)
        document.classList.add('player--winner');

        document.querySelector(`.player--${activePlayer}`)
        document.classList.remove('player--active');
    } else {
        switchPlayer();
    }

});
