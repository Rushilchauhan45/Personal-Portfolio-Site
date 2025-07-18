import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { X, Code, Rocket, Star, Zap, Coffee, Heart } from 'lucide-react';
import aboutMeImg from '@/assets/about-me-img.png';

const technologies = [
  { name: "#javascript", color: "bg-yellow-500/20 text-yellow-400 border-yellow-400/30" },
  { name: "#reactjs", color: "bg-blue-500/20 text-blue-400 border-blue-400/30" },
  { name: "#redux", color: "bg-purple-500/20 text-purple-400 border-purple-400/30" },
  { name: "#nodejs", color: "bg-green-500/20 text-green-400 border-green-400/30" },
  { name: "#expressjs", color: "bg-gray-500/20 text-gray-400 border-gray-400/30" },
  { name: "#mongoDB", color: "bg-emerald-500/20 text-emerald-400 border-emerald-400/30" },
  { name: "#mongoose", color: "bg-red-500/20 text-red-400 border-red-400/30" },
  { name: "#cloudinary", color: "bg-orange-500/20 text-orange-400 border-orange-400/30" },
  { name: "#ejs", color: "bg-pink-500/20 text-pink-400 border-pink-400/30" },
  { name: "#html", color: "bg-orange-600/20 text-orange-400 border-orange-400/30" },
  { name: "#css", color: "bg-blue-600/20 text-blue-400 border-blue-400/30" },
  { name: "#sass", color: "bg-pink-600/20 text-pink-400 border-pink-400/30" },
  { name: "#bootstrap", color: "bg-purple-600/20 text-purple-400 border-purple-400/30" },
  { name: "#tailwind", color: "bg-cyan-500/20 text-cyan-400 border-cyan-400/30" },
  { name: "#git", color: "bg-red-600/20 text-red-400 border-red-400/30" },
  { name: "#github", color: "bg-gray-600/20 text-gray-400 border-gray-400/30" },
  { name: "#aws", color: "bg-yellow-600/20 text-yellow-400 border-yellow-400/30" },
  { name: "#terminal", color: "bg-green-600/20 text-green-400 border-green-400/30" },
  { name: "#adobeXD", color: "bg-purple-700/20 text-purple-400 border-purple-400/30" },
  { name: "#figma", color: "bg-indigo-500/20 text-indigo-400 border-indigo-400/30" }
];

const stacks = [
  { name: "MongoDB", color: "text-green-500", icon: "🍃", bgColor: "bg-green-500/10" },
  { name: "Express.js", color: "text-yellow-500", icon: "⚡", bgColor: "bg-yellow-500/10" },
  { name: "React.js", color: "text-blue-500", icon: "⚛️", bgColor: "bg-blue-500/10" },
  { name: "Node.js", color: "text-green-400", icon: "🟢", bgColor: "bg-green-400/10" }
];

