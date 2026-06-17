import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';

export default function MenuSection() {
  const { menu } = useApp();
  const [activeTab, setActiveTab] = useState(menu[0]?.id || '');

  const activeCategory = menu.find(c => c.id === activeTab);

  return (
    <section id="menu" style={{ background: '#FBF7F0' }} className="py-16">
      <div className="max-w-2xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ fontFamily: 'var(--font-body)', color: '#C8922A', letterSpacing: '0.3em' }}>
            — Lezzetlerimiz —
          </p>
          <h2 className="text-4xl mb-2" style={{ fontFamily: 'var(--font-display)', color: '#1C0F00', fontWeight: 700 }}>
            Menümüz
          </h2>
          <div className="w-12 h-0.5 mx-auto mt-3" style={{ background: '#C8922A' }} />
        </div>

        {/* Category tabs – horizontal scroll */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
          {menu.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm transition-all duration-300 active:scale-95"
              style={
                activeTab === cat.id
                  ? { background: '#3D1A0A', color: '#FBF7F0', fontFamily: 'var(--font-body)', fontWeight: 600 }
                  : { background: '#EDE0C4', color: '#7A5A3C', fontFamily: 'var(--font-body)', fontWeight: 500 }
              }
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Menu items */}
        <AnimatePresence mode="wait">
          {activeCategory && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-0"
            >
              {activeCategory.items.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: idx * 0.04 }}
                  className="flex items-center justify-between py-3.5 border-b"
                  style={{ borderColor: 'rgba(61,26,10,0.08)' }}
                >
                  <span className="text-base pr-4" style={{ fontFamily: 'var(--font-body)', color: '#1C0F00', fontWeight: 400 }}>
                    {item.name}
                  </span>
                  <div className="flex items-baseline gap-1 flex-shrink-0">
                    <span className="text-base" style={{ fontFamily: 'var(--font-body)', color: '#C8922A', fontWeight: 600 }}>
                      {item.price} ₺
                    </span>
                    {item.unit && (
                      <span className="text-xs" style={{ color: '#7A5A3C' }}>/ {item.unit}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
