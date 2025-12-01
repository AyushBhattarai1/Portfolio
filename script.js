const vibes = [
    "◢ NEON DREAMS ◣",
    "▓ CYBER SPACE ▓",
    "◤ DIGITAL VOID ◥",
    "░ STATIC REALM ░",
    "▒ GHOST SIGNAL ▒",
    "◢ ELECTRIC SOUL ◣",
    "▓ PIXEL DRIFT ▓",
    "◤ BINARY ECHO ◥",
    "░ WIRE FRAME ░",
    "▒ NEON PULSE ▒",
    "◢ CYBER NOIR ◣",
    "▓ GLITCH WAVE ▓",
    "◤ VOID RUNNER ◥",
    "░ MATRIX FLOW ░",
    "▒ NEON GRID ▒",
    "◢ DIGITAL HAZE ◣",
    "▓ CHROME FADE ▓",
    "◤ PIXEL GHOST ◥",
    "░ NEON STATIC ░",
    "▒ CYBER DRIFT ▒"
];

const patterns = [
    "repeating-linear-gradient(45deg, #000 0px, #000 10px, #fff 10px, #fff 20px)",
    "repeating-linear-gradient(90deg, #000 0px, #000 5px, #fff 5px, #fff 10px)",
    "repeating-linear-gradient(0deg, #000 0px, #000 15px, #fff 15px, #fff 30px)",
    "radial-gradient(circle, #000 20%, #fff 20%, #fff 40%, #000 40%, #000 60%, #fff 60%)",
    "repeating-linear-gradient(135deg, #000 0px, #000 8px, #fff 8px, #fff 16px)",
    "linear-gradient(45deg, #000 25%, #fff 25%, #fff 50%, #000 50%, #000 75%, #fff 75%)",
    "repeating-conic-gradient(#000 0deg 30deg, #fff 30deg 60deg)"
];

let counter = 0;
const vibeDisplay = document.getElementById('vibeDisplay');
const vibeText = document.querySelector('.vibe-text');
const generateBtn = document.getElementById('generateBtn');
const counterDisplay = document.getElementById('counter');
const body = document.body;

generateBtn.addEventListener('click', generateVibe);

function generateVibe() {
    const randomVibe = vibes[Math.floor(Math.random() * vibes.length)];
    const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];
    
    vibeDisplay.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        vibeText.textContent = randomVibe;
        vibeDisplay.style.background = randomPattern;
        vibeDisplay.style.transform = 'scale(1)';
        
        // Add white background behind text for visibility
        vibeText.style.backgroundColor = '#fff';
        vibeText.style.padding = '10px 20px';
        vibeText.style.border = '3px solid #000';
        vibeText.style.color = '#000';
        
        counter++;
        counterDisplay.textContent = counter;
    }, 100);
}
