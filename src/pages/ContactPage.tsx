import Navigation from '@/components/portfolio/Navigation';
import Contact from '@/components/portfolio/Contact';
import SocialSidebar from '@/components/portfolio/SocialSidebar';
import Scene3D from '@/components/portfolio/Scene3D';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Scene3D />
      <Navigation />
      <SocialSidebar />
      
      <main className="pt-20">
        <Contact />
      </main>
    </div>
  );
}