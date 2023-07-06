const startBtn = document.querySelector('.start')
const screens = document.querySelectorAll('.screen');
const frontPag = document.querySelector('.frontP')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
let time = 0;


startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');

})

frontPag.addEventListener('click', (event) => {
    screens[0].classList.remove('up');
    screens[0].classList.add('back');

})

timeList.addEventListener('click', (event) =>
{
 if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'));
    screens[1].classList.add('up');
    startGame();
 }
})


function startGame(){
    setInterval(decreaseTime, 1000)
    setTime(time);
}

function decreaseTime(){
    if(time ==0){
        gameOver()
    }
    else{
    correctly = --time;
    if(correctly < 10){
        correctly = `0${correctly}`;
    }

    setTime(correctly);
    }
}
function gameOver(){
    window.location.reload();
}

function setTime(value){
    timeEl.innerHTML = `00:${value}`;
}