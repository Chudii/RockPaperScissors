const log = document.querySelector('.title')
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const choice = document.querySelector('.userChoice')
const allChoices = document.getElementsByClassName('choice')
const compChoice = document.querySelector('.compChoice')
const result = document.querySelector('.results')

const computerPlay = () => {
    if (Math.random() < .3) {
        return 'Rock'
    }
    else if (Math.random() > .5) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

const userSelection = (e) => {
    let target = e.target
    if (target.classList.contains('rock')) {
        playRound('Rock', computerPlay())
        selected(target)
    } else if (target.classList.contains('paper')) {
        playRound('Paper', computerPlay())
        selected(target)
    } else if (target.classList.contains('scissors')) {
        playRound('Scissors', computerPlay())
        selected(target)
    }
}

const selected = (target) => {
    let choices = document.getElementsByClassName('choice')
    for (let i = 0; i < choices.length; i++) {
        if (choices[i].classList.contains('selected')) {
            choices[i].classList.toggle('selected')
        }
    }
    target.classList.toggle('selected')
}
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        console.log(`You both chose ${playerSelection}`)
        if (computerSelection === 'Rock') {
            compChoice.style.backgroundImage = "url('/images/pixelRock.png')"
            compChoice.style.backgroundSize = 'contain'
        } else if (computerSelection === 'Paper') {
            compChoice.style.backgroundImage = "url('/images/pixelPaper.png')"
            compChoice.style.backgroundSize = 'cover'
        } else if (computerSelection === 'Scissors') {
            compChoice.style.backgroundImage = "url('/images/pixelScissors.png')"
            compChoice.style.backgroundSize = '135%'
        }
        compChoice.style.backgroundPosition = 'center'
        compChoice.style.backgroundRepeat = 'no-repeat'
        result.innerHTML = `You both chose ${playerSelection}`
        log.innerHTML = `Tie`

    } else if (playerSelection === 'Rock') {
        if (computerSelection === 'Scissors') {
            console.log('Rock beats Scissors. Player Wins')
            compChoice.style.backgroundImage = "url('/images/pixelScissors.png')"
            compChoice.style.backgroundSize = '135%'
            compChoice.style.backgroundPosition = 'center'
            compChoice.style.backgroundRepeat = 'no-repeat'
            result.innerHTML = `Rock beats Scissors.`
            log.innerHTML = `Player Wins`
        } else {
            console.log('Paper beats Rock. Computer Wins')
            compChoice.style.backgroundImage = "url('/images/pixelPaper.png')"
            compChoice.style.backgroundSize = 'cover'
            compChoice.style.backgroundPosition = 'center'
            compChoice.style.backgroundRepeat = 'no-repeat'
            result.innerHTML = `Paper beats Rock.`
            log.innerHTML = `Computer Wins`
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            console.log('Paper beats Rock. Player Wins')
            compChoice.style.backgroundImage = "url('/images/pixelRock.png')"
            compChoice.style.backgroundSize = 'contain'
            compChoice.style.backgroundPosition = 'center'
            compChoice.style.backgroundRepeat = 'no-repeat'
            result.innerHTML = `Paper beats Rock.`
            log.innerHTML = `Player Wins`
        } else {
            console.log('Scissors beats Paper. Computer Wins')
            compChoice.style.backgroundImage = "url('/images/pixelScissors.png')"
            compChoice.style.backgroundSize = '135%'
            compChoice.style.backgroundPosition = 'center'
            compChoice.style.backgroundRepeat = 'no-repeat'
            result.innerHTML = `Scissors beats Paper.`
            log.innerHTML = `Computer Wins`
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Paper') {
            console.log('Scissors beats Paper. Player Wins')
            compChoice.style.backgroundImage = "url('/images/pixelPaper.png')"
            compChoice.style.backgroundSize = 'cover'
            compChoice.style.backgroundPosition = 'center'
            compChoice.style.backgroundRepeat = 'no-repeat'
            result.innerHTML = `Scissors beats Paper.`
            log.innerHTML = `Player Wins`
        } else {
            console.log('Rock beats Scissors. Computer Wins')
            compChoice.style.backgroundImage = "url('/images/pixelRock.png')"
            compChoice.style.backgroundSize = 'contain'
            compChoice.style.backgroundPosition = 'center'
            compChoice.style.backgroundRepeat = 'no-repeat'
            result.innerHTML = `Rock beats Scissors.`
            log.innerHTML = `Computer Wins`
        }
    }
}

choice.addEventListener('click', function(e) {userSelection(e)})