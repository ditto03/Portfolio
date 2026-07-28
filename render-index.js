/* Renders homepage-only sections: ticker, skills, cases, credentials, docs, education.
   Expects data.js to be loaded first. */

// Ticker
const ticker = document.getElementById("ticker");
function renderTicker(){
  const items = LOG_TICKER.map((l,i) => `
    <span class="log-item">
      <span class="lvl ${l.lvl}">${l.lvl}</span>
      <span class="ts">#${String(i+1).padStart(3,'0')}</span>
      <span class="msg">${l.msg}</span>
    </span>`).join("");
  ticker.innerHTML = items + items; // duplicate for seamless loop
}
renderTicker();

// Capabilities
const capGrid = document.getElementById("capGrid");
capGrid.innerHTML = SKILLS.map(s => `
  <div class="cap-card reveal">
    <div class="cap-head">
      <div class="cap-name">${s.name}</div>
      <div class="cap-id">${s.id}</div>
    </div>
    <div class="cap-desc">${s.desc}</div>
    <div class="tag-row">${s.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
  </div>
`).join("");

// Cases
const caseList = document.getElementById("caseList");
caseList.innerHTML = CASES.map(c => `
  <div class="case-card reveal">
    <div class="case-top">
      <span class="case-id">${c.id}</span>
      <span class="status-pill ${c.status}">${c.status === 'resolved' ? 'RESOLVED' : 'COMPLETED'}</span>
    </div>
    <div class="case-title">${c.title}</div>
    <div class="case-summary">${c.summary}</div>
    <ul class="case-findings">${c.findings.map(f => `<li>${f}</li>`).join("")}</ul>
    <div class="case-foot">
      <div class="tag-row">${c.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      <a href="${c.page}" class="btn btn-ghost" style="padding:8px 16px;">View details →</a>
    </div>
  </div>
`).join("");

// Credentials
const credGrid = document.getElementById("credGrid");
credGrid.innerHTML = CREDS.map(c => `
  <div class="cred-card reveal">
    <div class="cred-top">
      <div>
        <div class="cred-name">${c.name}</div>
        <div class="cred-issuer">${c.issuer}</div>
      </div>
      <div class="cred-badge">${c.initials}</div>
    </div>
    <div class="cred-meta">${c.meta}</div>
  </div>
`).join("") + `<div class="cred-card placeholder reveal">+ Add another certificate<br>edit the CREDS array in js/data.js</div>`;

// Documents
const docList = document.getElementById("docList");
docList.innerHTML = DOCS.map(d => `
  <div class="dir-row">
    <span class="dir-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>
    </span>
    <span class="dir-name">${d.name}<span class="ext">.${d.ext}</span></span>
    <span class="dir-meta">${d.meta}</span>
    <a href="${d.href}" class="dir-action">Download ↓</a>
  </div>
`).join("");

// Education
const eduList = document.getElementById("eduList");
eduList.innerHTML = EDUCATION.map(e => `
  <div class="tl-item reveal">
    <div class="tl-year">${e.year}</div>
    <div class="tl-title">${e.title}</div>
    <div class="tl-org">${e.org}</div>
  </div>
`).join("");
