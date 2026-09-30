import { getWhatsAppLink } from '../config.js';

export default function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-dark leading-tight">
            Seu próximo iPhone está aqui.
          </h1>
          <p className="mt-6 text-lg text-gray-500 max-w-lg mx-auto lg:mx-0">
            iPhones selecionados, preços competitivos e atendimento rápido.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#iphones"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-dark text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Ver iPhones
            </a>
            <a
              href={getWhatsAppLink('Olá! Gostaria de saber mais sobre os iPhones disponíveis.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Comprar pelo WhatsApp
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <img
            src="/images/hero-iphone.png"
            alt="iPhone elegante"
            className="w-64 sm:w-80 lg:w-full max-w-md drop-shadow-2xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}