import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Clock, Mail, Send, Zap, User, Phone, MessageSquare, Star, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import developerImage from '@/assets/developer-1.png';

const contactInfo = [
  {
    icon: Mail,
    title: "Email Me",
    subtitle: "chauhanrushil45@gmail.com",
    description: "Drop me a line and I'll get back to you within 24 hours.",
    color: "text-blue-500"
  },
  {
    icon: Clock,
    title: "Response Time",
    subtitle: "Usually within 2-4 hours",
    description: "Quick turnaround time for all inquiries and project discussions.",
    color: "text-purple-500"
  },
  {
    icon: Zap,
    title: "Project Ready",
    subtitle: "Available for new projects",
    description: "Currently accepting new client projects and collaborations.",
    color: "text-green-500"
  }
];

const priorityLevels = ["Low", "Medium", "High"];

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    priority: 'Medium',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        priority: 'Medium',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <Button
            variant="outline"
            size="sm"
            className="mb-4 sm:mb-6 border-primary/30 text-primary text-sm sm:text-base px-4 sm:px-6"
          >
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Let's Build Something Amazing
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
          </Button>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="hero-text">Get In Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Let's discuss your next project and create
            something extraordinary together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Developer Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl"></div>
                <img
                  src={developerImage}
                  alt="Developer"
                  className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl hover:rotate-360 transition-transform duration-700 ease-in-out"
                />
              </div>
            </motion.div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="card-glow p-6 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br from-gray-800/80 to-gray-700/80 backdrop-blur-sm ${info.color}`}>
                          <info.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1 text-white">{info.title}</h3>
                          <p className="text-primary font-medium mb-2">{info.subtitle}</p>
                          <p className="text-sm text-gray-300">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Spacer for better layout */}
            <div className="hidden lg:block h-8"></div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl blur-xl"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-2xl"></div>
            
            <Card className="card-glow bg-gradient-to-br from-card/95 to-card/90 backdrop-blur-sm border-2 border-white/10 shadow-2xl relative z-10">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name and Email */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="grid md:grid-cols-2 gap-6"
                  >
                    <div className="space-y-3">
                      <Label htmlFor="fullName" className="flex items-center space-x-2 text-sm font-medium">
                        <User className="w-4 h-4 text-primary" />
                        <span>Full Name *</span>
                      </Label>
                      <div className="relative">
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                          className="bg-input/50 border-2 border-border/50 focus:border-primary/80 focus:ring-2 focus:ring-primary/20 rounded-xl py-3 px-4 transition-all duration-300 hover:border-primary/50"
                        />
                        {formData.fullName && (
                          <CheckCircle className="absolute right-3 top-3 w-5 h-5 text-green-500" />
                        )}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="flex items-center space-x-2 text-sm font-medium">
                        <Mail className="w-4 h-4 text-primary" />
                        <span>Email Address *</span>
                      </Label>
                      <div className="relative">
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="bg-input/50 border-2 border-border/50 focus:border-primary/80 focus:ring-2 focus:ring-primary/20 rounded-xl py-3 px-4 transition-all duration-300 hover:border-primary/50"
                        />
                        {formData.email && formData.email.includes('@') && (
                          <CheckCircle className="absolute right-3 top-3 w-5 h-5 text-green-500" />
                        )}
                      </div>
                    </div>
                  </motion.div>

                  {/* Phone and Subject */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="grid md:grid-cols-2 gap-6"
                  >
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="flex items-center space-x-2 text-sm font-medium">
                        <Phone className="w-4 h-4 text-primary" />
                        <span>Phone Number</span>
                      </Label>
                      <div className="relative">
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 123-4567"
                          className="bg-input/50 border-2 border-border/50 focus:border-primary/80 focus:ring-2 focus:ring-primary/20 rounded-xl py-3 px-4 transition-all duration-300 hover:border-primary/50"
                        />
                        {formData.phone && (
                          <CheckCircle className="absolute right-3 top-3 w-5 h-5 text-green-500" />
                        )}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="subject" className="flex items-center space-x-2 text-sm font-medium">
                        <MessageSquare className="w-4 h-4 text-primary" />
                        <span>Subject *</span>
                      </Label>
                      <div className="relative">
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What's this about?"
                          required
                          className="bg-input/50 border-2 border-border/50 focus:border-primary/80 focus:ring-2 focus:ring-primary/20 rounded-xl py-3 px-4 transition-all duration-300 hover:border-primary/50"
                        />
                        {formData.subject && (
                          <CheckCircle className="absolute right-3 top-3 w-5 h-5 text-green-500" />
                        )}
                      </div>
                    </div>
                  </motion.div>

                  {/* Priority Level */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="space-y-3"
                  >
                    <Label className="flex items-center space-x-2 text-sm font-medium">
                      <Star className="w-4 h-4 text-primary" />
                      <span>Priority Level</span>
                    </Label>
                    <div className="flex space-x-3">
                      {priorityLevels.map((level) => (
                        <Badge
                          key={level}
                          variant={formData.priority === level ? "default" : "outline"}
                          className={`cursor-pointer transition-all duration-300 px-4 py-2 text-sm font-medium rounded-lg ${
                            formData.priority === level
                              ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg scale-105"
                              : "hover:bg-primary/10 hover:border-primary/50 hover:scale-105"
                          }`}
                          onClick={() => setFormData(prev => ({ ...prev, priority: level }))}
                        >
                          {level}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="space-y-3"
                  >
                    <Label htmlFor="message" className="flex items-center space-x-2 text-sm font-medium">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      <span>Your Message *</span>
                    </Label>
                    <div className="relative">
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                        rows={6}
                        required
                        className="bg-input/50 border-2 border-border/50 focus:border-primary/80 focus:ring-2 focus:ring-primary/20 rounded-xl py-4 px-4 resize-none transition-all duration-300 hover:border-primary/50"
                      />
                      <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                        <span className={`text-xs ${formData.message.length > 800 ? 'text-orange-400' : 'text-muted-foreground'}`}>
                          {formData.message.length}/1000
                        </span>
                        {formData.message.length > 10 && (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="pt-4"
                  >
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-3">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                          />
                          <span>Sending Message...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-3">
                          <Send className="w-6 h-6" />
                          <span>Send Message</span>
                          <Zap className="w-6 h-6" />
                        </div>
                      )}
                    </Button>
                  </motion.div>

                  {/* Privacy Notice */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="text-center pt-4"
                  >
                    <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground bg-card/50 px-4 py-2 rounded-lg border border-white/5">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>🔒 Your information is secure and encrypted</span>
                    </div>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}