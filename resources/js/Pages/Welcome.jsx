import React from "react";
import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth }) {
  const currentYear = new Date().getFullYear(); // ano atual para o footer
  const appName = import.meta.env.VITE_APP_NAME || "Seus chamados";

  return (
    <>
      <Head title="Home" />

      <div className="h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex flex-col items-center justify-center text-white px-6">
        <header className="mb-8 text-center">
          <h1 className="text-5xl font-bold tracking-tight drop-shadow-lg">
            Gerencie seus chamados com facilidade
          </h1>
          <p className="mt-4 text-lg text-purple-100">
            Bem-vindo ao <span className="font-semibold">{appName}</span> — sua central de atendimento moderna.
          </p>
        </header>
         
         
        <div className="flex flex-wrap gap-4 justify-center">
          {auth.user ? (                       // verificar se ja existe cadastro
            <Link
              href={route("dashboard")}
              className="bg-white text-purple-700 hover:bg-purple-100 font-medium py-2 px-6 rounded-lg shadow transition duration-300"
            >
              Painel de controle
            </Link>
          ) : (
            <>
              <Link
                href={route("login")}
                className="bg-white text-purple-700 hover:bg-purple-100 font-medium py-2 px-6 rounded-lg shadow transition duration-300"
              >
                Acessar
              </Link>

              <Link
                href={route("register")}
                className="bg-white text-purple-700 hover:bg-purple-100 font-medium py-2 px-6 rounded-lg shadow transition duration-300"
              >
                Cadastrar
              </Link>
            </>
          )}
        </div>

        <footer className="mt-12 text-sm text-purple-200">
          &copy; {currentYear} {appName}. Criado por Marlene Carvalho. Todos os direitos reservados.
        </footer>
      </div>
    </>
  );
}