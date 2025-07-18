import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Instagram } from 'lucide-react';
import Navigation from '@/components/portfolio/Navigation';
import Hero from '@/components/portfolio/Hero';
import Projects from '@/components/portfolio/Projects';
import Testimonials from '@/components/portfolio/Testimonials';
import Contact from '@/components/portfolio/Contact';
import SocialSidebar from '@/components/portfolio/SocialSidebar';
import Scene3D from '@/components/portfolio/Scene3D';
// import ChatWidget from '@/components/portfolio/ChatWidget';
import CustomCursor from '@/components/ui/CustomCursor';
import AboutModal from '@/components/portfolio/AboutModal';

const Index = () => {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleQuickLinkClick = (linkName: string) => {
    switch (linkName) {
      case 'About':
        setIsAboutModalOpen(true);
        break;
      case 'Home':
        scrollToSection('home');
        break;
      case 'Projects':
        scrollToSection('projects');
        break;
      case 'Credentials':
        scrollToSection('credentials');
        break;
      case 'Testimonials':
        scrollToSection('testimonials');
        break;
      case 'Contact':
        scrollToSection('contact');
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* 3D Background Scene */}
      <Scene3D />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Social Media Sidebar */}
      <SocialSidebar />
      
      {/* Chat Widget */}
      {/* <ChatWidget /> */}
      
      {/* Main Content */}
      <main>
        <Hero />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      {/* Enhanced Footer */}
      <footer className="relative border-t border-border/50 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-lg mt-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-accent"></div>
        <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-4 sm:space-y-6 text-center md:text-left"
            >
              <div className="flex items-center justify-center md:justify-start space-x-3 sm:space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-sm animate-pulse"></div>
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30">
                    <span className="font-audiowide text-2xl sm:text-3xl text-white font-bold">R</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-audiowide text-xl sm:text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">RUSHIL CHAUHAN</span>
                  <span className="text-xs sm:text-sm text-muted-foreground tracking-wider">AI & EMERGING TECH EXPLORER</span>
                </div>
              </div>
              <p className="text-muted-foreground max-w-md leading-relaxed text-sm sm:text-base mx-auto md:mx-0">
                Passionate full-stack developer crafting innovative digital experiences with cutting-edge technologies. 
                Let's build the future together.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 items-center justify-center md:justify-start">
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary to-accent px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-white font-medium hover:shadow-lg transition-all duration-300 text-sm sm:text-base w-full sm:w-auto text-center"
                >
                  Get In Touch
                </motion.a>
                <motion.button
                  onClick={() => scrollToSection('projects')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-primary/30 px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-primary hover:bg-primary/10 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
                >
                  View Work
                </motion.button>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-lg text-primary">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: 'Home' },
                  { name: 'About' },
                  { name: 'Projects' },
                  { name: 'Credentials' },
                  { name: 'Testimonials' },
                  { name: 'Contact' }
                ].map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <button
                      onClick={() => handleQuickLinkClick(link.name)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block cursor-pointer"
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Connect Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 text-center md:text-left"
            >
              <h3 className="font-semibold text-base sm:text-lg text-primary">Connect</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-3 gap-2 sm:gap-3 justify-center md:justify-start">
                  {[
                    { icon: Github, href: 'https://github.com/Rushilchauhan45', label: 'GitHub' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/rushil-chauhan-b50529304/', label: 'LinkedIn' },
                    { icon: Twitter, href: 'https://x.com/Rushilch_45?t=zfSraHrEnFlE1KC6BmB6Jg&s=08', label: 'Twitter' },
                    { icon: Instagram, href: 'https://www.instagram.com/chnrush05/?igsh=MTM1b3N1dGpnZHNpcA%3D%3D#', label: 'Instagram' },
                    { icon: Mail, href: 'mailto:chauhanrushil45@gmail.com', label: 'Email' }
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="p-2 sm:p-3 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                    >
                      <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.a>
                  ))}
                </div>
                <div className="space-y-2 text-center md:text-left">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    📍 Available for projects worldwide
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    ⚡ Usually responds within 2-4 hours
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-8 border-t border-border/50"
          >
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Rushil Chauhan. All rights reserved.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-muted-foreground">Available for work</span>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="text-xs text-muted-foreground"
                >
                  Made with ❤️ using React & TypeScript
                </motion.span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-2 border-primary/20 border-t-primary rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* About Modal */}
      <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
    </div>
  );
};

export default Index;