const personalStats = [
  { icon: Coffee, label: "Lines of Code", value: "50,000+", color: "text-orange-400" },
  { icon: Rocket, label: "Projects Completed", value: "10+", color: "text-blue-400" },
  { icon: Heart, label: "Happy Clients", value: "15+", color: "text-red-400" },
  { icon: Star, label: "Years Experience", value: "1.5+", color: "text-yellow-400" }
];

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const scrollToContact = () => {
    onClose(); // Close the modal first
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 300); // Small delay to allow modal to close
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-7xl max-h-[95vh] w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] overflow-y-auto bg-gradient-to-br from-gray-900/95 via-black/90 to-gray-900/95 backdrop-blur-2xl border-2 border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl [&>button]:hidden"
      >
        
        {/* Animated Background Effects */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl sm:rounded-3xl">
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: `linear-gradient(45deg, 
                  ${i % 4 === 0 ? 'rgba(59, 130, 246, 0.6)' : 
                    i % 4 === 1 ? 'rgba(168, 85, 247, 0.6)' : 
                    i % 4 === 2 ? 'rgba(236, 72, 153, 0.6)' :
                    'rgba(34, 197, 94, 0.6)'})`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: 'blur(1px)',
                boxShadow: `0 0 20px ${i % 4 === 0 ? 'rgba(59, 130, 246, 0.4)' : 
                  i % 4 === 1 ? 'rgba(168, 85, 247, 0.4)' : 
                  i % 4 === 2 ? 'rgba(236, 72, 153, 0.4)' :
                  'rgba(34, 197, 94, 0.4)'}`
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 30 - 15, 0],
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1
              }}
            />
          ))}

          {/* Grid Lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent h-px top-1/4"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent h-px top-2/4"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent h-px top-3/4"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-transparent w-px left-1/4"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent w-px left-3/4"></div>
          </div>
        </div>

        {/* Header */}
        <DialogHeader className="relative z-10 pb-6 border-b border-white/10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between"
          >
            <DialogTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              ABOUT ME
            </DialogTitle>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-3 hover:bg-white/10 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20"
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>
          </motion.div>
        </DialogHeader>

        <div className="relative z-10 p-4 sm:p-6 lg:p-8">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-8 lg:mb-12">
            
            {/* Left Column - Photo & Stats */}
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 lg:space-y-8 flex flex-col items-center lg:items-start"
            >
              {/* Professional Photo */}
              <div className="relative flex justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="relative inline-block"
                >
                  {/* Glowing Rings */}
                  <div className="absolute inset-0 rounded-full animate-spin-slow">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-30 blur-xl scale-110"></div>
                  </div>
                  <div className="absolute inset-0 rounded-full animate-spin-slower">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-primary to-accent opacity-20 blur-2xl scale-125"></div>
                  </div>
                  
                  {/* Photo Frame */}
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-primary via-accent to-primary p-2 bg-gradient-to-br from-primary/20 to-accent/20">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                      <img 
                        src={aboutMeImg}
                        alt="Rushil - Full Stack Developer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Floating Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1, type: "spring", stiffness: 200 }}
                    className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold shadow-2xl text-sm sm:text-base"
                    style={{
                      boxShadow: '0 0 40px rgba(52, 211, 153, 0.6), 0 0 80px rgba(6, 182, 212, 0.4)'
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <Code className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="hidden sm:inline">Full Stack Developer</span>
                      <span className="sm:hidden">Dev</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Personal Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-md">
                {personalStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-xl p-3 sm:p-4 border border-white/20 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className={`p-1.5 sm:p-2 rounded-lg ${stat.color.replace('text-', 'bg-').replace('-400', '-400/20')}`}>
                        <stat.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${stat.color}`} />
                      </div>
                      <div>
                        <p className="text-lg sm:text-2xl font-bold text-white">{stat.value}</p>
                        <p className="text-xs sm:text-sm text-white/70">{stat.label}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Description */}
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 lg:space-y-8"
            >
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/20"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  className="mb-4 sm:mb-6"
                >
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full px-3 sm:px-4 py-2 border border-primary/30">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    <span className="text-primary font-mono text-xs sm:text-sm">✨ Passionate Developer</span>
                  </div>
                </motion.div>
                
                <motion.h3 
                  className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  Crafting Digital Experiences That Matter
                </motion.h3>
                
                <motion.p 
                  className="text-white/90 leading-relaxed text-sm sm:text-base lg:text-lg mb-4 sm:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  I help business owners and busy web developers to design & develop creative websites 
                  that fits their vision and attracts the visitors to stay forever. With a passion for 
                  clean code and beautiful design, I create digital experiences that not only look 
                  amazing but also deliver exceptional performance.
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-2 sm:gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                >
                  <div className="flex items-center space-x-2 bg-blue-500/20 text-blue-400 px-2 sm:px-3 py-1 rounded-full border border-blue-400/30">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                    <span className="text-xs sm:text-sm">Frontend Specialist</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-green-500/20 text-green-400 px-2 sm:px-3 py-1 rounded-full border border-green-400/30">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-xs sm:text-sm">Backend Expert</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-purple-500/20 text-purple-400 px-2 sm:px-3 py-1 rounded-full border border-purple-400/30">
                    <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                    <span className="text-xs sm:text-sm">UI/UX Designer</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          
          

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="text-center bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-2xl p-8 border border-primary/30"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.7, type: "spring", stiffness: 200 }}
              className="mb-4"
            >
              <Rocket className="w-12 h-12 text-primary mx-auto mb-4" />
            </motion.div>
            
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Let's collaborate and bring your vision to life with cutting-edge technologies and creative solutions.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)'
              }}
            >
              Let's Work Together
            </motion.button>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}