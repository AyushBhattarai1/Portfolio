document.addEventListener('DOMContentLoaded', function() {
    const character = document.querySelector('.pixel-character');
    
    if (!character) return;
    
    document.addEventListener('mousemove', function(e) {
        const characterRect = character.getBoundingClientRect();
        const characterCenterX = characterRect.left + characterRect.width / 2;
        const characterCenterY = characterRect.top + characterRect.height / 2;
        
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        // Calculate angle between character and cursor
        const deltaX = mouseX - characterCenterX;
        const deltaY = mouseY - characterCenterY;
        
        // Calculate eye positions based on cursor position
        const maxOffset = 8; // Maximum pixels eyes can move
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const normalizedX = (deltaX / distance) * maxOffset;
        const normalizedY = (deltaY / distance) * maxOffset;
        
        // Clamp values
        const offsetX = Math.max(-maxOffset, Math.min(maxOffset, normalizedX));
        const offsetY = Math.max(-maxOffset, Math.min(maxOffset, normalizedY));
        
        // Update CSS custom properties for eye position
        character.style.setProperty('--eye-offset-x', `${offsetX}px`);
        character.style.setProperty('--eye-offset-y', `${offsetY}px`);
    });
});
