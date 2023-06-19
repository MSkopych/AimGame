const startBtn = document.querySelector('.start')
const screens = document.querySelectorAll('.screen');
const frontPag = document.querySelector('.frontP')
const timeList = document.querySelector('#time-list')



startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');

})

frontPag.addEventListener('click', (event) => {
    screens[0].classList.remove('up');
    screens[0].classList.add('back');

})

timeList.addEventListener('click', (event) => {
    event.
})
