import { getWhatsAppLink } from '../config.js';

export default function Offer() {
  return (
    <section id="ofertas" className="py-20 lg:py-28 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-dark rounded-3xl p-10 lg:p-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          Oferta especial
        </h2>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto text-lg">
          Desconto em modelos selecionados por tempo limitado.
        </p>
        <a
          href={getWhatsAppLink('Olá! Gostaria de aproveitar a oferta especial em iPhones.')}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          Aproveitar oferta
        </a>
      </div>
    </section>
  );
}