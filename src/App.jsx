import { useState, useEffect, useRef, useMemo, useCallback, createContext, useContext } from "react";

/* ═══════════════════════════════════════════════════════
   AUDIO ENGINE — Web Audio API + Web Speech API
   Interaction sounds only — NO ambient/continuous sound
═══════════════════════════════════════════════════════ */
let _actx = null;
let _muted = false;

function getCtx() {
  if (!_actx) _actx = new (window.AudioContext || window.webkitAudioContext)();
  if (_actx.state === "suspended") _actx.resume();
  return _actx;
}

// ── SFX ─────────────────────────────────────────────
function sfxNav() {
  if (_muted) return;
  const ctx = getCtx(); const t = ctx.currentTime;
  const o = ctx.createOscillator(); o.type = "square";
  o.frequency.setValueAtTime(860, t); o.frequency.exponentialRampToValueAtTime(1350, t + 0.055);
  const g = ctx.createGain(); g.gain.setValueAtTime(0.07, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.07);
  o.connect(g); g.connect(ctx.destination); o.start(t); o.stop(t + 0.07);
}

function sfxBtn() {
  if (_muted) return;
  const ctx = getCtx(); const t = ctx.currentTime;
  const o = ctx.createOscillator(); o.type = "sawtooth";
  o.frequency.setValueAtTime(580, t); o.frequency.exponentialRampToValueAtTime(920, t + 0.06);
  const dist = ctx.createWaveShaper();
  const c = new Float32Array(256);
  for (let i = 0; i < 256; i++) { const x = (i * 2) / 256 - 1; c[i] = (Math.PI + 80) * x / (Math.PI + 80 * Math.abs(x)); }
  dist.curve = c;
  const g = ctx.createGain(); g.gain.setValueAtTime(0.11, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.09);
  o.connect(dist); dist.connect(g); g.connect(ctx.destination); o.start(t); o.stop(t + 0.09);
}

function sfxCard() {
  if (_muted) return;
  const ctx = getCtx(); const t = ctx.currentTime;
  const o = ctx.createOscillator(); o.type = "sine";
  o.frequency.setValueAtTime(1180, t); o.frequency.exponentialRampToValueAtTime(780, t + 0.11);
  const g = ctx.createGain(); g.gain.setValueAtTime(0.055, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.13);
  o.connect(g); g.connect(ctx.destination); o.start(t); o.stop(t + 0.13);
}

function sfxClick() {
  if (_muted) return;
  const ctx = getCtx(); const t = ctx.currentTime;
  [0, 0.026].forEach((d, i) => {
    const o = ctx.createOscillator(); o.type = i === 0 ? "square" : "sawtooth";
    o.frequency.setValueAtTime(i === 0 ? 1750 : 880, t + d);
    o.frequency.exponentialRampToValueAtTime(200, t + d + 0.075);
    const g = ctx.createGain(); g.gain.setValueAtTime(0.14, t + d); g.gain.exponentialRampToValueAtTime(0.001, t + d + 0.09);
    o.connect(g); g.connect(ctx.destination); o.start(t + d); o.stop(t + d + 0.1);
  });
}

function sfxDeploy() {
  if (_muted) return;
  const ctx = getCtx(); const t = ctx.currentTime;
  [0, 0.09, 0.18, 0.27].forEach((d, i) => {
    const o = ctx.createOscillator(); o.type = "square";
    const f = 1550 - i * 280;
    o.frequency.setValueAtTime(f, t + d); o.frequency.exponentialRampToValueAtTime(f * 0.68, t + d + 0.075);
    const g = ctx.createGain(); g.gain.setValueAtTime(0.1, t + d); g.gain.exponentialRampToValueAtTime(0.001, t + d + 0.085);
    o.connect(g); g.connect(ctx.destination); o.start(t + d); o.stop(t + d + 0.09);
  });
}

function sfxTransmission() {
  if (_muted) return;
  const ctx = getCtx(); const t = ctx.currentTime;
  [0, 0.1, 0.21, 0.34, 0.5].forEach((d, i) => {
    const freqs = [420, 640, 860, 1080, 1720];
    const o = ctx.createOscillator(); o.type = i < 4 ? "square" : "sine";
    o.frequency.setValueAtTime(freqs[i], t + d);
    const g = ctx.createGain(); g.gain.setValueAtTime(i === 4 ? 0.17 : 0.11, t + d);
    g.gain.exponentialRampToValueAtTime(0.001, t + d + (i === 4 ? 0.32 : 0.08));
    o.connect(g); g.connect(ctx.destination); o.start(t + d); o.stop(t + d + 0.36);
  });
}

function sfxTyping() {
  if (_muted) return;
  const ctx = getCtx(); const t = ctx.currentTime;
  const o = ctx.createOscillator(); o.type = "square";
  o.frequency.value = 780 + Math.random() * 420;
  const g = ctx.createGain(); g.gain.setValueAtTime(0.035, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.038);
  o.connect(g); g.connect(ctx.destination); o.start(t); o.stop(t + 0.04);
}

function sfxWhoosh() {
  if (_muted) return;
  try {
    const ctx = getCtx(); const t = ctx.currentTime;
    const sz = Math.floor(ctx.sampleRate * 0.28);
    const buf = ctx.createBuffer(1, sz, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < sz; i++) d[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource(); src.buffer = buf;
    const flt = ctx.createBiquadFilter(); flt.type = "bandpass";
    flt.frequency.setValueAtTime(180, t); flt.frequency.exponentialRampToValueAtTime(2800, t + 0.26);
    flt.Q.value = 0.7;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.07, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.28);
    src.connect(flt); flt.connect(g); g.connect(ctx.destination); src.start(t); src.stop(t + 0.3);
  } catch {}
}

// ── Web Speech API ───────────────────────────────────
function speakText(text) {
  if (_muted || !window.speechSynthesis || !text) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.rate = 0.86; utt.pitch = 0.5; utt.volume = 0.92;
  const voices = window.speechSynthesis.getVoices();
  const robot = voices.find(v => /google uk|microsoft david|fred|alex/i.test(v.name))
    || voices.find(v => v.lang === "en-US" && !v.localService)
    || voices.find(v => v.lang === "en-US")
    || voices[0];
  if (robot) utt.voice = robot;
  window.speechSynthesis.speak(utt);
}

/* ═══════════════════════════════════════════════════════
   SOUND CONTEXT
═══════════════════════════════════════════════════════ */
const SoundCtx = createContext({ muted: false, toggle: ()=>{} });
function useSound() { return useContext(SoundCtx); }

function SoundProvider({ children }) {
  const [muted, setMuted] = useState(false);

  const toggle = useCallback(() => {
    setMuted(m => {
      _muted = !m;
      if (!m) { window.speechSynthesis?.cancel(); }
      return !m;
    });
  }, []);

  return (
    <SoundCtx.Provider value={{ muted, toggle }}>
      <div style={{ minHeight: "100vh" }}>{children}</div>
    </SoundCtx.Provider>
  );
}

/* ═══════════════════════════════════════════════════════
   SPEAK-ON-CLICK wrapper — wraps any text node
═══════════════════════════════════════════════════════ */
function SpeakText({ children, style = {}, tag = "span" }) {
  const { muted } = useSound();
  const [active, setActive] = useState(false);
  const text = typeof children === "string" ? children : "";
  const Tag = tag;

  const handleClick = (e) => {
    e.stopPropagation();
    if (!text || muted) return;
    sfxClick();
    setActive(true);
    window.speechSynthesis?.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.rate = 0.86; utt.pitch = 0.5; utt.volume = 0.92;
    const voices = window.speechSynthesis?.getVoices() || [];
    const robot = voices.find(v => /google uk|microsoft david|fred|alex/i.test(v.name))
      || voices.find(v => v.lang === "en-US" && !v.localService)
      || voices.find(v => v.lang === "en-US") || voices[0];
    if (robot) utt.voice = robot;
    utt.onend = () => setActive(false);
    utt.onerror = () => setActive(false);
    window.speechSynthesis?.speak(utt);
  };

  return (
    <Tag onClick={handleClick} title={muted ? "" : "🔊 Click to hear"}
      style={{
        cursor: text && !muted ? "pointer" : "inherit",
        borderBottom: active ? "1px solid var(--cyan)" : "1px solid transparent",
        color: active ? "var(--cyan)" : "inherit",
        transition: "color .2s, border-color .2s",
        ...style,
      }}>
      {children}
      {active && <span style={{ marginLeft: 5, fontSize: "0.7em", color: "var(--cyan)", animation: "blink .55s infinite" }}>▶</span>}
    </Tag>
  );
}

