import { SITE_CONFIG } from './config';
import Hero from './components/Hero';
import SaveTheDate from './components/SaveTheDate';
import PhotoCarousel from './components/PhotoCarousel';
import TheirStory from './components/TheirStory';
import Footer from './components/Footer';

export default function App() {
  const { phase } = SITE_CONFIG;

  return (
    <main className="min-h-screen">
      <Hero />
      {phase < 3 && <SaveTheDate />}
      <PhotoCarousel />
      <TheirStory />
      <Footer />
    </main>
  );
}
