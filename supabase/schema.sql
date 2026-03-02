-- ════════════════════════════════════════
-- supabase/schema.sql — Void Esports
-- Run this in: Supabase Dashboard → SQL Editor
-- ════════════════════════════════════════

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ── Users ─────────────────────────────────────────────────────────────────────
-- This mirrors auth.users for display purposes
create table if not exists public.users (
  id          uuid primary key default uuid_generate_v4(),
  name        text,
  email       text unique,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

-- ── Quiz Results ───────────────────────────────────────────────────────────────
create table if not exists public.quiz_results (
  id          uuid primary key default uuid_generate_v4(),
  user_id     uuid references public.users(id) on delete set null,
  score       integer not null check (score >= 0),
  total       integer not null check (total > 0),
  percentage  integer not null check (percentage >= 0 and percentage <= 100),
  passed      boolean not null default false,
  taken_at    timestamptz default now()
);

-- ── Applications (Certification Exam Submissions) ─────────────────────────────
create table if not exists public.applications (
  id                uuid primary key default uuid_generate_v4(),
  candidate_name    text not null,
  discord_id        text not null,
  score             integer not null default 0,
  max_score         integer not null default 200,
  percentage        integer not null default 0,
  warn_count        integer not null default 0,
  answers           jsonb,
  score_breakdown   jsonb,
  status            text not null default 'pending'
                      check (status in ('pending','approved','denied')),
  review_notes      text,
  reviewed_by       text,
  reviewed_at       timestamptz,
  submitted_at      timestamptz default now()
);

-- ── Indexes ───────────────────────────────────────────────────────────────────
create index if not exists idx_quiz_results_user_id  on public.quiz_results(user_id);
create index if not exists idx_quiz_results_taken_at on public.quiz_results(taken_at desc);
create index if not exists idx_applications_status   on public.applications(status);
create index if not exists idx_applications_submitted on public.applications(submitted_at desc);
create index if not exists idx_applications_discord  on public.applications(discord_id);

-- ── Row Level Security (RLS) ─────────────────────────────────────────────────
-- Enable RLS on all tables
alter table public.users         enable row level security;
alter table public.quiz_results  enable row level security;
alter table public.applications  enable row level security;

-- quiz_results: Anyone can insert (anon can save quiz); only authed admins read all
create policy "anon insert quiz_results"
  on public.quiz_results for insert
  to anon, authenticated
  with check (true);

create policy "authenticated read quiz_results"
  on public.quiz_results for select
  to authenticated
  using (true);

-- applications: Anyone can insert (anon submits cert exam); only authed admins read/update
create policy "anon insert applications"
  on public.applications for insert
  to anon, authenticated
  with check (true);

create policy "authenticated read applications"
  on public.applications for select
  to authenticated
  using (true);

create policy "authenticated update applications"
  on public.applications for update
  to authenticated
  using (true)
  with check (true);

-- users: Only authenticated can read/write
create policy "authenticated manage users"
  on public.users for all
  to authenticated
  using (true)
  with check (true);
