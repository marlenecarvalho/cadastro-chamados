import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

// deletar chamado
export default function MeusChamados({ chamados }) {
  const handleDelete = (id) => {
    if (confirm('Tem certeza que deseja excluir este chamado?')) {
      router.delete(route('chamados.destroy', id));
    }
  };

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Meus Chamados
        </h2>
      }
    >
      <Head title="Meus Chamados" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              {chamados.length === 0 ? (
                <p>Você ainda não abriu nenhum chamado.</p>
              ) : (

                // Percorrer lista de chamados
                <ul className="space-y-4">
                  {chamados.map((chamado) => (
                    <li key={chamado.id} className="border p-4 rounded">
                      <h3 className="text-lg font-bold">{chamado.titulo}</h3>
                      <p>{chamado.descricao}</p>
                      <p className="text-sm text-gray-500">Status: {chamado.status}</p>

                      <div className="mt-2 flex gap-4">
                        <Link
                          href={route('chamados.edit', chamado.id)}
                          className="text-blue-600 hover:underline"
                        >
                          Editar
                        </Link>

                        <button
                          onClick={() => handleDelete(chamado.id)}
                          className="text-red-600 hover:underline"
                        >
                          Excluir
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}