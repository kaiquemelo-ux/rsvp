-- Execute no SQL Editor do Supabase (Dashboard → SQL)

create table if not exists public.rsvp_confirmacoes (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  email text not null,
  telefone text not null,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  gclid text,
  fbclid text,
  page_url text,
  referrer text,
  user_agent text,
  created_at timestamptz not null default now(),
  constraint rsvp_confirmacoes_email_unique unique (email)
);

create index if not exists rsvp_confirmacoes_created_at_idx
  on public.rsvp_confirmacoes (created_at desc);

alter table public.rsvp_confirmacoes enable row level security;

-- Permite apenas INSERT anônimo (formulário público); sem leitura pública
drop policy if exists "rsvp_public_insert" on public.rsvp_confirmacoes;
create policy "rsvp_public_insert"
  on public.rsvp_confirmacoes
  for insert
  to anon, authenticated
  with check (true);
