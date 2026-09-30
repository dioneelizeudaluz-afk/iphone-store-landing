import { getWhatsAppLink } from '../config.js';

export default function FinalCTA() {
  return (
    <section id="contacto" className="py-20 lg:py-28 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-dark">
          Pronto para ter o seu iPhone?
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Escolha o modelo que deseja e fale connosco agora.
        </p>
        <a
          href={getWhatsAppLink('Olá! Estou pronto para comprar o meu iPhone.')}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          Comprar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}