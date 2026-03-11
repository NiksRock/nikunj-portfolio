import { createContext, useCallback, useContext, useState } from 'react';
import { setMuted } from '../audio/engine';

// ─── Context ──────────────────────────────────────────────────────────────────

const SoundContext = createContext({ muted: false, toggle: () => {} });

// ─── Provider ─────────────────────────────────────────────────────────────────

export function SoundProvider({ children }) {
  const [muted, setMutedState] = useState(false);

  const toggle = useCallback(() => {
    setMutedState((prev) => {
      const next = !prev;
      setMuted(next);
      return next;
    });
  }, []);

  return (
    <SoundContext.Provider value={{ muted, toggle }}>
      <div style={{ minHeight: '100vh' }}>{children}</div>
    </SoundContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useSound() {
  return useContext(SoundContext);
}
