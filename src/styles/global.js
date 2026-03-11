export const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Share+Tech+Mono&family=Barlow:wght@300;400;500;600&display=swap');

  /* ─── Reset ─────────────────────────────────────────────── */
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  /* ─── Design tokens ──────────────────────────────────────── */
  :root {
    --void:         #020408;
    --surface:      #070d16;
    --surface-2:    #0d1525;
    --red:          #ff4655;
    --red-dim:      rgba(255,70,85,.15);
    --cyan:         #00d4ff;
    --gold:         #f0a500;
    --white:        #f0f6ff;        /* brighter base text */
    --text-primary: #dce8ff;        /* primary readable text */
    --text-body:    #a8bdd8;        /* body copy — up from #2a3a50 opacity */
    --text-dim:     #5a7a9a;        /* truly secondary info */
    --muted:        #2a3a50;        /* borders & decorative only */
    --muted-bright: #6b8aaa;        /* muted-but-readable text */

    --clip:    polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px));
    --clip-sm: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
  }

  /* ─── Base ───────────────────────────────────────────────── */
  html { scroll-behavior: smooth; }
  body {
    background: var(--void);
    color: var(--text-primary);
    font-family: 'Barlow', sans-serif;
    overflow-x: hidden;
  }
  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-thumb { background: var(--red); }

  /* ─── Keyframes ──────────────────────────────────────────── */
  @keyframes twinkle    { 0%, 100% { opacity: .9 }  50% { opacity: .1 } }
  @keyframes drift      { 0%  { transform: translateY(-10vh) } 100% { transform: translateY(110vh) } }
  @keyframes pulse-g    { 0%, 100% { box-shadow: 0 0 0 0 rgba(0,255,100,.5) } 60% { box-shadow: 0 0 0 7px rgba(0,255,100,0) } }
  @keyframes floatY     { 0%  { transform: translateY(0) } 100% { transform: translateY(-9px) } }
  @keyframes nebula     { 0%, 100% { opacity: .7 } 50% { opacity: 1 } }
  @keyframes blink      { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }
  @keyframes revealUp   { from { opacity: 0; transform: translateY(22px) } to { opacity: 1; transform: translateY(0) } }
  @keyframes botSlide   { from { opacity: 0; transform: translateY(20px) scale(.95) } to { opacity: 1; transform: translateY(0) scale(1) } }
  @keyframes msgIn      { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: translateY(0) } }
  @keyframes dotBounce  { 0%, 80%, 100% { transform: translateY(0) } 40% { transform: translateY(-6px) } }
  @keyframes glitch1 {
    0%, 88%, 100% { opacity: 0; clip-path: inset(0 0 100% 0) }
    89% { opacity: 1; clip-path: inset(15% 0 55% 0); transform: translate(-4px, 0) }
    91% { opacity: 1; clip-path: inset(55% 0 20% 0); transform: translate(4px, 0) }
    93% { opacity: 1; clip-path: inset(30% 0 45% 0); transform: translate(-2px, 0) }
    95% { opacity: 0 }
  }
  @keyframes glitch2 {
    0%, 90%, 100% { opacity: 0; clip-path: inset(0 0 100% 0) }
    91% { opacity: 1; clip-path: inset(40% 0 35% 0); transform: translate(5px, 0); color: var(--red) }
    93% { opacity: 1; clip-path: inset(10% 0 70% 0); transform: translate(-3px, 0) }
    95% { opacity: 0 }
  }
  @keyframes loggerPop {
    from { opacity: 0; transform: translateX(20px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  /* ─── Utility classes ────────────────────────────────────── */
  .reveal { opacity: 0; transform: translateY(22px); }
  .reveal.vis { animation: revealUp .7s cubic-bezier(.22,.68,0,1.1) forwards; }

  .card {
    background: var(--surface);
    clip-path: var(--clip);
    border: 1px solid rgba(42,58,80,.6);
    position: relative;
    overflow: hidden;
  }

  html {
  height: -webkit-fill-available;
}

body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
}

  input,
  textarea {
    font-size: 16px;
  }
  .btn {
    font-family: 'Share Tech Mono', monospace;
    font-size: 11px;
    letter-spacing: 2px;
    padding: 10px 22px;
    cursor: pointer;
    border: none;
    clip-path: var(--clip-sm);
    transition: transform .2s, box-shadow .2s;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    display: inline-block;
    text-decoration: none;
  }
  .btn-red  { background: var(--red); color: #fff; }
  .btn-red::after {
    content: '';
    position: absolute;
    top: 0; left: -100%; width: 50%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.35), transparent);
    transition: left .4s;
  }
  .btn-red:hover::after  { left: 160%; }
  .btn-red:hover         { box-shadow: 0 0 28px rgba(255,70,85,.55); }
  .btn-cyan  { background: transparent; color: var(--cyan); border: 1px solid var(--cyan); }
  .btn-cyan:hover { background: rgba(0,212,255,.1); box-shadow: 0 0 18px rgba(0,212,255,.3); }
  .btn-ghost { background: transparent; color: var(--muted-bright); border: 1px solid rgba(90,122,154,.5); }
  .btn-ghost:hover { color: var(--white); border-color: var(--white); }

  /* Achievement bullet */
  .kf { padding-left: 18px; position: relative; }
  .kf::before { content: '▸'; color: var(--red); position: absolute; left: 0; top: 0; }

  .sk-bar {
    height: 3px;
    background: linear-gradient(90deg, var(--red), var(--cyan));
    box-shadow: 0 0 8px var(--red);
    width: 0;
    transition: width 1.3s cubic-bezier(.22,.68,0,1.1);
  }

  .acc-body { max-height: 0; overflow: hidden; transition: max-height .45s ease; }
  .acc-body.open { max-height: 900px; }

  .sound-hint {
    font-family: 'Share Tech Mono', monospace;
    font-size: 8px;
    color: var(--text-dim);
    letter-spacing: 1.2px;
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 10px;
  }

  /* ─── Tag chips ──────────────────────────────────────────── */
  .tag-chip {
    font-family: 'Share Tech Mono', monospace;
    font-size: 9px;
    color: var(--text-dim);
    border: 1px solid rgba(42,58,80,.6);
    padding: 2px 7px;
  }
  .tag-chip-cyan {
    font-family: 'Share Tech Mono', monospace;
    font-size: 9px;
    color: var(--cyan);
    background: rgba(0,212,255,.07);
    padding: 2px 6px;
    border: 1px solid rgba(0,212,255,.25);
  }

  /* ─── Bot ────────────────────────────────────────────────── */
  .bot-fab {
    position: fixed; bottom: 28px; right: 28px; z-index: 4000;
    width: 56px; height: 56px;
    background: var(--red);
    clip-path: var(--clip-sm);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; border: none;
    box-shadow: 0 0 24px rgba(255,70,85,.5);
    transition: transform .2s, box-shadow .2s;
  }
  .bot-fab:hover { transform: scale(1.08); box-shadow: 0 0 36px rgba(255,70,85,.7); }

  .bot-panel {
    position: fixed; bottom: 96px; right: 28px; z-index: 4000;
    width: 380px; height: 540px;
    background: var(--surface);
    clip-path: var(--clip);
    border: 1px solid rgba(255,70,85,.35);
    display: flex; flex-direction: column;
    animation: botSlide .3s cubic-bezier(.22,.68,0,1.1);
  }
  .bot-msgs {
    flex: 1; overflow-y: auto; padding: 16px;
    display: flex; flex-direction: column; gap: 10px;
  }
  .bot-msgs::-webkit-scrollbar { width: 2px; }
  .bot-msgs::-webkit-scrollbar-thumb { background: var(--red); }

  .msg {
    max-width: 88%;
    padding: 11px 14px;
    font-family: 'Barlow', sans-serif;
    font-size: 13.5px;
    line-height: 1.6;
    animation: msgIn .25s ease forwards;
    border: 1px solid transparent;
    white-space: pre-wrap;
  }
  .msg-bot {
    background: rgba(13, 21, 37, 0.9);
    border-color: rgba(255,70,85,.2);
    clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%);
    align-self: flex-start;
    color: var(--text-primary);
  }
  .msg-user {
    background: rgba(0,212,255,.06);
    border-color: rgba(0,212,255,.2);
    clip-path: polygon(8px 0, 100% 0, 100% 100%, 0 100%, 0 8px);
    align-self: flex-end;
    color: var(--cyan);
  }
  /* Bot message bullet styling */
  .msg-bot strong { color: var(--white); font-weight: 600; }

  .bot-input-row {
    display: flex;
    border-top: 1px solid rgba(42,58,80,.5);
    padding: 12px;
    flex-shrink: 0;
    gap: 0;
  }
  .bot-input {
    flex: 1;
    background: rgba(2,4,8,.6);
    border: 1px solid rgba(42,58,80,.5);
    color: var(--text-primary);
    font-family: 'Share Tech Mono', monospace;
    font-size: 11px;
    padding: 9px 12px;
    outline: none;
    letter-spacing: 1px;
  }
  .bot-input::placeholder { color: var(--text-dim); }
  .bot-input:focus { border-color: var(--red); }
  .bot-send {
    background: var(--red);
    border: none; color: #fff;
    padding: 9px 16px; cursor: pointer;
    font-family: 'Share Tech Mono', monospace;
    font-size: 11px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 8px 100%, 0 calc(100% - 8px));
    transition: background .2s;
  }
  .bot-send:hover { background: #ff5f6d; }
  .bot-send:disabled { opacity: .5; cursor: not-allowed; }

  .typing-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--red);
    display: inline-block;
    animation: dotBounce 1.2s infinite;
  }
  .quick-btn {
    background: rgba(255,70,85,.08);
    border: 1px solid rgba(255,70,85,.2);
    color: rgba(220,232,255,.8);
    font-family: 'Share Tech Mono', monospace;
    font-size: 9px;
    padding: 5px 10px;
    cursor: pointer;
    letter-spacing: .5px;
    clip-path: var(--clip-sm);
    transition: background .2s, color .2s;
  }
  .quick-btn:hover { background: rgba(255,70,85,.18); color: #fff; }

  /* ─── Logger toast ───────────────────────────────────────── */
  .logger-toast {
    position: fixed;
    bottom: 100px;
    left: 24px;
    z-index: 5000;
    background: var(--surface-2);
    border: 1px solid rgba(240,165,0,.4);
    clip-path: var(--clip-sm);
    padding: 10px 14px;
    font-family: 'Share Tech Mono', monospace;
    font-size: 10px;
    color: var(--gold);
    letter-spacing: .8px;
    animation: loggerPop .3s ease forwards;
    max-width: 260px;
    line-height: 1.5;
  }
  .logger-toast-label {
    font-size: 8px;
    color: var(--text-dim);
    letter-spacing: 1.5px;
    margin-bottom: 3px;
  }

  /* ─── Responsive ─────────────────────────────────────────── */
  @media (max-width: 900px) {
    .skills-grid  { grid-template-columns: 1fr !important; }
    .proj-grid    { grid-template-columns: 1fr !important; }
  }
  @media (max-width: 768px) {
    .nav-links    { display: none !important; }
    .nav-inner    { padding: 0 16px !important; gap: 10px !important; }
    .hero-wrap    { padding: 72px 20px 40px !important; flex-direction: column !important; gap: 28px !important; min-height: auto !important; align-items: flex-start !important; }
    .hero-card-wrap { align-self: center !important; }
    .hero-card-wrap > div { width: 200px !important; height: 290px !important; }
    .hero-btns .btn { padding: 8px 13px !important; font-size: 10px !important; letter-spacing: 1px !important; }
    .hero-stats > div { border-right: none !important; border-bottom: 1px solid rgba(42,58,80,.35) !important; padding: 8px 10px !important; }
    .section-inner { padding: 60px 20px !important; }
    .skills-cards { grid-template-columns: 1fr 1fr !important; }
    .acc-inner    { grid-template-columns: 1fr !important; }
    .edu-grid     { grid-template-columns: 1fr !important; }
    .stats-grid   { grid-template-columns: 1fr 1fr !important; }
    .proj-grid    { grid-template-columns: 1fr !important; }
    .contact-btns { flex-direction: column !important; align-items: stretch !important; }
    .contact-btns .btn { text-align: center !important; }
    .bot-panel    { width: calc(100vw - 32px) !important; right: 16px !important; bottom: 90px !important; height: 420px !important; }
    .bot-fab      { right: 16px !important; bottom: 20px !important; }
    .logger-toast { left: 16px !important; bottom: 90px !important; }
  }
  @media (max-width: 480px) {
    .skills-cards { grid-template-columns: 1fr !important; }
    .hero-card-wrap > div { width: 160px !important; height: 240px !important; }
  }
`;
