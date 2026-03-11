import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { setMuted } from './engine';

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

  // Memoize context value to prevent unnecessary re-renders of all consumers
  const value = useMemo(() => ({ muted, toggle }), [muted, toggle]);

  return (
    <SoundContext.Provider value={value}>
      {children}
    </SoundContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useSound() {
  return useContext(SoundContext);
}
