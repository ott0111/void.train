// ════════════════════════════════════════
// js/supabase.js — Void Esports
// ════════════════════════════════════════
// ⚠️  REPLACE THE VALUES BELOW WITH YOUR SUPABASE PROJECT DETAILS
// Find them at: https://supabase.com/dashboard → Project Settings → API
// ════════════════════════════════════════

const SUPABASE_URL  = 'https://YOUR_PROJECT_REF.supabase.co'; // ← REPLACE
const SUPABASE_ANON = 'YOUR_ANON_PUBLIC_KEY_HERE';            // ← REPLACE

// ════════════════════════════════════════
// DO NOT EDIT BELOW THIS LINE
// ════════════════════════════════════════

const { createClient } = supabase;
const sb = createClient(SUPABASE_URL, SUPABASE_ANON);

// ── Auth helpers ──────────────────────────────────────────────────────────────

const Auth = {
  async signIn(email, password) {
    const { data, error } = await sb.auth.signInWithPassword({ email, password });
    return { data, error };
  },
  async signOut() {
    return await sb.auth.signOut();
  },
  async getSession() {
    const { data } = await sb.auth.getSession();
    return data?.session || null;
  },
  async getUser() {
    const { data: { user } } = await sb.auth.getUser();
    return user;
  }
};

// ── Quiz Results ───────────────────────────────────────────────────────────────

const QuizDB = {
  async save(userId, score, total, passed) {
    const { data, error } = await sb.from('quiz_results').insert({
      user_id: userId || null,
      score,
      total,
      passed,
      percentage: Math.round((score / total) * 100),
      taken_at: new Date().toISOString()
    }).select().single();
    return { data, error };
  },
  async getByUser(userId) {
    return await sb.from('quiz_results')
      .select('*')
      .eq('user_id', userId)
      .order('taken_at', { ascending: false });
  },
  async getAll() {
    return await sb.from('quiz_results')
      .select('*, users(name, email)')
      .order('taken_at', { ascending: false });
  }
};

// ── Applications ───────────────────────────────────────────────────────────────

const ApplicationDB = {
  async submit(payload) {
    const { data, error } = await sb.from('applications').insert({
      ...payload,
      status: 'pending',
      submitted_at: new Date().toISOString()
    }).select().single();
    return { data, error };
  },
  async getAll() {
    return await sb.from('applications')
      .select('*')
      .order('submitted_at', { ascending: false });
  },
  async updateStatus(id, status, reviewedBy, notes) {
    return await sb.from('applications').update({
      status,
      reviewed_by: reviewedBy,
      review_notes: notes,
      reviewed_at: new Date().toISOString()
    }).eq('id', id);
  },
  async getById(id) {
    return await sb.from('applications').select('*').eq('id', id).single();
  }
};

// ── Users ──────────────────────────────────────────────────────────────────────

const UserDB = {
  async upsert(id, name, email) {
    return await sb.from('users').upsert({ id, name, email, updated_at: new Date().toISOString() });
  },
  async getAll() {
    return await sb.from('users').select('*').order('created_at', { ascending: false });
  }
};

// ── Counts for dashboard ───────────────────────────────────────────────────────

const StatsDB = {
  async getCounts() {
    const [apps, quizzes, users] = await Promise.all([
      sb.from('applications').select('id, status', { count: 'exact' }),
      sb.from('quiz_results').select('id', { count: 'exact' }),
      sb.from('users').select('id', { count: 'exact' })
    ]);
    const pending  = (apps.data || []).filter(a => a.status === 'pending').length;
    const approved = (apps.data || []).filter(a => a.status === 'approved').length;
    const denied   = (apps.data || []).filter(a => a.status === 'denied').length;
    return {
      totalApps:   apps.count   || 0,
      quizzesTaken: quizzes.count || 0,
      totalUsers:  users.count  || 0,
      pending, approved, denied
    };
  }
};
