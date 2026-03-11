import { useEffect, useRef, useState } from 'react';

// ─── useReveal ────────────────────────────────────────────────────────────────
/**
 * Attaches an IntersectionObserver to the returned ref.
 * Adds the 'vis' class once the element enters the viewport.
 */
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
/**
 * Returns a 0–100 value representing how far the user has scrolled.
 */
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
/**
 * Returns true when the page has scrolled past the given threshold (px).
 */
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
 * Cycles through an array of strings with a typewriter animation.
 * Uses a single ref-based phase object to avoid stale closure issues
 * and prevent multiple simultaneous timers on rapid state updates.
 */
export function useTypewriter(items, { typeSpeed = 65, deleteSpeed = 28, pauseMs = 1600 } = {}) {
  const [text, setText] = useState('');
  const phase = useRef({ itemIndex: 0, isTyping: true });

  useEffect(() => {
    const { itemIndex, isTyping } = phase.current;
    const target = items[itemIndex];
    let timer;

    if (isTyping) {
      if (text.length < target.length) {
        timer = setTimeout(
          () => setText(target.slice(0, text.length + 1)),
          typeSpeed + Math.random() * 40
        );
      } else {
        timer = setTimeout(() => {
          phase.current.isTyping = false;
          setText((t) => t); // trigger re-render to enter delete phase
        }, pauseMs);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => setText((t) => t.slice(0, -1)), deleteSpeed);
      } else {
        phase.current.itemIndex = (itemIndex + 1) % items.length;
        phase.current.isTyping = true;
        setText('');
      }
    }

    return () => clearTimeout(timer);
  }, [text, items, typeSpeed, deleteSpeed, pauseMs]);

  return text;
}

// ─── useSkillBarReveal ────────────────────────────────────────────────────────
/**
 * Animates a skill bar width to `level`% once the element is in view.
 * Returns a ref to attach to the bar element itself.
 */
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
