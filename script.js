var password = "tucontraseña"; // Cambia "tucontraseña" a la contraseña que deseas utilizar
var authenticated = false;

function authenticate() {
    var enteredPassword = document.getElementById('password').value;
    if (enteredPassword === password) {
        authenticated = true;
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('chat-box').style.display = 'block';
        document.getElementById('message-input').style.display = 'block';
        document.querySelector('button').style.display = 'block';
    } else {
        alert("Contraseña incorrecta. Intenta de nuevo.");
    }
}

function sendMessage(event) {
    if (authenticated && event.key === "Enter") {
        var messageInput = document.getElementById('message-input');
        var message = messageInput.value.trim();
        if (message !== '') {
            var chatBox = document.getElementById('chat-box');
            chatBox.innerHTML += '<p><strong>Tú:</strong> ' + message + '</p>';
            chatBox.scrollTop = chatBox.scrollHeight;
            messageInput.value = '';
        }
    }
}