/* ═══════════════════════════════════════════════════════
   FONTS + CSS
═══════════════════════════════════════════════════════ */
const Fonts = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Share+Tech+Mono&family=Barlow:wght@300;400;500;600&display=swap');
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    :root{
      --void:#020408;--surface:#070d16;--red:#ff4655;--cyan:#00d4ff;
      --gold:#f0a500;--white:#e8f0ff;--muted:#2a3a50;
      --clip:polygon(0 0,calc(100% - 18px) 0,100% 18px,100% 100%,18px 100%,0 calc(100% - 18px));
      --clip-sm:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));
    }
    html{scroll-behavior:smooth}
    body{background:var(--void);color:var(--white);font-family:'Barlow',sans-serif;overflow-x:hidden}
    ::-webkit-scrollbar{width:3px}::-webkit-scrollbar-thumb{background:var(--red)}

    @keyframes twinkle{0%,100%{opacity:.9}50%{opacity:.1}}
    @keyframes drift{0%{transform:translateY(-10vh)}100%{transform:translateY(110vh)}}
    @keyframes pulse-g{0%,100%{box-shadow:0 0 0 0 rgba(0,255,100,.5)}60%{box-shadow:0 0 0 7px rgba(0,255,100,0)}}
    @keyframes floatY{0%{transform:translateY(0)}100%{transform:translateY(-9px)}}
    @keyframes glitch1{0%,88%,100%{opacity:0;clip-path:inset(0 0 100% 0)}89%{opacity:1;clip-path:inset(15% 0 55% 0);transform:translate(-4px,0)}91%{opacity:1;clip-path:inset(55% 0 20% 0);transform:translate(4px,0)}93%{opacity:1;clip-path:inset(30% 0 45% 0);transform:translate(-2px,0)}95%{opacity:0}}
    @keyframes glitch2{0%,90%,100%{opacity:0;clip-path:inset(0 0 100% 0)}91%{opacity:1;clip-path:inset(40% 0 35% 0);transform:translate(5px,0);color:var(--red)}93%{opacity:1;clip-path:inset(10% 0 70% 0);transform:translate(-3px,0)}95%{opacity:0}}
    @keyframes nebula{0%,100%{opacity:.7}50%{opacity:1}}
    @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
    @keyframes revealUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
    @keyframes botSlide{from{opacity:0;transform:translateY(20px) scale(.95)}to{opacity:1;transform:translateY(0) scale(1)}}
    @keyframes msgIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
    @keyframes dotBounce{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-6px)}}

    .reveal{opacity:0;transform:translateY(22px)}
    .reveal.vis{animation:revealUp .7s cubic-bezier(.22,.68,0,1.1) forwards}
    .btn{font-family:'Share Tech Mono',monospace;font-size:11px;letter-spacing:2px;padding:10px 22px;cursor:pointer;border:none;clip-path:var(--clip-sm);transition:transform .2s,box-shadow .2s;position:relative;overflow:hidden;white-space:nowrap;display:inline-block;text-decoration:none}
    .btn-red{background:var(--red);color:#fff}
    .btn-red::after{content:'';position:absolute;top:0;left:-100%;width:50%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.35),transparent);transition:left .4s}
    .btn-red:hover::after{left:160%}
    .btn-red:hover{box-shadow:0 0 28px rgba(255,70,85,.55)}
    .btn-cyan{background:transparent;color:var(--cyan);border:1px solid var(--cyan)}
    .btn-cyan:hover{background:rgba(0,212,255,.1);box-shadow:0 0 18px rgba(0,212,255,.3)}
    .btn-ghost{background:transparent;color:var(--muted);border:1px solid var(--muted)}
    .btn-ghost:hover{color:var(--white);border-color:var(--white)}
    .card{background:var(--surface);clip-path:var(--clip);border:1px solid rgba(42,58,80,.6);position:relative;overflow:hidden}
    .kf::before{content:'▸';color:var(--red);margin-right:8px}
    .acc-body{max-height:0;overflow:hidden;transition:max-height .45s ease}
    .acc-body.open{max-height:900px}
    .sk-bar{height:3px;background:linear-gradient(90deg,var(--red),var(--cyan));box-shadow:0 0 8px var(--red);width:0;transition:width 1.3s cubic-bezier(.22,.68,0,1.1)}
    .proj-card{transition:transform .25s,box-shadow .25s,border-color .25s;cursor:pointer}
    .modal-bg{position:fixed;inset:0;background:rgba(2,4,8,.88);backdrop-filter:blur(10px);z-index:3000;display:flex;align-items:center;justify-content:center;padding:20px}
    .bot-fab{position:fixed;bottom:28px;right:28px;z-index:4000;width:56px;height:56px;background:var(--red);clip-path:var(--clip-sm);display:flex;align-items:center;justify-content:center;cursor:pointer;border:none;box-shadow:0 0 24px rgba(255,70,85,.5);transition:transform .2s,box-shadow .2s}
    .bot-fab:hover{transform:scale(1.08);box-shadow:0 0 36px rgba(255,70,85,.7)}
    .bot-panel{position:fixed;bottom:96px;right:28px;z-index:4000;width:360px;height:520px;background:var(--surface);clip-path:var(--clip);border:1px solid rgba(255,70,85,.35);display:flex;flex-direction:column;animation:botSlide .3s cubic-bezier(.22,.68,0,1.1)}
    .bot-msgs{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px}
    .bot-msgs::-webkit-scrollbar{width:2px}.bot-msgs::-webkit-scrollbar-thumb{background:var(--red)}
    .msg{max-width:85%;padding:10px 14px;font-family:'Barlow',sans-serif;font-size:13px;line-height:1.55;animation:msgIn .25s ease forwards;border:1px solid transparent}
    .msg-bot{background:rgba(255,70,85,.1);border-color:rgba(255,70,85,.2);clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,0 100%);align-self:flex-start}
    .msg-user{background:rgba(0,212,255,.08);border-color:rgba(0,212,255,.25);clip-path:polygon(8px 0,100% 0,100% 100%,0 100%,0 8px);align-self:flex-end;color:var(--cyan)}
    .bot-input-row{display:flex;border-top:1px solid rgba(42,58,80,.5);padding:12px;flex-shrink:0;gap:0}
    .bot-input{flex:1;background:rgba(2,4,8,.6);border:1px solid rgba(42,58,80,.5);color:var(--white);font-family:'Share Tech Mono',monospace;font-size:11px;padding:9px 12px;outline:none;letter-spacing:1px}
    .bot-input:focus{border-color:var(--red)}
    .bot-send{background:var(--red);border:none;color:#fff;padding:9px 16px;cursor:pointer;font-family:'Share Tech Mono',monospace;font-size:11px;clip-path:polygon(0 0,100% 0,100% 100%,8px 100%,0 calc(100% - 8px))}
    .typing-dot{width:6px;height:6px;border-radius:50%;background:var(--red);display:inline-block;animation:dotBounce 1.2s infinite}
    .quick-btn{background:rgba(255,70,85,.08);border:1px solid rgba(255,70,85,.25);color:rgba(232,240,255,.7);font-family:'Share Tech Mono',monospace;font-size:9px;padding:4px 10px;cursor:pointer;letter-spacing:.5px;clip-path:var(--clip-sm);transition:background .2s}
    .quick-btn:hover{background:rgba(255,70,85,.18)}
    .sound-hint{font-family:'Share Tech Mono',monospace;font-size:8px;color:rgba(42,58,80,.55);letter-spacing:1.2px;display:flex;align-items:center;gap:5px;margin-top:10px}

    @media(max-width:900px){
      .skills-grid{grid-template-columns:1fr !important}
      .proj-grid{grid-template-columns:1fr !important}
    }
    @media(max-width:768px){
      .nav-links{display:none !important}
      .nav-inner{padding:0 16px !important;gap:10px !important}
      .hero-wrap{padding:72px 20px 40px !important;flex-direction:column !important;gap:28px !important;min-height:auto !important;align-items:flex-start !important}
      .hero-card-wrap{align-self:center !important}
      .hero-card-wrap > div{width:200px !important;height:290px !important}
      .hero-btns .btn{padding:8px 13px !important;font-size:10px !important;letter-spacing:1px !important}
      .hero-stats > div{border-right:none !important;border-bottom:1px solid rgba(42,58,80,.35) !important;padding:8px 10px !important}
      .section-inner{padding:60px 20px !important}
      .skills-cards{grid-template-columns:1fr 1fr !important}
      .acc-inner{grid-template-columns:1fr !important}
      .edu-grid{grid-template-columns:1fr !important}
      .stats-grid{grid-template-columns:1fr 1fr !important}
      .proj-grid{grid-template-columns:1fr !important}
      .contact-btns{flex-direction:column !important;align-items:stretch !important}
      .contact-btns .btn{text-align:center !important}
      .bot-panel{width:calc(100vw - 32px) !important;right:16px !important;bottom:90px !important;height:400px !important}
      .bot-fab{right:16px !important;bottom:20px !important}
    }
    @media(max-width:480px){
      .skills-cards{grid-template-columns:1fr !important}
      .hero-card-wrap > div{width:160px !important;height:240px !important}
    }
  `}</style>
);

/* ═══════════════════════════════════════════════════════
   STAR FIELD
═══════════════════════════════════════════════════════ */
function StarField() {
  const stars = useMemo(() => Array.from({length:200},(_,i)=>({
    id:i, left:Math.random()*100, size:Math.random()*2+0.5,
    twinkleDur:(Math.random()*3+2).toFixed(1), twinkleDelay:(Math.random()*5).toFixed(1),
    driftDur:(Math.random()*35+20).toFixed(1), driftDelay:-(Math.random()*35).toFixed(1),
    bright:Math.random()>.85,
  })),[]);
  return(
    <div style={{position:"fixed",inset:0,zIndex:0,overflow:"hidden",pointerEvents:"none"}}>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 120% 80% at 50% 20%,#030a18 0%,#020408 55%,#010206 100%)"}}/>
      <div style={{position:"absolute",top:"-15%",right:"-8%",width:"60%",height:"60%",background:"radial-gradient(ellipse at center,rgba(255,70,85,.1) 0%,rgba(0,212,255,.06) 40%,transparent 70%)",animation:"nebula 7s ease-in-out infinite",borderRadius:"50%"}}/>
      <div style={{position:"absolute",bottom:"-10%",left:"-5%",width:"45%",height:"45%",background:"radial-gradient(ellipse at center,rgba(0,212,255,.06) 0%,rgba(255,70,85,.03) 50%,transparent 70%)",animation:"nebula 10s ease-in-out infinite reverse",borderRadius:"50%"}}/>
      <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,70,85,.028) 1px,transparent 1px),linear-gradient(90deg,rgba(255,70,85,.028) 1px,transparent 1px)",backgroundSize:"60px 60px"}}/>
      {stars.map(s=>(
        <div key={s.id} style={{position:"absolute",left:`${s.left}%`,top:0,width:`${s.size}px`,height:`${s.size}px`,borderRadius:"50%",background:s.bright?"#ffffff":"#a8c8f0",boxShadow:s.bright?`0 0 ${s.size*3}px rgba(200,220,255,.8)`:"none",animation:`drift ${s.driftDur}s linear ${s.driftDelay}s infinite,twinkle ${s.twinkleDur}s ease-in-out ${s.twinkleDelay}s infinite`}}/>
      ))}
      <div style={{position:"absolute",inset:0,background:"repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,.055) 3px,rgba(0,0,0,.055) 4px)"}}/>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════════ */
function Brackets({color="var(--red)"}) {
  const b = pos => {
    const s={position:"absolute",width:13,height:13,zIndex:10,borderColor:color};
    if(pos==="tl") return{...s,top:0,left:0,borderTop:"2px solid",borderLeft:"2px solid"};
    if(pos==="tr") return{...s,top:0,right:0,borderTop:"2px solid",borderRight:"2px solid"};
    if(pos==="bl") return{...s,bottom:0,left:0,borderBottom:"2px solid",borderLeft:"2px solid"};
    if(pos==="br") return{...s,bottom:0,right:0,borderBottom:"2px solid",borderRight:"2px solid"};
  };
  return<><span style={b("tl")}/><span style={b("tr")}/><span style={b("bl")}/><span style={b("br")}/></>;
}

function useReveal(delay=0) {
  const ref=useRef(null);
  useEffect(()=>{
    const el=ref.current; if(!el) return;
    const obs=new IntersectionObserver(([e])=>{
      if(e.isIntersecting){
        el.style.animationDelay=delay+"ms"; el.classList.add("vis");
        obs.disconnect();
      }
    },{threshold:.06});
    obs.observe(el); return()=>obs.disconnect();
  },[delay]);
  return ref;
}

function Reveal({children,delay=0,style={},className=""}) {
  const ref=useReveal(delay);
  return<div ref={ref} className={"reveal"+(className?" "+className:"")} style={style}>{children}</div>;
}

function MagBtn({children,variant="red",onClick,href,style={}}) {
  const ref=useRef(null);
  const Tag=href?"a":"button";
  return(
    <Tag ref={ref} className={`btn btn-${variant}`}
      onMouseEnter={sfxBtn}
      onMouseMove={e=>{const r=ref.current.getBoundingClientRect();ref.current.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.25}px,${(e.clientY-r.top-r.height/2)*.25}px)`;}}
      onMouseLeave={()=>{ref.current.style.transform="";}}
      onClick={e=>{sfxClick();onClick&&onClick(e);}}
      href={href} style={style}>{children}</Tag>
  );
}

