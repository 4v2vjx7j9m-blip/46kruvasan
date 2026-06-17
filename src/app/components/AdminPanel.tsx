import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Trash2, Edit3, Check, Download, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react';
import { useApp } from '../context/AppContext';
import authData from '../../data/auth.json';

interface AdminPanelProps {
  onClose: () => void;
}

function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === authData.username && password === authData.password) {
      onLogin();
    } else {
      setError('Kullanıcı adı veya şifre hatalı.');
    }
  };

  return (
    <div className="p-6">
      <h3 className="text-xl mb-1" style={{ fontFamily: 'var(--font-display)', color: '#1C0F00', fontWeight: 700 }}>
        Yönetici Girişi
      </h3>
      <p className="text-sm mb-6" style={{ fontFamily: 'var(--font-body)', color: '#7A5A3C' }}>
        Menü yönetimi için giriş yapın
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs mb-1" style={{ fontFamily: 'var(--font-body)', color: '#7A5A3C', fontWeight: 500 }}>
            Kullanıcı Adı
          </label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl outline-none"
            style={{ background: '#F0E4CC', color: '#1C0F00', fontFamily: 'var(--font-body)', border: '1px solid rgba(61,26,10,0.15)' }}
            autoComplete="username"
          />
        </div>
        <div>
          <label className="block text-xs mb-1" style={{ fontFamily: 'var(--font-body)', color: '#7A5A3C', fontWeight: 500 }}>
            Şifre
          </label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl outline-none"
            style={{ background: '#F0E4CC', color: '#1C0F00', fontFamily: 'var(--font-body)', border: '1px solid rgba(61,26,10,0.15)' }}
            autoComplete="current-password"
          />
        </div>
        {error && (
          <p className="text-xs" style={{ color: '#c0392b', fontFamily: 'var(--font-body)' }}>{error}</p>
        )}
        <button
          type="submit"
          className="w-full py-3 rounded-xl transition-all active:scale-98"
          style={{ background: '#3D1A0A', color: '#FBF7F0', fontFamily: 'var(--font-body)', fontWeight: 600 }}
        >
          Giriş Yap
        </button>
      </form>
    </div>
  );
}

interface EditingItem {
  categoryId: string;
  itemId: number;
  name: string;
  price: string;
}

