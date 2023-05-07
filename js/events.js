import {
    playButton,
    pauseButton,
    setButton,
    stopButton,
    soundButton,
    muteButton
} from "./elements.js"

export default function ({ controls, timer, sound, }) {
    playButton.addEventListener("click", () => {
        controls.play()
        timer.countdown()
        sound.pressButton()
    })

    pauseButton.addEventListener("click", () => {
        controls.pause()
        timer.hold()
        sound.pressButton()
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
        sound.pressButton()
    })

    soundButton.addEventListener("click", () => {
        controls.soundOn()
        sound.bgAudioForest.pause()
    })

    muteButton.addEventListener("click", () => {
        controls.soundOff()
        sound.bgAudioForest.play()
    })
}