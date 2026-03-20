import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Database, 
  Zap, 
  ChevronRight,
  Cpu,
  Workflow
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';
import { MoonStar, SunMoon } from 'lucide-react';

export const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background selection:bg-emerald-500/30">
      {/* Theme Toggle Overlay */}
      <div className="fixed top-6 right-6 z-50">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={toggleTheme} 
          className="rounded-full w-12 h-12 border-emerald-500/20 hover:bg-emerald-500/10 transition-all shadow-lg backdrop-blur-md"
        >
          {theme === 'dark' ? <MoonStar className="w-5 h-5 text-emerald-400" /> : <SunMoon className="w-5 h-5 text-emerald-600" />}
        </Button>
      </div>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-emerald-500/10 to-transparent blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-black uppercase tracking-[0.3em] mb-12"
          >
            <ShieldCheck className="w-4 h-4" />
            150+ Expert Backend Architectures
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-12"
          >
            BACK-END<br />
            <span className="text-emerald-500 drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">ENGINEERING</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground/80 max-w-3xl mx-auto mb-16 font-medium leading-relaxed"
          >
            Deep dive into high-performance server-side logic, distributed architectures, 
            and mission-critical security. Crafted for the architects of tomorrow.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/theory">
              <Button size="lg" className="h-16 px-12 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-lg group shadow-2xl shadow-emerald-600/30 active:scale-95 transition-all">
                EXPLORE HUB
                <ChevronRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <a href="https://github.com/mochrks" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="h-16 px-10 rounded-2xl border-emerald-500/20 font-black text-lg hover:bg-emerald-500/10 active:scale-95 transition-all">
                GITHUB REPO
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { icon: <Cpu />, title: 'OOP Logic', desc: 'SOLID & Patterns' },
            { icon: <Database />, title: 'DB scaling', desc: 'SQL & NoSQL' },
            { icon: <Zap />, title: 'Real-time', desc: 'Websocket & Redis' },
            { icon: <Workflow />, title: 'DevOps', desc: 'Docker & CI/CD' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2rem] bg-card/30 border border-emerald-500/10 hover:border-emerald-500/30 transition-all hover:bg-emerald-500/[0.02] group"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-500 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest opacity-60">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-20 text-center border-t border-emerald-500/10 opacity-40">
        <p className="text-[10px] font-black uppercase tracking-[0.5em]">
          © 2026 MOCHRKS — THE BACKEND ARCHITECT HANDBOOK
        </p>
      </footer>
    </div>
  );
};

export default Home;