import { useEffect, useRef, useState } from 'react';

// ─── useReveal ────────────────────────────────────────────────────────────────
export function useReveal(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationDelay = `${delay}ms`;
          el.classList.add('vis');
          observer.disconnect();
        }
      },
      { threshold: 0.06 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return ref;
}

// ─── useScrollProgress ────────────────────────────────────────────────────────
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrollable = el.scrollHeight - el.clientHeight;
      setProgress(scrollable > 0 ? (el.scrollTop / scrollable) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return progress;
}

// ─── useScrolled ──────────────────────────────────────────────────────────────
export function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, [threshold]);
  return scrolled;
}

// ─── useTypewriter ────────────────────────────────────────────────────────────
/**
 * FIX: React 19 / StrictMode drops no-op setState calls (setText(t => t)).
 * Solution: track phase explicitly as state so every transition is a real
 * state change and the effect re-runs reliably.
 *
 * State shape:
 *   { text: string, itemIndex: number, isTyping: boolean }
 */
export function useTypewriter(
  items,
  { typeSpeed = 65, deleteSpeed = 28, pauseMs = 1600 } = {}
) {
  const [state, setState] = useState({
    text: '',
    itemIndex: 0,
    isTyping: true,
  });

  useEffect(() => {
    const { text, itemIndex, isTyping } = state;
    const target = items[itemIndex];
    let timer;

    if (isTyping) {
      if (text.length < target.length) {
        // Type next character
        timer = setTimeout(() => {
          setState(s => ({ ...s, text: target.slice(0, s.text.length + 1) }));
        }, typeSpeed + Math.random() * 40);
      } else {
        // Finished typing — pause then switch to deleting
        timer = setTimeout(() => {
          setState(s => ({ ...s, isTyping: false }));
        }, pauseMs);
      }
    } else {
      if (text.length > 0) {
        // Delete one character
        timer = setTimeout(() => {
          setState(s => ({ ...s, text: s.text.slice(0, -1) }));
        }, deleteSpeed);
      } else {
        // Finished deleting — advance to next item, start typing
        setState(s => ({
          text: '',
          itemIndex: (s.itemIndex + 1) % items.length,
          isTyping: true,
        }));
      }
    }

    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return state.text;
}

// ─── useSkillBarReveal ────────────────────────────────────────────────────────
export function useSkillBarReveal(level, delay = 0) {
  const barRef = useRef(null);
  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const target = bar.parentElement?.parentElement || bar;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            bar.style.width = `${level}%`;
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [level, delay]);
  return barRef;
}