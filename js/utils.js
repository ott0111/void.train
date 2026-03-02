// ════════════════════════════════════════
// js/utils.js — Void Esports
// ════════════════════════════════════════

// ── Toast notifications ───────────────────────────────────────────────────────

function showToast(message, type = 'info', duration = 3500) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const icons = { success: '✓', error: '✕', info: 'ℹ', warning: '⚠' };
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `<span style="font-size:1.1rem;flex-shrink:0">${icons[type] || icons.info}</span>
    <span style="flex:1;color:var(--text-secondary)">${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('out');
    setTimeout(() => toast.remove(), 350);
  }, duration);
}

// ── Modal helpers ─────────────────────────────────────────────────────────────

function openModal(id)  { document.getElementById(id)?.classList.add('active'); }
function closeModal(id) { document.getElementById(id)?.classList.remove('active'); }

document.addEventListener('click', e => {
  if (e.target.matches('.modal-overlay')) {
    e.target.classList.remove('active');
  }
  if (e.target.matches('[data-close-modal]')) {
    const modal = e.target.closest('.modal-overlay');
    if (modal) modal.classList.remove('active');
  }
});

// ── Shuffle array ─────────────────────────────────────────────────────────────

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Session storage helpers ───────────────────────────────────────────────────

const Session = {
  set(key, value) { sessionStorage.setItem(`void:${key}`, JSON.stringify(value)); },
  get(key) {
    try { return JSON.parse(sessionStorage.getItem(`void:${key}`)); }
    catch { return null; }
  },
  remove(key) { sessionStorage.removeItem(`void:${key}`); },
  clear()     { Object.keys(sessionStorage).filter(k => k.startsWith('void:')).forEach(k => sessionStorage.removeItem(k)); }
};

// ── Progress lock ─────────────────────────────────────────────────────────────

const Progress = {
  set(key, value) { localStorage.setItem(`void-prog:${key}`, JSON.stringify(value)); },
  get(key) {
    try { return JSON.parse(localStorage.getItem(`void-prog:${key}`)); }
    catch { return null; }
  },
  certUnlocked() {
    return this.get('quizPassed') === true;
  },
  setQuizPassed(score) {
    this.set('quizPassed', true);
    this.set('quizScore', score);
  }
};

// ── Format date ───────────────────────────────────────────────────────────────

function fmtDate(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });
}

// ── Debounce ──────────────────────────────────────────────────────────────────

function debounce(fn, delay = 300) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}

// ── Navbar active state ────────────────────────────────────────────────────────

document.querySelectorAll('.navbar__nav a').forEach(link => {
  if (link.href === window.location.href || link.href === window.location.href.replace(/\/$/, '') + '/') {
    link.classList.add('active');
  } else if (window.location.pathname.includes(link.getAttribute('href').replace(/^.*\/([^/]+)$/, '$1'))) {
    link.classList.add('active');
  }
});