function Typewriter({items}) {
  const [text,setText]=useState(""); const [idx,setIdx]=useState(0); const [typing,setTyping]=useState(true);
  const prev=useRef(0);
  useEffect(()=>{
    const target=items[idx]; let t;
    if(typing){
      if(text.length<target.length){
        prev.current=text.length;
        t=setTimeout(()=>setText(target.slice(0,text.length+1)),55+Math.random()*40);
      } else t=setTimeout(()=>setTyping(false),1600);
    } else {
      if(text.length>0) t=setTimeout(()=>setText(text.slice(0,-1)),28);
      else{setIdx(i=>(i+1)%items.length);setTyping(true);prev.current=0;}
    }
    return()=>clearTimeout(t);
  },[text,typing,idx,items]);
  return(
    <span style={{fontFamily:"'Share Tech Mono',monospace",color:"var(--cyan)"}}>
      {text}<span style={{display:"inline-block",width:2,height:"1em",background:"var(--cyan)",marginLeft:3,verticalAlign:"middle",animation:"blink .8s infinite"}}/>
    </span>
  );
}

function SkillBar({label,level,delay=0}) {
  const ref=useRef(null);
  useEffect(()=>{
    const el=ref.current;
    const obs=new IntersectionObserver(([e])=>{
      if(e.isIntersecting){setTimeout(()=>{el.style.width=level+"%";},delay);obs.disconnect();}
    },{threshold:.2});
    obs.observe(el.parentElement?.parentElement||el); return()=>obs.disconnect();
  },[level,delay]);
  return(
    <div style={{marginBottom:14}}>
      <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
        <span style={{fontFamily:"'Share Tech Mono',monospace",fontSize:11,color:"var(--muted)",letterSpacing:1}}>{label}</span>
        <span style={{fontFamily:"'Share Tech Mono',monospace",fontSize:11,color:"var(--red)"}}>{level}%</span>
      </div>
      <div style={{height:3,background:"rgba(42,58,80,.5)"}}><div ref={ref} className="sk-bar"/></div>
    </div>
  );
}

function SectionHead({sub,title}) {
  return(
    <Reveal>
      <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:11,color:"var(--red)",letterSpacing:3,marginBottom:8,display:"flex",alignItems:"center",gap:10}}>
        <span style={{display:"inline-block",width:3,height:16,background:"var(--red)"}}/>
        {sub}
      </div>
      <div style={{display:"flex",alignItems:"center",gap:12,margin:"0 0 10px"}}>
        <div style={{height:1,flex:1,background:"linear-gradient(90deg,var(--red),transparent)"}}/>
        <div style={{width:5,height:5,background:"var(--red)",transform:"rotate(45deg)"}}/>
        <div style={{height:1,width:36,background:"rgba(255,70,85,.25)"}}/>
      </div>
      <div style={{fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:"clamp(36px,4vw,52px)",color:"var(--white)",lineHeight:1,marginBottom:48}}>{title}</div>
    </Reveal>
  );
}

