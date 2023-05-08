import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
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
    stopButton,
    soundButton,
    muteButton
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
})

const sound = Sound()

Events({controls, timer, sound})