import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Geeta Sangam",
    subtitle: "(Spiritual & Religious Platform)",
    description: "A modern spiritual web platform inspired by the teachings of the Bhagavad Gita. It features the GeetaGPT Chatbot, stories, facts, quizzes, and astrology — all within a responsive, user-friendly interface. Includes secure authentication and authorization.",
    image: "/lovable-uploads/b3b6e502-d4bb-4791-b72a-5e98258807c3.png", // Using uploaded image as reference
    technologies: ["#reactjs", "#javascript", "#axios", "#html", "#tailwindcss", "#django", "#django-rest-framework", "#firebase"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Packpal Group Logistics Organizer",
    subtitle: "(Logistics & Supply Chain Management)",
    description: "A comprehensive logistics management platform designed to streamline supply chain operations and package tracking. Features real-time shipment monitoring, route optimization, and integrated communication tools for logistics teams.",
    image: "/lovable-uploads/88a2511a-30f1-4a08-9f08-14e15f795653.png", // Using uploaded image as reference
    technologies: ["#reactjs", "#nodejs", "#expressjs", "#mongoDB", "#logistics-api", "#tracking", "#responsive-design"],
    liveUrl: "#",
    githubUrl: "#"
  }
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

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="hero-text">Latest Works</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated selection of my recent projects across various industries and technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-20"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12`}
            >
              {/* Project Image */}
              <div className="lg:w-1/2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <Card className="relative card-glow overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-secondary to-muted rounded-t-xl flex items-center justify-center">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Card>
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:w-1/2">
                <Card className="card-glow p-8">
                  <CardContent className="p-0">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 glow-text">
                          {project.title}
                        </h3>
                        <p className="text-primary font-medium mb-4">
                          {project.subtitle}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-primary/30 text-primary hover:bg-primary/10"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Project Links */}
                      <div className="flex gap-4">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button variant="outline" size="sm">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}