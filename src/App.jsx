import { SoundProvider } from './audio/SoundContext';
import { AIBot }      from './components/AIBot';
import { StarField }  from './components/StarField';
import { useScrollProgress } from './hooks'; 
import { Nav }        from './sections/Nav';
import { Hero }       from './sections/Hero';
import { Skills }     from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects }   from './sections/Projects';
import { Contact }    from './sections/Contact';
import  './styles/global.css';
// ─── Global styles injected once ─────────────────────────────────────────────
 
// ─── Layout ───────────────────────────────────────────────────────────────────

function PortfolioLayout() {
  const scrollProgress = useScrollProgress();

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <StarField />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Nav scrollProgress={scrollProgress} />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
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
