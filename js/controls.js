export default function Controls({
    playButton,
    pauseButton,
    setButton,
    stopButton
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

    function getMinutes() {
        let promptMinutes = prompt("How many minutes?")
        if (!promptMinutes) {
            return false
        }

        promptMinutes
    }

    function stop() {
        changeClasses(stopButton, setButton);
        changeClasses(pauseButton, playButton);
    }

    return {
        changeClasses,
        play,
        pause,
        getMinutes,
        stop
    }
}
