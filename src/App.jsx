import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser';

export default function App() {
  return (
    <BrowserRouter>
      <nav className="bg-gray-800 p-4 text-white flex space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/users" className="hover:underline">Usuarios</Link>
        <Link to="/create" className="hover:underline">Crear Usuario</Link>
      </nav>
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
