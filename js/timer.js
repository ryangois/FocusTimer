export default function Timer({
    minutesDisplay,
    secondsDisplay,
    minutes,
    resetControls
}) {

    let timerTimeOut
    let defaultMinutes = Number(minutesDisplay.textContent)

    function displayUpdate(newMinutes, seconds) {
        newMinutes = newMinutes === undefined ? defaultMinutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.innerHTML = String(newMinutes).padStart(2, 0)
        secondsDisplay.innerHTML = String(seconds).padStart(2, 0)
    }

    function reset() {
        displayUpdate(minutes, 0)
        hold()
    }

    function countdown() {
        timerTimeOut = setTimeout(function () {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            let finishedTimer = minutes <= 0 && seconds <= 0

            displayUpdate(minutes, 0)

            if (finishedTimer) {
                resetControls()
                displayUpdate()
                return
            }

            if (seconds <= 0) {
                seconds = 60
                --minutes
            }

            displayUpdate(minutes, String(seconds - 1))

            countdown()
        }, 1000)
    }

    function updateMinutes(newMinutes) {
        minutes = newMinutes
    }

    function hold() {
        clearTimeout(timerTimeOut)
    }

    return {
        countdown,
        reset,
        displayUpdate,
        updateMinutes,
        hold
    }

}