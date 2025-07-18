import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useState, useEffect } from 'react';

// Import project images
import project1Image from '@/assets/Project -1.png';
import project2Image from '@/assets/Project -2.png';

// Import tech stack images
import nodeIcon from '@/assets/Node.js.png';
import pythonIcon from '@/assets/python.png';
import postgresIcon from '@/assets/postgre.png';
import databaseIcon from '@/assets/database.png';
import canvaIcon from '@/assets/icons8-canva-144.png';
import chatgptIcon from '@/assets/icons8-chatgpt-100.png';
import firebaseIcon from '@/assets/icons8-firebase-96.png';
import framerIcon from '@/assets/icons8-framer-96.png';
import geminiIcon from '@/assets/icons8-gemini-ai-144.png';
import copilotIcon from '@/assets/icons8-microsoft-copilot-144.png';
import photoshopIcon from '@/assets/icons8-photoshop-188.png';
import springBootIcon from '@/assets/icons8-spring-boot-144.png';

// Import credential images
import advancedJavaImg from '@/Creaditionals/Advanced JAVA.jpg';
import cBootcampImg from '@/Creaditionals/C Programming Boot Camp.jpg';
import cProgrammingImg from '@/Creaditionals/C Programming.jpg';
import coreJavaImg from '@/Creaditionals/Core JAVA.jpg';
import cppProgrammingImg from '@/Creaditionals/CPP Programming.jpg';
import htmlImg from '@/Creaditionals/HTML.jpg';
import javaInternshipImg from '@/Creaditionals/JAVA InternShip.jpg';
import javascriptImg from '@/Creaditionals/Java Script.jpg';
import masterPythonImg from '@/Creaditionals/Master In Python.jpg';
import oracleAIImg from '@/Creaditionals/Oracle AI Professional.jpg';
import oracleDBImg from '@/Creaditionals/Oracle DB Professional.jpg';
import oracleSQLImg from '@/Creaditionals/Oracle SQL.jpg';

