export default function Controls({
    playButton,
    pauseButton,
    setButton,
    stopButton,
    soundButton,
    muteButton
}) {

    function changeClasses(hideButton, showButton) {
        hideButton.classList.add("hide");
        showButton.classList.remove("hide");
    }

    function play() {
        changeClasses(playButton, pauseButton);
        changeClasses(setButton, stopButton);
    }

    function pause() {
        changeClasses(pauseButton, playButton);
    }

    function reset(){
        changeClasses(pauseButton, playButton)
        changeClasses(stopButton, setButton);
    }

    function soundOn() {
        changeClasses(soundButton, muteButton)
    }

    function soundOff() {
        changeClasses(muteButton, soundButton)
    }

    function getMinutes() {
        let promptMinutes = prompt("How many minutes?")
        if (!promptMinutes) {
            return false
        }

        return promptMinutes 
    }

    function stop() {
        changeClasses(stopButton, setButton);
        changeClasses(pauseButton, playButton);
    }

    return {
        changeClasses,
        play,
        pause,
        reset,
        soundOn,
        soundOff,
        getMinutes,
        stop
    }
}
