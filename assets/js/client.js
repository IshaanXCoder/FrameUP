const socket = io('http://localhost:8000');

const username = prompt('Enter your username');
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container');
const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add(message);
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
};
const username = prompt("Enter your name to join : ");


socket.emit('new-user-joined', username);

socket.on('user-joined', data => {
    append(`${username} joined the chat', 'right'`);
})