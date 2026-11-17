// ---- Edit these two lists to change the card ----

// Photos on the thread, in order. To add one: drop the image in assets/images/ and add a line.
const memories = [
    { src: 'assets/images/memory-selfie.jpeg', alt: 'You resting your chin on my shoulder', caption: 'your chin, my shoulder' },
    { src: 'assets/images/passcode.jpeg', alt: 'Our hands held together', caption: "my hand's favourite place" },
    { src: 'assets/images/memory-smile.jpeg', alt: 'You smiling down at the camera in the lab', caption: 'that smile, every time' },
    { src: 'assets/images/memory-upside-down.jpeg', alt: 'Our faces head to head, one of us upside down', caption: 'still my favourite view' },
    { src: 'assets/images/memory-gele.jpeg', alt: 'You in your gele pouting, me throwing a peace sign', caption: 'my gele queen' },
    { src: 'assets/images/memory-matching.jpeg', alt: 'The two of us outside in matching brown and gold', caption: 'we match. obviously.' },
    { src: 'assets/images/memory-leaning.jpeg', alt: 'You leaning in close to me, both of us in brown and gold', caption: 'closer, always' },
    { src: 'assets/images/memory-suited.jpeg', alt: 'The two of us in suits, you in front of me', caption: 'my partner in everything' },
    { src: 'assets/images/memory-kiss.jpeg', alt: 'You kissing my cheek', caption: 'keep them coming' },
    { src: 'assets/images/memory-hug.jpeg', alt: 'You hugging me tight', caption: 'home, in one hug' },
    { src: 'assets/images/memory-call.jpeg', alt: 'Your face up close on a video call', caption: 'my favourite face, any screen' },
];

const reasons = [
    "Your smile lights up my darkest days.",
    "The way you understand me without words.",
    "Your kindness to everyone you meet.",
    "One text from you can turn the hour.",
    "Your hand has become my measure of warm.",
    "Because you gave me something ;) ❤",
    "Because you have the best heart.",
    "The comfort of your hugs.",
    "You still surprise me, every single day.",
    "I'm still keeping count, and I'm not stopping.",
];

// "Open when…" envelopes. Drafts: rewrite them in your own words.
const openWhen = [
    { when: 'you miss me', note: "Close your eyes and think of my hand in yours. That's where it belongs, and it's where it'll be again soon. I miss you too, probably more." },
    { when: "you can't sleep", note: "Put the phone down after this one and breathe slow. Wherever I am right now, I'm thinking of you, and I'd talk you to sleep if I could." },
    { when: "you've had a bad day", note: "One bad day doesn't get to decide anything about you. You're still the kindest, brightest person I know. Rest now. Tomorrow I'm still yours." },
    { when: 'you doubt yourself', note: "Go back and read the reasons. I didn't make any of them up. You're more than enough, and I can see it even on the days you can't." },
    { when: "you're happy", note: "Good. Now tell me why. I want to hear all of it." },
];

// Revealed after five taps on the heart at the very bottom.
const secret = "You found it. The secret is there's no secret: I'm just completely, hopelessly gone for you.";

const together = Date.UTC(2026, 2, 18); // 18 March 2026, the day we finally got together

// "Write back to me" opens a WhatsApp chat with you. Your number in international format,
// digits only, no + or spaces (e.g. '2348012345678'). Leave it empty to hide the button.
const WHATSAPP = '2348143796340';
const replyText = 'I just read my letter ❤ ';