const projects = [
  {
    id: 1,
    title: "Ayurveda AI Chatbot",
    subtitle: "(Ancient Healing Meets Smart Technology)",
    description: "Ayurvedic AI Chatbot is a smart virtual assistant designed to provide users with Ayurvedic remedies and wellness recommendations.",
    image: project1Image,
    technologies: ["#reactjs", "#javascript", "#axios", "#html", "#tailwindcss", "#django", "#django-rest-framework", "#firebase"],
    liveUrl: "https://ayurvanectorai.netlify.app/",
    githubUrl: "https://github.com/Rushilchauhan45/Ayurvedic_Ai_Chatbot"
  },
  {
    id: 2,
    title: "ReWear – Community Clothing Exchange",
    subtitle: "(Sustainable Fashion Starts in Your Neighborhood)",
    description: "The goal is to promote sustainable fashion and significantly reduce textile waste by encouraging people to reuse wearable garments instead of discarding them.",
    image: project2Image, 
    technologies: ["#reactjs", "#nodejs", "#expressjs", "#mongoDB", "#logistics-api", "#tracking", "#responsive-design"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

// Credentials data for 3D showcase
const credentials = [
  { id: 1, title: "Advanced JAVA", image: advancedJavaImg, category: "Programming" },
  { id: 2, title: "C Programming Boot Camp", image: cBootcampImg, category: "Programming" },
  { id: 3, title: "C Programming", image: cProgrammingImg, category: "Programming" },
  { id: 4, title: "Core JAVA", image: coreJavaImg, category: "Programming" },
  { id: 5, title: "CPP Programming", image: cppProgrammingImg, category: "Programming" },
  { id: 6, title: "HTML", image: htmlImg, category: "Web Development" },
  { id: 7, title: "JAVA Internship", image: javaInternshipImg, category: "Experience" },
  { id: 8, title: "JavaScript", image: javascriptImg, category: "Web Development" },
  { id: 9, title: "Master In Python", image: masterPythonImg, category: "Programming" },
  { id: 10, title: "Oracle AI Professional", image: oracleAIImg, category: "AI & ML" },
  { id: 11, title: "Oracle DB Professional", image: oracleDBImg, category: "Database" },
  { id: 12, title: "Oracle SQL", image: oracleSQLImg, category: "Database" }
];

// Tech stack icons array
const techStackIcons = [
  { name: 'Node.js', icon: nodeIcon },
  { name: 'Python', icon: pythonIcon },
  { name: 'PostgreSQL', icon: postgresIcon },
  { name: 'Database', icon: databaseIcon },
  { name: 'Canva', icon: canvaIcon },
  { name: 'ChatGPT', icon: chatgptIcon },
  { name: 'Firebase', icon: firebaseIcon },
  { name: 'Framer', icon: framerIcon },
  { name: 'Gemini AI', icon: geminiIcon },
  { name: 'Microsoft Copilot', icon: copilotIcon },
  { name: 'Photoshop', icon: photoshopIcon },
  { name: 'Spring Boot', icon: springBootIcon }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Credentials Carousel Component
const CredentialsCarousel = ({ credentials }: { credentials: Array<{ id: number; title: string; image: string; category: string; }> }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % credentials.length);
    }, 5000); // Change credential every 5 seconds

    return () => clearInterval(interval);
  }, [credentials.length]);

  const handleCredentialClick = (index: number) => {
    setCurrentIndex(index);
  };

  const getPrevIndex = () => {
    return currentIndex === 0 ? credentials.length - 1 : currentIndex - 1;
  };

  const getNextIndex = () => {
    return currentIndex === credentials.length - 1 ? 0 : currentIndex + 1;
  };

  const prevIndex = getPrevIndex();
  const nextIndex = getNextIndex();

  return (
    <div className="relative perspective-1000 overflow-hidden">
      <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] mx-auto max-w-6xl">
        {/* Background Gradient */}
        <div className="absolute top-[50px] bottom-[50px] left-0 right-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-3xl blur-3xl"></div>
        
        {/* Credentials Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            
            {/* Previous Credential (Left Side) */}
            <motion.div
              key={`prev-${prevIndex}`}
              initial={{ opacity: 0, x: -100, scale: 0.8 }}
              animate={{ opacity: 0.3, x: -200, scale: 0.7, rotateY: 15 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              onClick={() => handleCredentialClick(prevIndex)}
              className="absolute cursor-pointer group z-10"
              style={{
                transform: `translateX(-200px) scale(0.7) rotateY(15deg)`,
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="relative w-64 h-48 md:w-72 md:h-56 rounded-2xl overflow-hidden shadow-xl border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300 bg-gradient-to-br from-gray-900 to-gray-800">
                <img 
                  src={credentials[prevIndex].image} 
                  alt={credentials[prevIndex].title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h4 className="font-bold text-sm leading-tight mb-1">
                    {credentials[prevIndex].title}
                  </h4>
                  <p className="text-xs text-gray-300">
                    {credentials[prevIndex].category}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Current Credential (Center) */}
            <motion.div
              key={`current-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-20 cursor-pointer group"
              style={{
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="relative w-80 h-60 md:w-96 md:h-72 lg:w-[420px] lg:h-80 rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/40 group-hover:border-primary/60 transition-all duration-300 bg-gradient-to-br from-gray-900 to-gray-800">
                <img 
                  src={credentials[currentIndex].image} 
                  alt={credentials[currentIndex].title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Certificate Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-bold text-base md:text-lg leading-tight mb-2">
                    {credentials[currentIndex].title}
                  </h4>
                  <p className="text-sm md:text-base text-gray-300">
                    {credentials[currentIndex].category}
                  </p>
                </div>
                
                {/* Holographic Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/30 to-accent/20 opacity-60 blur-sm"></div>
              </div>
            </motion.div>

            {/* Next Credential (Right Side) */}
            <motion.div
              key={`next-${nextIndex}`}
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 0.3, x: 200, scale: 0.7, rotateY: -15 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              onClick={() => handleCredentialClick(nextIndex)}
              className="absolute cursor-pointer group z-10"
              style={{
                transform: `translateX(200px) scale(0.7) rotateY(-15deg)`,
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="relative w-64 h-48 md:w-72 md:h-56 rounded-2xl overflow-hidden shadow-xl border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300 bg-gradient-to-br from-gray-900 to-gray-800">
                <img 
                  src={credentials[nextIndex].image} 
                  alt={credentials[nextIndex].title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h4 className="font-bold text-sm leading-tight mb-1">
                    {credentials[nextIndex].title}
                  </h4>
                  <p className="text-xs text-gray-300">
                    {credentials[nextIndex].category}
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        {/* Indicator Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {credentials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleCredentialClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="hero-text">Latest Works</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated selection of my recent projects across various industries and technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16 lg:space-y-20"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-8 lg:gap-12`}
            >
              {/* Connection Line */}
              <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-y-1/2 pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className={`w-24 ${index % 2 === 0 ? '-translate-x-12' : 'translate-x-12'}`}
                >
                  <svg width="100%" height="4" className="overflow-visible">
                    <motion.path
                      d={`M ${index % 2 === 0 ? '0' : '100'} 2 L ${index % 2 === 0 ? '100' : '0'} 2`}
                      stroke="url(#gradient-line)"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                    <defs>
                      <linearGradient id="gradient-line" x1="0" y1="0" x2="100%" y2="0">
                        <stop offset="0%" stopColor="var(--primary)" />
                        <stop offset="100%" stopColor="var(--accent)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent"
                    style={{ 
                      left: index % 2 === 0 ? '0' : 'auto',
                      right: index % 2 === 0 ? 'auto' : '0'
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                </motion.div>
              </div>

              {/* Project Showcase */}
              <div className="w-full lg:w-1/2 relative px-4 sm:px-8 lg:px-12 py-8 lg:py-12">
                {/* Floating Title Card */}
                

                {/* Project Image with Device Frame */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="relative"
                  >
                    <div className="device-frame bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-2 shadow-2xl">
                      <div className="device-screen rounded-xl overflow-hidden border border-gray-700/50 relative group">
                        <img
                            
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-opacity duration-300 group-hover:opacity-50"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-orange-500/90 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl flex items-center gap-2 shadow-lg hover:bg-orange-600/90 transition-colors text-sm sm:text-base"
                          >
                            <span className="text-white font-bold">Live Demo</span>
                            <ExternalLink className="w-4 h-4 text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8">
                <Card className="card-glow p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <span className="text-white font-bold">{project.title}</span>
                        <p className="text-primary font-medium mb-4">
                          {project.subtitle}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, idx) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ 
                              delay: 0.1 * idx,
                              duration: 0.3,
                              type: "spring",
                              stiffness: 300
                            }}
                            className="relative group"
                          >
                            {/* Glowing background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                            
                            {/* Main badge */}
                            <span className="relative block px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-primary/15 to-accent/15 text-primary border border-primary/30 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm group-hover:shadow-lg group-hover:shadow-primary/20">
                              {tech}
                              
                              {/* Shimmer effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out rounded-full"></div>
                            </span>
                            
                            {/* Floating particles */}
                            <div className="absolute inset-0 pointer-events-none">
                              <motion.div
                                className="absolute w-0.5 h-0.5 bg-primary rounded-full"
                                style={{ 
                                  top: '10%', 
                                  right: '15%',
                                }}
                                animate={{
                                  scale: [0, 1, 0],
                                  opacity: [0, 1, 0],
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: idx * 0.2,
                                }}
                              />
                              <motion.div
                                className="absolute w-0.5 h-0.5 bg-accent rounded-full"
                                style={{ 
                                  bottom: '15%', 
                                  left: '10%',
                                }}
                                animate={{
                                  scale: [0, 1, 0],
                                  opacity: [0, 1, 0],
                                }}
                                transition={{
                                  duration: 1.8,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                  delay: idx * 0.3,
                                }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Project Links */}
                      <div className="flex gap-4 mt-6">
                        <Button
                          variant="default"
                          className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80"
                          asChild
                        >
                          
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center mt-16"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-white px-8 py-6 text-lg rounded-xl font-space font-medium group"
          >
            View More Projects
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 overflow-hidden"
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="text-4xl md:text-5xl font-bold mb-4 font-space"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-primary/90 via-accent/90 to-primary/90 bg-clip-text text-transparent">
                Technologies & Tools
              </span>
            </motion.h3>
            
            {/* Enhanced animated underline */}
            <motion.div className="relative mx-auto mb-6 flex items-center justify-center">
              <motion.div 
                className="h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full shadow-lg shadow-primary/30"
                initial={{ width: 0 }}
                whileInView={{ width: 120 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              
              {/* Glowing orbs on the line */}
              <motion.div
                className="absolute left-0 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/50"
                initial={{ x: -6, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                animate={{
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 10px hsl(var(--primary))",
                    "0 0 20px hsl(var(--primary))",
                    "0 0 10px hsl(var(--primary))"
                  ],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />
              
              <motion.div
                className="absolute right-0 w-3 h-3 bg-accent rounded-full shadow-lg shadow-accent/50"
                initial={{ x: 6, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                animate={{
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 10px hsl(var(--accent))",
                    "0 0 20px hsl(var(--accent))",
                    "0 0 10px hsl(var(--accent))"
                  ],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }
                }}
              />
            </motion.div>
            
            {/* Enhanced subtitle */}
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto relative font-space"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="relative">
                Crafting digital experiences with cutting-edge technologies
                
                {/* Subtle highlight effect */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-md -z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                />
              </span>
            </motion.p>
          </motion.div>
          
          <div className="relative">
            {/* Gradient overlays for seamless effect */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10"></div>
            
            <div className="flex animate-marquee space-x-8 hover:pause">
              {[...techStackIcons, ...techStackIcons].map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 relative group"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glowing background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-110"></div>
                  
                  {/* Main container */}
                  <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-center border border-primary/10 group-hover:border-primary/30 transition-all duration-300 shadow-lg group-hover:shadow-primary/20">
                    <motion.img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                      <div className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
                        {tech.name}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-primary/90"></div>
                      </div>
                    </div>
                    
                    {/* Sparkle effect */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-2 right-2 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 animate-pulse" style={{ animationDelay: '0s' }}></div>
                      <div className="absolute bottom-2 left-2 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="absolute top-1/2 left-1 w-0.5 h-0.5 bg-accent/80 rounded-full opacity-0 group-hover:opacity-100 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                  
                  {/* Floating particles */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                    <motion.div
                      className="absolute w-1 h-1 bg-primary/60 rounded-full"
                      style={{ 
                        top: '20%', 
                        left: '10%',
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute w-1 h-1 bg-accent/60 rounded-full"
                      style={{ 
                        bottom: '20%', 
                        right: '15%',
                      }}
                      animate={{
                        y: [0, 10, 0],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3D Credentials Carousel Section */}
        <motion.div
          id="credentials"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-32 relative"
        >
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="text-4xl md:text-5xl font-bold mb-4 font-space"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-primary/90 via-accent/90 to-primary/90 bg-clip-text text-transparent">
                Certifications & Credentials
              </span>
            </motion.h3>
            
            <motion.div className="relative mx-auto mb-6 flex items-center justify-center">
              <motion.div 
                className="h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full shadow-lg shadow-primary/30"
                initial={{ width: 0 }}
                whileInView={{ width: 120 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.div>
            
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl mx-auto font-space"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Showcasing my professional achievements and technical expertise
            </motion.p>
          </motion.div>

          <CredentialsCarousel credentials={credentials} />

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="text-3xl md:text-4xl font-bold text-primary mb-2"
              >
                12+
              </motion.div>
              <p className="text-muted-foreground font-medium">Certifications</p>
            </div>
            
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="text-3xl md:text-4xl font-bold text-primary mb-2"
              >
                5+
              </motion.div>
              <p className="text-muted-foreground font-medium">Technologies</p>
            </div>
            
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.6 }}
                className="text-3xl md:text-4xl font-bold text-primary mb-2"
              >
                100%
              </motion.div>
              <p className="text-muted-foreground font-medium">Verified</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}