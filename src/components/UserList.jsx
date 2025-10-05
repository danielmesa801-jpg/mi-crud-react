import React from "react";

export default function UserList({ users, onEdit, onDelete }) {
  if (!users || users.length === 0) {
    return <p>No hay usuarios para mostrar.</p>;
  }

  return (
    <table className="min-w-full border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border px-4 py-2">Nombre</th>
          <th className="border px-4 py-2">Email</th>
          <th className="border px-4 py-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id} className="hover:bg-gray-100">
            <td className="border px-4 py-2">{u.name}</td>
            <td className="border px-4 py-2">{u.email}</td>
            <td className="border px-4 py-2 space-x-2">
              <button
                onClick={() => onEdit(u.id)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Editar
              </button>
              <button
                onClick={() => onDelete(u.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
