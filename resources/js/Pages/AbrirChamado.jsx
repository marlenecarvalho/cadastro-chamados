import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function AbrirChamado({ auth }) {
  const { data, setData, post, processing, errors } = useForm({
    titulo: '',
    descricao: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('chamados.store')); // Rota que salva o chamado
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Abrir Chamado
        </h2>
      }
    >
      <Head title="Abrir Chamado" />

      <div className="py-12">
        <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-1 font-semibold">Título</label>
                <input
                  type="text"
                  value={data.titulo}
                  onChange={(e) => setData('titulo', e.target.value)}
                  className="border p-2 w-full rounded"
                />
                {errors.titulo && (
                  <p className="text-red-500 text-sm mt-1">{errors.titulo}</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block mb-1 font-semibold">Descrição</label>
                <textarea
                  value={data.descricao}
                  onChange={(e) => setData('descricao', e.target.value)}
                  className="border p-2 w-full rounded"
                  rows="4"
                />
                {errors.descricao && (
                  <p className="text-red-500 text-sm mt-1">{errors.descricao}</p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  disabled={processing}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
                >
                  {processing ? 'Enviando...' : 'Enviar'}
                </button>

                <Link
                  href="/dashboard"
                  className="text-blue-600 hover:underline ml-4"
                >
                   Voltar ao painel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}