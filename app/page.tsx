"use client";

import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Email Sent Successfully!");
    setForm({ name: "", email: "" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
    <h1 className="text-red-900 text-5xl text-center">form testing</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-6 rounded w-80"
      >
        <h1 className="text-2xl text-center mb-4">Simple Form</h1>

        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}