// -------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    // Photo trail
    const trail = document.getElementById('trail');
    trail.innerHTML = memories.map(m => `
        <li><figure class="photo">
            <button class="photo-open" type="button" aria-label="Open photo: ${m.caption}">
                <img src="${m.src}" alt="${m.alt}" loading="lazy" width="810" height="1080">
            </button>
            <figcaption>${m.caption}</figcaption>
        </figure></li>`).join('');

    // Any photo opens full size in the viewer; closes with ×, Esc, or a tap outside the print.
    const viewer = document.getElementById('viewer');
    const viewerImg = viewer.querySelector('img');
    const viewerCap = viewer.querySelector('figcaption');
    document.addEventListener('click', (e) => {
        const open = e.target.closest('.photo-open');
        if (!open) return;
        const img = open.querySelector('img');
        viewerImg.src = img.src;
        viewerImg.alt = img.alt;
        viewerCap.textContent = open.closest('.photo').querySelector('figcaption').textContent;
        viewer.showModal();
    });
    viewer.addEventListener('click', (e) => {
        if (e.target === viewer || e.target.closest('.viewer-close')) viewer.close();
    });

    // Photos drop and settle onto the thread as they scroll in; they stay visible if this never runs.
    if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(({ isIntersecting, target }) => {
                if (!isIntersecting) return;
                target.classList.add('settling');
                target.classList.remove('waiting');
                io.unobserve(target);
            });
        }, { rootMargin: '0px 0px -12% 0px' });
        trail.querySelectorAll('.photo').forEach(p => {
            if (p.getBoundingClientRect().top > innerHeight) { p.classList.add('waiting'); io.observe(p); }
        });
    }

    // Reasons note
    const text = document.getElementById('reason-text');
    const count = document.getElementById('reason-count');
    const prev = document.getElementById('prev-reason');
    const next = document.getElementById('next-reason');
    let i = 0;

    function show(n, dir) {
        i = n;
        const render = () => {
            text.textContent = reasons[i];
            count.textContent = `${i + 1} of ${reasons.length}`;
            prev.disabled = i === 0;
            next.disabled = i === reasons.length - 1;
            text.classList.remove('turning');
        };
        if (!dir) return render();
        text.style.setProperty('--turn', dir > 0 ? '-1rem' : '1rem');
        text.classList.add('turning');
        setTimeout(render, 180);
    }
    prev.addEventListener('click', () => i > 0 && show(i - 1, -1));
    next.addEventListener('click', () => i < reasons.length - 1 && show(i + 1, 1));

    // Days since we got together, counted by her local calendar date.
    const now = new Date();
    const days = Math.floor((Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) - together) / 864e5);
    document.getElementById('together').textContent = `day ${days + 1} of us`;
    show(days % reasons.length); // a different reason greets her each day

    // Open-when envelopes: native <details>, so they open without script too.
    document.getElementById('envelopes').innerHTML = openWhen.map(e => `
        <details class="envelope">
            <summary>
                <svg class="seal" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                <span><span class="sr-only">open when </span>${e.when}</span>
            </summary>
            <div class="envelope-note"><p>${e.note}</p></div>
        </details>`).join('');

    const writeBack = document.getElementById('write-back');
    if (WHATSAPP) {
        writeBack.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(replyText)}`;
        writeBack.hidden = false;
    }

    // Section menu: close it once a link is picked.
    const jumpMenu = document.getElementById('jump-menu');
    jumpMenu.addEventListener('click', (e) => e.target.closest('a') && jumpMenu.hidePopover?.());

    // Easter egg: five taps on the closing heart.
    const heart = document.getElementById('secret-heart');
    const secretNote = document.getElementById('secret');
    let taps = 0;
    heart.addEventListener('click', () => {
        heart.classList.remove('beat');
        void heart.offsetWidth; // restart the beat on every tap
        heart.classList.add('beat');
        if (++taps < 5 || !secretNote.hidden) return;
        secretNote.textContent = secret;
        secretNote.hidden = false;
        heart.setAttribute('aria-expanded', 'true');
    });

    // Music: try to start quietly; browsers usually wait for a first tap.
    const music = document.getElementById('bg-music');
    const btn = document.getElementById('music-btn');
    music.volume = 0.25;

    const setUI = (playing) => {
        btn.setAttribute('aria-pressed', String(playing));
        btn.setAttribute('aria-label', playing ? 'Pause music' : 'Play music');
    };
    const play = () => music.play().then(() => setUI(true)).catch(() => setUI(false));

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (music.paused) play(); else { music.pause(); setUI(false); }
    });

    play().then(() => {
        if (!music.paused) return;
        const firstTouch = (e) => {
            if (e.target.closest('#music-btn')) return; // the button handles itself
            play();
            ['pointerdown', 'keydown'].forEach(t => document.removeEventListener(t, firstTouch));
        };
        ['pointerdown', 'keydown'].forEach(t => document.addEventListener(t, firstTouch));
    });
});
