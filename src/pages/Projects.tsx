import Navigation from '@/components/portfolio/Navigation';
import Projects from '@/components/portfolio/Projects';
import SocialSidebar from '@/components/portfolio/SocialSidebar';
import Scene3D from '@/components/portfolio/Scene3D';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Scene3D />
      <Navigation />
      <SocialSidebar />
      
      <main className="pt-20">
        <Projects />
      </main>
    </div>
  );
}