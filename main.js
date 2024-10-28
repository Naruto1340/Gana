const playButton = document.getElementById('play-button');
const audio = document.getElementById('audio');

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause(); // Optional: to toggle play/pause
    }
});
