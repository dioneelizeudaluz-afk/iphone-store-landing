import { STORE_NAME, WHATSAPP_NUMBER, INSTAGRAM_URL, FACEBOOK_URL } from '../config.js';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold text-dark">{STORE_NAME}</p>
          <p className="mt-1 text-sm text-gray-400">
            © {new Date().getFullYear()} {STORE_NAME}. Todos os direitos reservados.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-primary transition-colors"
          >
            WhatsApp
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-primary transition-colors"
          >
            Instagram
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-primary transition-colors"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}