function AdminDashboard({ onClose }: { onClose: () => void }) {
  const { menu, updateMenuItem, addMenuItem, removeMenuItem, addCategory, removeCategory, resetMenu, exportMenu, setIsAdmin } = useApp();
  const [expandedCat, setExpandedCat] = useState<string | null>(menu[0]?.id || null);
  const [editing, setEditing] = useState<EditingItem | null>(null);
  const [newItem, setNewItem] = useState<{ categoryId: string; name: string; price: string; unit: string } | null>(null);
  const [newCat, setNewCat] = useState({ name: '', icon: '' });
  const [showNewCat, setShowNewCat] = useState(false);

  const handleSaveEdit = () => {
    if (!editing) return;
    const price = parseFloat(editing.price);
    if (editing.name.trim() && !isNaN(price) && price > 0) {
      updateMenuItem(editing.categoryId, editing.itemId, editing.name.trim(), price);
      setEditing(null);
    }
  };

  const handleAddItem = () => {
    if (!newItem) return;
    const price = parseFloat(newItem.price);
    if (newItem.name.trim() && !isNaN(price) && price > 0) {
      addMenuItem(newItem.categoryId, newItem.name.trim(), price, newItem.unit.trim() || undefined);
      setNewItem(null);
    }
  };

  const handleAddCategory = () => {
    if (newCat.name.trim() && newCat.icon.trim()) {
      addCategory(newCat.name.trim(), newCat.icon.trim());
      setNewCat({ name: '', icon: '' });
      setShowNewCat(false);
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    onClose();
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: 'rgba(61,26,10,0.1)' }}>
        <div>
          <h3 className="text-lg" style={{ fontFamily: 'var(--font-display)', color: '#1C0F00', fontWeight: 700 }}>
            Menü Yönetimi
          </h3>
          <p className="text-xs" style={{ color: '#7A5A3C', fontFamily: 'var(--font-body)' }}>
            Değişiklikler bu tarayıcıda kaydedilir
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={exportMenu}
            className="p-2 rounded-lg transition-all active:scale-95"
            style={{ background: '#EDE0C4', color: '#3D1A0A' }}
            title="JSON olarak dışa aktar"
          >
            <Download className="w-4 h-4" />
          </button>
          <button
            onClick={() => { if (confirm('Menüyü varsayılana sıfırlamak istediğinizden emin misiniz?')) resetMenu(); }}
            className="p-2 rounded-lg transition-all active:scale-95"
            style={{ background: '#EDE0C4', color: '#3D1A0A' }}
            title="Sıfırla"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {menu.map(cat => (
          <div key={cat.id} className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(61,26,10,0.1)' }}>
            {/* Category header */}
            <div
              className="flex items-center justify-between px-4 py-3 cursor-pointer"
              style={{ background: expandedCat === cat.id ? '#3D1A0A' : '#F0E4CC' }}
              onClick={() => setExpandedCat(expandedCat === cat.id ? null : cat.id)}
            >
              <div className="flex items-center gap-2">
                <span>{cat.icon}</span>
                <span className="text-sm" style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: expandedCat === cat.id ? '#FBF7F0' : '#1C0F00' }}>
                  {cat.name}
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded-full" style={{ background: expandedCat === cat.id ? 'rgba(255,255,255,0.15)' : 'rgba(61,26,10,0.1)', color: expandedCat === cat.id ? '#C8A882' : '#7A5A3C', fontFamily: 'var(--font-body)' }}>
                  {cat.items.length}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={e => { e.stopPropagation(); if (confirm(`"${cat.name}" kategorisini silmek istediğinizden emin misiniz?`)) removeCategory(cat.id); }}
                  className="p-1 rounded transition-all"
                  style={{ color: expandedCat === cat.id ? 'rgba(255,100,100,0.7)' : '#c0392b' }}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
                {expandedCat === cat.id ? <ChevronUp className="w-4 h-4 text-[#C8A882]" /> : <ChevronDown className="w-4 h-4" style={{ color: '#7A5A3C' }} />}
              </div>
            </div>

            {/* Items */}
            {expandedCat === cat.id && (
              <div className="divide-y divide-black/10">
                {cat.items.map(item => (
                  <div key={item.id} className="px-4 py-2.5">
                    {editing?.categoryId === cat.id && editing?.itemId === item.id ? (
                      <div className="flex gap-2 items-center">
                        <input
                          value={editing.name}
                          onChange={e => setEditing({ ...editing, name: e.target.value })}
                          className="flex-1 px-2 py-1 rounded-lg text-sm outline-none"
                          style={{ background: '#F0E4CC', color: '#1C0F00', fontFamily: 'var(--font-body)', border: '1px solid rgba(61,26,10,0.2)' }}
                        />
                        <input
                          value={editing.price}
                          onChange={e => setEditing({ ...editing, price: e.target.value })}
                          className="w-20 px-2 py-1 rounded-lg text-sm outline-none"
                          style={{ background: '#F0E4CC', color: '#1C0F00', fontFamily: 'var(--font-body)', border: '1px solid rgba(61,26,10,0.2)' }}
                          type="number"
                          min="0"
                        />
                        <button onClick={handleSaveEdit} className="p-1.5 rounded-lg" style={{ background: '#3D1A0A', color: '#D4A843' }}>
                          <Check className="w-4 h-4" />
                        </button>
                        <button onClick={() => setEditing(null)} className="p-1.5 rounded-lg" style={{ background: '#EDE0C4', color: '#7A5A3C' }}>
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between">
                        <span className="text-sm flex-1 pr-2" style={{ fontFamily: 'var(--font-body)', color: '#1C0F00' }}>{item.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-sm" style={{ fontFamily: 'var(--font-body)', color: '#C8922A', fontWeight: 600 }}>
                            {item.price} ₺{item.unit ? `/${item.unit}` : ''}
                          </span>
                          <button onClick={() => setEditing({ categoryId: cat.id, itemId: item.id, name: item.name, price: String(item.price) })} style={{ color: '#7A5A3C' }}>
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button onClick={() => { if (confirm(`"${item.name}" silinsin mi?`)) removeMenuItem(cat.id, item.id); }} style={{ color: '#c0392b' }}>
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Add item */}
                {newItem?.categoryId === cat.id ? (
                  <div className="px-4 py-3 space-y-2" style={{ background: 'rgba(200,146,42,0.05)' }}>
                    <input
                      placeholder="Ürün adı"
                      value={newItem.name}
                      onChange={e => setNewItem({ ...newItem, name: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-lg text-sm outline-none"
                      style={{ background: '#F0E4CC', color: '#1C0F00', fontFamily: 'var(--font-body)', border: '1px solid rgba(61,26,10,0.15)' }}
                    />
                    <div className="flex gap-2">
                      <input
                        placeholder="Fiyat (₺)"
                        value={newItem.price}
                        onChange={e => setNewItem({ ...newItem, price: e.target.value })}
                        className="flex-1 px-3 py-1.5 rounded-lg text-sm outline-none"
                        style={{ background: '#F0E4CC', color: '#1C0F00', fontFamily: 'var(--font-body)', border: '1px solid rgba(61,26,10,0.15)' }}
                        type="number"
                        min="0"
                      />
                      <input
                        placeholder="Birim (ör: KG)"
                        value={newItem.unit}
                        onChange={e => setNewItem({ ...newItem, unit: e.target.value })}
                        className="flex-1 px-3 py-1.5 rounded-lg text-sm outline-none"
                        style={{ background: '#F0E4CC', color: '#1C0F00', fontFamily: 'var(--font-body)', border: '1px solid rgba(61,26,10,0.15)' }}
                      />
                    </div>
                    <div className="flex gap-2">
                      <button onClick={handleAddItem} className="flex-1 py-1.5 rounded-lg text-sm" style={{ background: '#3D1A0A', color: '#FBF7F0', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                        Ekle
                      </button>
                      <button onClick={() => setNewItem(null)} className="flex-1 py-1.5 rounded-lg text-sm" style={{ background: '#EDE0C4', color: '#7A5A3C', fontFamily: 'var(--font-body)' }}>
                        İptal
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="px-4 py-2.5">
                    <button
                      onClick={() => setNewItem({ categoryId: cat.id, name: '', price: '', unit: '' })}
                      className="flex items-center gap-1.5 text-sm transition-all"
                      style={{ color: '#C8922A', fontFamily: 'var(--font-body)', fontWeight: 500 }}
                    >
                      <Plus className="w-4 h-4" />
                      Ürün Ekle
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}

        {/* Add category */}
        {showNewCat ? (
          <div className="p-4 rounded-2xl space-y-2" style={{ border: '1px dashed rgba(200,146,42,0.4)', background: 'rgba(200,146,42,0.04)' }}>
            <div className="flex gap-2">
              <input
                placeholder="Emoji (🥐)"
                value={newCat.icon}
                onChange={e => setNewCat({ ...newCat, icon: e.target.value })}
                className="w-20 px-3 py-2 rounded-xl text-center outline-none"
                style={{ background: '#F0E4CC', color: '#1C0F00', fontFamily: 'var(--font-body)', border: '1px solid rgba(61,26,10,0.15)' }}
              />
              <input
                placeholder="Kategori adı"
                value={newCat.name}
                onChange={e => setNewCat({ ...newCat, name: e.target.value })}
                className="flex-1 px-3 py-2 rounded-xl outline-none"
                style={{ background: '#F0E4CC', color: '#1C0F00', fontFamily: 'var(--font-body)', border: '1px solid rgba(61,26,10,0.15)' }}
              />
            </div>
            <div className="flex gap-2">
              <button onClick={handleAddCategory} className="flex-1 py-2 rounded-xl text-sm" style={{ background: '#3D1A0A', color: '#FBF7F0', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                Kategori Ekle
              </button>
              <button onClick={() => setShowNewCat(false)} className="flex-1 py-2 rounded-xl text-sm" style={{ background: '#EDE0C4', color: '#7A5A3C', fontFamily: 'var(--font-body)' }}>
                İptal
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowNewCat(true)}
            className="w-full py-3 rounded-2xl flex items-center justify-center gap-2 text-sm transition-all"
            style={{ border: '1px dashed rgba(200,146,42,0.4)', color: '#C8922A', fontFamily: 'var(--font-body)', fontWeight: 500 }}
          >
            <Plus className="w-4 h-4" />
            Yeni Kategori Ekle
          </button>
        )}
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t" style={{ borderColor: 'rgba(61,26,10,0.1)' }}>
        <button
          onClick={handleLogout}
          className="w-full py-2.5 rounded-xl text-sm transition-all"
          style={{ background: '#EDE0C4', color: '#7A5A3C', fontFamily: 'var(--font-body)', fontWeight: 500 }}
        >
          Çıkış Yap
        </button>
      </div>
    </div>
  );
}

export default function AdminPanel({ onClose }: AdminPanelProps) {
  const { isAdmin, setIsAdmin } = useApp();

  const handleLogin = () => {
    setIsAdmin(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-end md:items-center justify-center"
        style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
        onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      >
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="w-full md:w-96 rounded-t-3xl md:rounded-3xl overflow-hidden"
          style={{ background: '#FBF7F0', maxHeight: '85vh', display: 'flex', flexDirection: 'column' }}
        >
          {/* Close button */}
          <div className="flex justify-end p-3">
            <button
              onClick={onClose}
              className="p-1.5 rounded-full transition-all"
              style={{ background: '#EDE0C4', color: '#7A5A3C' }}
              aria-label="Kapat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 overflow-hidden flex flex-col">
            {!isAdmin ? (
              <LoginForm onLogin={handleLogin} />
            ) : (
              <AdminDashboard onClose={onClose} />
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
