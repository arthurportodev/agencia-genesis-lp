# Landing Page — Agência Gênesis

Nova landing page da Agência Gênesis construída com Astro e Tailwind CSS. O projeto gera HTML estático, utiliza JavaScript apenas para interações necessárias e não depende do WordPress.

## Tecnologias

- Astro
- Tailwind CSS v4
- TypeScript
- HTML semântico
- Google Tag Manager
- Deploy estático para Vercel ou Netlify

## Pré-requisitos

Instale uma versão atual do Node.js. Este projeto foi validado com Node.js 22.

- Node.js: https://nodejs.org/
- VS Code: https://code.visualstudio.com/
- Extensão recomendada: Astro, publicada pela Astro Technology Company

## Instalação

Abra a pasta do projeto no terminal e execute:

```bash
npm install
```

## Rodar localmente

```bash
npm run dev
```

O terminal mostrará o endereço local, normalmente:

```text
http://localhost:4321
```

## Gerar o build de produção

```bash
npm run build
```

O resultado será criado na pasta:

```text
dist/
```

## Visualizar o build

```bash
npm run preview
```

## Onde editar as informações principais

As informações reutilizadas em todo o projeto estão em:

```text
src/data/site.ts
```

Nesse arquivo você pode alterar:

- Nome da agência
- Posicionamento
- Número do WhatsApp
- Mensagem inicial do WhatsApp
- URL e ID do vídeo
- ID do Google Tag Manager
- Título de SEO
- Meta description
- URL do domínio
- Texto do rodapé

## Alterar os textos das seções

Os conteúdos estão separados em:

```text
src/data/problems.ts
src/data/benefits.ts
src/data/process.ts
src/data/faq.ts
```

Os títulos principais e textos de transição ficam dentro dos respectivos componentes em:

```text
src/components/
```

## Alterar o vídeo

Edite estas propriedades em `src/data/site.ts`:

```ts
videoId: 'ID_DO_VIDEO',
videoEmbedUrl: 'https://www.youtube.com/embed/ID_DO_VIDEO',
```

O projeto usa uma fachada leve: a imagem de capa é carregada primeiro e o iframe do YouTube só é criado depois do clique.

## Alterar o WhatsApp

Edite em `src/data/site.ts`:

```ts
const whatsappNumber = '55DDDNUMERO';
const whatsappMessage = 'Sua mensagem inicial';
```

Todos os botões usam essas informações automaticamente.

## Alterar o Google Tag Manager

Edite em `src/data/site.ts`:

```ts
gtmId: 'GTM-XXXXXXX',
```

O script e o bloco `noscript` são inseridos pelo layout principal.

## Validar o GTM

1. Publique ou abra a página localmente.
2. Entre no Google Tag Manager.
3. Clique em **Visualizar**.
4. Informe a URL da página.
5. Teste os botões de WhatsApp, o vídeo, o FAQ e a rolagem.
6. Confira os eventos no modo de visualização.

Eventos preparados:

- `page_view_custom`
- `whatsapp_click`
- `video_click`
- `faq_open`
- `scroll_depth`

## Alterar as cores

Os tokens visuais ficam no início de:

```text
src/styles/global.css
```

Procure o bloco `@theme`:

```css
--color-page
--color-surface
--color-text-primary
--color-text-secondary
--color-gold
--color-whatsapp
```

## Substituir imagens

Coloque novas imagens em:

```text
public/images/
```

Depois utilize caminhos iniciando com `/images/`.

Exemplo:

```html
<img src="/images/nome-da-imagem.webp" alt="Descrição da imagem" />
```

Prefira WebP ou AVIF e sempre defina largura, altura e texto alternativo.

## Configurar o domínio e SEO

Crie um arquivo `.env` na raiz com a URL real:

```env
PUBLIC_SITE_URL=https://seudominio.com.br
```

Também atualize a linha `Sitemap` em:

```text
public/robots.txt
```

Antes de publicar, substitua `https://example.com` pelo domínio real.

## Subir para o GitHub

Na pasta do projeto:

```bash
git init
git add .
git commit -m "Cria nova landing page da Agência Gênesis"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

Crie o repositório no GitHub antes de adicionar o endereço remoto.

## Publicar na Vercel

1. Envie o projeto para o GitHub.
2. Entre na Vercel.
3. Clique em **Add New Project**.
4. Importe o repositório.
5. A Vercel detectará o Astro automaticamente.
6. Cadastre `PUBLIC_SITE_URL` em **Environment Variables**.
7. Clique em **Deploy**.

Para este projeto estático, não é necessário instalar adaptador da Vercel.

## Publicar na Netlify

1. Envie o projeto para o GitHub.
2. Entre na Netlify.
3. Escolha **Add new project** e importe o repositório.
4. Use:

```text
Build command: npm run build
Publish directory: dist
```

5. Cadastre `PUBLIC_SITE_URL` nas variáveis de ambiente.
6. Publique o projeto.

O arquivo `netlify.toml` já contém as configurações básicas.

## Conectar um domínio

Depois do deploy:

1. Abra as configurações de domínio da Vercel ou Netlify.
2. Adicione o domínio oficial.
3. A plataforma mostrará os registros DNS necessários.
4. Entre no provedor do domínio, como Registro.br, Hostinger ou GoDaddy.
5. Adicione os registros indicados.
6. Aguarde a propagação do DNS.
7. Confirme o SSL e teste `www` e domínio sem `www`.

## Variáveis de ambiente futuras

Dados públicos, como URL do site, podem usar prefixo `PUBLIC_`.

Nunca coloque no frontend:

- Chaves privadas
- Tokens administrativos
- Senhas
- Service role do Supabase
- Segredos de webhook

Integrações futuras com dados sensíveis devem utilizar funções serverless, API própria ou n8n com autenticação adequada.

## Estrutura do projeto

```text
agencia-genesis-landing/
├── public/
│   ├── favicon.svg
│   ├── images/
│   ├── icons/
│   ├── robots.txt
│   └── social-preview.png
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   ├── scripts/
│   └── styles/
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

## Checklist antes da publicação

- [ ] Substituir `PUBLIC_SITE_URL` pelo domínio real
- [ ] Atualizar o domínio em `public/robots.txt`
- [ ] Confirmar número e mensagem do WhatsApp
- [ ] Confirmar vídeo principal
- [ ] Confirmar ID do GTM
- [ ] Validar todos os CTAs
- [ ] Testar menu mobile
- [ ] Testar FAQ
- [ ] Testar vídeo
- [ ] Testar em celular e desktop
- [ ] Executar `npm run build`
- [ ] Validar GTM no modo de visualização
- [ ] Validar título, descrição e imagem de compartilhamento
- [ ] Criar as páginas reais de política de privacidade e termos antes de transformar os placeholders do rodapé em links
- [ ] Testar o site no PageSpeed Insights após a publicação