/* ═══════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════ */
const SKILLS=[
  {id:"ALPHA",level:95,name:"React Ecosystem",tags:["React","Next.js","Redux","Redux-Saga"]},
  {id:"BRAVO",level:92,name:"TypeScript & JS",tags:["TypeScript","ES6+","HTML5","CSS3"]},
  {id:"CHARLIE",level:90,name:"Micro-Frontends",tags:["Module Fed.","Webpack","Rollup","Nx"]},
  {id:"DELTA",level:87,name:"UI & Styling",tags:["Material UI","Storybook","Tailwind","ARIA"]},
  {id:"ECHO",level:85,name:"Cloud & Infra",tags:["AWS Amplify","S3","CloudFront","CodeArtifact"]},
  {id:"FOXTROT",level:83,name:"Testing & CI",tags:["Jest","RTL","SonarQube","Snyk","Husky"]},
];

const EXPERIENCE=[
  {init:"SH",company:"Star Health & Allied Insurance",tag:"INSURTECH",role:"Software Development Engineer – 3",period:"Apr 2023 — Present",color:"var(--red)",
    achievements:["Architected a micro-frontend platform supporting 4 independently deployed applications via Webpack Module Federation, serving 600K agents and operations teams","Standardized frontend engineering across a 10-engineer team by introducing reusable component libraries, Husky pre-commit hooks, SonarQube, and Snyk security scanning","Built a Storybook-driven component system with 20 reusable UI components used across all ATOM applications","Implemented a JSON-driven UI configuration architecture enabling dynamic rendering of complex insurance workflows","Engineered claims workflow UI modules — @star-ui/atom-claims-ui — shipped as an internal AWS CodeArtifact package; cut duplicate implementations significantly","Built a marketing platform (GrowPro) enabling 600K agents to generate campaign creatives with 40–55% engagement lift; featured drag-and-drop poster editor and HTML-to-PDF export"],
    tech:["React","Next.js","TypeScript","Webpack 5","Module Federation","Redux Toolkit","Material UI","Storybook","Rollup","AWS CodeArtifact","SonarQube","Snyk"]},
  {init:"AZ",company:"AltezzaSys Systems",tag:"HEALTHTECH",role:"Software Engineer",period:"Mar 2022 — Nov 2022",color:"var(--cyan)",
    achievements:["Developed operational dashboards and workflow UIs for BSWHealth using React, TypeScript, Redux, and Redux-Saga","Built a Storybook-based component library covering forms, tables, and layout primitives","Improved large-dataset rendering through table virtualization, filtering optimization, and pagination strategies","Deployed frontend apps on AWS Amplify with CloudFront CDN for optimal global delivery"],
    tech:["React","TypeScript","Redux","Redux-Saga","Storybook","AWS Amplify","AWS CloudFront"]},
  {init:"TA",company:"TechAvidus",tag:"PRODUCT",role:"Software Developer",period:"Feb 2020 — Feb 2022",color:"var(--gold)",
    achievements:["Delivered React-based client applications using Redux Thunk and React Router across multiple product domains","Built reusable Material UI component systems including forms, dialogs, tables, and complex inputs","Integrated Stripe payment workflows, Facebook OAuth, email verification, and password reset flows","Connected frontend apps with AWS S3 for asset storage and EC2-hosted APIs"],
    tech:["React","Redux","Redux Thunk","Material UI","Stripe","AWS S3","AWS EC2","Jest"]},
  {init:"LS",company:"Lodestone",tag:"ENTERPRISE",role:"Software Developer",period:"Jan 2019 — Dec 2019",color:"var(--muted)",
    achievements:["Built QVision — a QA monitoring dashboard displaying CI pipeline execution results with analytics and data visualization","Developed frontend systems using React, Redux, and Spring Boot for internal applications and operational dashboards","Delivered the attendance management module for the Tango HRMS platform supporting workforce tracking"],
    tech:["React","Redux","Spring Boot","JavaScript","CSS3"]},
];

const PROJECTS=[
  {id:"OPS-001",name:"ATOM PORTAL — MFE PLATFORM",desc:"4-application micro-frontend platform for 600K insurance agents across Agency, Alternate, and Banca channels at Star Health.",tags:["Next.js","Module Federation","Webpack 5","TypeScript","Redux Toolkit"],metrics:[{v:"600K",l:"USERS"},{v:"4",l:"MFE APPS"},{v:"10",l:"ENGINEERS"}],color:"var(--red)",bg:"linear-gradient(135deg,#1a0608 0%,#070d16 100%)",details:"Mission-critical insurance distribution platform serving 600K agents. Architected 4 independently deployable micro-frontends with a shared Module Federation runtime. Implemented JSON-driven UI config for dynamic workflow rendering, distributed component libraries via AWS CodeArtifact, and enforced quality gates using Husky, SonarQube, and Snyk across a 10-engineer team."},
  {id:"OPS-002",name:"GROWPRO MARKETING ENGINE",desc:"Agent-facing campaign platform enabling 600K insurance agents to generate personalized marketing materials with 40–55% engagement lift.",tags:["React","Next.js","Material UI","react-draggable","AWS S3"],metrics:[{v:"600K",l:"AGENTS"},{v:"55%",l:"ENGAGEMENT"},{v:"100K",l:"ASSETS"}],color:"var(--cyan)",bg:"linear-gradient(135deg,#001518 0%,#070d16 100%)",details:"Full-featured marketing creation platform built within the ATOM ecosystem. Drag-and-drop poster editor using react-draggable, dynamic template rendering with runtime campaign data, HTML-to-PDF export via Next.js API routes, and full asset management workflow supporting 100K+ campaign assets."},
  {id:"OPS-003",name:"@STAR-UI CLAIMS PACKAGE",desc:"Internal NPM package — claims workflow UI modules covering intake, review, query management, and settlement.",tags:["React","TypeScript","Rollup","Material UI","AWS CodeArtifact"],metrics:[{v:"20+",l:"COMPONENTS"},{v:"4",l:"APP CONSUMERS"},{v:"0",l:"BREAKING CHANGES"}],color:"var(--gold)",bg:"linear-gradient(135deg,#120a00 0%,#070d16 100%)",details:"Private npm package @star-ui/atom-claims-ui distributed via AWS CodeArtifact. Covers full claims domain UI — hospital search, claim intake, review queues, query management, and settlement workflows. Built with Rollup ES module builds with tree-shaking, strict TypeScript, ESLint, and Storybook docs."},
  {id:"OPS-004",name:"QVISION — QA DASHBOARD",desc:"Real-time QA monitoring dashboard displaying CI pipeline execution results with analytics for automation performance.",tags:["React","Redux","Spring Boot","Data Visualization","CSS3"],metrics:[{v:"CI",l:"INTEGRATED"},{v:"∞",l:"PIPELINE RUNS"},{v:"⚡",l:"REAL-TIME"}],color:"var(--red)",bg:"linear-gradient(135deg,#0a0208 0%,#070d16 100%)",details:"Internal engineering tool built at Lodestone to surface CI pipeline health in a visual, actionable dashboard. Features analytics charts for automation pass/fail rates, historical trend analysis, and performance metrics. Also included the Tango HRMS attendance management module."},
];

const BOT_SYSTEM=`You are NEXUS-AI, a tactical AI assistant embedded in Nikunj Patel's developer portfolio.
Nikunj is a Senior Frontend Engineer with 7 years of experience based in Pune, India.
Key facts — use ONLY these:
- Full name: Nikunj (Nikunjkumar) Patel | Email: nikunjpatel1581996@gmail.com | Phone: +91 8980368059
- LinkedIn: linkedin.com/in/nikunj-patel-1aa949156 | GitHub: github.com/NiksRock | Location: Pune, India
- Currently: SDE-3 at Star Health and Allied Insurance Co. Ltd (Apr 2023–Present)
- Previously: AltezzaSys Systems (Mar 2022–Nov 2022), TechAvidus (Feb 2020–Feb 2022), Lodestone (Jan 2019–Dec 2019)
- Education: M.Sc ICT – J.P. Dawer Institute/VNSGU (2017–2019), BCA – M.K. Institute/VNSGU (2014–2017)
- Skills: React, Next.js, TypeScript, Webpack Module Federation, Redux/Redux-Saga, Material UI, Storybook, AWS (Amplify/S3/CloudFront/CodeArtifact), Rollup
- Built 4-app MFE platform (ATOM Portal) serving 600K agents | GrowPro marketing platform (40–55% engagement)
- @star-ui/atom-claims-ui package (20+ components) | QVision CI dashboard | Standardized 10-engineer team | Open to opportunities
Respond in tactical, professional tone with slight military HUD flavor. 2-4 sentences max.
Occasionally use "Operative confirmed", "Scanning records...", "Affirmative".
For contact: share email nikunjpatel1581996@gmail.com or direct to contact section.`;

