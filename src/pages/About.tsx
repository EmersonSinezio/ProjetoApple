import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  FiRefreshCw,
  FiSmartphone,
  FiHeart,
  FiShield,
  FiZap,
} from "react-icons/fi";
import { GiStarsStack } from "react-icons/gi";

export default function AboutPage() {
  const [isOldProjectOpen, setIsOldProjectOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Seção Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-8">
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-200">
                  <FiRefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Projeto Renovado 2024
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl dark:text-white">
                Da Nostalgia à <span className="text-blue-600">Inovação</span>
              </h1>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                Há aproximadamente 2 anos, iniciei minha jornada no mundo de
                desenvolvimento de softwares, e conforme o tempo passou assim
                como o aprendizado obtido resolvi recriar esse projeto
              </p>
              <button
                onClick={() => setIsOldProjectOpen(true)}
                className="px-6 py-3 font-medium text-gray-600 transition-all duration-300 bg-indigo-500 border-2 rounded-lg dark:border-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                Veja como era antes
              </button>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative max-w-lg mx-auto lg:mr-0">
                <div className="absolute -top-8 -right-8">
                  <div className="relative">
                    <div className="absolute w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Linha do Tempo da Evolução */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <h2 className="mb-16 text-3xl font-bold text-center text-gray-900 md:text-4xl dark:text-white">
            Minha Evolução Tecnológica
          </h2>
          <p className="max-w-2xl mx-auto mb-16 text-xl text-center text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text dark:from-blue-400 dark:to-purple-400">
            "O sucesso não é definitivo, o fracasso não é fatal: o que importa é
            a coragem de continuar."
            <span className="block mt-2 text-sm italic text-blue-600 dark:text-blue-400">
              - Winston Churchill
            </span>
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-8 bg-gray-50 rounded-xl dark:bg-gray-700">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-blue-600 bg-blue-100 rounded-lg dark:bg-blue-900">
                <FiSmartphone className="w-6 h-6" />
              </div>
              <h3 className="mb-4 text-xl font-semibold dark:text-white">
                Primeira Versão (2023)
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Focada em aprender sobre React</li>
                <li>• Feito tudo em apenas uma página</li>
                <li>• Tentativa de implementar animações</li>
              </ul>
            </div>

            <div className="p-8 bg-blue-50 rounded-xl dark:bg-gray-700">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-white bg-blue-600 rounded-lg">
                <GiStarsStack className="w-6 h-6" />
              </div>
              <h3 className="mb-4 text-xl font-semibold dark:text-white">
                Nova Versão (2025)
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>• Multiplas páginas</li>
                <li>• Frameworks modernos visando otimização</li>
                <li>• Implementação de animações</li>
              </ul>
            </div>

            <div className="p-8 bg-gray-50 rounded-xl dark:bg-gray-700">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-blue-600 bg-blue-100 rounded-lg dark:bg-blue-900">
                <FiHeart className="w-6 h-6" />
              </div>
              <h3 className="mb-4 text-xl font-semibold dark:text-white">
                Compromisso Contínuo
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Continuando o trabalho para tornar esse projeto ainda melhor e
                aprender cada vez mais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparação Antigo/Novo */}
      <Transition show={isOldProjectOpen}>
        <Dialog
          onClose={() => setIsOldProjectOpen(false)}
          className="relative z-50"
        >
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel className="w-full max-w-2xl p-8 bg-white rounded-xl dark:bg-gray-800">
                <Dialog.Title className="mb-6 text-2xl font-bold dark:text-white">
                  Comparação com a Versão Antiga
                </Dialog.Title>

                <div className="flex justify-center items-center">
                  <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-700">
                    <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">
                      2023 - Primeiros Passos
                    </h4>
                    <img
                      src="/assets/oldHomepage.png"
                      alt="Versão Antiga"
                      className="mb-4 rounded-lg"
                    />
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Design simples, focado em aprender sobre a tecnologia
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsOldProjectOpen(false)}
                  className="mt-6 px-4 py-2 text-sm font-medium text-gray-600 transition-colors dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Fechar Comparativo
                </button>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}
