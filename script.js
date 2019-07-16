var startGame = document.querySelector('.start-game');
var game = document.querySelector('.game');

startGame.addEventListener('click', start);
game.addEventListener('click', clickBox)
var counter = 0;



function start() {
    startGame.classList.add('hide');
    game.style.backgroundColor = ('#fff');

    createBox();
};


function createBox() {
    game.innerHTML = '';
    var box = document.createElement('div');
    var gameSize = game.getBoundingClientRect();
    box.style.width = box.style.height = boxRand(30, 150) + 'px';
    box.style.backgroundColor = '#000';
    box.style.position = 'absolute';
    box.style.top = '120px';
    box.style.left ='30px';
    box.style.cursor = 'pointer';
    box.setAttribute('data-box', 'true');
    game.insertAdjacentElement('afterbegin', box);
};

function clickBox(event) {
    if (event.target.dataset) {
        counter++;
        createBox();
    };
};

function boxRand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}