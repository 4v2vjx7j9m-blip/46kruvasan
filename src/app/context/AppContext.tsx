import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { DEFAULT_MENU, MenuCategory } from '../../data/menuData';

interface AppContextType {
  menu: MenuCategory[];
  isAdmin: boolean;
  setIsAdmin: (v: boolean) => void;
  updateMenuItem: (categoryId: string, itemId: number, name: string, price: number) => void;
  addMenuItem: (categoryId: string, name: string, price: number, unit?: string) => void;
  removeMenuItem: (categoryId: string, itemId: number) => void;
  addCategory: (name: string, icon: string) => void;
  removeCategory: (categoryId: string) => void;
  resetMenu: () => void;
  exportMenu: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

const STORAGE_KEY = '46kruvasan_menu';

export function AppProvider({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState<MenuCategory[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : DEFAULT_MENU;
    } catch {
      return DEFAULT_MENU;
    }
  });
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(menu));
  }, [menu]);

  const updateMenuItem = (categoryId: string, itemId: number, name: string, price: number) => {
    setMenu(prev =>
      prev.map(cat =>
        cat.id === categoryId
          ? { ...cat, items: cat.items.map(item => item.id === itemId ? { ...item, name, price } : item) }
          : cat
      )
    );
  };

  const addMenuItem = (categoryId: string, name: string, price: number, unit?: string) => {
    const newId = Date.now();
    setMenu(prev =>
      prev.map(cat =>
        cat.id === categoryId
          ? { ...cat, items: [...cat.items, { id: newId, name, price, unit }] }
          : cat
      )
    );
  };

  const removeMenuItem = (categoryId: string, itemId: number) => {
    setMenu(prev =>
      prev.map(cat =>
        cat.id === categoryId
          ? { ...cat, items: cat.items.filter(item => item.id !== itemId) }
          : cat
      )
    );
  };

  const addCategory = (name: string, icon: string) => {
    const newId = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    setMenu(prev => [...prev, { id: newId, name, icon, items: [] }]);
  };

  const removeCategory = (categoryId: string) => {
    setMenu(prev => prev.filter(cat => cat.id !== categoryId));
  };

  const resetMenu = () => {
    setMenu(DEFAULT_MENU);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_MENU));
  };

  const exportMenu = () => {
    const blob = new Blob([JSON.stringify(menu, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '46kruvasan-menu.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <AppContext.Provider value={{
      menu, isAdmin, setIsAdmin,
      updateMenuItem, addMenuItem, removeMenuItem,
      addCategory, removeCategory, resetMenu, exportMenu,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
