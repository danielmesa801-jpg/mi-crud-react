const BASE_URL = "http://localhost:8080/api/users";
export async function fetchUsers() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error('Error al obtener usuarios');
  return res.json();
}

export async function fetchUserById(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error('Error al obtener usuario');
  return res.json();
}

export async function createUser(userData) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Error al crear usuario');
  }
  return res.json();
}

export async function updateUser(id, userData) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Error al actualizar usuario');
  }
  return res.json();
}

export async function deleteUser(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Error al eliminar usuario');
  return true;
}
