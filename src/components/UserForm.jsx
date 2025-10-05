import React, { useState, useEffect } from "react";

export default function UserForm({ initialData = {}, onSubmit, isEdit }) {
  const [form, setForm] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    // ✅ Evita reiniciar el formulario cuando initialData es vacío
    if (Object.keys(initialData).length > 0) {
      setForm({
        name: initialData.name ?? "",
        email: initialData.email ?? "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setError("Por favor completa todos los campos.");
      return;
    }
    setError("");
    onSubmit?.(form);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        {isEdit ? "Editar Usuario" : "Crear Usuario"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Nombre</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Ingresa el nombre"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Correo electrónico
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Ingresa el correo"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {error && (
          <p className="text-red-600 text-sm bg-red-50 border border-red-200 p-2 rounded">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition-all duration-200"
        >
          {isEdit ? "Actualizar" : "Guardar"}
        </button>
      </form>
    </div>
  );
}
