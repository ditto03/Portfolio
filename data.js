/* Renders the footer contact block and year. Shared by every page.
   Expects data.js to be loaded first. */

function renderCommon(){
  const yearEl = document.getElementById("year");
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  const contactGrid = document.getElementById("contactGrid");
  if(contactGrid){
    contactGrid.innerHTML = `
      <a class="contact-item" href="mailto:${PROFILE.email}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4z"/><path d="M4 6l8 7 8-7"/></svg>
        ${PROFILE.email}
      </a>
      <a class="contact-item" href="tel:${PROFILE.phone.replace(/\s/g,'')}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .3 2 .7 3a2 2 0 01-.4 2L8 10.3a16 16 0 006 6l1.6-1.4a2 2 0 012-.4c1 .4 2 .6 3 .7a2 2 0 011.7 2z"/></svg>
        ${PROFILE.phone}
      </a>
      <a class="contact-item" href="https://${PROFILE.linkedin}" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/><path d="M10 9v12M10 13a4 4 0 018 0v8"/></svg>
        LinkedIn
      </a>
      <a class="contact-item" href="https://${PROFILE.github}" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 00-1-2.6c3 0 6-2 6-5.6a4.5 4.5 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1-.3-3.4 1.3a11.5 11.5 0 00-6.4 0C6.6 3.2 5.6 3.5 5.6 3.5a4.2 4.2 0 00-.1 3.2A4.5 4.5 0 004.2 9.9c0 3.6 3 5.6 6 5.6a3.4 3.4 0 00-.9 2.4V21"/></svg>
        GitHub
      </a>
    `;
  }

  const resumeBtn = document.getElementById("resumeBtn");
  if(resumeBtn) resumeBtn.href = PROFILE.resumeHref;

  // Scroll reveal (respects prefers-reduced-motion via CSS transition-duration override)
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
}

document.addEventListener("DOMContentLoaded", renderCommon);
