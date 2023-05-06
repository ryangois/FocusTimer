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

const controls = Controls({
    playButton,
    pauseButton,
    setButton,
    stopButton
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
})

playButton.addEventListener("click", () => {
    controls.play()
    timer.countdown()
})

pauseButton.addEventListener("click", () => {
    controls.pause()
    timer.hold()
})

setButton.addEventListener("click", () => {
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
        timer.reset()
        return
    }
    
    timer.displayUpdate(newMinutes, 0)
    timer.updateMinutes(newMinutes)
})

stopButton.addEventListener("click", () => {
    controls.stop()
    timer.reset()
})

soundButton.addEventListener("click", () => changeClasses(soundButton, muteButton))

muteButton.addEventListener("click", () => changeClasses(muteButton, soundButton))