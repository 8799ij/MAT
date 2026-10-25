let startTime;
let timeoutId;
const box = document.getElementById('target');
const result = document.getElementById('result');
const startBtn = document.getElementById('startBtn');

function startGame() {
    result.textContent = '';
    box.style.backgroundColor = '#ef4444'; // أحمر
    box.style.borderColor = 'rgba(239, 68, 68, 0.4)';
    box.textContent = 'انتظر اللون الأخضر...';
    startBtn.disabled = true;

    const randomDelay = Math.floor(Math.random() * 3000) + 2000; // بين 2 و 5 ثوانٍ

    timeoutId = setTimeout(() => {
        box.style.backgroundColor = '#22c55e'; // أخضر
        box.style.borderColor = 'rgba(34, 197, 94, 0.4)';
        box.textContent = 'اضغط الآن!';
        startTime = Date.now();
    }, randomDelay);
}

box.addEventListener('click', () => {
    if (box.style.backgroundColor === 'rgb(34, 197, 94)' || box.style.backgroundColor === '#22c55e') { // أخضر
        const reactionTime = Date.now() - startTime;
        result.textContent = `سرعة رد فعلك: ${reactionTime} ملي ثانية! 🔥`;
        resetBox();
    } else if (box.style.backgroundColor === 'rgb(239, 68, 68)' || box.style.backgroundColor === '#ef4444') { // أحمر
        clearTimeout(timeoutId);
        result.textContent = 'تسرّعت! اضغط قبل أن يتحول للأخضر. ❌';
        resetBox();
    }
});

function resetBox() {
    box.style.backgroundColor = '#1b2333';
    box.style.borderColor = 'rgba(255, 255, 255, 0.08)';
    box.textContent = 'اضغط "ابدأ" للبدء';
    startBtn.disabled = false;
}
