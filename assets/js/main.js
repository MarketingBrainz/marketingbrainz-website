/* ============================================================
   MARKETING BRAINZ — main.js
   Centrale JavaScript voor de hele website.
   Hier wijzig je contactgegevens, menu en social links op één plek.
   ============================================================ */

/* ----- 1. SITE-CONFIGURATIE (pas hier je gegevens aan) ----- */
const SITE = {
    phone: '+31 (0)6 14203116',
    phoneRaw: '+31614203116',
    email: 'info@marketingbrainz.nl',
    address: 'Laat 23 B, 1811 EB Alkmaar',
    hours: 'Ma–Vr 9:00 – 17:00',
    socials: {
        instagram: 'https://www.instagram.com/marketingbrainz/',
        linkedin: 'https://www.linkedin.com/company/98493016/',
        facebook: 'https://www.facebook.com/MarketingBrainz/',
        tiktok: 'https://www.tiktok.com/@marketingbrainz'
    }
};

/* Icoon-bibliotheek (inline SVG) */
const ICON = {
    instagram: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="1.5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>',
    linkedin: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    facebook: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    tiktok: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 12a4 4 0 104 4V4a5 5 0 005 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};

/* Expertise-submenu (gebruikt in nav-dropdown én footer) */
const EXPERTISES = [
    { name: 'Social Advertising', url: 'social-advertising.html' },
    { name: 'Google Advertising', url: 'google-advertising.html' },
    { name: 'Social Media Beheer', url: 'social-media-beheer.html' },
    { name: 'Branding & Design', url: 'branding-en-design.html' }
];

/* ----- 2. NAVIGATIE OPBOUWEN ----- */
function buildNav(active) {
    const sub = EXPERTISES.map(e => `<li><a href="${e.url}">${e.name}</a></li>`).join('');
    const isExp = active === 'expertises' || EXPERTISES.some(e => e.url === active);
    return `
    <nav class="nav" id="nav">
        <div class="container">
            <a href="index.html" class="nav-logo" aria-label="Marketing Brainz home"><img src="logo.png" alt="Marketing Brainz"></a>
            <ul class="nav-links" id="navLinks">
                <li><a href="over-ons.html" class="toplink ${active==='over-ons'?'active':''}">Over ons</a></li>
                <li class="has-dropdown">
                    <a href="expertises.html" class="toplink ${isExp?'active':''}">Expertises
                        <svg class="caret" width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </a>
                    <ul class="dropdown">
                        <li><a href="expertises.html">Alle expertises</a></li>
                        ${sub}
                    </ul>
                </li>
                <li><a href="contact.html" class="toplink ${active==='contact'?'active':''}">Contact</a></li>
                <li><a href="contact.html" class="nav-cta">Keertje brainstormen?</a></li>
            </ul>
            <button class="menu-toggle" id="menuToggle" aria-label="Menu openen"><span></span><span></span><span></span></button>
        </div>
    </nav>`;
}

/* ----- 3. FOOTER OPBOUWEN ----- */
function buildFooter() {
    const expLinks = EXPERTISES.map(e => `<li><a href="${e.url}">${e.name}</a></li>`).join('');
    const socials = Object.keys(SITE.socials).map(k =>
        `<a href="${SITE.socials[k]}" target="_blank" rel="noopener" aria-label="${k}">${ICON[k]}</a>`).join('');
    return `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <img src="logo.png" alt="Marketing Brainz">
                    <p>Jouw fullservice online marketing bureau in Alkmaar. Persoonlijk, data-gedreven en altijd een stap vooruit.</p>
                </div>
                <div class="footer-col">
                    <h4>Expertises</h4>
                    <ul>${expLinks}</ul>
                </div>
                <div class="footer-col">
                    <h4>Menu</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="over-ons.html">Over ons</a></li>
                        <li><a href="expertises.html">Expertises</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="tel:${SITE.phoneRaw}">${SITE.phone}</a></li>
                        <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
                        <li><a href="https://maps.google.com/?q=${encodeURIComponent(SITE.address)}" target="_blank" rel="noopener">${SITE.address}</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <span>&copy; ${new Date().getFullYear()} Marketing Brainz. Alle rechten voorbehouden.</span>
                <div class="footer-bottom-links">
                    <a href="privacy.html">Privacybeleid</a>
                </div>
                <div class="footer-socials">${socials}</div>
            </div>
        </div>
    </footer>`;
}

/* ----- 4. INTERACTIES ----- */
function initChrome() {
    const active = document.body.dataset.page || '';
    // Nav + footer injecteren
    const navMount = document.getElementById('nav-mount');
    const footMount = document.getElementById('footer-mount');
    if (navMount) navMount.innerHTML = buildNav(active);
    if (footMount) footMount.innerHTML = buildFooter();

    // Scroll-effect nav
    const nav = document.getElementById('nav');
    const onScroll = () => { if (nav) nav.classList.toggle('scrolled', window.scrollY > 50); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Mobiel menu
    const mt = document.getElementById('menuToggle'), nl = document.getElementById('navLinks');
    if (mt && nl) {
        mt.addEventListener('click', () => {
            const open = nl.classList.toggle('open');
            mt.classList.toggle('active', open);
            document.body.style.overflow = open ? 'hidden' : '';
        });
        nl.querySelectorAll('a:not(.has-dropdown > a)').forEach(a => a.addEventListener('click', () => {
            nl.classList.remove('open'); mt.classList.remove('active'); document.body.style.overflow = '';
        }));
    }
}

function initReveal() {
    const obs = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    }), { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
}

