const audio = document.getElementById('audio');
const play = document.getElementById('play');
const disc = document.getElementById('disc');

play.onclick = async () => {
    if (audio.paused) {
        try {
            await audio.play();
            play.textContent = '❚❚ Pause our song';
            disc.classList.add('playing');
        } catch (error) {
            alert('Add your song as assets/song.mp3 first ♡');
        }
    } else {
        audio.pause();
        play.textContent = '▶ Play our song';
        disc.classList.remove('playing');
    }
};

audio.onended = () => {
    play.textContent = '▶ Play our song';
    disc.classList.remove('playing');
};

document.getElementById('surprise').onclick = () => {
    document.getElementById('reveal').style.display = 'block';

    for (let i = 0; i < 45; i++) {
        const heart = document.createElement('span');
        heart.className = 'heart';
        heart.textContent = ['♡', '♥', '✧', '💗'][i % 4];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = 60 + Math.random() * 35 + 'vh';
        heart.style.fontSize = 16 + Math.random() * 22 + 'px';
        heart.style.animationDelay = Math.random() * 1.2 + 's';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 4400);
    }
};
