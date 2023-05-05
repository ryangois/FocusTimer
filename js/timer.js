import Controls from "./controls.js"
const controls = Controls({
})

export default function Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    changeClasses,
}) {

    function displayUpdate(minutes, seconds) {
        minutesDisplay.innerHTML = String(minutes).padStart(2, 0)
        secondsDisplay.innerHTML = String(seconds).padStart(2, 0)
    }

    function reset() {
        displayUpdate(minutes, 0)
        clearTimeout(timerTimeOut)
    }

    function countdown() {
        timerTimeOut = setTimeout(function () {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)

            displayUpdate(minutes, 0)

            if (minutes <= 0) {
                controls.stop()
                return
            }

            if (seconds <= 0) {

                seconds = 2
                --minutes
            }

            displayUpdate(minutes, String(seconds - 1))

            countdown()
        }, 1000)
    }

    return {
        countdown,
        reset,
        displayUpdate,
    }

}