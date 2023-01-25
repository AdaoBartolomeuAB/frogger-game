const timeLeftDisplay = document.querySelector('#time-left')
const resulttDisplay = document.querySelector('#result')
const startPauseButton = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')

let currentIndex = 76

function moveFrog(){
   
    squares[currentIndex].classList.add('frog')
}

document.addEventListener('keyup', moveFrog)