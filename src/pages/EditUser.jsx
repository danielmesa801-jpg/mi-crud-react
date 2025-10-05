import React, { useEffect, useState } from 'react';
import UserForm from '../components/UserForm';
import { fetchUserById, updateUser } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadUser() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchUserById(id);
        setUser(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, [id]);

  const handleUpdate = async (data) => {
    setError(null);
    try {
      await updateUser(id, data);
      alert('Usuario actualizado correctamente');
      navigate('/users');
    } catch (e) {
      setError(e.message);
    }
  };

  if (loading) return <p>Cargando usuario...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Editar Usuario</h1>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <UserForm initialData={user} onSubmit={handleUpdate} isEdit />
    </div>
  );
}
