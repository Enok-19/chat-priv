var password = "tucontraseña"; // Cambia "tucontraseña" a la contraseña que deseas utilizar

function authenticate() {
    var enteredPassword = document.getElementById('password').value;
    if (enteredPassword === password) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('chat-box').style.display = 'block';
        document.getElementById('message-input').style.display = 'block';
        document.querySelector('button').style.display = 'block';
    } else {
        alert("Contraseña incorrecta. Intenta de nuevo.");
    }
}

function sendMessage() {
    // Función para enviar mensajes (código previo)
}