const QUICK_PROMPTS=["What's Nikunj's specialty?","Tell me about the MFE work","Is he open to hire?","Current tech stack?"];

/* ═══════════════════════════════════════════════════════
   NEXUS-AI BOT
═══════════════════════════════════════════════════════ */
function AIBot() {
  const [open,setOpen]=useState(false);
  const [msgs,setMsgs]=useState([{role:"bot",text:"NEXUS-AI ONLINE ⚡ // I'm Nikunj's tactical AI assistant. Ask me anything about his skills, experience, or availability. Click any of my messages to hear them."}]);
  const [input,setInput]=useState(""); const [loading,setLoading]=useState(false);
  const bottomRef=useRef(null);
  const {muted}=useSound();

  useEffect(()=>{bottomRef.current?.scrollIntoView({behavior:"smooth"});},[msgs,loading]);

  const handleOpen=()=>{const n=!open;setOpen(n);if(n)sfxTransmission();else sfxClick();};

  const send=async(text)=>{
    const q=(text||input).trim(); if(!q||loading) return;
    sfxClick(); setInput("");
    const newMsgs=[...msgs,{role:"user",text:q}];
    setMsgs(newMsgs); setLoading(true);
    try{
      const apiMsgs=newMsgs.map(m=>({role:m.role==="bot"?"assistant":"user",content:m.text}));
      const res=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1000,system:BOT_SYSTEM,messages:apiMsgs})});
      const data=await res.json();
      const reply=data.content?.map(c=>c.text||"").join("")||"SIGNAL LOST. Retry transmission.";
      setMsgs(m=>[...m,{role:"bot",text:reply}]);
      if(!muted){const words=Math.min(reply.split(" ").length,25);for(let i=0;i<words;i++)setTimeout(sfxTyping,i*55+200);}
    }catch{setMsgs(m=>[...m,{role:"bot",text:"COMMS ERROR // Connection disrupted. Please retry."}]);}
    setLoading(false);
  };

  return(
    <>
      {open&&(
        <div className="bot-panel">
          <div style={{padding:"12px 16px",borderBottom:"1px solid rgba(255,70,85,.25)",background:"rgba(2,4,8,.6)",display:"flex",alignItems:"center",gap:10,flexShrink:0}}>
            <div style={{width:8,height:8,borderRadius:"50%",background:"#00ff64",boxShadow:"0 0 8px #00ff64",animation:"pulse-g 2s infinite"}}/>
            <div style={{flex:1}}>
              <div style={{fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:15,color:"var(--white)"}}>NEXUS-AI</div>
              <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:"var(--red)",letterSpacing:2}}>PORTFOLIO ASSISTANT // ONLINE</div>
            </div>
            <button onClick={handleOpen} style={{background:"none",border:"1px solid rgba(255,70,85,.3)",color:"var(--red)",width:28,height:28,cursor:"pointer",fontFamily:"'Share Tech Mono',monospace",fontSize:12,display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>
          </div>
          <div className="bot-msgs">
            {msgs.map((m,i)=>(
              <div key={i} className={`msg msg-${m.role}`}
                onClick={()=>{if(m.role==="bot"){sfxClick();speakText(m.text);}}}
                title={m.role==="bot"?"🔊 Click to hear in robotic voice":""}
                style={{cursor:m.role==="bot"?"pointer":"default"}}>
                {m.text}
              </div>
            ))}
            {loading&&<div className="msg msg-bot" style={{display:"flex",gap:5,alignItems:"center",padding:"12px 14px"}}>{[0,150,300].map(d=><span key={d} className="typing-dot" style={{animationDelay:d+"ms"}}/>)}</div>}
            <div ref={bottomRef}/>
          </div>
          {msgs.length<=2&&(
            <div style={{padding:"8px 14px 4px",display:"flex",flexWrap:"wrap",gap:6,borderTop:"1px solid rgba(42,58,80,.35)",flexShrink:0}}>
              {QUICK_PROMPTS.map(p=><button key={p} className="quick-btn" onMouseEnter={sfxNav} onClick={()=>send(p)}>{p}</button>)}
            </div>
          )}
          <div className="bot-input-row">
            <input className="bot-input" placeholder="ASK NEXUS-AI..." value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>{if(e.key==="Enter")send();else sfxTyping();}}/>
            <button className="bot-send" onMouseEnter={sfxBtn} onClick={()=>send()} disabled={loading}>SEND</button>
          </div>
        </div>
      )}
      <button className="bot-fab" onClick={handleOpen} onMouseEnter={sfxBtn} title="Chat with NEXUS-AI">
        {open
          ?<span style={{color:"#fff",fontSize:18,fontWeight:"bold",fontFamily:"'Share Tech Mono',monospace"}}>✕</span>
          :<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="white" opacity=".92"/><circle cx="8" cy="11" r="1.3" fill="#ff4655"/><circle cx="12" cy="11" r="1.3" fill="#ff4655"/><circle cx="16" cy="11" r="1.3" fill="#ff4655"/></svg>
        }
      </button>
    </>
  );
}

