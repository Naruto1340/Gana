const playButton = document.getElementById('play-button');
const audio = document.getElementById('audio');

playButton.addEventListener('click', () => {
    // Check if the audio is already playing
    if (audio.paused) {
        audio.play(); // Play the audio
    } else {
        audio.pause(); // Pause the audio if it's already playing
    }
});
