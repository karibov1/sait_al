document.getElementById('voice-btn').addEventListener('click', () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'ru-RU';

    recognition.onresult = (event) => {
        const voiceText = event.results[0][0].transcript;
        document.getElementById('text-input').value = voiceText;
    };

    recognition.start();
});

document.getElementById('analyze-btn').addEventListener('click', () => {
    const text = document.getElementById('text-input').value;
    const wordCount = text.trim().split(/\s+/).length;

    alert(`В вашем тексте ${wordCount} слов!`);
});

const botReplies = {
    "привет": "Привет! Чем могу помочь?",
    "как дела": "Я просто программа, но спасибо, что спросили!",
    "пока": "До встречи!"
};

document.getElementById('send-btn').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value.toLowerCase();
    const chatContainer = document.getElementById('chat-container');

    chatContainer.innerHTML += `<p>Вы: ${userInput}</p>`;
    chatContainer.innerHTML += `<p>Бот: ${botReplies[userInput] || "Я не понял, повторите пожалуйста."}</p>`;
});
