import Navigation from '@/components/portfolio/Navigation';
import Hero from '@/components/portfolio/Hero';
import Projects from '@/components/portfolio/Projects';
import Testimonials from '@/components/portfolio/Testimonials';
import Contact from '@/components/portfolio/Contact';
import SocialSidebar from '@/components/portfolio/SocialSidebar';
import Scene3D from '@/components/portfolio/Scene3D';
import ChatWidget from '@/components/portfolio/ChatWidget';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* 3D Background Scene */}
      <Scene3D />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Social Media Sidebar */}
      <SocialSidebar />
      
      {/* Chat Widget */}
      <ChatWidget />
      
      {/* Main Content */}
      <main>
        <Hero />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-xl">Portfolio</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Pushkar Modi © 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
