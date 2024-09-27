import React, { useState } from 'react';
import Auth from './components/Auth';

import Chat from './components/Chat';
const App = () => {
const [user, setUser] = useState(null);
return (
<div className="App">
{!user ? (
<Auth setUser={setUser} />
) : (
<Chat user={user} />
)}
</div>
);
};
export default App;