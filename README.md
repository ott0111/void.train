# ⬡ Void Esports — Moderator Training & Certification Platform

A complete static web platform for training, testing, and certifying Void Esports moderators. Built for Vercel. Made by Nicks Cold.

---

## 📁 Repository Structure

```
void-esports/
├── index.html              ← Landing page (ROOT — required for Vercel)
├── training.html           ← Full training module
├── quiz.html               ← Practice quiz (30 questions)
├── cert.html               ← Certification exam (20 scenarios, anti-cheat)
├── vercel.json             ← Vercel deployment config
│
├── css/
│   └── style.css           ← Complete design system
│
├── js/
│   ├── supabase.js         ← ⚠️ INSERT YOUR KEYS HERE
│   └── utils.js            ← Shared utilities
│
├── data/
│   ├── quiz-questions.js   ← 30 practice questions
│   └── cert-questions.js   ← 20 certification scenarios
│
├── admin/
│   └── index.html          ← Admin dashboard (auth required)
│
└── supabase/
    ├── schema.sql          ← Database tables + RLS policies
    └── seed.sql            ← Sample data (optional)
```

---

## 🚀 Setup Guide

### Step 1 — Create Your Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Click **New Project**
3. Name it `void-esports`, choose a region, set a strong password
4. Wait ~2 minutes for it to provision

### Step 2 — Run the Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Click **New Query**
3. Copy the contents of `supabase/schema.sql` and paste it in
4. Click **Run**
5. Optionally, run `supabase/seed.sql` for sample data

### Step 3 — Insert Your Supabase Keys

Open `js/supabase.js` and replace the two placeholder values:

```javascript
// BEFORE:
const SUPABASE_URL  = 'https://YOUR_PROJECT_REF.supabase.co'; // ← REPLACE
const SUPABASE_ANON = 'YOUR_ANON_PUBLIC_KEY_HERE';            // ← REPLACE

// AFTER (example):
const SUPABASE_URL  = 'https://abcdefghijklm.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
```

**Where to find your keys:**
- Supabase Dashboard → Your Project → **Settings** → **API**
- Copy `Project URL` → paste as `SUPABASE_URL`
- Copy `anon public` key → paste as `SUPABASE_ANON`

### Step 4 — Create Your Admin Account

1. In Supabase, go to **Authentication** → **Users**
2. Click **Add User** (or **Invite**)
3. Enter your admin email and a secure password
4. That's it — use those credentials to log into `/admin`

---

## 💻 Running Locally

No build step required. You can open files directly in your browser or use a simple static server:

```bash
# Using Python (built-in)
python3 -m http.server 3000

# Using Node.js npx
npx serve .

# Using VS Code
Install "Live Server" extension → Right-click index.html → Open with Live Server
```

Then visit `http://localhost:3000`

---

## ☁️ Deploying to Vercel

### Option A — Vercel Dashboard (Easiest)

1. Push your repository to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Framework: **Other** (static site — no build command needed)
5. Leave Build Command and Output Directory blank
6. Click **Deploy**

### Option B — Vercel CLI

```bash
npm install -g vercel
cd void-esports
vercel --prod
```

> **Note:** No environment variables needed on Vercel — your Supabase keys are baked into `js/supabase.js` (they are public/anon keys, safe for frontend use).

---

## 🔐 Testing the Admin Dashboard

1. Visit `/admin/index.html` (or `/admin` on Vercel)
2. Log in with your Supabase Auth credentials
3. You'll see the full dashboard with:
   - Live stats (total apps, pending, approved, denied, quizzes taken)
   - All applications table with search + filter
   - Pending applications tab
   - One-click Approve / Deny with optional notes
   - Quiz results history

---

## 🎓 User Flow

```
index.html → training.html → quiz.html → cert.html
```

1. **Training** — Read all 4 modules (ticket types, roster categories, commands, guidelines)
2. **Practice Quiz** — 30 randomized questions · Enter name · Score 70%+ → unlocks exam
3. **Certification Exam** — 20 scenarios · Anti-cheat active · Submit → stored in Supabase

---

## 🛡️ Anti-Cheat Features (Certification Exam)

- Copy/paste disabled (`copy`, `paste`, `cut` events blocked)
- Right-click context menu disabled
- Tab switch detection (visibility change API)
- `beforeunload` refresh warning
- Warning count tracked and stored with submission
- Visual flash effect on each violation

---

## 📊 Supabase Tables

| Table | Description |
|-------|-------------|
| `users` | Optional user tracking |
| `quiz_results` | Practice quiz scores (score, total, passed, timestamp) |
| `applications` | Cert exam submissions (answers, keyword score, status) |

---

## 🎨 Design System

- **Colors:** Deep void black base with cyan/purple/magenta accents
- **Fonts:** Rajdhani (display), Exo 2 (body), JetBrains Mono (code/labels)
- **Theme:** Dark esports aesthetic with grid animations, glow effects, noise texture
- **CSS Variables:** All tokens in `:root` in `css/style.css`

---

*Void Esports Mod Platform · Made by Nicks Cold*
