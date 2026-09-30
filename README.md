# iPhone Store — Landing Page

Landing page moderna e profissional para venda de iPhones, com pedidos enviados diretamente pelo WhatsApp.

## Tecnologia

- React 18
- Vite
- Tailwind CSS

## Como executar localmente

```bash
npm install
npm run dev
```

Abre http://localhost:5173 no navegador.

## Como personalizar

Edita o ficheiro `src/config.js`:

- `WHATSAPP_NUMBER` — o teu número de WhatsApp (formato internacional, sem +)
- `STORE_NAME` — nome da loja
- `INSTAGRAM_URL` e `FACEBOOK_URL` — links sociais
- `PRODUCTS` — lista de produtos (nome, armazenamento, estado, preço, imagem)

Coloca as imagens dos iPhones em `public/images/`:

- `hero-iphone.png`
- `iphone11.png`
- `iphone12.png`
- `iphone13.png`
- `iphone14.png`
- `iphone15.png`

## Como publicar na Vercel

1. Cria um repositório no GitHub e faz push do projeto.
2. Acede a https://vercel.com e importa o repositório.
3. A Vercel deteta automaticamente o Vite. Clica em Deploy.
4. Após o deploy, podes configurar um domínio personalizado.

## Estrutura

```
src/
  components/
    Header.jsx
    Hero.jsx
    Products.jsx
    Offer.jsx
    WhyUs.jsx
    HowToBuy.jsx
    FinalCTA.jsx
    Footer.jsx
  App.jsx
  config.js
  index.css
  main.jsx
public/
  favicon.svg
  images/
index.html
package.json
vite.config.js
tailwind.config.js
postcss.config.js
```

## Verificação final

- Todos os botões funcionam (WhatsApp ou âncoras internas).
- Menu mobile funcional.
- Sem links quebrados.
- Sem erros de importação.
- Totalmente responsivo.
- WhatsApp configurável via variável.
- Produtos, preços e imagens editáveis num único ficheiro (`src/config.js`).
