function sendMessage() {
  const userInput = document.getElementById("user-input").value;
  const chatBox = document.getElementById("chat-box");

  if (!userInput.trim()) return;

  // User message
  const userDiv = document.createElement("div");
  userDiv.classList.add("chat-message");
  userDiv.innerHTML = `<div class="bubble" style="background:#e0e0e0;align-self:flex-end;">${userInput}</div>`;
  chatBox.appendChild(userDiv);

  // AI response
  const aiDiv = document.createElement("div");
  aiDiv.classList.add("chat-message");
  aiDiv.innerHTML = `
    <img src="https://i.imgur.com/LXxIxmG.jpg" alt="Salmjay">
    <div class="bubble">${getResponse(userInput)}</div>
  `;
  chatBox.appendChild(aiDiv);

  document.getElementById("user-input").value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getResponse(input) {
  const msg = input.toLowerCase();

  if (msg.includes("aiessa")) return "Grabe... mahal na mahal ko talaga si Aiessa 😍";
  if (msg.includes("shut up")) return "Okay okay... tahimik na ako 😔";
  if (msg.includes("mango")) return "Oo gusto ko rin 'yun, lalo na kung kasama ko si Aiessa! 🥭💕";
  if (msg.includes("gusto mo ba siya")) return "Oo, sobra pa sa sobra. 😭💖";
  if (msg.includes("kanta")) return "'Mundo' ng IV of Spades. Para sa kanya talaga 'yon. 🎶😭";

  return "Hala, hindi ko gets. Pwede mo ulitin sa ibang paraan? 🙈";
}

function toggleMusic() {
  const audio = document.getElementById("bg-music");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
