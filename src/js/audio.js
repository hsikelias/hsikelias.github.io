const audio = new Audio('src/assets/audio/hover-sharp.mp3');

const hoverElements = document.querySelectorAll('.hover-sound');
const hoverSound = new Audio('src/assets/audio/hover-wavy.wav');


hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0;
        hoverSound.play().catch(error => console.log("Hover audio failed"));
    });
});


document.addEventListener('click', () => {
    audio.play();
    console.log("CLICK!"); 
});