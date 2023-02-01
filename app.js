const timeLeftDisplay = document.querySelector('#time-left')
const resulttDisplay = document.querySelector('#result')
const startPauseButton = document.querySelector('#start-pause-button')
const squares = document.querySelectorAll('.grid div')
const logsLeft = document.querySelectorAll('.log-left')
const logsRight = document.querySelectorAll('.log-right')
const carsLeft = document.querySelectorAll('.car-left')
const carsRight = document.querySelectorAll('.car-right')


let currentIndex = 76
let timerId
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


function autoMoveLogs(){
    logsLeft.forEach(logLeft => moveLogLeft(logLeft))
    logsRight.forEach(logRight => moveLogRiht(logRight))
    carsLeft.forEach(carLeft => moveCarLeft(carLeft))
    carsRight.forEach(carRight => moveCarRiht(carRight))
    lose()
    win()
}

function moveLogLeft(logLeft){

    switch(true) {
        case logLeft.classList.contains('l1'):
             logLeft.classList.remove('l1')
             logLeft.classList.add('l2')
             break
            
        case logLeft.classList.contains('l2'):
             logLeft.classList.remove('l2')
             logLeft.classList.add('l3')
            break
        
        case logLeft.classList.contains('l3'):
             logLeft.classList.remove('l3')
             logLeft.classList.add('l4')
             break
        
        case logLeft.classList.contains('l4'):
             logLeft.classList.remove('l4')
             logLeft.classList.add('l5')
             break
        
        case logLeft.classList.contains('l5'):
             logLeft.classList.remove('l5')
             logLeft.classList.add('l1')
             break
    }
}

function moveLogRiht(logRight){

    switch(true) {
        case logRight.classList.contains('l1'):
             logRight.classList.remove('l1')
             logRight.classList.add('l5')
             break
            
        case logRight.classList.contains('l2'):
             logRight.classList.remove('l2')
             logRight.classList.add('l1')
            break
        
        case logRight.classList.contains('l3'):
             logRight.classList.remove('l3')
             logRight.classList.add('l2')
             break
        
        case logRight.classList.contains('l4'):
             logRight.classList.remove('l4')
             logRight.classList.add('l3')
             break
        
        case logRight.classList.contains('l5'):
             logRight.classList.remove('l5')
             logRight.classList.add('l4')
             break
    }
}

function moveCarLeft(carLeft){
    switch(true) {
        case carLeft.classList.contains('c1'):
             carLeft.classList.remove('c1')
             carLeft.classList.add('c2')
             break
            
        case carLeft.classList.contains('c2'):
             carLeft.classList.remove('c2')
             carLeft.classList.add('c3')
            break
        
        case carLeft.classList.contains('c3'):
             carLeft.classList.remove('c3')
             carLeft.classList.add('c1')
             break
    
    }
}

function moveCarRiht(carRight){
    switch(true) {
        case carRight.classList.contains('c1'):
             carRight.classList.remove('c1')
             carRight.classList.add('c3')
             break
            
        case carRight.classList.contains('c2'):
             carRight.classList.remove('c2')
             carRight.classList.add('c1')
            break
        
        case carRight.classList.contains('c3'):
             carRight.classList.remove('c3')
             carRight.classList.add('c2')
             break    
    }
}

function lose(){
    if(
         squares[currentIndex].classList.contains('c1') || 
         squares[currentIndex].classList.contains('l4') ||
         squares[currentIndex].classList.contains('l5')
         ){
        resulttDisplay.textContent="You lose!"
        alert("You lose!")
        clearInterval(timerId)
        squares[currentIndex].classList.remove('frog')
        document.removeEventListener('keyup',moveFrog)
    } 
}


function win()  {
    if(squares[currentIndex].classList.contains('ending-block')){
        resulttDisplay.textContent="You Win!"
        alert("You win!")
        clearInterval(timerId)
        document.removeEventListener('keyup',moveFrog)
    }
}

timerId = setInterval(autoMoveLogs, 1000);