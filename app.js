const timeLeftDisplay = document.querySelector('#time-left')
const resulttDisplay = document.querySelector('#result')
const startPauseButton = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')

let currentIndex = 76
const widthSquare = 9

function moveFrog(e){
   
    squares[currentIndex].classList.remove('frog')

    switch(e.key){
        case 'ArrowLeft':

        if(currentIndex  % widthSquare !== 0) currentIndex -= 1
            break;
        case 'ArrowRight':
            if(currentIndex  % widthSquare < widthSquare -1 ) currentIndex += 1
            break;
        case 'ArrowUp':
            if(currentIndex - widthSquare >=0)  currentIndex -= widthSquare
            break;
        
        case 'ArrowDown':
            if(currentIndex + widthSquare < widthSquare * widthSquare) currentIndex += widthSquare
            break;
    }
    squares[currentIndex].classList.add('frog')
}

document.addEventListener('keyup', moveFrog)