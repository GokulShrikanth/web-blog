import React, { useState } from 'react';

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function register(ev) {
        ev.preventDefault();
        console.log('Registering...');
        await fetch('http://localhost:4000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username,email, password}),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }

    return (
        <form className="register" onSubmit={register}>
            <h1>Register</h1>
            <input type="text" placeholder="Username" value={username} onChange={ev => setUsername(ev.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={ev => setEmail(ev.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={ev => setPassword(ev.target.value)} />
            <button type="submit">Register</button>
        </form>
    );
}
