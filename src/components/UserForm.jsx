import React, { useState, useEffect } from 'react';

export default function UserForm({ initialData = { name: '', email: '', password: '' }, onSubmit, isEdit = false }) {
  const [form, setForm] = useState(initialData);
  const [errors, setErrors] = useState({});

  // Cuando initialData cambie, actualizar form
  useEffect(() => {
    setForm(initialData);
  }, [initialData]);

  function validate() {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'El nombre es obligatorio';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Email inválido';
    if (!isEdit && form.password.length < 6) newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    return newErrors;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const valErrors = validate();
    if (Object.keys(valErrors).length > 0) {
      setErrors(valErrors);
      return;
    }
    setErrors({});
    onSubmit(form);
  }
 
  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <label className="block font-semibold">Nombre:</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          type="text"
        />
        {errors.name && <p className="text-red-600">{errors.name}</p>}
      </div>
      <div>
        <label className="block font-semibold">Email:</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        {errors.email && <p className="text-red-600">{errors.email}</p>}
      </div>
      {!isEdit && (
        <div>
          <label className="block font-semibold">Contraseña:</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.password && <p className="text-red-600">{errors.password}</p>}
        </div>
      )}
      {isEdit && (
        <div>
          <label className="block font-semibold">Nueva contraseña (opcional):</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            placeholder="Deja vacío si no cambias"
          />
          {errors.password && <p className="text-red-600">{errors.password}</p>}
        </div>
      )}
      <button
        type="submit"
        className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
      >
        {isEdit ? 'Actualizar' : 'Crear'}
      </button>
    </form>
  );
}
