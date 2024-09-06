import React, { useState } from 'react';


const LoginRegister = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      if (user.role === 'Kirana Store Admin') {
        // login successful, display user profile and data
        console.log('Login successful as Kirana Store Admin');
      } else if (user.role === 'Salesmen') {
        if (user.approved) {
          // login successful, display user profile and data
          console.log('Login successful as Salesmen');
        } else {
          alert('You are not approved as Salesmen. Please contact Kirana Store Admin for approval.');
        }
      } else if (user.role === 'Buyer') {
        // login successful, display user profile and data
        console.log('Login successful as Buyer');
      }
    } else {
      alert('Invalid username or password');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = { username, password, role };
    if (role === 'Salesmen') {
      newUser.approved = false;
    }
    setUsers([...users, newUser]);
    localStorage.setItem('users', JSON.stringify([...users, newUser]));
    console.log('Registration successful');
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div className="flex justify-center h-screen">
      <div className="w-full max-w-md p-4 bg-white rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4">Login/Register</h1>
        <form>
          <label className="block mb-2">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
          <br />
          <label className="block mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          />
          <br />
          <label className="block mb-2">Role:</label>
          <select
            value={role}
            onChange={handleRoleChange}
            className="w-full p-2 pl-10 text-sm text-gray-700"
          >
            <option value="Kirana Store Admin">Kirana Store Admin</option>
            <option value="Salesmen">Salesmen</option>
            <option value="Buyer">Buyer</option>
          </select>
          <br />
          <button
            onClick={handleLogin}
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
          <button
            onClick={handleRegister}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Register
          </button>
        </form>
        <h2 className="text-2xl font-bold mb-4">User Profiles:</h2>
        <ul>
          {users.map((user) => (
            <li key={user.username} className="py-2">
              {user.username} ({user.role})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LoginRegister;