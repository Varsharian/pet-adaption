body {
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: rgb(252, 248, 249);
  color: #0f172a;
}

.navbar-brand {
  letter-spacing: 0.04em;
}

.hero {
  background: linear-gradient(rgba(10, 14, 47, 0.65), rgba(10, 25, 47, 0.65)),
    url('https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1400&q=80') center/cover no-repeat;
  min-height: 72vh;
}

.hero .badge {
  letter-spacing: 0.06em;
}

.card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.12);
}

.footer a:hover {
  text-decoration: underline;
}

@media (max-width: 767px) {
  .hero {
    min-height: 55vh;
  }
}

/* Dark mode styles */
body.dark-mode {
  background: #020617;
  color: #ece2f0;
}

body.dark-mode .navbar,
body.dark-mode .footer,
body.dark-mode .bg-light {
  background-color: #111827 !important;
}

body.dark-mode .card,
body.dark-mode .card-body {
  background: #111827;
  color: #e2e8f0;
}

body.dark-mode .card:hover {
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.35);
}

body.dark-mode .btn-outline-light {
  color: #f8fbfc;
  border-color: #f8fafc;
}

body.dark-mode .btn-outline-light:hover {
  background: rgba(248, 250, 252, 0.12);
}

body.dark-mode .text-muted {
  color: #cbd5e1 !important;
}

body.dark-mode .hero {
  background: linear-gradient(rgba(3, 7, 18, 0.8), rgba(3, 7, 18, 0.8)),
    url('https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1400&q=80') center/cover no-repeat;
}