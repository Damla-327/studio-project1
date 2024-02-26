// let body = document.body

// let button = document.querySelector(".button");
// button.addEventListener("click", turnOnMusic);

// function turnOnMusic() {
//     body.classList.toggle("music");
//     button.classList.toggle("buttonOn");
// }



document.getElementById("playButton").addEventListener("click", function () {
    var audio = document.getElementById("myAudio");
    audio.play();
});

