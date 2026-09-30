const STEPS = [
  {
    number: '01',
    title: 'Escolha o iPhone',
    description: 'Navegue pelos modelos disponíveis e escolha o seu favorito.',
  },
  {
    number: '02',
    title: 'Fale connosco pelo WhatsApp',
    description: 'Clique no botão e inicie a conversa com a nossa equipa.',
  },
  {
    number: '03',
    title: 'Combine pagamento e entrega',
    description: 'Acertamos os detalhes de forma rápida e segura.',
  },
];

export default function HowToBuy() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-dark text-center mb-16">
          Como comprar
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {STEPS.map((step, index) => (
            <div key={index} className="text-center md:text-left">
              <span className="text-5xl font-semibold text-primary/20">{step.number}</span>
              <h3 className="mt-4 text-xl font-semibold text-dark">{step.title}</h3>
              <p className="mt-3 text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}