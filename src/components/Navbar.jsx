import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#ddd' }}>
      <Link to="/" style={{ marginRight: 10 }}>Home</Link>
      <Link to="/users" style={{ marginRight: 10 }}>Users</Link>
      <Link to="/create-user" style={{ marginRight: 10 }}>Create User</Link>
    </nav>
  );
}
