// ============================================
// CONFIGURAÇÕES GLOBAIS DA LOJA
// Edite este ficheiro para personalizar tudo.
// ============================================

// Número de WhatsApp (formato internacional, sem +, espaços ou traços)
// Exemplo Moçambique: 258841234567
export const WHATSAPP_NUMBER = 'SEU_NUMERO_AQUI';

export const STORE_NAME = 'iPhone Store';
export const INSTAGRAM_URL = 'https://instagram.com/seuinstagram';
export const FACEBOOK_URL = 'https://facebook.com/suapagina';

// Lista de produtos — edite, adicione ou remova facilmente
export const PRODUCTS = [
  {
    id: 1,
    name: 'iPhone 11',
    storage: '64GB',
    condition: 'Novo',
    price: '2.499,00',
    image: '/images/iphone11.png',
  },
  {
    id: 2,
    name: 'iPhone 12',
    storage: '128GB',
    condition: 'Novo',
    price: '3.299,00',
    image: '/images/iphone12.png',
  },
  {
    id: 3,
    name: 'iPhone 13',
    storage: '128GB',
    condition: 'Novo',
    price: '3.899,00',
    image: '/images/iphone13.png',
  },
  {
    id: 4,
    name: 'iPhone 14',
    storage: '128GB',
    condition: 'Novo',
    price: '4.599,00',
    image: '/images/iphone14.png',
  },
  {
    id: 5,
    name: 'iPhone 15',
    storage: '128GB',
    condition: 'Novo',
    price: '5.499,00',
    image: '/images/iphone15.png',
  },
];

// Gera link do WhatsApp com mensagem automática
export function getWhatsAppLink(message) {
  const text = encodeURIComponent(message || 'Olá! Gostaria de mais informações.');
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}