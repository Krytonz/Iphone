# Nossa Loja Apple

Landing page responsiva para uma loja de produtos Apple em Porto Velho, construída com React, Vite, Tailwind CSS e Framer Motion.

## Funcionalidades

- Hero com carrossel 3D de iPhones e animações de entrada.
- Catálogo de produtos com páginas de detalhes.
- Seção de assistência técnica e orçamento via WhatsApp.
- Navegação por seções, menu mobile e tema escuro.
- Metadados básicos para SEO.

## Desenvolvimento local

```bash
npm install
npm run dev
```

A aplicação fica disponível em `http://localhost:5173`.

## Verificações

```bash
npm run lint
npm run build
```

## Deploy na Vercel

O projeto é frontend-only e pode ser importado diretamente na Vercel como um projeto Vite. Use `npm run build` como comando de build e `dist` como diretório de saída. Não há variáveis de ambiente obrigatórias.

> Os links do WhatsApp usam um placeholder até que o número comercial seja informado. Atualize `https://wa.me/seu-numero-aqui` nos componentes antes de publicar, caso queira ativar os contatos.
