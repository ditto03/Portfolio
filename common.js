  :root{
    --bg: #0A0E16;
    --bg-grid: #0D1220;
    --panel: #10151F;
    --panel-alt: #141B29;
    --line: #232B3A;
    --line-soft: #1A2130;
    --text: #E7EAF0;
    --muted: #8A93A8;
    --muted-dim: #5C6478;
    --crit: #FF5C5C;
    --crit-dim: rgba(255,92,92,0.12);
    --warn: #F2A93B;
    --warn-dim: rgba(242,169,59,0.12);
    --info: #4FD1C5;
    --info-dim: rgba(79,209,197,0.12);
    --font-display: 'Space Grotesk', sans-serif;
    --font-body: 'Inter', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
  }

  *{ box-sizing: border-box; margin:0; padding:0; }
  html{ scroll-behavior: smooth; }

  body{
    background:
      linear-gradient(var(--bg-grid) 1px, transparent 1px) 0 0/100% 42px,
      linear-gradient(90deg, var(--bg-grid) 1px, transparent 1px) 0 0/42px 100%,
      var(--bg);
    color: var(--text);
    font-family: var(--font-body);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  a{ color: inherit; text-decoration: none; }
  ::selection{ background: var(--info-dim); color: var(--info); }

  @media (prefers-reduced-motion: reduce){
    *{ animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; scroll-behavior: auto !important; }
  }

  :focus-visible{ outline: 2px solid var(--info); outline-offset: 3px; }

  .wrap{ max-width: 1080px; margin: 0 auto; padding: 0 28px; }

  /* ---------- NAV ---------- */
  nav{
    position: sticky; top:0; z-index: 50;
    background: rgba(10,14,22,0.85);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--line);
  }
  nav .wrap{ display:flex; align-items:center; justify-content:space-between; height: 64px; }
  .brand{ font-family: var(--font-mono); font-size: 15px; font-weight: 600; letter-spacing: 0.02em; color: var(--text); display:flex; align-items:center; gap:8px;}
  .brand .dot{ width:8px; height:8px; border-radius:50%; background: var(--info); box-shadow: 0 0 8px var(--info); flex-shrink:0; }
  .navlinks{ display:flex; gap: 28px; font-family: var(--font-mono); font-size: 13px; color: var(--muted); }
  .navlinks a:hover{ color: var(--info); }
  .navlinks span{ color: var(--muted-dim); }
  @media (max-width: 720px){ .navlinks{ display:none; } }

  /* ---------- HERO / TERMINAL ---------- */
  .hero{ padding: 64px 0 40px; }
  .term{
    background: var(--panel);
    border: 1px solid var(--line);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 30px 80px -30px rgba(0,0,0,0.6);
  }
  .term-bar{
    display:flex; align-items:center; gap:8px;
    padding: 12px 16px;
    border-bottom: 1px solid var(--line);
    background: var(--panel-alt);
  }
  .term-bar .tdot{ width:10px; height:10px; border-radius:50%; }
  .tdot.r{ background:#FF5C5C; } .tdot.y{ background:#F2A93B; } .tdot.g{ background:#4FD1C5; }
  .term-bar .path{ margin-left: 10px; font-family: var(--font-mono); font-size: 12px; color: var(--muted); }
  .term-body{ padding: 40px 36px 44px; }
  .prompt-line{ font-family: var(--font-mono); font-size: 14px; color: var(--info); margin-bottom: 18px; }
  .prompt-line .arrow{ color: var(--muted-dim); margin-right: 8px; }
  .cursor{ display:inline-block; width:9px; height:18px; background: var(--info); margin-left: 4px; vertical-align: text-bottom; animation: blink 1s steps(1) infinite; }
  @keyframes blink{ 50%{ opacity:0; } }

  h1.name{
    font-family: var(--font-display);
    font-weight: 700;
    font-size: clamp(40px, 7vw, 68px);
    line-height: 1;
    letter-spacing: -0.01em;
    margin-bottom: 14px;
  }
  .role-line{
    font-family: var(--font-mono);
    font-size: 15px;
    color: var(--warn);
    margin-bottom: 22px;
    display:flex; flex-wrap:wrap; align-items:center; gap:10px;
  }
  .role-line .sep{ color: var(--muted-dim); }
  .pitch{ max-width: 640px; color: var(--muted); font-size: 16px; margin-bottom: 32px; }
  .pitch strong{ color: var(--text); font-weight: 600; }

  .cta-row{ display:flex; flex-wrap:wrap; gap:14px; }
  .btn{
    font-family: var(--font-mono); font-size: 13px; font-weight: 500;
    padding: 13px 22px; border-radius: 7px;
    border: 1px solid var(--line);
    display:inline-flex; align-items:center; gap:9px;
    transition: border-color .15s ease, transform .15s ease, background .15s ease;
  }
  .btn:hover{ transform: translateY(-1px); }
  .btn-primary{ background: var(--info); color: #06171A; border-color: var(--info); font-weight:600; }
  .btn-primary:hover{ background: #6EE0D6; }
  .btn-ghost{ color: var(--text); }
  .btn-ghost:hover{ border-color: var(--info); color: var(--info); }

  /* ---------- LOG TICKER (signature element) ---------- */
  .ticker-wrap{
    border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);
    background: var(--panel);
    overflow: hidden;
    white-space: nowrap;
    position: relative;
  }
  .ticker-wrap::before, .ticker-wrap::after{
    content:""; position:absolute; top:0; bottom:0; width:60px; z-index:2;
  }
  .ticker-wrap::before{ left:0; background: linear-gradient(90deg, var(--panel), transparent); }
  .ticker-wrap::after{ right:0; background: linear-gradient(-90deg, var(--panel), transparent); }
  .ticker{
    display:inline-flex;
    animation: scroll-left 42s linear infinite;
    padding: 13px 0;
  }
  .ticker-wrap:hover .ticker{ animation-play-state: paused; }
  @keyframes scroll-left{ from{ transform: translateX(0); } to{ transform: translateX(-50%); } }
  .log-item{
    font-family: var(--font-mono); font-size: 12.5px; color: var(--muted);
    padding: 0 26px; border-right: 1px solid var(--line-soft);
    display:inline-flex; align-items:center; gap:9px;
  }
  .log-item .lvl{ font-weight:700; padding: 2px 7px; border-radius: 4px; font-size: 10.5px; letter-spacing:0.04em; }
  .lvl.INFO{ color: var(--info); background: var(--info-dim); }
  .lvl.OK{ color: #7CDB8A; background: rgba(124,219,138,0.12); }
  .lvl.WARN{ color: var(--warn); background: var(--warn-dim); }
  .log-item .ts{ color: var(--muted-dim); }
  .log-item .msg strong{ color: var(--text); font-weight: 600; }

  /* ---------- SECTIONS ---------- */
  section{ padding: 96px 0; }
  .eyebrow{
    font-family: var(--font-mono); font-size: 12.5px; color: var(--info);
    letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 14px;
    display:flex; align-items:center; gap:10px;
  }
  .eyebrow::before{ content:""; width: 22px; height:1px; background: var(--info); }
  h2.h-title{ font-family: var(--font-display); font-size: clamp(28px,4vw,38px); font-weight: 700; margin-bottom: 12px; letter-spacing: -0.01em; }
  .h-sub{ color: var(--muted); max-width: 620px; margin-bottom: 48px; font-size: 15px; }

  .reveal{ opacity:0; transform: translateY(18px); transition: opacity .6s ease, transform .6s ease; }
  .reveal.in{ opacity:1; transform: translateY(0); }

  /* ---------- CAPABILITIES ---------- */
  .cap-grid{ display:grid; grid-template-columns: repeat(auto-fit, minmax(240px,1fr)); gap: 16px; }
  .cap-card{
    background: var(--panel); border: 1px solid var(--line); border-radius: 10px;
    padding: 22px 22px 20px;
  }
  .cap-head{ display:flex; align-items:center; justify-content:space-between; margin-bottom: 12px; }
  .cap-name{ font-family: var(--font-display); font-weight: 600; font-size: 16px; }
  .cap-id{ font-family: var(--font-mono); font-size: 11px; color: var(--muted-dim); }
  .cap-desc{ color: var(--muted); font-size: 13.5px; margin-bottom: 14px; }
  .tag-row{ display:flex; flex-wrap:wrap; gap:7px; }
  .tag{ font-family: var(--font-mono); font-size: 11px; color: var(--muted); background: var(--panel-alt); border: 1px solid var(--line-soft); padding: 4px 9px; border-radius: 5px; }

  /* ---------- CASE FILES (projects) ---------- */
  .case-list{ display:flex; flex-direction:column; gap: 20px; }
  .case-card{
    background: var(--panel); border: 1px solid var(--line); border-radius: 12px;
    padding: 30px; position: relative; overflow:hidden;
  }
  .case-top{ display:flex; flex-wrap:wrap; align-items:center; gap: 14px; margin-bottom: 16px; }
  .case-id{ font-family: var(--font-mono); font-size: 12px; color: var(--muted-dim); border: 1px solid var(--line-soft); padding: 4px 10px; border-radius: 5px; }
  .status-pill{ font-family: var(--font-mono); font-size: 11px; font-weight:700; letter-spacing:0.04em; padding: 4px 10px; border-radius: 20px; }
  .status-pill.resolved{ color:#7CDB8A; background: rgba(124,219,138,0.12); border:1px solid rgba(124,219,138,0.3); }
  .status-pill.completed{ color: var(--info); background: var(--info-dim); border:1px solid rgba(79,209,197,0.3); }
  .case-title{ font-family: var(--font-display); font-size: 22px; font-weight: 700; margin-bottom: 10px; }
  .case-summary{ color: var(--muted); font-size: 14.5px; margin-bottom: 18px; max-width: 720px; }
  .case-findings{ list-style:none; margin-bottom: 18px; display:flex; flex-direction:column; gap:9px; }
  .case-findings li{ font-size: 13.5px; color: var(--text); padding-left: 20px; position:relative; }
  .case-findings li::before{ content:"›"; position:absolute; left:0; color: var(--info); font-weight:700; }
  .case-foot{ display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:14px; padding-top: 16px; border-top: 1px solid var(--line-soft); }

  /* ---------- CREDENTIALS ---------- */
  .cred-grid{ display:grid; grid-template-columns: repeat(auto-fit, minmax(280px,1fr)); gap:16px; }
  .cred-card{
    background: var(--panel); border: 1px solid var(--line); border-radius: 10px;
    padding: 22px; display:flex; flex-direction:column; gap:10px;
  }
  .cred-top{ display:flex; align-items:flex-start; justify-content:space-between; gap: 10px; }
  .cred-badge{ width:38px; height:38px; border-radius:8px; background: var(--warn-dim); color: var(--warn); display:flex; align-items:center; justify-content:center; font-family: var(--font-mono); font-weight:700; font-size:13px; flex-shrink:0; }
  .cred-name{ font-family: var(--font-display); font-weight:600; font-size: 15.5px; }
  .cred-issuer{ font-size:12.5px; color: var(--muted); }
  .cred-meta{ font-family: var(--font-mono); font-size: 11px; color: var(--muted-dim); }
  .cred-card.placeholder{ border-style: dashed; display:flex; align-items:center; justify-content:center; text-align:center; color: var(--muted-dim); font-family: var(--font-mono); font-size: 12.5px; min-height: 128px; }

  /* ---------- DOCUMENTS (directory listing) ---------- */
  .dir{
    background: var(--panel); border: 1px solid var(--line); border-radius: 10px; overflow:hidden;
  }
  .dir-head{ font-family: var(--font-mono); font-size: 12px; color: var(--muted); padding: 14px 22px; border-bottom: 1px solid var(--line); background: var(--panel-alt); }
  .dir-row{ display:flex; align-items:center; gap: 16px; padding: 15px 22px; border-bottom: 1px solid var(--line-soft); font-family: var(--font-mono); font-size: 13px; }
  .dir-row:last-child{ border-bottom:none; }
  .dir-row:hover{ background: var(--panel-alt); }
  .dir-icon{ color: var(--muted-dim); }
  .dir-name{ color: var(--text); flex:1; min-width: 140px; }
  .dir-name .ext{ color: var(--muted-dim); }
  .dir-meta{ color: var(--muted-dim); font-size: 11.5px; width: 110px; }
  .dir-action{ color: var(--info); font-size: 11.5px; opacity:0.9; }
  .dir-action:hover{ text-decoration: underline; }

  /* ---------- EDUCATION TIMELINE ---------- */
  .tl{ position: relative; padding-left: 28px; }
  .tl::before{ content:""; position:absolute; left:5px; top:6px; bottom:6px; width:1px; background: var(--line); }
  .tl-item{ position:relative; padding-bottom: 30px; }
  .tl-item:last-child{ padding-bottom:0; }
  .tl-item::before{ content:""; position:absolute; left:-28px; top:4px; width:11px; height:11px; border-radius:50%; background: var(--bg); border:2px solid var(--info); }
  .tl-year{ font-family: var(--font-mono); font-size: 12px; color: var(--info); margin-bottom: 4px; }
  .tl-title{ font-family: var(--font-display); font-weight:600; font-size:16px; margin-bottom:2px; }
  .tl-org{ color: var(--muted); font-size: 13.5px; }

  /* ---------- CONTACT / FOOTER ---------- */
  footer{ border-top: 1px solid var(--line); padding: 80px 0 40px; }
  .contact-term{ background: var(--panel); border:1px solid var(--line); border-radius: 12px; padding: 40px 36px; margin-bottom: 40px; }
  .contact-line{ font-family: var(--font-mono); font-size: 14px; color: var(--muted); margin-bottom: 8px; }
  .contact-line .k{ color: var(--info); }
  .contact-grid{ display:flex; flex-wrap:wrap; gap: 14px; margin-top: 22px; }
  .contact-item{ display:flex; align-items:center; gap:9px; font-family: var(--font-mono); font-size:13px; border:1px solid var(--line); padding: 10px 16px; border-radius:7px; }
  .contact-item:hover{ border-color: var(--info); color: var(--info); }
  .foot-bottom{ display:flex; flex-wrap:wrap; justify-content:space-between; gap:12px; color: var(--muted-dim); font-size:12.5px; font-family: var(--font-mono); }

  svg{ width:16px; height:16px; flex-shrink:0; }

  /* ---------- CASE DETAIL PAGE ---------- */
  .breadcrumb{ font-family: var(--font-mono); font-size: 12.5px; color: var(--muted-dim); padding: 28px 0 0; }
  .breadcrumb a:hover{ color: var(--info); }
  .case-hero{ padding: 22px 0 40px; border-bottom: 1px solid var(--line); margin-bottom: 48px; }
  .case-hero-top{ display:flex; flex-wrap:wrap; align-items:center; gap:12px; margin-bottom:18px; }
  .case-hero h1{ font-family: var(--font-display); font-size: clamp(28px,5vw,42px); font-weight:700; letter-spacing:-0.01em; margin-bottom: 14px; max-width: 760px; }
  .case-hero .lede{ color: var(--muted); font-size: 15.5px; max-width: 680px; margin-bottom: 22px; }
  .meta-strip{ display:flex; flex-wrap:wrap; gap: 24px; font-family: var(--font-mono); font-size: 12px; color: var(--muted); }
  .meta-strip .m-label{ color: var(--muted-dim); display:block; margin-bottom:3px; text-transform:uppercase; letter-spacing:0.06em; font-size:10.5px; }
  .meta-strip .m-value{ color: var(--text); font-size: 13px; }

  .prose{ max-width: 760px; }
  .prose h2{ font-family: var(--font-display); font-size: 21px; font-weight:700; margin: 44px 0 14px; }
  .prose h2:first-child{ margin-top:0; }
  .prose p{ color: var(--muted); font-size: 15px; margin-bottom: 14px; }
  .prose p strong{ color: var(--text); }
  .prose ul{ list-style:none; margin: 4px 0 18px; display:flex; flex-direction:column; gap:10px; }
  .prose ul li{ font-size: 14.5px; color: var(--text); padding-left: 22px; position:relative; }
  .prose ul li::before{ content:"›"; position:absolute; left:0; color: var(--info); font-weight:700; }
  .prose ol{ margin: 4px 0 18px 20px; display:flex; flex-direction:column; gap:12px; }
  .prose ol li{ font-size: 14.5px; color: var(--text); padding-left: 6px; }
  .prose ol li strong{ color: var(--info); }

  .codeblock{
    background: var(--panel-alt); border: 1px solid var(--line); border-radius: 8px;
    padding: 16px 18px; margin: 14px 0 22px; overflow-x:auto;
  }
  .codeblock code{ font-family: var(--font-mono); font-size: 12.5px; color: var(--info); white-space: pre; }
  .codeblock .c-muted{ color: var(--muted-dim); }

  .callout{
    border-left: 3px solid var(--warn); background: var(--warn-dim);
    padding: 14px 18px; border-radius: 0 8px 8px 0; margin-bottom: 22px;
  }
  .callout p{ color: var(--text); font-size: 13.5px; margin:0; }
  .callout .c-label{ font-family: var(--font-mono); font-size: 10.5px; color: var(--warn); text-transform:uppercase; letter-spacing:0.06em; display:block; margin-bottom: 6px; }

  .skills-used{ display:flex; flex-wrap:wrap; gap:8px; margin: 6px 0 40px; }

  .case-nav{ display:flex; justify-content:space-between; align-items:center; padding: 32px 0 60px; border-top: 1px solid var(--line); margin-top: 20px; gap: 16px; flex-wrap:wrap; }
  .case-nav a{ font-family: var(--font-mono); font-size: 13px; color: var(--muted); display:flex; align-items:center; gap:8px; }
  .case-nav a:hover{ color: var(--info); }
