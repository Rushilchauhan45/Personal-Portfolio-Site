import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AboutModal from './AboutModal';

export default function Hero() {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-code mb-4 text-lg"
          >
            &gt; Hello, World!
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight heading-primary"
          >
            <span className="hero-text">Pushkar Modi</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-muted-foreground mb-2 text-code font-mono">
              &gt; MERN Stack Developer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-space">
              I help business owners and busy web developers to design & develop creative websites 
              that fits their vision and attracts visitors to stay forever.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button 
              size="lg" 
              onClick={() => setIsAboutModalOpen(true)}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-primary-foreground px-8 py-6 text-lg rounded-xl animate-pulse-glow font-space font-medium"
            >
              About Me
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-xl font-space font-medium"
            >
              View Projects
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col items-center cursor-pointer"
            onClick={scrollToProjects}
          >
            <p className="text-sm text-muted-foreground mb-4 font-space text-futuristic">Explore Work</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-3 rounded-full border border-primary/30 bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <ArrowDown className="w-5 h-5 text-primary" />
            </motion.div>
          </motion.div>
        </motion.div>

          {/* Enhanced Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="floating-shape absolute top-20 left-10 w-20 h-20 mesh-gradient rounded-lg backdrop-blur-sm animate-mesh-shift opacity-30"></div>
          <div className="floating-shape absolute top-40 right-20 w-16 h-16 aurora-bg rounded-full backdrop-blur-sm animate-aurora-dance opacity-40" style={{ animationDelay: '2s' }}></div>
          <div className="floating-shape absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-primary/30 to-accent/30 rotate-45 backdrop-blur-sm animate-levitate" style={{ animationDelay: '4s' }}></div>
          <div className="floating-shape absolute top-60 left-1/2 w-8 h-8 bg-primary/40 rounded-full animate-sparkle" style={{ animationDelay: '1s' }}></div>
          <div className="floating-shape absolute bottom-60 right-1/3 w-6 h-6 bg-accent/50 rounded-full animate-sparkle" style={{ animationDelay: '3s' }}></div>
          
          {/* Magic sparkles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-sparkle opacity-60" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-accent rounded-full animate-sparkle opacity-70" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-primary rounded-full animate-sparkle opacity-50" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/15 via-accent/5 to-transparent animate-glow-pulse"></div>
      <div className="absolute inset-0 aurora-bg opacity-20 animate-aurora-dance"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-primary/5 to-accent/5 animate-pulse"></div>
      
      {/* About Modal */}
      <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
    </section>
  );
}