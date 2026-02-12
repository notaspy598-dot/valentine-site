document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('bg-music');
    const musicBtn = document.getElementById('music-btn');
    const musicIcon = musicBtn.querySelector('.material-icons');
    const musicText = musicBtn.querySelector('span:last-child');

    const reasonsBtn = document.getElementById('reasons-btn');
    const overlay = document.getElementById('reasons-overlay');
    const closeOverlayBtn = document.getElementById('close-overlay');

    // --- Music Control ---
    let isPlaying = false;

    function toggleMusic() {
        if (isPlaying) {
            music.pause();
            musicIcon.textContent = 'music_off';
            musicText.textContent = 'Play Music';
        } else {
            music.play().then(() => {
                musicIcon.textContent = 'music_note';
                musicText.textContent = 'Pause Music';
            }).catch(e => {
                console.log("Autoplay prevented or error:", e);
                // If autoplay fails, we stay in 'paused' state visually
                isPlaying = false;
                return;
            });
        }
        isPlaying = !isPlaying;
    }

    musicBtn.addEventListener('click', toggleMusic);

    // Auto-play music immediately on page load
    music.volume = 0.5;
    const playPromise = music.play();
    if (playPromise !== undefined) {
        playPromise.then(_ => {
            isPlaying = true;
            musicIcon.textContent = 'music_note';
            musicText.textContent = 'Pause Music';
        }).catch(error => {
            console.log("Autoplay blocked by browser. Will play on first interaction.");
            musicIcon.textContent = 'music_off';
            musicText.textContent = 'Play Music';
            // Play on first user interaction anywhere on the page
            // Only click, touchstart, and keydown count as user activation events for autoplay
            const interactionEvents = ['click', 'touchstart', 'keydown'];
            const startMusicOnInteraction = () => {
                music.play().then(() => {
                    isPlaying = true;
                    musicIcon.textContent = 'music_note';
                    musicText.textContent = 'Pause Music';
                }).catch(e => {
                    console.log("Still couldn't play music:", e);
                });
                // Remove all listeners once triggered
                interactionEvents.forEach(evt => {
                    document.removeEventListener(evt, startMusicOnInteraction);
                });
            };
            interactionEvents.forEach(evt => {
                document.addEventListener(evt, startMusicOnInteraction, { once: true });
            });
        });
    }

    // --- Overlay / Reasons Carousel ---
    const reasons = [
        "Your smile lights up my darkest days.",
        "The way you understand me without words.",
        "Your kindness to everyone you meet.",
        "How safe I feel when I'm with you.",
        "Because you make me a better person.",
        "Because you gave me something ;) ❤.",
        "Because you have the best heart",
        "The comfort of your hugs.",
        "How you always know how to cheer me up.",
        "I love you for exactly who you are."
    ];

    let currentReason = 0;
    const reasonNumber = document.getElementById('reason-number');
    const reasonText = document.getElementById('reason-text');
    const progressDots = document.getElementById('progress-dots');
    const nextReasonBtn = document.getElementById('next-reason-btn');

    function renderDots() {
        progressDots.innerHTML = '';
        reasons.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.className = i === currentReason
                ? 'w-6 h-1.5 rounded-full bg-primary transition-all duration-300'
                : 'w-1.5 h-1.5 rounded-full bg-primary/20 transition-all duration-300';
            progressDots.appendChild(dot);
        });
    }

    function showReason(index) {
        currentReason = index;
        reasonNumber.textContent = `Reason #${index + 1}`;
        reasonText.textContent = `"${reasons[index]}"`;
        renderDots();

        // Update button text on last reason
        if (currentReason === reasons.length - 1) {
            nextReasonBtn.textContent = 'Close Letter';
        } else {
            nextReasonBtn.textContent = 'Next Reason';
        }
    }

    reasonsBtn.addEventListener('click', () => {
        currentReason = 0;
        showReason(0);
        overlay.classList.remove('hidden');
    });

    nextReasonBtn.addEventListener('click', () => {
        if (currentReason < reasons.length - 1) {
            showReason(currentReason + 1);
        } else {
            overlay.classList.add('hidden');
        }
    });

    closeOverlayBtn.addEventListener('click', () => {
        overlay.classList.add('hidden');
    });

    // Close on click outside content
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.add('hidden');
        }
    });
});
