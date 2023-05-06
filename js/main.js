import Controls from "./controls.js"
import Timer from "./timer.js"
import {
    playButton,
    pauseButton,
    stopButton,
    setButton,
    soundButton,
    muteButton,
    minutesDisplay,
    secondsDisplay
} from "./elements.js"

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