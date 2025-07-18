import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote, Play, Pause, Heart, ThumbsUp } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Import client images
import gauthamImage from '@/testimonials/Gautham Chengappa.jpeg';
import sarahImage from '@/testimonials/Sarah Johnson.jpeg';
import michaelImage from '@/testimonials/Michael Chen.jpeg';
import emilyImage from '@/testimonials/Emily Rodriguez.jpeg';
import davidImage from '@/testimonials/David Kim.jpeg';
import lisaImage from '@/testimonials/Lisa Thompson.jpeg';

const testimonials = [
  {
    id: 1,
    name: "Gautham Chengappa",
    role: "Web Developer, UX Consultancy",
    company: "UX Consultancy",
    content: "Exceptional developer who perfectly understood our vision. Delivered exactly what we needed with outstanding quality.",
    avatar: gauthamImage,
    bgColor: "from-blue-500/20 to-purple-500/20",
    accentColor: "text-blue-400"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content: "Outstanding work on our e-commerce platform. Performance optimization exceeded expectations. Highly recommend!",
    avatar: sarahImage,
    bgColor: "from-green-500/20 to-teal-500/20",
    accentColor: "text-green-400"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Startup Founder",
    company: "InnovateTech",
    content: "Transformed our ideas into a beautiful, functional website. Impressive full-stack expertise and execution.",
    avatar: michaelImage,
    bgColor: "from-orange-500/20 to-red-500/20",
    accentColor: "text-orange-400"
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Creative Director",
    company: "Design Studio",
    content: "Exceptional attention to animation details and user interactions. Brought our creative vision to life flawlessly.",
    avatar: emilyImage,
    bgColor: "from-pink-500/20 to-purple-500/20",
    accentColor: "text-pink-400"
  },
  {
    id: 5,
    name: "David Kim",
    role: "CTO",
    company: "AI Solutions Inc",
    content: "Outstanding AI integration and modern web development skills. Excellent problem-solving and technical expertise.",
    avatar: davidImage,
    bgColor: "from-cyan-500/20 to-blue-500/20",
    accentColor: "text-cyan-400"
  },
  {
    id: 6,
    name: "Lisa Thompson",
    role: "Marketing Director",
    company: "E-commerce Giant",
    content: "Game-changer for our online presence. Perfect blend of UX and technical performance. 40% conversion increase!",
    avatar: lisaImage,
    bgColor: "from-violet-500/20 to-indigo-500/20",
    accentColor: "text-violet-400"
  }
];

const stats = [
  { number: "50+", label: "Happy Clients", icon: Heart, color: "text-red-400" },
  { number: "100%", label: "Satisfaction Rate", icon: ThumbsUp, color: "text-green-400" },
  { number: "4.9", label: "Average Rating", icon: Quote, color: "text-yellow-400" }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-full px-6 py-3 border border-primary/30">
              <span className="text-primary font-mono text-sm">💬 Client Reviews</span>
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="hero-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              What my clients are saying?
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about their experience working with me.
          </p>
        </motion.div>

        {/* Enhanced Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Professional Testimonial Card */}
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                  className="relative bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/10 hover:border-primary/30 transition-all duration-300 group hover:shadow-2xl hover:shadow-primary/20"
                >
                  {/* Content Layout */}
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    
                    {/* Profile Section */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="flex-shrink-0 text-center md:text-left"
                    >
                      {/* Profile Image */}
                      <div className="relative mb-6 inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 scale-110"></div>
                        <Avatar className="relative w-24 h-24 md:w-28 md:h-28 shadow-lg border-2 border-white/20 group-hover:border-primary/40 transition-all duration-300">
                          <AvatarImage src={currentTestimonial.avatar} className="object-cover" />
                          <AvatarFallback className="bg-gradient-to-br from-primary/30 to-accent/30 text-white text-2xl font-bold">
                            {currentTestimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                      </div>

                      {/* Client Info */}
                      <div className="space-y-2">
                        <h4 className="font-bold text-xl md:text-2xl text-white group-hover:text-primary transition-colors duration-300">
                          {currentTestimonial.name}
                        </h4>
                        <p className="text-primary font-medium text-lg">
                          {currentTestimonial.role}
                        </p>
                        <p className="text-muted-foreground text-base">
                          {currentTestimonial.company}
                        </p>
                      </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="flex-1 relative"
                    >
                      {/* Quote Icon */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                        className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg opacity-70 group-hover:opacity-100 transition-all duration-300"
                      >
                        <Quote className="w-4 h-4 text-white" />
                      </motion.div>
                      
                      {/* Message */}
                      <div className="pl-6 relative">
                        <motion.p 
                          className="text-muted-foreground text-lg md:text-xl leading-relaxed group-hover:text-white transition-colors duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5, duration: 0.8 }}
                        >
                          "{currentTestimonial.content}"
                        </motion.p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Subtle Hover Effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Enhanced Navigation */}
            <div className="flex justify-center items-center space-x-6 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="rounded-full w-14 h-14 p-0 border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              {/* Auto-play Control
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`p-3 rounded-full transition-all duration-300 ${
                  isAutoPlaying ? 'bg-primary/20 text-primary' : 'bg-muted/20 text-muted-foreground'
                }`}
              >
                {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </motion.button> */}

              {/* Enhanced Indicators */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentIndex 
                        ? 'bg-primary scale-110 shadow-lg shadow-primary/30' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="rounded-full w-14 h-14 p-0 border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-primary/30 group"
              >
                <ChevronRight className="w-6 h-6 group-hover:text-primary transition-colors duration-300" />
              </Button>
            </div>

            {/* Enhanced Progress Bar */}
            <div className="w-full bg-muted-foreground/20 h-2 rounded-full mt-6 overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>

        {/* Enhanced Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="card-glow p-8 text-center bg-gradient-to-br from-card/50 to-card/80 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary/20 hover:scale-105 hover:-translate-y-2">
                <CardContent className="p-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                    className={`${stat.color} mb-4 flex justify-center`}
                  >
                    <stat.icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-4xl md:text-5xl font-bold text-primary glow-text mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}