function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();
    if (message === "") return;

    const chatMessages = document.getElementById("chatMessages");

    // Message utilisateur
    const userMsg = document.createElement("div");
    userMsg.className = "message user";
    userMsg.textContent = message;
    chatMessages.appendChild(userMsg);

    // Réponse simulée du bot
    const botMsg = document.createElement("div");
    botMsg.className = "message bot";
    botMsg.textContent = "hello my fucking bro !!";
    chatMessages.appendChild(botMsg);

    input.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
function toggleMenu() {
    const menu = document.getElementById("menu");
    const burger = document.querySelector(".burger");
    menu.classList.toggle("active");
    burger.classList.toggle("active");
    }