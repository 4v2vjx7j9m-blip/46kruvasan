import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

const PHONE = '05525904646';
const PHONE_DISPLAY = '0552 590 46 46';
const WHATSAPP_URL = `https://wa.me/905525904646`;
const INSTAGRAM = 'https://www.instagram.com/46kruvasan?igsh=Z2Rnd3pkd3o0eHJl';
const MAPS = 'https://maps.app.goo.gl/qsZniqGsN16ru7TAA';

export default function LocationSection() {
  return (
    <section id="iletisim" style={{ background: '#1C0F00' }} className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ fontFamily: 'var(--font-body)', color: '#C8922A', letterSpacing: '0.3em' }}>
            — Bizi Bulun —
          </p>
          <h2 className="text-4xl mb-2" style={{ fontFamily: 'var(--font-display)', color: '#FBF7F0', fontWeight: 700 }}>
            Konum & İletişim
          </h2>
          <div className="w-12 h-0.5 mx-auto mt-3" style={{ background: '#C8922A' }} />
        </div>

        {/* Map embed */}
        <div className="rounded-3xl overflow-hidden mb-8" style={{ height: '280px' }}>
          <iframe
            src="https://maps.google.com/maps?q=46+kruvasan+malatya&output=embed&z=16"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'sepia(20%) contrast(90%)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="46KRUVASAN Konum"
          />
        </div>

        {/* Google Maps button */}
        <a
          href={MAPS}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl mb-8 transition-all active:scale-95"
          style={{ background: 'rgba(200,146,42,0.15)', border: '1px solid rgba(200,146,42,0.3)', color: '#D4A843', fontFamily: 'var(--font-body)', fontWeight: 600 }}
        >
          <MapPin className="w-5 h-5" />
          Google Maps'te Yol Tarifi Al
        </a>

        {/* Contact info cards */}
        <div className="grid grid-cols-1 gap-3 mb-8">
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-4 p-4 rounded-2xl transition-all active:scale-98"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(200,146,42,0.15)' }}>
              <Phone className="w-5 h-5" style={{ color: '#C8922A' }} />
            </div>
            <div>
              <p className="text-xs mb-0.5" style={{ fontFamily: 'var(--font-body)', color: '#7A5A3C' }}>Telefon</p>
              <p style={{ fontFamily: 'var(--font-body)', color: '#FBF7F0', fontWeight: 500 }}>{PHONE_DISPLAY}</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-4 rounded-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(200,146,42,0.15)' }}>
              <MapPin className="w-5 h-5" style={{ color: '#C8922A' }} />
            </div>
            <div>
              <p className="text-xs mb-0.5" style={{ fontFamily: 'var(--font-body)', color: '#7A5A3C' }}>Adres</p>
              <p style={{ fontFamily: 'var(--font-body)', color: '#FBF7F0', fontWeight: 500 }}>Malatya, Türkiye</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(200,146,42,0.15)' }}>
              <Clock className="w-5 h-5" style={{ color: '#C8922A' }} />
            </div>
            <div>
              <p className="text-xs mb-0.5" style={{ fontFamily: 'var(--font-body)', color: '#7A5A3C' }}>Çalışma Saatleri</p>
              <p style={{ fontFamily: 'var(--font-body)', color: '#FBF7F0', fontWeight: 500 }}>Her gün açık</p>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="grid grid-cols-2 gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl transition-all active:scale-95"
            style={{ background: '#25D366', color: '#fff', fontFamily: 'var(--font-body)', fontWeight: 600 }}
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl transition-all active:scale-95"
            style={{ background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)', color: '#fff', fontFamily: 'var(--font-body)', fontWeight: 600 }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