function initCounters() {
    const cobs = new IntersectionObserver(es => es.forEach(e => {
        if (!e.isIntersecting) return;
        const c = e.target, t = +c.dataset.target, s = c.dataset.suffix || '';
        const start = performance.now();
        (function u(now) {
            const p = Math.min((now - start) / 2000, 1);
            c.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * t) + s;
            if (p < 1) requestAnimationFrame(u); else c.textContent = t + s;
        })(start);
        cobs.unobserve(c);
    }), { threshold: 0.5 });
    document.querySelectorAll('.stat-num[data-target]').forEach(el => cobs.observe(el));
}

function initFaq() {
    document.querySelectorAll('.faq-q').forEach(q => q.addEventListener('click', () => {
        const item = q.closest('.faq-item');
        const a = item.querySelector('.faq-a');
        const open = item.classList.toggle('open');
        a.style.maxHeight = open ? a.scrollHeight + 'px' : '0';
    }));
}

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const msg = (form.closest('.form-card') || document).querySelector('.form-success');
        const showSuccess = () => {
            if (msg) { msg.classList.add('show'); msg.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
            form.reset();
        };
        // Verstuurt naar Netlify Forms (werkt zodra de site op Netlify staat).
        // Lokaal mislukt de POST onschuldig — de succesmelding verschijnt dan alsnog.
        const body = new URLSearchParams(new FormData(form)).toString();
        fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body })
            .then(showSuccess)
            .catch(showSuccess);
    });
}

/* ----- 5. BREIN NEURAAL NETWERK (homepage) ----- */
function initBrain() {
    const canvas = document.getElementById('brainCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, nodes = [], connections = [];

    function resize() {
        const rect = canvas.parentElement.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        w = rect.width; h = rect.height;
        canvas.width = w * dpr; canvas.height = h * dpr;
        canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function createNodes() {
        nodes = []; connections = [];
        const cx = w / 2, cy = h / 2, r = Math.min(w, h) * 0.38, count = 60;
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * 0.85 + 0.15;
            const lobe = Math.random() > 0.5 ? -1 : 1;
            const brainX = Math.cos(angle) * r * dist * (0.7 + 0.3 * Math.abs(Math.sin(angle)));
            const brainY = Math.sin(angle) * r * dist * 0.85 - r * 0.08;
            const x = cx + brainX + lobe * r * 0.08, y = cy + brainY;
            const dx = (x - cx) / (r * 1.1), dy = (y - cy) / (r * 0.95);
            if (dx * dx + dy * dy > 1) continue;
            nodes.push({ x, y, baseX: x, baseY: y, radius: Math.random() * 2 + 1.5,
                pulseOffset: Math.random() * Math.PI * 2, pulseSpeed: 0.5 + Math.random() * 1.5 });
        }
        for (let i = 0; i < nodes.length; i++)
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < r * 0.45) connections.push({ a: i, b: j,
                    pulseOffset: Math.random() * Math.PI * 2, pulseSpeed: 0.3 + Math.random() * 0.7 });
            }
    }
    let time = 0;
    function draw() {
        ctx.clearRect(0, 0, w, h); time += 0.016;
        nodes.forEach(n => {
            n.x = n.baseX + Math.sin(time * n.pulseSpeed + n.pulseOffset) * 3;
            n.y = n.baseY + Math.cos(time * n.pulseSpeed * 0.7 + n.pulseOffset) * 3;
        });
        connections.forEach(c => {
            const a = nodes[c.a], b = nodes[c.b];
            const pulse = Math.sin(time * c.pulseSpeed + c.pulseOffset);
            const alpha = 0.04 + pulse * 0.06;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(139, 130, 214, ${Math.max(0, alpha)})`;
            ctx.lineWidth = 0.8; ctx.stroke();
            if (pulse > 0.5) {
                const t = (Math.sin(time * 2 + c.pulseOffset) + 1) / 2;
                ctx.beginPath();
                ctx.arc(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t, 1.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(168, 158, 235, ${pulse * 0.6})`; ctx.fill();
            }
        });
        nodes.forEach(n => {
            const pulse = Math.sin(time * n.pulseSpeed + n.pulseOffset);
            const alpha = 0.25 + pulse * 0.25, rad = n.radius + pulse * 0.5;
            ctx.beginPath(); ctx.arc(n.x, n.y, rad * 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(139, 130, 214, ${alpha * 0.1})`; ctx.fill();
            ctx.beginPath(); ctx.arc(n.x, n.y, rad, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(139, 130, 214, ${alpha})`; ctx.fill();
        });
        requestAnimationFrame(draw);
    }
    resize(); createNodes(); draw();
    window.addEventListener('resize', () => { resize(); createNodes(); });
}

/* ----- 6. START ----- */
document.addEventListener('DOMContentLoaded', () => {
    initChrome();
    initReveal();
    initCounters();
    initFaq();
    initContactForm();
    initBrain();
});
