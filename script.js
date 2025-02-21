document.addEventListener("DOMContentLoaded", function() {
    const textArray = ["Software Developer", "AI Enthusiast", "Problem Solver"];
    let textIndex = 0;
    let charIndex = 0;
    const typedText = document.getElementById("typed-text");

    function typeEffect() {
        if (charIndex < textArray[textIndex].length) {
            typedText.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 100);
        } else {
            setTimeout(() => {
                typedText.textContent = "";
                charIndex = 0;
                textIndex = (textIndex + 1) % textArray.length;
                typeEffect();
            }, 2000);
        }
    }

    typeEffect();
});
