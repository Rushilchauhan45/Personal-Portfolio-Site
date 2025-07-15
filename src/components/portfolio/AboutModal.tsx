import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

const technologies = [
  "#javascript", "#reactjs", "#redux", "#nodejs",
  "#expressjs", "#mongoDB", "#mongoose", "#cloudinary",
  "#ejs", "#html", "#css", "#sass", "#bootstrap",
  "#tailwind", "#git", "#github", "#aws", "#terminal",
  "#adobeXD", "#figma"
];

const stacks = [
  { name: "MongoDB", color: "text-green-500" },
  { name: "Express.js", color: "text-yellow-500" },
  { name: "React.js", color: "text-blue-500" },
  { name: "Node.js", color: "text-green-400" }
];

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader className="relative">
          <DialogTitle className="text-3xl font-bold text-primary glow-text">
            ABOUT ME
          </DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-0 top-0 p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </DialogHeader>

        <div className="grid lg:grid-cols-2 gap-8 p-6">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div>
              <p className="text-muted-foreground leading-relaxed">
                I help business owners and busy web developers to design & develop creative websites 
                that fits their vision and attracts the visitors to stay for ever. Technologies and 
                tools that I use to create such awesome websites.
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Badge
                      variant="outline"
                      className="border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* MERN Stack */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">MERN STACK</h3>
              <div className="grid grid-cols-2 gap-4">
                {stacks.map((stack, index) => (
                  <motion.div
                    key={stack.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg"
                  >
                    <div className={`w-3 h-3 rounded-full ${stack.color.replace('text-', 'bg-')}`}></div>
                    <span className={`font-medium ${stack.color}`}>{stack.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <img 
                  src="/lovable-uploads/933f8a85-8a61-4209-aa7c-b547f81d53f8.png"
                  alt="Developer illustration"
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm floating-shape">
                <span className="text-blue-500 text-lg font-bold">&lt;/&gt;</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm floating-shape" style={{ animationDelay: '2s' }}>
                <span className="text-green-500 text-lg font-bold">✓</span>
              </div>
              <div className="absolute top-1/4 -right-8 w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm floating-shape" style={{ animationDelay: '4s' }}>
                <span className="text-purple-500 text-sm font-bold">⚡</span>
              </div>
            </motion.div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}