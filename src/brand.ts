import value0 from './images/value0.svg'
import value1 from './images/value1.svg'
import value2 from './images/value2.svg'
import value3 from './images/value3.png'

export const TITLE = 'January Foundation'
export const DESCRIPTION = 'Heal Technological Trauma'
export const BRAND = TITLE
export const HERO_TEXT = TITLE
export const COMPANY_NAME = TITLE

export const locales = [
  'en',
  'zh',
  'hi',
  'es',
  'fr',
  'ar',
  'ru',
  'jp',
  'tr',
  'el',
  'he',
]

const RTL_LANGS = ['ar', 'arc', 'dv', 'fa', 'ha', 'he', 'khw', 'ks', 'ku', 'ps', 'ur', 'yi'];

export function getDirForLang(lang: string): 'rtl' | 'ltr' {
  if (RTL_LANGS.includes(lang)) {
    return 'rtl'
  } else {
    return 'ltr'
  }
}

export function isValidLang(lang: string): boolean {
  return locales.includes(lang)
}

export const defaultLocale = locales[0]

export function localeName(locale: string): string {
  switch (locale) {
    case 'en':
      return 'English'
    case 'el':
      return 'Ελληνικά'
    case 'fr':
      return 'Français'
    case 'jp':
      return '日本語'
    case 'ar':
      return 'العربية'
    case 'he':
      return 'עברית'
    case 'es':
      return 'Español'
    case 'hi':
      return 'हिन्दी'
    case 'ru':
      return 'Русский'
    case 'tr':
      return 'Türkçe'
  }
  return 'Unkonwn'
}

export function JANUARY_FOUNDATION(lang: string) {
  if (lang === 'el') return 'ΙΔΡΥΜΑ ΙΑΝΟΥΑΡΙΟΣ'
  if (lang === 'fr') return 'Fondation Janvier'
  if (lang === 'jp') return 'ジャヌアリ 財団'
  if (lang === 'ar') return 'مؤسسة يناير'
  if (lang === 'he') return 'מוסד ינואר'
  if (lang === 'es') return 'Fundación Ianuarios'
  if (lang === 'hi') return 'जनवरी फाउंडेशन'
  if (lang === 'ru') return 'Фонд Январь'
  if (lang === 'tr') return 'Ianuarios Vakfı'
  if (lang === 'zh') return '简纽瑞 基金会'
  return 'January Foundation'
}

export function CONTRA_MUNDUM(lang: string) {
  return 'Contra Mundum Amoris Inopem'
}

export const values = [
  {
    url: value0,
    text: {
      en: 'Heal Technological Trauma',
      es: 'Cura Traumas Tecnológicos',
      fr: 'Guérir Traumatismes Technologique',
      el: 'Επούλωσε Τεχνολογικά Τραύματα',
      jp: 'テクノロジー の トラウマ を 癒す',
      ar: 'شفاء الصدمات التكنولوجية',
      he: 'ריפוי טראומה טכנולוגית',
      hi: 'तकनीकी आघात का इलाज करें',
      ru: 'Технологическое Лечение Травм',
      tr: 'Teknolojik Travmayı Tedavi Edin',
      zh: '治愈 技术 创伤',
    },
  },
  {
    url: value1,
    text: {
      en: 'All Peoples Equally Capable to Innovate',
      es: 'Todos los Pueblos Igualmente Capaces de Innovar',
      el: 'Όλοι οι Λαοί Εξίσου Ικανοί να Καινοτομήσουν',
      fr: "Tous les Peuples Également Capables d' Innover",
      jp: 'すべて の 人々 が 平等 に 革新 する 能力 を 持って いる',
      ar: 'جميع الشعوب قادرة على الابتكار على قدم المساواة',
      he: 'כל העמים מסוגלים לחדש באותה מידה',
      hi: 'सभी लोग नवप्रवर्तन करने में समान रूप से सक्षम हैं',
      ru: 'Все народы одинаково способны к инновациям',
      tr: 'Tüm İnsanlar Yeniliğe Eşit Yeteneğe Sahiptir',
      zh: '所有 人 都 有同等 的 创新 能 力',
    },
  },
  {
    url: value2,
    text: {
      en: 'Value Creation over Value Extraction',
      es: 'Creación de Valor en lugar de Extracción de Valor',
      fr: 'Création de Valeur plutôt que Extraction de Valeur',
      el: 'Δημιουργία Αξίας έναντι Εξαγωγής Αξίας',
      jp: '価値 の 抽出 より も 価値 の 創造',
      ar: 'خلق القيمة بدلا من استخراج القيمة',
      he: 'יצירת ערך ולא מיצוי ערך',
      hi: 'मूल्य निष्कर्षण के बजाय मूल्य सृजन',
      ru: 'Создание ценности вместо извлечения ценности',
      tr: 'Değer Çıkarma Yerine Değer Yaratma',
      zh: '创造 价值 而 不是 提取 价值',
    },
  },
  {
    url: value3,
    text: {
      en: 'Spread Compassion Throughout the World',
      es: 'Difunda la Compasión por Todo el Mundo',
      fr: 'Répandez la Compassion à Travers le Monde',
      el: 'Διάδωσε Συμπόνια Παντού στον Κόσμο',
      jp: '世界中に思いやりを広める',
      ar: 'نشر الرحمة في جميع أنحاء العالم',
      he: 'הפיצו חמלה ברחבי העולם',
      hi: 'दुनिया भर में करुणा फैलाएं',
      ru: 'Распространяйте сострадание по всему миру',
      tr: 'Dünyaya Şefkati Yaymak',
      zh: '将 爱心 传播 到 世界 各地',
    },
  },
]
