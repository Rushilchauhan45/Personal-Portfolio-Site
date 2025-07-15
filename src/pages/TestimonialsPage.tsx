import Navigation from '@/components/portfolio/Navigation';
import Testimonials from '@/components/portfolio/Testimonials';
import SocialSidebar from '@/components/portfolio/SocialSidebar';
import Scene3D from '@/components/portfolio/Scene3D';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <Scene3D />
      <Navigation />
      <SocialSidebar />
      
      <main className="pt-20">
        <Testimonials />
      </main>
    </div>
  );
}