/* ═══════════════════════════════════════════════════════
   NAV
═══════════════════════════════════════════════════════ */
function Nav({pct}) {
  const [scrolled,setScrolled]=useState(false);
  const {muted,toggle}=useSound();
  useEffect(()=>{const h=()=>setScrolled(window.scrollY>20);window.addEventListener("scroll",h);return()=>window.removeEventListener("scroll",h);},[]);

  return(
    <>
      <div style={{position:"fixed",top:0,left:0,height:3,background:"linear-gradient(90deg,var(--red),var(--cyan))",boxShadow:"0 0 12px var(--cyan)",zIndex:9999,width:pct+"%",transition:"width .1s linear"}}/>
      <nav className="nav-inner" style={{position:"fixed",top:0,left:0,right:0,height:60,display:"flex",alignItems:"center",padding:"0 40px",gap:28,zIndex:1000,background:scrolled?"rgba(7,13,22,.92)":"transparent",backdropFilter:scrolled?"blur(16px)":"none",borderBottom:scrolled?"1px solid rgba(255,70,85,.25)":"1px solid transparent",transition:"all .3s"}}>
        <div style={{width:34,height:34,background:"var(--red)",flexShrink:0,clipPath:"polygon(50% 0,100% 50%,50% 100%,0 50%)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:13,color:"#fff"}}>NP</div>
        <div style={{flex:1}}>
          <div style={{fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:17,color:"var(--white)",lineHeight:1}}>NIKUNJ PATEL</div>
          <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:"var(--red)",letterSpacing:2}}>SDE-3 // PUNE, INDIA</div>
        </div>
        <div className="nav-links" style={{display:"flex",gap:24,alignItems:"center"}}>
          {["SKILLS","RECORD","MISSIONS","CONTACT"].map(l=>(
            <a key={l} href={`#${l.toLowerCase()}`} onMouseEnter={sfxNav}
              style={{fontFamily:"'Share Tech Mono',monospace",fontSize:11,color:"var(--muted)",textDecoration:"none",letterSpacing:1.5,transition:"color .2s,text-shadow .2s"}}
              onMouseOver={e=>{e.target.style.color="var(--white)";e.target.style.textShadow="0 0 12px var(--red)";}}
              onMouseOut={e=>{e.target.style.color="var(--muted)";e.target.style.textShadow="none";}}
            >{l}</a>
          ))}
          {/* Sound toggle */}
          <button onClick={()=>{sfxClick();toggle();}} title={muted?"Unmute interaction sounds & voice":"Mute all sounds"}
            style={{background:"none",border:"1px solid",borderColor:muted?"rgba(42,58,80,.5)":"rgba(255,70,85,.4)",color:muted?"var(--muted)":"var(--red)",width:32,height:32,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",clipPath:"var(--clip-sm)",transition:"all .2s"}}>
            {muted
              ?<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
              :<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
            }
          </button>
        </div>
        <MagBtn variant="red" href="#contact">DEPLOY ME</MagBtn>
      </nav>
    </>
  );
}

/* ═══════════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════════ */
function Hero() {
  return(
    <section className="hero-wrap" style={{minHeight:"100vh",display:"flex",alignItems:"center",padding:"80px 60px 60px",maxWidth:1280,margin:"0 auto",gap:60,flexWrap:"wrap"}}>
      <div style={{flex:"1 1 420px"}}>
        <Reveal>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:20}}>
            <div style={{width:8,height:8,borderRadius:"50%",background:"#00ff64",boxShadow:"0 0 0 0 rgba(0,255,100,.5)",animation:"pulse-g 2s infinite"}}/>
            <span style={{fontFamily:"'Share Tech Mono',monospace",fontSize:11,color:"#00ff64",letterSpacing:2}}>OPERATIVE STATUS: ACTIVE</span>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:11,color:"var(--muted)",letterSpacing:3,marginBottom:8}}>// AGENT PROFILE — PUNE, INDIA</div>
        </Reveal>
        <Reveal delay={160}>
          <h1 style={{fontFamily:"'Rajdhani',sans-serif",fontWeight:700,lineHeight:.9,userSelect:"none"}}>
            <div style={{fontSize:"clamp(64px,9vw,108px)",color:"var(--white)",position:"relative",display:"inline-block"}}>
              NIKUNJ
              <span aria-hidden style={{position:"absolute",top:0,left:0,color:"var(--cyan)",animation:"glitch1 9s infinite",pointerEvents:"none"}}>NIKUNJ</span>
              <span aria-hidden style={{position:"absolute",top:0,left:0,animation:"glitch2 9s infinite 1s",pointerEvents:"none"}}>NIKUNJ</span>
            </div>
            <br/>
            <span style={{fontSize:"clamp(64px,9vw,108px)",color:"var(--red)",textShadow:"0 0 32px rgba(255,70,85,.5),0 0 64px rgba(255,70,85,.2)"}}>PATEL</span>
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <div style={{fontSize:19,marginTop:14,marginBottom:18,fontFamily:"'Rajdhani',sans-serif",fontWeight:500,minHeight:30}}>
            <Typewriter items={["REACT ARCHITECT","NEXT.JS ENGINEER","MFE SPECIALIST","MODULE FEDERATION","AWS FRONTEND"]}/>
          </div>
        </Reveal>
        <Reveal delay={280}>
          <SpeakText tag="p" style={{maxWidth:500,lineHeight:1.75,color:"rgba(232,240,255,.68)",marginBottom:32,fontSize:15,display:"block"}}>
            Senior Frontend Engineer with 7 years architecting scalable, enterprise-grade web platforms. Specialist in micro-frontend architecture with Webpack Module Federation, React and Next.js ecosystems, and cloud-native frontend delivery on AWS.
          </SpeakText>
        </Reveal>
        <Reveal delay={330}>
          <div className="hero-btns" style={{display:"flex",gap:12,flexWrap:"wrap",marginBottom:32}}>
            <MagBtn variant="red" href="#missions">VIEW MISSIONS</MagBtn>
            <MagBtn variant="cyan" href="#record">FIELD RECORD</MagBtn>
            <MagBtn variant="ghost" href="#contact">OPEN COMMS</MagBtn>
          </div>
        </Reveal>
        <Reveal delay={360}>
          <div className="sound-hint">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
            CLICK ANY PARAGRAPH TO HEAR IT IN ROBOTIC PROTOCOL VOICE
          </div>
        </Reveal>
        <Reveal delay={380}>
          <div className="hero-stats" style={{display:"flex",borderTop:"1px solid rgba(42,58,80,.5)",paddingTop:24,marginTop:16}}>
            {[["7+","YEARS EXP"],["4","MFE APPS"],["600K","USERS SERVED"],["20+","COMPONENTS"]].map(([v,l],i)=>(
              <div key={l} style={{flex:1,padding:"0 12px",borderRight:i<3?"1px solid rgba(42,58,80,.4)":"none"}}>
                <div style={{fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:28,color:"var(--red)"}}>{v}</div>
                <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:"var(--muted)",letterSpacing:1.2}}>{l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={250} style={{flexShrink:0}} className="hero-card-wrap">
        <div className="card" style={{width:272,height:390,border:"1px solid rgba(255,70,85,.3)"}}>
          <Brackets color="var(--red)"/>
          <img src="./profile.png" alt="" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",
            objectPosition:"top center" ,filter:"saturate(0.5) contrast(1.2)",zIndex:0}}/>
          <div style={{position:"absolute",inset:0,background:"linear-gradient(160deg,rgba(255,70,85,.18) 0%,rgba(7,13,22,.75) 45%,rgba(7,13,22,.97) 80%,var(--surface) 100%)",zIndex:1}}/>
          <div style={{position:"absolute",inset:0,background:"repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,.07) 3px,rgba(0,0,0,.07) 4px)",zIndex:2,pointerEvents:"none"}}/>
          <svg style={{position:"absolute",top:"38%",left:"50%",transform:"translate(-50%,-50%)",opacity:.1,zIndex:3}} width={90} height={90} viewBox="0 0 90 90">
            <line x1="45" y1="0" x2="45" y2="32" stroke="#ff4655" strokeWidth="1.5"/><line x1="45" y1="58" x2="45" y2="90" stroke="#ff4655" strokeWidth="1.5"/>
            <line x1="0" y1="45" x2="32" y2="45" stroke="#ff4655" strokeWidth="1.5"/><line x1="58" y1="45" x2="90" y2="45" stroke="#ff4655" strokeWidth="1.5"/>
            <circle cx="45" cy="45" r="10" fill="none" stroke="#ff4655" strokeWidth="1"/>
          </svg>
          {/* <div style={{position:"absolute",top:42,left:"50%",transform:"translateX(-50%)",width:92,height:92,borderRadius:"50%",background:"linear-gradient(135deg,rgba(255,70,85,.28),rgba(0,212,255,.18))",border:"2px solid rgba(255,70,85,.5)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:32,color:"var(--white)",zIndex:4}}>NP</div> */}
          <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"18px 16px",zIndex:4}}>
            <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:"var(--red)",letterSpacing:2}}>// AGENT ID</div>
            <div style={{fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:19,color:"var(--white)"}}>NIKUNJ PATEL</div>
            <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:"var(--gold)",marginBottom:10}}>RANK: SDE-3 // STAR HEALTH</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:5}}>
              {["REACT","NEXT.JS","MFE","AWS"].map(t=><span key={t} onMouseEnter={sfxCard} style={{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:"var(--red)",border:"1px solid rgba(255,70,85,.35)",padding:"2px 7px",background:"rgba(255,70,85,.07)",clipPath:"var(--clip-sm)",cursor:"default"}}>{t}</span>)}
            </div>
          </div>
          <div style={{position:"absolute",top:13,right:13,background:"rgba(0,212,255,.14)",border:"1px solid var(--cyan)",padding:"4px 9px",zIndex:5,fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:"var(--cyan)",letterSpacing:1,animation:"floatY 2.5s ease-in-out infinite alternate",clipPath:"var(--clip-sm)"}}>⚡ OPEN TO DEPLOY</div>
          <div style={{position:"absolute",bottom:146,right:-1,background:"rgba(2,4,8,.92)",border:"1px solid var(--gold)",borderRight:"none",padding:"7px 11px",zIndex:5,animation:"floatY 3s ease-in-out infinite alternate-reverse"}}>
            <div style={{fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:22,color:"var(--gold)"}}>600K</div>
            <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:"var(--muted)"}}>USERS</div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SKILLS
