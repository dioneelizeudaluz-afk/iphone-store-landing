import { PRODUCTS, getWhatsAppLink } from '../config.js';

export default function Products() {
  return (
    <section id="iphones" className="py-20 lg:py-28 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-dark">
            Escolha o seu iPhone
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Modelos selecionados com garantia e procedência.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-semibold text-dark">{product.name}</h3>
              <div className="mt-2 space-y-1 text-sm text-gray-500">
                <p>{product.storage}</p>
                <p>{product.condition}</p>
              </div>
              <p className="mt-4 text-xl font-semibold text-primary">
                R$ {product.price}
              </p>
              <a
                href={getWhatsAppLink(
                  `Olá! Tenho interesse no ${product.name} (${product.storage}, ${product.condition}).`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-primary text-white text-sm font-medium rounded-full hover:bg-blue-600 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Comprar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}