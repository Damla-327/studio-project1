// Function to handle scroll events
function scrollHandler() {
    let scrollPositionY = window.scrollY;
    let documentHeight = document.body.scrollHeight;
    let viewportHeight = window.innerHeight;

    // Check if scrolled to the bottom of the page
    if (scrollPositionY + viewportHeight >= documentHeight) {
        // Scroll back to the top
        window.scrollTo(0, 0);
    }
}

// Attach scroll event listener to the window
window.addEventListener("scroll", scrollHandler);



// for (let i = 0; i < cars.length; i++) {
//     text += cars[i] + "<br>";
// }



const damla = document.querySelector("#span-d");
damla.onclick = () => {
    // damla.classList.add("opacity-animation");
    document.getElementById("opacity-affect").style.display = "block";

}

