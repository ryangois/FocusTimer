let playButton = document.querySelector(".play")
let pauseButton = document.querySelector(".pause")
let stopButton = document.querySelector(".stop")
let setButton = document.querySelector(".set")
let soundButton = document.querySelector(".sound")
let muteButton = document.querySelector(".mute")
let minutes
let timerTimeOut
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

function changeClasses(hideButton, showButton) {
    hideButton.classList.add("hide");
    showButton.classList.remove("hide");
}

function timerDisplayUpdate(minutes, seconds) {
    minutesDisplay.innerHTML = String(minutes).padStart(2, 0)
    secondsDisplay.innerHTML = String(seconds).padStart(2, 0)
}

function resetTimer() {
    timerDisplayUpdate(minutes, 0)
    clearTimeout(timerTimeOut)
}

function countdown() {
    timerTimeOut = setTimeout(function () {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        timerDisplayUpdate(minutes, 0)

        if (minutes <= 0) {
            changeClasses(pauseButton, playButton)
            changeClasses(stopButton, setButton);
            return
        }

        if (seconds <= 0) {

            seconds = 2
            --minutes
        }

        timerDisplayUpdate(minutes, String(seconds - 1))

        countdown()
    }, 1000)
}


playButton.addEventListener("click", () => {
    changeClasses(playButton, pauseButton);
    changeClasses(setButton, stopButton);
    countdown()
})

pauseButton.addEventListener("click", () => {
    changeClasses(pauseButton, playButton);
    clearTimeout(timerTimeOut)
})

setButton.addEventListener("click", () => {
    let promptMinutes = prompt("How many minutes?")
    if (!promptMinutes) {
        resetTimer()
        return
    }

    minutes = promptMinutes
    timerDisplayUpdate(minutes, 0)
})

stopButton.addEventListener("click", () => {
    changeClasses(stopButton, setButton);
    changeClasses(pauseButton, playButton);
    resetTimer()
})

soundButton.addEventListener("click", () => changeClasses(soundButton, muteButton))

muteButton.addEventListener("click", () => changeClasses(muteButton, soundButton))