═══════════════════════════════════════════════════════ */
function Skills() {
  return(
    <section id="skills" style={{background:"rgba(7,13,22,.6)",borderTop:"1px solid rgba(42,58,80,.3)",borderBottom:"1px solid rgba(42,58,80,.3)"}}>
      <div className="section-inner" style={{padding:"100px 60px",maxWidth:1280,margin:"0 auto"}}>
        <SectionHead sub="// CLASS OVERVIEW" title="SKILL LOADOUT"/>
        <div className="skills-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:32}}>
          <div className="skills-cards" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
            {SKILLS.map((sk,i)=>(
              <Reveal key={sk.id} delay={i*70}>
                <div className="card" style={{padding:"18px 16px",transition:"transform .2s,box-shadow .2s"}}
                  onMouseEnter={e=>{sfxCard();e.currentTarget.style.transform="scale(1.03)";e.currentTarget.style.boxShadow="0 0 24px rgba(255,70,85,.18)";}}
                  onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="";}}>
                  <Brackets color="var(--red)"/>
                  <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:"var(--red)",letterSpacing:2,marginBottom:4}}>{sk.id}</div>
                  <div style={{fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:30,color:"var(--white)",lineHeight:1}}>{sk.level}</div>
                  <div style={{fontSize:11,color:"var(--muted)",marginBottom:10,textTransform:"uppercase",letterSpacing:1}}>{sk.name}</div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:4}}>
                    {sk.tags.map(t=><span key={t} style={{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:"var(--cyan)",background:"rgba(0,212,255,.07)",padding:"2px 6px",border:"1px solid rgba(0,212,255,.2)"}}>{t}</span>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:20}}>
            <Reveal delay={100}>
              <div className="card" style={{padding:"22px 22px 18px"}}>
                <Brackets color="var(--cyan)"/>
                <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:"var(--cyan)",letterSpacing:2,marginBottom:16}}>// ACCURACY METER</div>
                {[["React / Next.js",95],["TypeScript",92],["Module Federation",90],["Redux / Redux-Saga",88],["Material UI / Storybook",85],["AWS Cloud Infra",83]].map(([l,v],i)=><SkillBar key={l} label={l} level={v} delay={i*130}/>)}
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="card" style={{padding:"22px"}}>
                <Brackets color="var(--gold)"/>
                <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:"var(--gold)",letterSpacing:2,marginBottom:14}}>// DEPLOYMENT STATS</div>
                <div className="stats-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
                  {[["MFE APPS","4","var(--red)"],["TEAM SIZE","10","var(--cyan)"],["USERS","600K","var(--gold)"],["EXP","7 YRS","var(--red)"]].map(([m,v,c])=>(
                    <div key={m} style={{background:"rgba(2,4,8,.5)",padding:"11px 13px",borderLeft:`2px solid ${c}`}}>
                      <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:"var(--muted)",letterSpacing:2}}>{m}</div>
                      <div style={{fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:28,color:c}}>{v}</div>
                      <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:8,color:"#00ff64"}}>● CONFIRMED</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   EXPERIENCE
