import { lazy, Suspense } from 'react';
import { SoundProvider } from './audio/SoundContext';
import { AIBot }      from './components/AIBot';
import { StarField }  from './components/StarField';
import { useScrollProgress } from './hooks';
import { Nav }        from './sections/Nav';
import { Hero }       from './sections/Hero';
import './styles/global.css';

// Lazy-load below-the-fold sections to reduce initial bundle parse cost
const Skills     = lazy(() => import('./sections/Skills').then(m => ({ default: m.Skills })));
const Experience = lazy(() => import('./sections/Experience').then(m => ({ default: m.Experience })));
const Projects   = lazy(() => import('./sections/Projects').then(m => ({ default: m.Projects })));
const Contact    = lazy(() => import('./sections/Contact').then(m => ({ default: m.Contact })));

// ─── Layout ───────────────────────────────────────────────────────────────────

function PortfolioLayout() {
  const scrollProgress = useScrollProgress();

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <StarField />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Nav scrollProgress={scrollProgress} />
        <Hero />
        <Suspense fallback={null}>
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </Suspense>
      </div>

      <AIBot />
    </div>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────

export default function Portfolio() {
  return (
    <SoundProvider>
      <PortfolioLayout />
    </SoundProvider>
  );
}
