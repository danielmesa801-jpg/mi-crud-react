import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex space-x-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/users" className="hover:underline">Usuarios</Link>
      <Link to="/create" className="hover:underline">Crear Usuario</Link>
    </nav>
  );
}