═══════════════════════════════════════════════════════ */
function Experience() {
  const [open,setOpen]=useState(0);
  return(
    <section id="record">
      <div className="section-inner" style={{padding:"100px 60px",maxWidth:1280,margin:"0 auto"}}>
        <SectionHead sub="// OPERATION LOG" title="FIELD RECORD"/>
        <Reveal delay={60}>
          <div className="card" style={{height:90,marginBottom:28,background:"linear-gradient(90deg,rgba(255,70,85,.12) 0%,rgba(0,212,255,.04) 100%)",border:"1px solid rgba(42,58,80,.4)",display:"flex",alignItems:"center",padding:"0 28px"}}>
            <Brackets color="var(--red)"/>
            <div>
              <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:"var(--gold)",letterSpacing:3}}>DEPLOYMENT ENVIRONMENT</div>
              <div style={{fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:20,color:"var(--white)"}}>FRONTEND COMMAND // 7 YEARS ACTIVE DUTY // PUNE, INDIA</div>
            </div>
          </div>
        </Reveal>
        <div style={{display:"flex",flexDirection:"column",gap:8}}>
          {EXPERIENCE.map((item,i)=>(
            <Reveal key={item.company} delay={i*70}>
              <div className="card" style={{border:`1px solid ${open===i?item.color:"rgba(42,58,80,.4)"}`,boxShadow:open===i?`0 0 20px ${item.color}22`:"none",transition:"border-color .3s,box-shadow .3s"}}>
                <Brackets color={item.color}/>
                <button onClick={()=>{const n=open===i?-1:i;setOpen(n);if(n!==-1)sfxDeploy();else sfxClick();}}
                  onMouseEnter={sfxNav}
                  style={{width:"100%",background:"none",border:"none",cursor:"pointer",padding:"18px 22px",display:"flex",alignItems:"center",gap:14,textAlign:"left"}}>
                  <div style={{width:42,height:42,background:`${item.color}15`,border:`1px solid ${item.color}40`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:13,color:item.color,flexShrink:0}}>{item.init}</div>
                  <div style={{flex:1}}>
                    <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:2}}>
                      <span style={{fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:17,color:"var(--white)"}}>{item.company}</span>
                      <span style={{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:item.color,border:`1px solid ${item.color}44`,padding:"2px 7px"}}>{item.tag}</span>
                    </div>
                    <div style={{fontFamily:"'Barlow',sans-serif",fontSize:13,color:"var(--muted)"}}>{item.role} &nbsp;·&nbsp; {item.period}</div>
                  </div>
                  <span style={{color:item.color,fontSize:15,transition:"transform .3s",transform:open===i?"rotate(90deg)":"rotate(0deg)"}}>▶</span>
                </button>
                <div className={`acc-body ${open===i?"open":""}`}>
                  <div className="acc-inner" style={{padding:"0 22px 22px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:22}}>
                    <div>
                      <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:item.color,letterSpacing:2,marginBottom:10}}>// ACHIEVEMENTS</div>
                      {item.achievements.map((a,j)=>(
                        <div key={j} className="kf" style={{fontFamily:"'Barlow',sans-serif",fontSize:13,color:"rgba(232,240,255,.68)",marginBottom:8,lineHeight:1.55}}>
                          <SpeakText>{a}</SpeakText>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:item.color,letterSpacing:2,marginBottom:10}}>// TECH STACK</div>
                      <div style={{display:"flex",flexWrap:"wrap",gap:7}}>
                        {item.tech.map(t=><span key={t} style={{fontFamily:"'Share Tech Mono',monospace",fontSize:10,color:"var(--white)",background:"rgba(42,58,80,.4)",border:"1px solid rgba(42,58,80,.7)",padding:"4px 10px",clipPath:"var(--clip-sm)"}}>{t}</span>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div style={{marginTop:48}}>
            <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:"var(--cyan)",letterSpacing:3,marginBottom:16}}>// ACADEMIC CLEARANCE</div>
            <div className="skills-cards" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
              {[{deg:"M.Sc ICT",inst:"J.P. Dawer Institute of Information Science & Technology",uni:"VNSGU",period:"Jul 2017 – Feb 2019",color:"var(--cyan)"},{deg:"BCA",inst:"M.K. Institute of Computer Studies",uni:"VNSGU",period:"Jun 2014 – May 2017",color:"var(--gold)"}].map(e=>(
                <div key={e.deg} className="card" style={{padding:"18px 20px",border:`1px solid ${e.color}28`}} onMouseEnter={sfxCard}>
                  <Brackets color={e.color}/>
                  <div style={{fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:22,color:e.color,marginBottom:4}}>{e.deg}</div>
                  <SpeakText style={{fontSize:13,color:"var(--white)",marginBottom:2,display:"block"}}>{e.inst}</SpeakText>
                  <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:"var(--muted)",letterSpacing:1}}>{e.uni} &nbsp;·&nbsp; {e.period}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   PROJECTS
═══════════════════════════════════════════════════════ */
function Projects() {
  const [modal,setModal]=useState(null);
  return(
    <section id="missions" style={{background:"rgba(7,13,22,.6)",borderTop:"1px solid rgba(42,58,80,.3)"}}>
      <div className="section-inner" style={{padding:"100px 60px",maxWidth:1280,margin:"0 auto"}}>
        <SectionHead sub="// MISSION ARCHIVE" title="CLASSIFIED OPS"/>
        <div className="proj-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24}}>
          {PROJECTS.map((p,i)=>(
            <Reveal key={p.id} delay={i*90}>
              <div className="card proj-card" onClick={()=>{sfxDeploy();setModal(p);}} style={{border:"1px solid rgba(42,58,80,.5)"}}
                onMouseEnter={e=>{sfxCard();e.currentTarget.style.transform="translateY(-5px)";e.currentTarget.style.boxShadow=`0 16px 48px ${p.color}25`;e.currentTarget.style.borderColor=`${p.color}55`;}}
                onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="";e.currentTarget.style.borderColor="rgba(42,58,80,.5)";}}>
                <Brackets color={p.color}/>
                <div style={{height:165,background:p.bg,position:"relative",overflow:"hidden",display:"flex",alignItems:"flex-end",padding:"14px 18px"}}>
                  <div style={{position:"absolute",inset:0,background:"rgba(2,4,8,.35)"}}/>
                  <div style={{position:"absolute",inset:0,background:"repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,.06) 3px,rgba(0,0,0,.06) 4px)"}}/>
                  <svg style={{position:"absolute",top:0,right:0,opacity:.12}} width={110} height={110} viewBox="0 0 110 110"><line x1="110" y1="0" x2="50" y2="110" stroke={p.color} strokeWidth="1"/><line x1="80" y1="0" x2="20" y2="110" stroke={p.color} strokeWidth=".5"/></svg>
                  <div style={{position:"relative",zIndex:2}}>
                    <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:p.color,letterSpacing:2}}>MISSION {p.id}</div>
                    <div style={{fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:22,color:"var(--white)"}}>{p.name}</div>
                  </div>
                </div>
                <div style={{padding:"18px 18px 14px"}}>
                  <SpeakText style={{fontSize:13,color:"rgba(232,240,255,.58)",lineHeight:1.6,marginBottom:14,display:"block"}}>{p.desc}</SpeakText>
                  <div style={{display:"flex",gap:0,marginBottom:14,borderTop:"1px solid rgba(42,58,80,.4)",borderBottom:"1px solid rgba(42,58,80,.4)",padding:"9px 0"}}>
                    {p.metrics.map((m,mi)=>(
                      <div key={m.l} style={{flex:1,textAlign:"center",borderRight:mi<p.metrics.length-1?"1px solid rgba(42,58,80,.4)":"none"}}>
                        <div style={{fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:20,color:p.color}}>{m.v}</div>
                        <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:8,color:"var(--muted)",letterSpacing:1}}>{m.l}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:5}}>
                    {p.tags.map(t=><span key={t} style={{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:"var(--muted)",border:"1px solid rgba(42,58,80,.5)",padding:"2px 7px"}}>{t}</span>)}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      {modal&&(
        <div className="modal-bg" onClick={()=>{sfxClick();setModal(null);}}>
          <div className="card" onClick={e=>e.stopPropagation()} style={{maxWidth:610,width:"100%",border:`1px solid ${modal.color}55`,boxShadow:`0 0 60px ${modal.color}18`,maxHeight:"90vh",overflowY:"auto"}}>
            <Brackets color={modal.color}/>
            <div style={{height:105,background:modal.bg,position:"relative",padding:"16px 24px",display:"flex",alignItems:"flex-end"}}>
              <div style={{position:"absolute",inset:0,background:"rgba(2,4,8,.5)"}}/>
              <div style={{position:"relative",zIndex:1}}>
                <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:modal.color,letterSpacing:2}}>MISSION {modal.id} // CLASSIFIED</div>
                <div style={{fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:24,color:"var(--white)"}}>{modal.name}</div>
              </div>
              <button onClick={()=>{sfxClick();setModal(null);}} style={{position:"absolute",top:12,right:12,background:"none",border:"1px solid rgba(255,70,85,.4)",color:"var(--red)",width:28,height:28,cursor:"pointer",fontFamily:"'Share Tech Mono',monospace",fontSize:13,zIndex:2,display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>
            </div>
            <div style={{padding:"22px 24px"}}>
              <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:modal.color,letterSpacing:2,marginBottom:10}}>// MISSION BRIEF</div>
              <SpeakText style={{fontSize:14,lineHeight:1.7,color:"rgba(232,240,255,.72)",marginBottom:22,display:"block"}}>{modal.details}</SpeakText>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:22}}>
                {modal.metrics.map(m=>(
                  <div key={m.l} style={{background:"rgba(2,4,8,.6)",padding:14,textAlign:"center",border:`1px solid ${modal.color}28`}}>
                    <div style={{fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:26,color:modal.color}}>{m.v}</div>
                    <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:"var(--muted)"}}>{m.l}</div>
                  </div>
                ))}
              </div>
              <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:modal.color,letterSpacing:2,marginBottom:10}}>// TECH STACK</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:7}}>
                {modal.tags.map(t=><span key={t} style={{fontFamily:"'Share Tech Mono',monospace",fontSize:10,color:"var(--white)",background:"rgba(42,58,80,.4)",border:"1px solid rgba(42,58,80,.7)",padding:"4px 12px",clipPath:"var(--clip-sm)"}}>{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   CONTACT
═══════════════════════════════════════════════════════ */
function Contact() {
  return(
    <section id="contact" style={{borderTop:"1px solid rgba(42,58,80,.3)"}}>
      <div className="section-inner" style={{padding:"100px 60px",maxWidth:1280,margin:"0 auto",textAlign:"center"}}>
        <Reveal>
          <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:11,color:"var(--red)",letterSpacing:3,marginBottom:8,display:"flex",alignItems:"center",justifyContent:"center",gap:10}}>
            <span style={{display:"inline-block",width:3,height:16,background:"var(--red)"}}/>// OPEN COMMS
          </div>
          <div style={{display:"flex",alignItems:"center",gap:12,margin:"0 auto 10px",maxWidth:400}}>
            <div style={{height:1,flex:1,background:"linear-gradient(90deg,var(--red),transparent)"}}/>
            <div style={{width:5,height:5,background:"var(--red)",transform:"rotate(45deg)"}}/>
            <div style={{height:1,width:36,background:"rgba(255,70,85,.25)"}}/>
          </div>
          <div style={{fontFamily:"'Rajdhani',sans-serif",fontWeight:700,fontSize:"clamp(36px,4vw,52px)",color:"var(--white)",lineHeight:1,marginBottom:44}}>INITIATE CONTACT</div>
        </Reveal>
        <Reveal delay={100}>
          <SpeakText tag="p" style={{maxWidth:450,margin:"0 auto 12px",color:"rgba(232,240,255,.6)",lineHeight:1.75,fontSize:15,display:"block"}}>
            Ready to discuss your next mission. Whether it's architecting a micro-frontend platform, scaling frontend teams, or building robust React ecosystems — let's deploy together.
          </SpeakText>
          <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:11,color:"var(--cyan)",letterSpacing:1,marginBottom:36}}>
            nikunjpatel1581996@gmail.com &nbsp;·&nbsp; +91 8980368059 &nbsp;·&nbsp; Pune, India
          </div>
        </Reveal>
        <Reveal delay={180}>
          <div className="contact-btns" style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
            <MagBtn variant="red" href="mailto:nikunjpatel1581996@gmail.com">✉ SEND TRANSMISSION</MagBtn>
            <MagBtn variant="cyan" href="https://github.com/NiksRock">GitHub // NiksRock</MagBtn>
            <MagBtn variant="ghost" href="https://linkedin.com/in/nikunj-patel-1aa949156">LinkedIn Profile</MagBtn>
          </div>
        </Reveal>
        <Reveal delay={260}>
          <div style={{marginTop:80,display:"flex",alignItems:"center",gap:16}}>
            <div style={{flex:1,height:1,background:"linear-gradient(90deg,transparent,var(--red))"}}/>
            <span style={{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:"var(--muted)",letterSpacing:2}}>NP // SDE-3 // STAR HEALTH & ALLIED INSURANCE // PUNE</span>
            <div style={{flex:1,height:1,background:"linear-gradient(90deg,var(--red),transparent)"}}/>
          </div>
          <div style={{fontFamily:"'Share Tech Mono',monospace",fontSize:9,color:"rgba(42,58,80,.4)",marginTop:14,letterSpacing:1}}>© 2025 NIKUNJ PATEL — ALL RIGHTS RESERVED // DEPLOYED IN PRODUCTION</div>
        </Reveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   ROOT
═══════════════════════════════════════════════════════ */
export default function Portfolio() {
  const [pct,setPct]=useState(0);
  useEffect(()=>{
    const h=()=>{const el=document.documentElement;setPct((el.scrollTop/(el.scrollHeight-el.clientHeight))*100||0);};
    window.addEventListener("scroll",h); return()=>window.removeEventListener("scroll",h);
  },[]);

  return(
    <SoundProvider>
      <div style={{position:"relative",minHeight:"100vh"}}>
        <Fonts/>
        <StarField/>
        <div style={{position:"relative",zIndex:1}}>
          <Nav pct={pct}/>
          <Hero/>
          <Skills/>
          <Experience/>
          <Projects/>
          <Contact/>
        </div>
        <AIBot/>
      </div>
    </SoundProvider>
  );
}