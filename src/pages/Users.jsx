import React, { useEffect, useState } from 'react';
import { fetchUsers, deleteUser } from '../services/api';
import UserList from '../components/UserList';
import { useNavigate } from 'react-router-dom';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('¿Eliminar usuario?')) return;
    try {
      await deleteUser(id);
      loadUsers();
    } catch (e) {
      alert('Error al eliminar usuario: ' + e.message);
    }
  }

  function handleEdit(id) {
    navigate(`/edit/${id}`);
  }

  if (loading) return <p>Cargando usuarios...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Usuarios</h1>
      <button
        onClick={() => navigate('/create')}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Crear Nuevo Usuario
      </button>
      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}
