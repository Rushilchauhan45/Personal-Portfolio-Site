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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Left side content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 flex lg:flex-row flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl lg:w-1/2 text-center lg:text-left"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-sm sm:text-base md:text-lg mb-2 sm:mb-4"
          >
            &gt; Hello, World! I'm 
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 heading-primary"
          >
            <span className="hero-text block">Rushil Chauhan</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-2 text-code font-mono">
              &gt; AI & Emerging Tech Explorer
            </p>
            <div className="flex flex-wrap gap-x-2 sm:gap-x-3 text-base sm:text-lg text-muted-foreground max-w-2xl font-space justify-center lg:justify-start">
              {["Design", "Develop", "Attract", "Convert"].map((word, index) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.7 + index * 0.2,
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  className="relative"
                >
                  {word}
                  {index < 3 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.7 + index * 0.2 + 0.2,
                        type: "spring",
                        stiffness: 200
                      }}
                      className="inline-block ml-1"
                    >
                      .
                    </motion.span>
                  )}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-12 sm:mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                onClick={() => setIsAboutModalOpen(true)}
                className="relative bg-gradient-to-r from-primary via-accent to-primary hover:from-primary/90 hover:via-accent/90 hover:to-primary/90 text-primary-foreground px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-2xl font-space font-semibold shadow-2xl shadow-primary/30 transition-all duration-300 hover:shadow-primary/50 overflow-hidden w-full sm:w-auto"
              >
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out" />
                
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
                
                {/* Content */}
                <span className="relative z-10 flex items-center justify-center">
                  <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent font-bold">
                    About Me
                  </span>
                  <motion.div
                    animate={{ 
                      x: [0, 3, 0],
                      rotate: [0, 10, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="ml-2 sm:ml-3"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </span>
                
                {/* Pulse effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 animate-pulse opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              </Button>
            </motion.div>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToProjects}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-2xl font-space font-medium w-full sm:w-auto"
            >
              View Projects
            </Button>
          </motion.div>

        </motion.div>

        
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-10 flex flex-col items-center cursor-pointer"
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

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/15 via-accent/5 to-transparent animate-glow-pulse"></div>
      <div className="absolute inset-0 aurora-bg opacity-20 animate-aurora-dance"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-primary/5 to-accent/5 animate-pulse"></div>
      
      {/* About Modal */}
      <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
    </section>
  );
}