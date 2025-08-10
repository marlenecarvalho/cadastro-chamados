import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard() {
  return (
    <AuthenticatedLayout
      header={
        <div className="flex flex-col items-center gap-6 mt-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            Painel de Chamados
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-xl">
            Bem-vindo! Aqui você pode abrir novos chamados e acompanhar seus atendimentos de forma rápida e prática.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link
              href="/abrir-chamado"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg shadow transition duration-300"
            >
              Abrir novo chamado
            </Link>
            <Link
              href="/meus-chamados"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg shadow transition duration-300"
            >
              Ver meus chamados
            </Link>
          </div>
        </div>
      }
    >
      <Head title="Meu painel" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
            <div className="p-6 text-gray-900 dark:text-gray-100 text-lg font-medium">
              Acompanhe aqui os seus chamados!
            </div>
            <div className="px-6 pb-6 text-gray-600 dark:text-gray-300">
              Você pode visualizar o status dos seus chamados, abrir novos ou revisar os já resolvidos.
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}