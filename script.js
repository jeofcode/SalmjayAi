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
    <img src="FB_IMG_1754147845000.jpg" alt="Salmjay">
    <div class="bubble">${getResponse(userInput)}</div>
  `;
  chatBox.appendChild(aiDiv);

  document.getElementById("user-input").value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getResponse(input) {
  const msg = input.toLowerCase();

  // Love and Aiessa-related
  if (msg.includes("aiessa")) return "Grabe... mahal na mahal ko talaga si Aiessa 😍";
  if (msg.includes("shut up")) return "Okay okay... tahimik na ako 😔";
  if (msg.includes("mango")) return "Oo gusto ko rin 'yun, lalo na kung kasama ko si Aiessa! 🥭💕";
  if (msg.includes("gusto mo ba siya")) return "Oo, sobra pa sa sobra. 😭💖";
  if (msg.includes("kanta")) return "'Mundo' ng IV of Spades. Para sa kanya talaga 'yon. 🎶😭";

  // Greetings
  if (msg.includes("hi") || msg.includes("hello")) return "Hello! 😊 Kamusta ka?";

  // Kumain ka na
  if (msg.includes("kumain ka na") || msg.includes("have you eaten")) return "Oo, pero mas masarap sana kung kasama ko si Aiessa. 😋🍽️";

  // Love question
  if (msg.includes("sino love mo") || msg.includes("who do you love")) return "Si Aiessa lang at wala nang iba. 💗";

  // Age
  if (msg.includes("ilang taon ka") || msg.includes("how old are you")) return "18 years old na ako. Fresh na fresh pa! 🎂";

  // Location
  if (msg.includes("saan ka nakatira") || msg.includes("where do you live")) return "Sa Bocaue, Bulacan ako nakatira. 🏡";

  // Birthday
  if (msg.includes("kailan birthday mo") || msg.includes("when is your birthday")) return "Birthday ko ay November 11, 2007. 🎉";

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
