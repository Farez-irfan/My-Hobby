const sentence = `Feel free to reach out for collaborations, projects, or just to connect. Let me know if you want it to sound more casual, artistic, or formal, I can tailor it!`;
const textContainer = document.getElementById("animatedText");

const words = sentence.split(" ");
words.forEach((word, index) => {
  const span = document.createElement("span");
  span.className = "word";
  span.textContent = word;
  textContainer.appendChild(span);

  setTimeout(() => {
    span.classList.add("visible");
  }, index * 200); 
});