import React, { useState } from 'react';
import UserForm from '../components/UserForm';
import { createUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function CreateUser() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  async function handleCreate(data) {
    setError(null);
    try {
      await createUser(data);
      alert('Usuario creado exitosamente');
      navigate('/users');
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Crear Usuario</h1>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <UserForm onSubmit={handleCreate} />
    </div>
  );
}
