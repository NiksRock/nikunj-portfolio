import { memo } from 'react';

// ─── Star data generated once at module load — never recomputed ───────────────
// Moved out of the component entirely (previously inside useMemo) so React
// never even touches this on re-renders; the array is truly static.
const STARS = Array.from({ length: 200 }, (_, i) => ({
  id:           i,
  left:         Math.random() * 100,
  size:         Math.random() * 2 + 0.5,
  twinkleDur:   (Math.random() * 3 + 2).toFixed(1),
  twinkleDelay: (Math.random() * 5).toFixed(1),
  driftDur:     (Math.random() * 35 + 20).toFixed(1),
  driftDelay:   -(Math.random() * 35).toFixed(1),
  bright:       Math.random() > 0.85,
}));

export const StarField = memo(function StarField() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {/* Deep space gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 120% 80% at 50% 20%, #030a18 0%, #020408 55%, #010206 100%)',
      }} />

      {/* Nebula overlays */}
      <div style={{
        position: 'absolute', top: '-15%', right: '-8%', width: '60%', height: '60%',
        background: 'radial-gradient(ellipse at center, rgba(255,70,85,.1) 0%, rgba(0,212,255,.06) 40%, transparent 70%)',
        animation: 'nebula 7s ease-in-out infinite',
        borderRadius: '50%',
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', left: '-5%', width: '45%', height: '45%',
        background: 'radial-gradient(ellipse at center, rgba(0,212,255,.06) 0%, rgba(255,70,85,.03) 50%, transparent 70%)',
        animation: 'nebula 10s ease-in-out infinite reverse',
        borderRadius: '50%',
      }} />

      {/* Grid lines */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,70,85,.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255,70,85,.028) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Stars */}
      {STARS.map((s) => (
        <div
          key={s.id}
          style={{
            position: 'absolute',
            left: `${s.left}%`,
            top: 0,
            width: `${s.size}px`,
            height: `${s.size}px`,
            borderRadius: '50%',
            background: s.bright ? '#ffffff' : '#a8c8f0',
            boxShadow: s.bright ? `0 0 ${s.size * 3}px rgba(200,220,255,.8)` : 'none',
            animation: `drift ${s.driftDur}s linear ${s.driftDelay}s infinite, twinkle ${s.twinkleDur}s ease-in-out ${s.twinkleDelay}s infinite`,
          }}
        />
      ))}

      {/* Scanline overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,.055) 3px, rgba(0,0,0,.055) 4px)',
      }} />
    </div>
  );
});
