export interface MenuItem {
  id: number;
  name: string;
  price: number;
  unit?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  items: MenuItem[];
}

export const DEFAULT_MENU: MenuCategory[] = [
  {
    id: 'kruvasanlar',
    name: 'Kruvasanlar',
    icon: '🥐',
    items: [
      { id: 1, name: 'Sade Kruvasan', price: 200 },
      { id: 2, name: 'Çikolatalı Kruvasan', price: 300 },
      { id: 3, name: 'Beyaz Çikolatalı Kruvasan', price: 300 },
      { id: 4, name: 'Fıstıklı Kruvasan', price: 400 },
      { id: 5, name: 'Lotuslu Kruvasan', price: 325 },
      { id: 6, name: 'Bitter Çikolatalı Kruvasan', price: 300 },
      { id: 7, name: 'Karamelli Kruvasan', price: 325 },
      { id: 8, name: 'Frambuazlı Kruvasan', price: 300 },
      { id: 9, name: 'Küp Kruvasan', price: 300 },
    ],
  },
  {
    id: 'simit-acma',
    name: 'Simit & Açma',
    icon: '🥯',
    items: [
      { id: 101, name: 'Simit', price: 20 },
      { id: 102, name: 'Tereyağlı', price: 20 },
      { id: 103, name: 'Çekirderli', price: 40 },
      { id: 104, name: 'Çörek Otlu', price: 20 },
      { id: 105, name: 'Peynirli', price: 25 },
      { id: 106, name: 'Zeytinli', price: 25 },
      { id: 107, name: 'Kaşarlı Uzun', price: 25 },
      { id: 108, name: 'Patatesli Uzun', price: 25 },
      { id: 109, name: 'Balık Simit', price: 40 },
      { id: 110, name: 'Serpme Açma', price: 25 },
      { id: 111, name: 'Peynirli Açma', price: 25 },
      { id: 112, name: 'Soğuk Sandviç', price: 75 },
      { id: 113, name: 'Sigara Böreği', price: 15 },
      { id: 114, name: 'Otlu Çay Keyfi', price: 12 },
      { id: 115, name: 'Dilim Pizza', price: 60 },
      { id: 116, name: 'İstanbul Poğaça', price: 25 },
      { id: 117, name: 'Katmer', price: 50 },
      { id: 118, name: 'Talaş Böreği', price: 40 },
      { id: 119, name: 'Yuvarlak Sandviç', price: 75 },
      { id: 120, name: 'Yuvarlak Pizza', price: 60 },
    ],
  },
  {
    id: 'kahveler',
    name: 'Kahveler',
    icon: '☕',
    items: [
      { id: 201, name: 'Türk Kahvesi', price: 100 },
      { id: 202, name: 'Americano', price: 130 },
      { id: 203, name: 'Latte', price: 180 },
      { id: 204, name: 'Cappuccino', price: 170 },
      { id: 205, name: 'Flat White', price: 170 },
      { id: 206, name: 'Mocha (white/black)', price: 170 },
      { id: 207, name: 'Iced Americano', price: 140 },
      { id: 208, name: 'Iced Latte', price: 170 },
      { id: 209, name: 'Iced Mocha (white/black)', price: 180 },
      { id: 210, name: 'Iced Cappuccino', price: 150 },
      { id: 211, name: 'Çay', price: 25 },
    ],
  },
  {
    id: 'soguk-icecekler',
    name: 'Soğuk İçecekler',
    icon: '🥤',
    items: [
      { id: 301, name: 'Çikolatalı Milkshake', price: 150 },
      { id: 302, name: 'Çilekli Milkshake', price: 150 },
      { id: 303, name: 'Muzlu Milkshake', price: 150 },
      { id: 304, name: 'Limonata', price: 150 },
    ],
  },
  {
    id: 'fransiz-pastalari',
    name: 'Fransız Pastalası',
    icon: '🎂',
    items: [
      { id: 401, name: 'Fıstıklı Atom', price: 400 },
      { id: 402, name: 'Limon', price: 300 },
      { id: 403, name: 'Böğürtlen', price: 300 },
      { id: 404, name: 'Portakal', price: 300 },
      { id: 405, name: 'Frambuaz', price: 300 },
      { id: 406, name: 'Mango', price: 300 },
      { id: 407, name: 'Elma', price: 300 },
      { id: 408, name: 'Çilek', price: 300 },
      { id: 409, name: 'Fındık', price: 350 },
      { id: 410, name: 'Coconut', price: 300 },
      { id: 411, name: 'Coffee Bean', price: 300 },
      { id: 412, name: 'San Sebastian', price: 250 },
      { id: 413, name: 'San Sebastian (fıstıklı)', price: 300 },
      { id: 414, name: 'Black Night', price: 300 },
      { id: 415, name: 'Armut', price: 300 },
      { id: 416, name: 'Fransız Ekleri', price: 130 },
      { id: 417, name: 'Tereyağlı Ekler', price: 100, unit: 'KG' },
    ],
  },
  {
    id: 'corek-cubuk',
    name: 'Çörek & Çubuk',
    icon: '🥨',
    items: [
      { id: 501, name: 'Tuzlu Çörek', price: 200, unit: 'KG' },
      { id: 502, name: 'Şekerli Çörek', price: 200, unit: 'KG' },
      { id: 503, name: 'Susami Çubuk', price: 250, unit: 'KG' },
      { id: 504, name: 'Yumurtalı Çubuk', price: 250, unit: 'KG' },
      { id: 505, name: 'Diyet', price: 200, unit: 'KG' },
      { id: 506, name: 'Ekmek', price: 15 },
      { id: 507, name: 'Serpme Kahvaltı', price: 500, unit: 'kişi başı' },
    ],
  },
];
