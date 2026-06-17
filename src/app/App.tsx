import { useState } from 'react';
import { Settings } from 'lucide-react';
import { AppProvider } from './context/AppContext';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import WholesaleSection from './components/WholesaleSection';
import ReviewsSection from './components/ReviewsSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

function AppContent() {
  const [adminOpen, setAdminOpen] = useState(false);

  return (
    <div className="relative min-h-screen" style={{ background: '#FBF7F0' }}>
      {/* Subtle admin gear button – top-right */}
      <button
        onClick={() => setAdminOpen(true)}
        className="fixed top-4 right-4 z-40 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300"
        style={{ background: 'rgba(61,26,10,0.08)', color: 'rgba(122,90,60,0.4)' }}
        aria-label="Yönetici Paneli"
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.color = 'rgba(122,90,60,0.8)';
          (e.currentTarget as HTMLButtonElement).style.background = 'rgba(61,26,10,0.15)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.color = 'rgba(122,90,60,0.4)';
          (e.currentTarget as HTMLButtonElement).style.background = 'rgba(61,26,10,0.08)';
        }}
      >
        <Settings className="w-4 h-4" />
      </button>

      {/* Sections */}
      <Hero />
      <MenuSection />
      <WholesaleSection />
      <ReviewsSection />
      <LocationSection />
      <Footer />

      {/* Admin Panel overlay */}
      {adminOpen && <AdminPanel onClose={() => setAdminOpen(false)} />}
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
