import { motion } from 'motion/react';
import { Star } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Zeynep K.',
    avatar: 'ZK',
    rating: 5,
    date: '2 hafta önce',
    text: 'Malatya\'da böyle kaliteli bir kruvasan dükkanı beklenmezdi! Çikolatalı kruvasan muhteşem, içi tam kıvamlı ve dışı altın sarısı. Her sabah uğruyorum.',
  },
  {
    id: 2,
    name: 'Mehmet A.',
    avatar: 'MA',
    rating: 5,
    date: '1 ay önce',
    text: 'Fransız pastalarını denedim, özellikle Fıstıklı Atom\'u kesinlikle tavsiye ederim. Hem görünüşü hem tadı mükemmel. Personel de çok ilgili ve güler yüzlü.',
  },
  {
    id: 3,
    name: 'Elif Şahin',
    avatar: 'EŞ',
    rating: 5,
    date: '3 hafta önce',
    text: 'Simit ve açmaları gerçekten lezzetli. Kahvesi de çok güzel. Şehrin en iyi kahvaltı durağı haline geldi bizim için. Toptan alım da yaptık, çok memnun kaldık.',
  },
  {
    id: 4,
    name: 'Ahmet Yılmaz',
    avatar: 'AY',
    rating: 5,
    date: '1 ay önce',
    text: 'İşletmemiz için haftalık toptan kruvasan alıyoruz. Her zaman taze, her zaman aynı kalitede geliyor. Bu tutarlılık çok değerli. 46KRUVASAN\'a güveniyoruz.',
  },
  {
    id: 5,
    name: 'Seda T.',
    avatar: 'ST',
    rating: 5,
    date: '2 ay önce',
    text: 'Beyaz çikolatalı kruvasanı yiyince Paris\'i hatırladım! Gerçekten özgün bir tarif kullanıyorlar. Milkshake\'leri de enfes. Kesinlikle tekrar geleceğim.',
  },
  {
    id: 6,
    name: 'Burak Demir',
    avatar: 'BD',
    rating: 5,
    date: '3 ay önce',
    text: 'Malatya\'da böyle bir lezzet beklemiyordum. San Sebastian pastası harika. Fiyatlar kaliteye oranla çok makul. Ailem de çok beğendi, herkese tavsiye ederim.',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-3.5 h-3.5"
          fill={i < rating ? '#FBBC04' : 'none'}
          stroke={i < rating ? '#FBBC04' : '#ccc'}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-5 rounded-2xl"
      style={{ background: '#FFF8EE', border: '1px solid rgba(61,26,10,0.08)' }}
    >
      <div className="flex items-start gap-3 mb-3">
        {/* Avatar */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-xs"
          style={{ background: '#3D1A0A', color: '#D4A843', fontFamily: 'var(--font-body)', fontWeight: 700 }}
        >
          {review.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm truncate" style={{ fontFamily: 'var(--font-body)', color: '#1C0F00', fontWeight: 600 }}>
              {review.name}
            </p>
            {/* Google logo */}
            <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <StarRating rating={review.rating} />
            <span className="text-xs" style={{ color: '#7A5A3C', fontFamily: 'var(--font-body)' }}>{review.date}</span>
          </div>
        </div>
      </div>
      <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: '#3D1A0A' }}>
        {review.text}
      </p>
    </motion.div>
  );
}

export default function ReviewsSection() {
  const avg = (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length).toFixed(1);

  return (
    <section style={{ background: '#FBF7F0' }} className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ fontFamily: 'var(--font-body)', color: '#C8922A', letterSpacing: '0.3em' }}>
            — Müşteri Yorumları —
          </p>
          <h2 className="text-4xl mb-2" style={{ fontFamily: 'var(--font-display)', color: '#1C0F00', fontWeight: 700 }}>
            Google Yorumları
          </h2>
          <div className="w-12 h-0.5 mx-auto mt-3" style={{ background: '#C8922A' }} />

          {/* Overall rating */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="text-5xl" style={{ fontFamily: 'var(--font-display)', color: '#1C0F00', fontWeight: 700 }}>{avg}</span>
            <div className="flex flex-col items-start gap-1">
              <StarRating rating={5} />
              <span className="text-xs" style={{ fontFamily: 'var(--font-body)', color: '#7A5A3C' }}>
                {REVIEWS.length} değerlendirme · Google Maps
              </span>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {REVIEWS.map((review, i) => (
            <ReviewCard key={review.id} review={review} index={i} />
          ))}
        </div>

        {/* Maps CTA */}
        <div className="mt-8 text-center">
          <a
            href="https://maps.app.goo.gl/qsZniqGsN16ru7TAA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm transition-all active:scale-95"
            style={{ background: '#EDE0C4', color: '#3D1A0A', fontFamily: 'var(--font-body)', fontWeight: 600 }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Tüm Yorumları Gör
          </a>
        </div>
      </div>
    </section>
  );
}
