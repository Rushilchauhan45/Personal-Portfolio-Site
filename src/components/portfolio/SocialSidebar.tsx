import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/rushil-chauhan-b50529304/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/Rushilchauhan45', label: 'GitHub' },
  { icon: Twitter, href: 'https://x.com/Rushilch_45?t=zfSraHrEnFlE1KC6BmB6Jg&s=08', label: 'Twitter' },
  { icon: Instagram, href: 'https://www.instagram.com/chnrush05/?igsh=MTM1b3N1dGpnZHNpcA%3D%3D#', label: 'Instagram' },
  { icon: Mail, href: 'mailto:chauhanrushil45@gmail.com', label: 'Email' },
];

export default function SocialSidebar() {
  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed right-6 top-[calc(50%-50px)] -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="flex flex-col space-y-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + index * 0.1 }}
            className="group relative p-3 bg-card/50 backdrop-blur-sm border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:scale-110"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            
            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-popover border border-border rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <span className="text-sm font-medium whitespace-nowrap">{social.label}</span>
            </div>
          </motion.a>
        ))}
        
        {/* Vertical Line */}
        <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent mx-auto"></div>
      </div>
    </motion.div>
  );
}