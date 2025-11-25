// Select elements
const audio = document.getElementById("anthemAudio");
const playPauseBtn = document.getElementById("playPauseBtn");
const skipBtn = document.getElementById("skipBtn");
const replayBtn = document.getElementById("replayBtn");

let isPlaying = false;

// Play / Pause
playPauseBtn.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = "▶️";
        isPlaying = false;
    } else {
        audio.play();
        playPauseBtn.textContent = "⏸️";
        isPlaying = true;
    }
});

// Skip 10 seconds
skipBtn.addEventListener("click", () => {
    audio.currentTime += 10;
});

// Replay
replayBtn.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.play();
    playPauseBtn.textContent = "⏸️";
    isPlaying = true;
});
