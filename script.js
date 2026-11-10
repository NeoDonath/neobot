function sendMessage() {

    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    const message = input.value.trim();

    if (message === "") {
        return;
    }

    const userMessage = document.createElement("div");

    userMessage.className = "user-message";
    userMessage.textContent = message;

    chatBox.appendChild(userMessage);

    const aiMessage = document.createElement("div");

    aiMessage.className = "ai-message";
    aiMessage.textContent =
        "Hello! I received your question. My AI brain will be connected soon!";

    chatBox.appendChild(aiMessage);

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}