/**
 * Audio Engine
 * Web Audio API synth + Web Speech API
 * All interaction sounds are one-shot; no ambient/continuous audio.
 */

let _audioCtx = null;
let _muted = false;

// ─── Context ──────────────────────────────────────────────────────────────────

function getCtx() {
  if (!_audioCtx) {
    _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (_audioCtx.state === 'suspended') _audioCtx.resume();
  return _audioCtx;
}

export function setMuted(value) {
  _muted = value;
  if (value) window.speechSynthesis?.cancel();
}

export function isMuted() {
  return _muted;
}

// ─── SFX helpers ──────────────────────────────────────────────────────────────

function createOsc(ctx, type, startFreq, endFreq, duration, gainStart, delay = 0) {
  const t = ctx.currentTime + delay;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(startFreq, t);
  if (endFreq) osc.frequency.exponentialRampToValueAtTime(endFreq, t + duration);

  gain.gain.setValueAtTime(gainStart, t);
  gain.gain.exponentialRampToValueAtTime(0.001, t + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(t);
  osc.stop(t + duration + 0.01);
}

function createDistortionCurve(amount = 80) {
  const samples = 256;
  const curve = new Float32Array(samples);
  for (let i = 0; i < samples; i++) {
    const x = (i * 2) / samples - 1;
    curve[i] = ((Math.PI + amount) * x) / (Math.PI + amount * Math.abs(x));
  }
  return curve;
}

// ─── Sound palette ────────────────────────────────────────────────────────────

export function sfxNav() {
  if (_muted) return;
  const ctx = getCtx();
  createOsc(ctx, 'square', 860, 1350, 0.07, 0.07);
}

export function sfxBtn() {
  if (_muted) return;
  const ctx = getCtx();
  const t = ctx.currentTime;
  const osc = ctx.createOscillator();
  const dist = ctx.createWaveShaper();
  const gain = ctx.createGain();

  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(580, t);
  osc.frequency.exponentialRampToValueAtTime(920, t + 0.06);

  dist.curve = createDistortionCurve();
  gain.gain.setValueAtTime(0.11, t);
  gain.gain.exponentialRampToValueAtTime(0.001, t + 0.09);

  osc.connect(dist);
  dist.connect(gain);
  gain.connect(ctx.destination);
  osc.start(t);
  osc.stop(t + 0.09);
}

export function sfxCard() {
  if (_muted) return;
  const ctx = getCtx();
  createOsc(ctx, 'sine', 1180, 780, 0.13, 0.055);
}

export function sfxClick() {
  if (_muted) return;
  const ctx = getCtx();
  [[0, 'square', 1750, 200], [0.026, 'sawtooth', 880, 200]].forEach(([delay, type, freq]) => {
    createOsc(ctx, type, freq, 200, 0.09, 0.14, delay);
  });
}

export function sfxDeploy() {
  if (_muted) return;
  const ctx = getCtx();
  [0, 0.09, 0.18, 0.27].forEach((delay, i) => {
    const f = 1550 - i * 280;
    createOsc(ctx, 'square', f, f * 0.68, 0.085, 0.1, delay);
  });
}

export function sfxTransmission() {
  if (_muted) return;
  const ctx = getCtx();
  const freqs = [420, 640, 860, 1080, 1720];
  [0, 0.1, 0.21, 0.34, 0.5].forEach((delay, i) => {
    const isLast = i === 4;
    const type = isLast ? 'sine' : 'square';
    const gainVal = isLast ? 0.17 : 0.11;
    const dur = isLast ? 0.32 : 0.08;
    createOsc(ctx, type, freqs[i], null, dur, gainVal, delay);
  });
}

export function sfxTyping() {
  if (_muted) return;
  const ctx = getCtx();
  createOsc(ctx, 'square', 780 + Math.random() * 420, null, 0.038, 0.035);
}

export function sfxWhoosh() {
  if (_muted) return;
  try {
    const ctx = getCtx();
    const t = ctx.currentTime;
    const size = Math.floor(ctx.sampleRate * 0.28);
    const buffer = ctx.createBuffer(1, size, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < size; i++) data[i] = Math.random() * 2 - 1;

    const src = ctx.createBufferSource();
    src.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(180, t);
    filter.frequency.exponentialRampToValueAtTime(2800, t + 0.26);
    filter.Q.value = 0.7;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.07, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.28);

    src.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    src.start(t);
    src.stop(t + 0.3);
  } catch {
    // Silently fail if audio context unavailable
  }
}

// ─── Speech ───────────────────────────────────────────────────────────────────

function getRobotVoice() {
  const voices = window.speechSynthesis?.getVoices() || [];
  return (
    voices.find((v) => /google uk|microsoft david|fred|alex/i.test(v.name)) ||
    voices.find((v) => v.lang === 'en-US' && !v.localService) ||
    voices.find((v) => v.lang === 'en-US') ||
    voices[0]
  );
}

export function speakText(text) {
  if (_muted || !window.speechSynthesis || !text) return;
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.86;
  utterance.pitch = 0.5;
  utterance.volume = 0.92;

  const voice = getRobotVoice();
  if (voice) utterance.voice = voice;

  window.speechSynthesis.speak(utterance);
}

export function speakWithCallbacks(text, { onEnd, onError } = {}) {
  if (_muted || !window.speechSynthesis || !text) return;
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.86;
  utterance.pitch = 0.5;
  utterance.volume = 0.92;

  const voice = getRobotVoice();
  if (voice) utterance.voice = voice;

  if (onEnd) utterance.onend = onEnd;
  if (onError) utterance.onerror = onError;

  window.speechSynthesis.speak(utterance);
}
