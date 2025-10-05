import React, { useState, useEffect } from 'react';

export default function PruebaForm({ initialData = {} }) {
  const [form, setForm] = useState({ name: '', email: '' });

  useEffect(() => {
    setForm({
      name: initialData.name ?? '',
      email: initialData.email ?? '',
    });
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h3>PruebaForm</h3>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <pre>{JSON.stringify(form)}</pre>
    </div>
  );
}