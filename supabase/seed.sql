-- ════════════════════════════════════════
-- supabase/seed.sql — Void Esports
-- Optional: Run this AFTER schema.sql to populate sample data
-- Run in: Supabase Dashboard → SQL Editor
-- ════════════════════════════════════════

-- ── Sample Quiz Results ────────────────────────────────────────────────────────
insert into public.quiz_results (score, total, percentage, passed, taken_at) values
  (24, 30, 80, true,  now() - interval '3 days'),
  (18, 30, 60, false, now() - interval '2 days'),
  (27, 30, 90, true,  now() - interval '1 day'),
  (21, 30, 70, true,  now() - interval '12 hours'),
  (15, 30, 50, false, now() - interval '6 hours');

-- ── Sample Applications ────────────────────────────────────────────────────────
insert into public.applications (
  candidate_name, discord_id, score, max_score, percentage,
  warn_count, status, answers, submitted_at
) values
(
  'ShadowFox#7823',
  '294837162910284750',
  160, 200, 80,
  0,
  'pending',
  '{"q1":"I would greet them professionally, acknowledge their concern calmly, and explain the appeals process while warning that abusive language could complicate their case.","q2":"I would acknowledge the application, verify the age stated, and request proof of competitive history before proceeding.","q3":"I would respond immediately, apologize for the delay, and ask for their streaming platform and viewership details.","q4":"The blacklist format is incomplete — I would reject it and request the Discord ID and exact date of offense.","q5":"As a Grinder+ member I would note priority status, greet professionally, verify age, and review Pro requirements."}',
  now() - interval '2 hours'
),
(
  'VoidRacer#1337',
  '837261049283746150',
  140, 200, 70,
  1,
  'pending',
  '{"q1":"Greet calmly and de-escalate. Explain the process without matching their energy. Issue a warning if abuse continues.","q2":"Ask for competitive history and age verification before proceeding with the Pro application.","q3":"Respond right away and apologize for the 6-hour gap. Request their stream platform and link.","q4":"Reject the incomplete blacklist and ask for the full required format with Discord ID and date.","q5":"Give Grinder+ priority handling and walk through the Pro-to-Academy pathway criteria."}',
  now() - interval '1 day'
),
(
  'NeonBlade#5500',
  '192837465019283740',
  180, 200, 90,
  0,
  'approved',
  '{}',
  now() - interval '3 days'
),
(
  'GhostMod#2291',
  '736251904837261590',
  95, 200, 48,
  3,
  'denied',
  '{}',
  now() - interval '5 days'
);
