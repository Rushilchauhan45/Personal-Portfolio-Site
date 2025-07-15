import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Clock, Mail, Send, Zap, User, Phone, MessageSquare, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    title: "Email Me",
    subtitle: "pushkarmodi111@gmail.com",
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
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Button
            variant="outline"
            size="sm"
            className="mb-6 border-primary/30 text-primary"
          >
            <Zap className="w-4 h-4 mr-2" />
            Let's Build Something Amazing
            <Zap className="w-4 h-4 ml-2" />
          </Button>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
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
                  <Card className="card-glow p-6">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg bg-card/50 ${info.color}`}>
                          <info.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                          <p className="text-primary font-medium mb-2">{info.subtitle}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="hidden lg:block"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center p-8">
                <img 
                  src="/lovable-uploads/a03f1e8f-03e6-4fcd-8503-101cfc3378cf.png" 
                  alt="Contact illustration"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="card-glow">
              <CardHeader>
                <CardTitle className="text-2xl glow-text">Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-primary" />
                        <span>Full Name *</span>
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="bg-input/50 border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-primary" />
                        <span>Email Address *</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-input/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* Phone and Subject */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-primary" />
                        <span>Phone Number</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        className="bg-input/50 border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="flex items-center space-x-2">
                        <MessageSquare className="w-4 h-4 text-primary" />
                        <span>Subject *</span>
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                        className="bg-input/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* Priority Level */}
                  <div className="space-y-2">
                    <Label className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-primary" />
                      <span>Priority Level</span>
                    </Label>
                    <div className="flex space-x-2">
                      {priorityLevels.map((level) => (
                        <Badge
                          key={level}
                          variant={formData.priority === level ? "default" : "outline"}
                          className={`cursor-pointer transition-colors ${
                            formData.priority === level
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-primary/10"
                          }`}
                          onClick={() => setFormData(prev => ({ ...prev, priority: level }))}
                        >
                          {level}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="flex items-center space-x-2">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      <span>Your Message *</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                      rows={6}
                      required
                      className="bg-input/50 border-border focus:border-primary resize-none"
                    />
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground">
                        {formData.message.length}/1000 characters
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-white"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                    ) : (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Zap className="w-5 h-5 ml-2" />
                  </Button>

                  {/* Privacy Notice */}
                  <p className="text-xs text-muted-foreground text-center">
                    🔒 Your information is secure and will never be shared with third parties.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}