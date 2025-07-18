const text = `Every photo has a journey behind it.
Here's a glimpse of the process, the effort, and the passion that goes into every shot I take.
From preparation to the final click this is where the real story begins.`;

const typewriterElement = document.getElementById("typewriter");

let index = 0;
let isDeleting = false;

function typeWriter() {
  if (!isDeleting) {
    typewriterElement.textContent += text.charAt(index);
    index++;
    if (index < text.length) {
      setTimeout(typeWriter, 30); // Typing speed
    } else {
      // Pause at full text before deleting
      setTimeout(() => {
        isDeleting = true;
        typeWriter();
      }, 3000); // Pause 3 seconds
    }
  } else {
    typewriterElement.textContent = text.substring(0, index);
    index--;
    if (index >= 0) {
      setTimeout(typeWriter, 15); // Deleting speed
    } else {
      // Restart after clearing
      isDeleting = false;
      index = 0;
      setTimeout(typeWriter, 1000); // Pause before retyping
    }
  }
}

window.onload = typeWriter;