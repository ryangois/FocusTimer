let playButton = document.querySelector(".play")
let pauseButton = document.querySelector(".pause")
let stopButton = document.querySelector(".stop")
let setButton = document.querySelector(".set")
let soundButton = document.querySelector(".sound")
let muteButton = document.querySelector(".mute")

// playButton.addEventListener("click", () => {
//     playButton.classList.add("hide")
//     pauseButton.classList.remove("hide")

// })

// pauseButton.addEventListener("click", () => {
//     pauseButton.classList.add("hide")
//     playButton.classList.remove("hide")

// })

// soundButton.addEventListener("click", () => {
//     soundButton.classList.add("hide")
//     muteButton.classList.remove("hide")

// })

// muteButton.addEventListener("click", () => {
//     muteButton.classList.add("hide")
//     soundButton.classList.remove("hide")

// })

function changeClasses(button1, button2) {
    button1.classList.add("hide");
    button2.classList.remove("hide");
}

playButton.addEventListener("click", () => {
    changeClasses(playButton, pauseButton);
    changeClasses(setButton, stopButton);
})

pauseButton.addEventListener("click", () => {
    changeClasses(pauseButton, playButton);
})

soundButton.addEventListener("click", () => changeClasses(soundButton, muteButton))
muteButton.addEventListener("click", () => changeClasses(muteButton, soundButton))