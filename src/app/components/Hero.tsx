import { motion } from 'motion/react';
import { MapPin, Phone, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

const HERO_BG = 'https://images.unsplash.com/photo-1764606469903-358043a5dd7b?w=1200&h=900&fit=crop&auto=format';

const PHONE = '05525904646';
const PHONE_DISPLAY = '0552 590 46 46';
const INSTAGRAM = 'https://www.instagram.com/46kruvasan?igsh=Z2Rnd3pkd3o0eHJl';
const YOUTUBE = 'https://m.youtube.com/@46kruvasan/shorts?ra=m';
const MAPS = 'https://maps.app.goo.gl/qsZniqGsN16ru7TAA';
const WHATSAPP = `https://wa.me/90${PHONE.slice(1)}`;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ background: '#1C0F00' }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={HERO_BG}
          alt="46KRUVASAN arka plan"
          className="w-full h-full object-cover"
          style={{ opacity: 0.25 }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(28,15,0,0.6) 0%, rgba(28,15,0,0.85) 60%, #1C0F00 100%)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 py-16 w-full max-w-md mx-auto">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-6"
        >
          {/* Croissant SVG icon */}
          <div className="w-20 h-20 mb-4 flex items-center justify-center">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <ellipse cx="50" cy="60" rx="38" ry="22" fill="#C8922A" opacity="0.15" />
              <path d="M15 55 Q20 20 50 18 Q80 20 85 55 Q70 75 50 78 Q30 75 15 55Z" fill="#C8922A" opacity="0.9"/>
              <path d="M20 50 Q25 25 50 23 Q75 25 80 50" stroke="#D4A843" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M25 58 Q30 38 50 36 Q70 38 75 58" stroke="#D4A843" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7"/>
              <path d="M30 65 Q35 52 50 50 Q65 52 70 65" stroke="#D4A843" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5"/>
              <path d="M15 55 Q12 45 18 38 Q14 48 15 55Z" fill="#B8820A"/>
              <path d="M85 55 Q88 45 82 38 Q86 48 85 55Z" fill="#B8820A"/>
            </svg>
          </div>

          <h1 className="text-5xl tracking-widest mb-1" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#D4A843', letterSpacing: '0.15em' }}>
            46
          </h1>
          <h1 className="text-3xl tracking-widest" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: '#FBF7F0', letterSpacing: '0.3em' }}>
            KRUVASAN
          </h1>
          <div className="mt-3 w-16 h-px" style={{ background: 'linear-gradient(90deg, transparent, #C8922A, transparent)' }} />
          <p className="mt-3 text-sm tracking-widest uppercase" style={{ fontFamily: 'var(--font-body)', color: '#C8A882', letterSpacing: '0.25em' }}>
            Malatya'nın En Tatlı Lezzeti
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 gap-3 w-full mt-6"
        >
          {/* WhatsApp */}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl transition-all duration-300 active:scale-95"
            style={{ background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.35)', color: '#25D366' }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="text-sm" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>WhatsApp</span>
          </a>

          {/* Instagram */}
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl transition-all duration-300 active:scale-95"
            style={{ background: 'rgba(225,48,108,0.12)', border: '1px solid rgba(225,48,108,0.35)', color: '#E1306C' }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="text-sm" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>Instagram</span>
          </a>

          {/* YouTube */}
          <a
            href={YOUTUBE}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl transition-all duration-300 active:scale-95"
            style={{ background: 'rgba(255,0,0,0.1)', border: '1px solid rgba(255,0,0,0.3)', color: '#FF4444' }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span className="text-sm" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>YouTube</span>
          </a>

          {/* Google Maps */}
          <a
            href={MAPS}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl transition-all duration-300 active:scale-95"
            style={{ background: 'rgba(200,146,42,0.15)', border: '1px solid rgba(200,146,42,0.4)', color: '#C8922A' }}
          >
            <MapPin className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm" style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}>Konum</span>
          </a>
        </motion.div>

        {/* Phone */}
        <motion.a
          href={`tel:${PHONE}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-5 flex items-center gap-2 transition-all active:scale-95"
          style={{ color: '#C8A882' }}
        >
          <Phone className="w-4 h-4" />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', letterSpacing: '0.08em' }}>{PHONE_DISPLAY}</span>
        </motion.a>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex flex-col items-center gap-1"
          style={{ color: 'rgba(200,168,130,0.5)' }}
        >
          <span className="text-xs uppercase tracking-widest" style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem' }}>Menüyü Gör</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
