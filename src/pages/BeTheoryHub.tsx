import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  ChevronRight, 
  Cpu, 
  Code2,
  Search,
  ArrowLeft,
  Menu,
  X,
  Server,
  Workflow,
  Zap,
  Globe
} from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { beTheoryData, BeTheoryTopic } from '@/data/beTheoryData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

export const BeTheoryHub = () => {
  const [selectedTopic, setSelectedTopic] = useState<BeTheoryTopic | null>(beTheoryData[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSelectTopic = (topic: BeTheoryTopic) => {
    setSelectedTopic(topic);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = ['All', ...Array.from(new Set(beTheoryData.map(t => t.category)))];

  const getCategoryCount = (category: string) => {
    if (category === 'All') return beTheoryData.length;
    return beTheoryData.filter(t => t.category === category).length;
  };

  const filteredData = beTheoryData.filter(topic => {
    const matchesSearch = topic.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          topic.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || topic.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Fundamental Backend': return <Globe className="w-4 h-4" />;
      case 'Basic Logic Backend': return <Terminal className="w-4 h-4" />;
      case 'Spring Boot': return <Zap className="w-4 h-4" />;
      case 'DevOps': return <Workflow className="w-4 h-4" />;
      case 'Dockerize': return <Server className="w-4 h-4" />;
      default: return <Cpu className="w-4 h-4" />;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-background text-foreground overflow-hidden relative">
      {/* Mobile Top Bar */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b bg-background/80 backdrop-blur-md sticky top-0 z-40">
        <Link to="/" className="flex items-center gap-2 font-black text-xl tracking-tighter">
           <span className="text-emerald-500">BE</span>_HUB
        </Link>
        <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(true)}>
          <Menu className="w-6 h-6 text-emerald-500" />
        </Button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-full md:w-[400px] bg-background border-r flex flex-col h-screen transition-transform duration-300 transform
        lg:relative lg:translate-x-0 lg:z-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-8 border-b flex items-center justify-between bg-emerald-500/[0.02]">
          <Link to="/" className="flex items-center gap-3 font-black text-2xl group tracking-tighter">
             <div className="p-2 bg-emerald-500 rounded-xl shadow-lg shadow-emerald-500/20 group-hover:rotate-12 transition-transform">
                <ArrowLeft className="w-5 h-5 text-white" />
             </div>
             <span>BACKEND_HUB</span>
          </Link>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSidebarOpen(false)}>
            <X className="w-6 h-6" />
          </Button>
        </div>

        <div className="p-6 border-b space-y-4 bg-background/40">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-emerald-500 transition-colors" />
            <Input 
              placeholder="Search Backend Concepts..." 
              className="pl-12 h-12 border-0 bg-muted/50 focus-visible:ring-2 focus-visible:ring-emerald-500 shadow-none rounded-2xl text-sm transition-all" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto pr-2 custom-scrollbar">
            {categories.map(cat => (
              <Badge 
                key={cat} 
                variant={activeCategory === cat ? 'default' : 'outline'}
                className={`cursor-pointer px-3 py-1.5 flex items-center gap-2 group border-0 shadow-sm transition-all ${
                  activeCategory === cat 
                    ? 'bg-emerald-600 text-white scale-105' 
                    : 'bg-muted/50 hover:bg-emerald-500/10 hover:text-emerald-500'
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                <span className="text-[10px] uppercase font-bold tracking-widest">{cat}</span>
                <span className={`text-[9px] px-1.5 rounded-full font-mono ${activeCategory === cat ? 'bg-white/20 text-white' : 'bg-background/50 text-muted-foreground'}`}>
                  {getCategoryCount(cat)}
                </span>
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex-grow overflow-y-auto p-4 space-y-2 custom-scrollbar">
          {filteredData.length > 0 ? (
            filteredData.map(topic => (
              <button
                key={topic.id}
                onClick={() => handleSelectTopic(topic)}
                className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-start gap-4 border group relative overflow-hidden ${
                  selectedTopic?.id === topic.id 
                    ? 'bg-emerald-600 text-white border-emerald-500 shadow-xl shadow-emerald-600/20 scale-[1.01]' 
                    : 'bg-card/50 hover:bg-emerald-500/5 border-transparent'
                }`}
              >
                <div className={`p-3 rounded-xl transition-all ${selectedTopic?.id === topic.id ? 'bg-white/20' : 'bg-secondary group-hover:bg-emerald-500/10'}`}>
                  {getCategoryIcon(topic.category)}
                </div>
                <div className="flex-grow pr-2">
                  <h4 className="font-bold text-sm leading-tight mb-1 uppercase tracking-tight">{topic.title}</h4>
                  <p className={`text-[11px] line-clamp-1 font-medium ${selectedTopic?.id === topic.id ? 'text-white/70' : 'text-muted-foreground'}`}>
                    {topic.description}
                  </p>
                </div>
                <ChevronRight className={`w-4 h-4 self-center transition-all ${selectedTopic?.id === topic.id ? 'translate-x-1 opacity-100' : 'opacity-20 group-hover:opacity-100 group-hover:translate-x-0'}`} />
              </button>
            ))
          ) : (
            <div className="text-center py-20 opacity-30 select-none">
              <Search className="w-16 h-16 mx-auto mb-4" />
              <p className="text-sm font-black uppercase tracking-widest">No matching results</p>
            </div>
          )}
        </div>
      </aside>

      {/* Backdrop for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content Detail Area */}
      <main className="flex-grow bg-background overflow-y-auto custom-scrollbar scroll-smooth">
        <AnimatePresence mode="wait">
          {selectedTopic ? (
            <motion.div
              key={selectedTopic.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-6 md:p-16 lg:p-24 max-w-6xl mx-auto"
            >
              <div className="mb-16 space-y-6">
                <Badge className="bg-emerald-600/10 text-emerald-600 border-emerald-600/20 uppercase tracking-[0.2em] text-[10px] py-1.5 px-5 rounded-full font-black">
                  {selectedTopic.category}
                </Badge>
                <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight">
                  {selectedTopic.title}
                </h1>
                <p className="text-xl md:text-3xl text-muted-foreground border-l-8 border-emerald-500 pl-10 py-2 italic font-serif leading-relaxed">
                  "{selectedTopic.description}"
                </p>
              </div>

              <div className="space-y-20">
                {/* Theory Section */}
                <section className="space-y-8">
                  <div className="flex items-center gap-4 border-b border-emerald-500/10 pb-6">
                    <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-600">
                      <Terminal className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Core Architecture Concept</h3>
                  </div>
                  <div className="prose prose-emerald dark:prose-invert max-w-none">
                    <p className="text-lg md:text-2xl leading-relaxed text-muted-foreground/80 font-medium tracking-tight">
                      {selectedTopic.fullTheory}
                    </p>
                  </div>
                </section>

                {/* Code Implementation Section */}
                <section className="space-y-8">
                  <div className="flex items-center gap-4 border-b border-emerald-500/10 pb-6">
                    <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-600">
                      <Code2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Backend Implementation</h3>
                  </div>
                  <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-emerald-500/10 transition-all duration-300 hover:shadow-emerald-500/10 bg-[#0d0d0d]">
                    <div className="flex items-center justify-between px-8 py-4 bg-white/[0.03] border-b border-white/[0.05]">
                      <div className="flex gap-2 text-muted-foreground/40 font-mono text-[9px] italic">
                         // logic-implementation.ts
                      </div>
                      <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/30" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/30" />
                      </div>
                    </div>
                    <SyntaxHighlighter 
                      language="javascript" 
                      style={atomDark}
                      customStyle={{ 
                        padding: '2.5rem', 
                        fontSize: '15px', 
                        lineHeight: '1.8',
                        background: 'transparent'
                      }}
                    >
                      {selectedTopic.codeSnippet}
                    </SyntaxHighlighter>
                  </div>
                </section>

                <footer className="pt-24 pb-12 border-t border-emerald-500/10 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40 hover:opacity-100 transition-opacity duration-500">
                   <div className="flex flex-col items-center md:items-start gap-2">
                      <span className="text-xs font-black uppercase tracking-widest text-emerald-500">BE_HUB ADVANCED EDITION</span>
                      <p className="text-[10px] font-medium tracking-widest leading-relaxed text-center md:text-left">© 2026 MOCHRKS — CRAFTED FOR MASTERING BACK-END ARCHITECTURE</p>
                   </div>
                   <Button 
                    variant="ghost" 
                    className="text-[10px] font-black uppercase tracking-[0.3em] gap-3 text-muted-foreground hover:text-emerald-500"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                   >
                      <ChevronRight className="w-4 h-4 -rotate-90" />
                      Back to Top
                   </Button>
                </footer>
              </div>
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
              <Server className="w-32 h-32 text-emerald-500/10 mb-8 animate-pulse" />
              <h2 className="text-2xl md:text-4xl font-black text-muted-foreground uppercase tracking-[0.4em] mb-4">Architecture Awaits</h2>
              <p className="text-muted-foreground/60 text-sm max-w-sm mx-auto uppercase tracking-widest leading-loose">Select a backend topic from the sidebar to begin your masterful journey through the server-side realm.</p>
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default BeTheoryHub;
