import { useRef } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

const WHATSAPP = `https://wa.me/905525904646`;

interface WholesaleProduct {
  id: string;
  name: string;
  description: string;
  images: { url: string; alt: string }[];
}

const WHOLESALE_PRODUCTS: WholesaleProduct[] = [
  {
    id: 'kruvasanlar',
    name: 'Kruvasanlar',
    description: 'Sade, çikolatalı, fıstıklı ve daha fazla çeşit. Taze günlük üretim.',
    images: [
      { url: 'https://images.unsplash.com/photo-1764606469903-358043a5dd7b?w=600&h=450&fit=crop&auto=format', alt: 'Çikolatalı kruvasanlar' },
      { url: 'https://images.unsplash.com/photo-1738824921940-02639f908ff0?w=600&h=450&fit=crop&auto=format', alt: 'Fırından çıkmış kruvasanlar' },
      { url: 'https://images.unsplash.com/photo-1753826367157-39e96b3c4bd2?w=600&h=450&fit=crop&auto=format', alt: 'Çikolatalı kruvasan tabak' },
      { url: 'https://images.unsplash.com/photo-1773027270919-8714e0af1172?w=600&h=450&fit=crop&auto=format', alt: 'Kruvasan çeşitleri' },
    ],
  },
  {
    id: 'fransiz-pastasi',
    name: 'Fransız Pastalası',
    description: '20\'den fazla çeşit Fransız pastası. Ekler, tart ve butik pastalar.',
    images: [
      { url: 'https://images.unsplash.com/photo-1711513335836-d6a138f7a340?w=600&h=450&fit=crop&auto=format', alt: 'Fransız pastası çeşitleri' },
      { url: 'https://images.unsplash.com/photo-1643733029149-f5b72338c7bf?w=600&h=450&fit=crop&auto=format', alt: 'Butik pastalar' },
      { url: 'https://images.unsplash.com/photo-1668407005362-0c86c602120c?w=600&h=450&fit=crop&auto=format', alt: 'Tatlı tabağı' },
    ],
  },
  {
    id: 'kahveler',
    name: 'Kahve & İçecekler',
    description: 'Latte, cappuccino, Türk kahvesi ve soğuk içecekler. Profesyonel ekipmanlar.',
    images: [
      { url: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&h=450&fit=crop&auto=format', alt: 'Latte art' },
      { url: 'https://images.unsplash.com/photo-1502462041640-b3d7e50d0662?w=600&h=450&fit=crop&auto=format', alt: 'Cappuccino' },
      { url: 'https://images.unsplash.com/photo-1753826366874-9cce3b23bb19?w=600&h=450&fit=crop&auto=format', alt: 'Pasta ve kahve' },
    ],
  },
  {
    id: 'simit-corek',
    name: 'Simit, Çörek & Çubuk',
    description: 'Günlük taze üretim simit, çörek ve çubuklar. KG ile satış.',
    images: [
      { url: 'https://images.unsplash.com/photo-1756365365171-597d674d27e9?w=600&h=450&fit=crop&auto=format', alt: 'Susamlı simitler' },
      { url: 'https://images.unsplash.com/photo-1521791697570-e1f13d0b81d0?w=600&h=450&fit=crop&auto=format', alt: 'Pastane ürünleri' },
      { url: 'https://images.unsplash.com/photo-1643628636292-fcf02b8042e0?w=600&h=450&fit=crop&auto=format', alt: 'Çörek çeşitleri' },
    ],
  },
];

function ProductCarousel({ product }: { product: WholesaleProduct }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const w = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({ left: dir === 'right' ? w : -w, behavior: 'smooth' });
  };

  return (
    <div className="mb-12">
      <h3 className="text-xl mb-1" style={{ fontFamily: 'var(--font-display)', color: '#D4A843', fontWeight: 600 }}>
        {product.name}
      </h3>
      <p className="text-sm mb-4" style={{ fontFamily: 'var(--font-body)', color: '#C8A882' }}>
        {product.description}
      </p>

      <div className="relative">
        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide rounded-2xl"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {product.images.map((img, i) => (
            <div key={i} className="flex-shrink-0 w-72 snap-start rounded-2xl overflow-hidden aspect-video bg-[#2A150A]">
              <ImageWithFallback
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover"
                style={{ opacity: 0.92 }}
              />
            </div>
          ))}
        </div>

        {/* Nav arrows (desktop only) */}
        <button
          onClick={() => scroll('left')}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 items-center justify-center rounded-full transition-all"
          style={{ background: 'rgba(200,146,42,0.3)', color: '#D4A843' }}
          aria-label="Önceki"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 items-center justify-center rounded-full transition-all"
          style={{ background: 'rgba(200,146,42,0.3)', color: '#D4A843' }}
          aria-label="Sonraki"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default function WholesaleSection() {
  return (
    <section id="toptan" style={{ background: '#1C0F00' }} className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ fontFamily: 'var(--font-body)', color: '#C8922A', letterSpacing: '0.3em' }}>
            — Profesyonel Tedarik —
          </p>
          <h2 className="text-4xl mb-2" style={{ fontFamily: 'var(--font-display)', color: '#FBF7F0', fontWeight: 700 }}>
            Toptan Satış
          </h2>
          <div className="w-12 h-0.5 mx-auto mt-3" style={{ background: '#C8922A' }} />
          <p className="mt-4 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: '#C8A882' }}>
            Kafeler, restoranlar ve işletmeler için toptan ürün tedariki yapıyoruz.
            Günlük taze üretim, düzenli teslimat.
          </p>
        </div>

        {/* Products */}
        {WHOLESALE_PRODUCTS.map(product => (
          <ProductCarousel key={product.id} product={product} />
        ))}

        {/* CTA */}
        <div className="text-center mt-4 p-8 rounded-3xl" style={{ background: 'rgba(200,146,42,0.08)', border: '1px solid rgba(200,146,42,0.2)' }}>
          <p className="mb-2" style={{ fontFamily: 'var(--font-display)', color: '#FBF7F0', fontSize: '1.3rem', fontWeight: 600 }}>
            Toptan Sipariş & Fiyat Bilgisi
          </p>
          <p className="text-sm mb-6" style={{ fontFamily: 'var(--font-body)', color: '#C8A882' }}>
            Ayrıntılı bilgi ve fiyat teklifi için bize ulaşın
          </p>
          <a
            href={`https://wa.me/905525904646?text=Merhaba%2C%20toptan%20sat%C4%B1%C5%9F%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl transition-all duration-300 active:scale-95"
            style={{ background: '#25D366', color: '#fff', fontFamily: 'var(--font-body)', fontWeight: 600 }}
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp ile Ulaşın
          </a>
        </div>
      </div>
    </section>
  );
}
