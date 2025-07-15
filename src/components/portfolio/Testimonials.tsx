import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    id: 1,
    name: "Gautham Chengappa",
    role: "Web Developer, UX Consultancy",
    content: "I can bet that it's too hard to find professional developers like Anurag. He could peek inside my mind and made the site exactly as I wanted. Much appreciated",
    rating: 5,
    avatar: "/lovable-uploads/133b3577-31ac-4298-84da-7f2666327da4.png" // Using uploaded testimonial image as reference
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Manager, TechCorp",
    content: "Outstanding work on our e-commerce platform. The attention to detail and performance optimization exceeded our expectations. Highly recommend!",
    rating: 5,
    avatar: "/api/placeholder/80/80"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Startup Founder",
    content: "Pushkar transformed our ideas into a beautiful, functional website. His expertise in both frontend and backend development is impressive.",
    rating: 5,
    avatar: "/api/placeholder/80/80"
  }
];

const stats = [
  { number: "50+", label: "Happy Clients" },
  { number: "100%", label: "Satisfaction Rate" },
  { number: "5.0", label: "Average Rating" }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="hero-text">What my clients are saying?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about their experience working with me.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="card-glow p-8 md:p-12">
                  <CardContent className="p-0 text-center">
                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="relative mb-8">
                      <Quote className="absolute -top-4 -left-4 w-8 h-8 text-primary/30" />
                      <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed px-8">
                        "{testimonials[currentIndex].content}"
                      </p>
                    </div>

                    {/* Client Info */}
                    <div className="flex items-center justify-center space-x-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={testimonials[currentIndex].avatar} />
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {testimonials[currentIndex].name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <h4 className="font-semibold text-primary glow-text">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="rounded-full w-12 h-12 p-0"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Indicators */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'bg-primary scale-110' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="rounded-full w-12 h-12 p-0"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-muted-foreground/20 h-1 rounded-full mt-4 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 rounded-full"
                style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="card-glow p-6 text-center">
              <CardContent className="p-0">
                <h3 className="text-3xl md:text-4xl font-bold text-primary glow-text mb-2">
                  {stat.number}
                </h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}