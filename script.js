let startGame = document.querySelector('.start-game');
let game = document.querySelector('.game');
let timer = document.querySelector('.app__title');
let score = document.querySelector('.app__score-title')
let time = document.querySelector('#user-time');
let timerCount = document.querySelector('.app__timer');
let result = document.querySelector('.app__result');
let counter;

startGame.addEventListener('click', start);
game.addEventListener('click', clickBox)

function gameStart() {
    let timeNow = Number(timerCount.textContent);
    let timerId = setInterval(() => {
        timeNow -= 0.1;
        timerCount.textContent = timeNow.toFixed(1);
    }, 100);

    setTimeout(() => clearInterval(timerId), time.value * 1000);
}

function start() {
    counter = 0;
    startGame.classList.add('hide');
    game.style.backgroundColor = ('#fff');
    game.setAttribute('data-started', 'true');
    timer.classList.remove('hide');
    score.classList.add('hide');

    timerCount.textContent = `${time.value}.0`;

    createBox();
    gameStart();
    setTimeout(end, time.value * 1000);
}

function end() {
    startGame.classList.remove('hide');
    game.style.backgroundColor = ('');
    game.removeAttribute('data-started');
    game.firstChild.remove();
    score.classList.remove('hide');
    result.textContent = counter;
    timer.classList.add('hide');
}

function createBox() {
    if (game.dataset.started) {
        game.innerHTML = '';
        let box = document.createElement('div');
        let gameSize = game.getBoundingClientRect();
        box.style.width = box.style.height = boxRand(30, 120) + 'px';
        box.style.backgroundColor = '#000';
        box.style.position = 'absolute';
        box.style.borderRadius = '50%';
        box.style.top = (boxRand(parseInt(box.style.height), gameSize.height) - parseInt(box.style.height)) + 'px';
        box.style.left = (boxRand(parseInt(box.style.width), gameSize.width) - parseInt(box.style.width)) + 'px';
        box.style.cursor = 'pointer';
        box.setAttribute('data-box', 'true');
        game.insertAdjacentElement('afterbegin', box);
    }
}

function clickBox(event) {
    if (event.target.dataset.box) {
        counter++;
        createBox();
    } else {
        createBox();
        game.style.borderColor = 'red';
        game.style.boxShadow = 'inset 0px 0px 10px -5px red';
        setTimeout(() => {
            game.style.borderColor = 'black';
            game.style.boxShadow = '';
        }, 200);
    }

}

function boxRand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

