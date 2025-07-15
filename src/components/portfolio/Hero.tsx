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
            className="text-primary font-medium mb-4 text-lg"
          >
            &gt; Hello, World!
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
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
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              &gt; MERN Stack Developer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-primary-foreground px-8 py-6 text-lg rounded-xl animate-pulse-glow"
            >
              About Me
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-xl"
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
            <p className="text-sm text-muted-foreground mb-4">Explore Work</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-3 rounded-full border border-primary/30 bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <ArrowDown className="w-5 h-5 text-primary" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-shape absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg backdrop-blur-sm"></div>
          <div className="floating-shape absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full backdrop-blur-sm" style={{ animationDelay: '2s' }}></div>
          <div className="floating-shape absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-primary/30 to-accent/30 rotate-45 backdrop-blur-sm" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent"></div>
      
      {/* About Modal */}
      <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
    </section>
  );
}