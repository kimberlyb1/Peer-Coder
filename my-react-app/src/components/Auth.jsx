import React, { useState } from 'react';
import axios from 'axios';
const Auth = ({ setUser }) => {
const [handle, setHandle] = useState('');
const [password, setPassword] = useState('');
const [isLogin, setIsLogin] = useState(true);
const handleAuth = async (e) => {
e.preventDefault();
const url = isLogin ? '/auth/login' : '/auth/register';
try {
const response = await axios.post(url, { handle, password });
setUser(response.data);
setHandle('');
setPassword('');
} catch (error) {
alert(error.response.data.error);
}
};
return (
<div>
<h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
<form onSubmit={handleAuth}>
<input
type="text"
value={handle}
onChange={(e) => setHandle(e.target.value)}
placeholder="Handle"
/>
<input
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}

placeholder="Password"
/>
<button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
</form>
<button onClick={() => setIsLogin(!isLogin)}>
{isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
</button>
</div>
);
};
export default Auth;