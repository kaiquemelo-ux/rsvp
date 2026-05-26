# RSVP Repense — Vue 3

Landing page RSVP com formulário conectado ao **Supabase**.

## Configuração

### 1. Variáveis de ambiente

```bash
copy .env.example .env.local
```

Preencha `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY` (chave publishable do projeto).

### 2. Tabela no Supabase

No [Dashboard Supabase](https://supabase.com/dashboard) → **SQL Editor**, execute o script:

`supabase/schema.sql`

Isso cria a tabela `rsvp_confirmacoes` com e-mail único e política RLS que permite apenas **INSERT** público.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Defina as mesmas variáveis `VITE_*` no ambiente de deploy (Vercel, Netlify, etc.).

## Imagens (`public/img/`)

- `banner_principal.png`
- `banner_mobile_v1.png`
- `programacao.svg`
