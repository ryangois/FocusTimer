import Controls from "./controls.js"
import Timer from "./timer.js"

let playButton = document.querySelector(".play")
let pauseButton = document.querySelector(".pause")
let stopButton = document.querySelector(".stop")
let setButton = document.querySelector(".set")
let soundButton = document.querySelector(".sound")
let muteButton = document.querySelector(".mute")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
let minutes
let timerTimeOut

const controls = Controls({
    playButton,
    pauseButton,
    setButton,
    stopButton
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    changeClasses: controls.changeClasses
})

playButton.addEventListener("click", () => {
    controls.play()
    timer.countdown()
})

pauseButton.addEventListener("click", () => {
    controls.pause()
    clearTimeout(timerTimeOut)
})

setButton.addEventListener("click", () => {
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
        timer.reset()
        return
    }
    minnutes = newMinutes
    timer.displayUpdate(minutes, 0)
})

stopButton.addEventListener("click", () => {
    controls.stop()
    timer.reset()
})

soundButton.addEventListener("click", () => changeClasses(soundButton, muteButton))

muteButton.addEventListener("click", () => changeClasses(muteButton, soundButton))