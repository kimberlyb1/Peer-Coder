import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:5000');
const Chat = ({ user }) => {
const [message, setMessage] = useState('');
const [publicMessages, setPublicMessages] = useState([]);
useEffect(() => {
socket.on('broadcast', (msg) => {
setPublicMessages((prev) => [...prev, msg]);
});
socket.on('private-request', (data) => {
// Handle private chat requests
alert(`User ${data.fromUserId} wants to start a private chat`);
});
socket.on('private-accepted', (data) => {

// Handle when private chat is accepted
alert('Private chat accepted');
});
}, []);
const sendPublicMessage = () => {
socket.emit('public-message', { message, user });
setMessage('');
};
return (
<div>
<h2>Public Chat</h2>
<div>
{publicMessages.map((msg, index) => (
<p key={index}>{msg.user.handle}: {msg.message}</p>
))}
</div>
<input
type="text"
value={message}
onChange={(e) => setMessage(e.target.value)}
placeholder="Type a message"
/>
<button onClick={sendPublicMessage}>Send</button>
</div>
);
};
export default Chat;