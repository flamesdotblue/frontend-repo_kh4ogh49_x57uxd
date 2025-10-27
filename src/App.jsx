import { useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import RoleLogin from './components/RoleLogin.jsx';
import DemoStats from './components/DemoStats.jsx';

const translations = {
  en: {
    tagline: 'Empowering Fishermen, Connecting Markets, Sustaining Oceans',
    getStarted: 'Get Started',
    rolesTitle: 'Choose your role to continue',
    authority: 'Authority',
    seller: 'Seller (Fisherman)',
    buyer: 'Buyer',
    authorityDesc: 'Monitor sales, taxes, and performance.',
    sellerDesc: 'Post catches, manage inventory, track earnings.',
    buyerDesc: 'Browse, filter, and purchase in bulk.',
    login: 'Login',
    email: 'Email',
    password: 'Password',
    continue: 'Continue',
    demoStats: 'Live demo insights',
    totalFish: 'Total Fish Sold',
    revenue: 'Total Revenue',
    commission: 'Platform Commission (2.5%)',
    tax: 'Estimated Tax',
    monthlySales: 'Monthly Sales (kg)',
    salesTable: 'Recent Sales',
    sellerName: 'Seller',
    buyerName: 'Buyer',
    fishType: 'Fish',
    quantity: 'Qty (kg)',
    cost: 'Total',
    date: 'Date',
    download: 'Download Report',
  },
  hi: {
    tagline: 'मछुआरों को सशक्त, बाज़ारों को जोड़ना, महासागरों की रक्षा',
    getStarted: 'शुरू करें',
    rolesTitle: 'जारी रखने के लिए अपनी भूमिका चुनें',
    authority: 'प्राधिकरण',
    seller: 'विक्रेता (मछुआरा)',
    buyer: 'खरीदार',
    authorityDesc: 'बिक्री, कर और प्रदर्शन पर नज़र रखें।',
    sellerDesc: 'कैच पोस्ट करें, स्टॉक संभालें, कमाई देखें।',
    buyerDesc: 'थोक में ब्राउज़ और खरीदें।',
    login: 'लॉगिन',
    email: 'ईमेल',
    password: 'पासवर्ड',
    continue: 'जारी रखें',
    demoStats: 'लाइव डेमो आँकड़े',
    totalFish: 'कुल मछली बिक्री',
    revenue: 'कुल राजस्व',
    commission: 'प्लेटफ़ॉर्म कमीशन (2.5%)',
    tax: 'अनुमानित कर',
    monthlySales: 'मासिक बिक्री (किलो)',
    salesTable: 'हालिया बिक्री',
    sellerName: 'विक्रेता',
    buyerName: 'खरीदार',
    fishType: 'मछली',
    quantity: 'मात्रा (किग्रा)',
    cost: 'कुल',
    date: 'तारीख',
    download: 'रिपोर्ट डाउनलोड करें',
  },
  ta: {
    tagline: 'மீனவர்களுக்கு வலு, சந்தைகளை இணைக்கும் பாலம், கடல்களை காக்க',
    getStarted: 'தொடங்கவும்',
    rolesTitle: 'தொடர உங்கள் பாத்திரத்தைத் தேர்வு செய்யவும்',
    authority: 'அதிகாரம்',
    seller: 'விற்பனர் (மீனவர்)',
    buyer: 'கொள்முதல்',
    authorityDesc: 'விற்பனை, வரி, செயல்திறன் கண்காணிக்கவும்.',
    sellerDesc: 'கிடைப்புகளைப் பதிவிடு, கையிருப்பை மேலாண்மை செய், வருமானம் பாரு.',
    buyerDesc: 'மொத்தமாக உலாவி வாங்கவும்.',
    login: 'உள் நுழை',
    email: 'மின்னஞ்சல்',
    password: 'கடவுச்சொல்',
    continue: 'தொடரவும்',
    demoStats: 'நேரடி டெமோ கணக்குகள்',
    totalFish: 'மொத்த மீன் விற்பனை',
    revenue: 'மொத்த வருவாய்',
    commission: 'தள கமிஷன் (2.5%)',
    tax: 'மதிப்பிடப்பட்ட வரி',
    monthlySales: 'மாதாந்திர விற்பனை (கி.கி.)',
    salesTable: 'சமீப விற்பனை',
    sellerName: 'விற்பனர்',
    buyerName: 'கொள்முதல்',
    fishType: 'மீன்',
    quantity: 'அளவு (கி.கி.)',
    cost: 'மொத்தம்',
    date: 'தேதி',
    download: 'அறிக்கையைப் பதிவிறக்கவும்',
  },
  bn: {
    tagline: 'জেলেদের শক্তি দিই, বাজারকে যুক্ত করি, সাগরকে রক্ষা করি',
    getStarted: 'শুরু করুন',
    rolesTitle: 'চালিয়ে যেতে আপনার ভূমিকা বেছে নিন',
    authority: 'কর্তৃপক্ষ',
    seller: 'বিক্রেতা (জেলে)',
    buyer: 'ক্রেতা',
    authorityDesc: 'বিক্রি, কর এবং পারফরম্যান্স দেখুন।',
    sellerDesc: 'ধরা মাছ পোস্ট করুন, মজুত সামলান, আয় দেখুন।',
    buyerDesc: 'বাল্কে ব্রাউজ ও কিনুন।',
    login: 'লগইন',
    email: 'ইমেইল',
    password: 'পাসওয়ার্ড',
    continue: 'চালিয়ে যান',
    demoStats: 'লাইভ ডেমো ইনসাইট',
    totalFish: 'মোট মাছ বিক্রি',
    revenue: 'মোট আয়',
    commission: 'প্ল্যাটফর্ম কমিশন (২.৫%)',
    tax: 'আনুমানিক কর',
    monthlySales: 'মাসিক বিক্রি (কেজি)',
    salesTable: 'সাম্প্রতিক বিক্রি',
    sellerName: 'বিক্রেতা',
    buyerName: 'ক্রেতা',
    fishType: 'মাছ',
    quantity: 'পরিমাণ (কেজি)',
    cost: 'মোট',
    date: 'তারিখ',
    download: 'রিপোর্ট ডাউনলোড করুন',
  },
};

const theme = {
  ocean: '#0077B6',
  coral: '#FF7E00',
  sand: '#FDF6EC',
};

export default function App() {
  const [lang, setLang] = useState('en');
  const t = useMemo(() => (key) => translations[lang][key] || key, [lang]);

  // Mock data for demo stats (lightweight, no backend)
  const monthly = [120, 180, 95, 160, 210, 260, 190, 220, 240, 300, 280, 320];
  const recentSales = [
    { seller: 'Ravi', buyer: 'Blue Bay Hotel', fish: 'Pomfret', qty: 120, total: 48000, date: '2025-10-01' },
    { seller: 'Asha', buyer: 'Coastal Mart', fish: 'Prawn', qty: 80, total: 36000, date: '2025-10-02' },
    { seller: 'Imran', buyer: 'Sea Breeze', fish: 'Mackerel', qty: 150, total: 37500, date: '2025-10-03' },
  ];

  const totalQty = monthly.reduce((a, b) => a + b, 0);
  const revenue = recentSales.reduce((a, b) => a + b.total, 0);
  const commission = revenue * 0.025;
  const tax = revenue * 0.05;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF6EC] to-white text-slate-900">
      <Navbar lang={lang} setLang={setLang} t={t} theme={theme} />
      <main>
        <Hero t={t} theme={theme} />
        <section className="max-w-6xl mx-auto px-4 md:px-6">
          <RoleLogin t={t} theme={theme} />
        </section>
        <section className="max-w-6xl mx-auto px-4 md:px-6 mt-16">
          <DemoStats t={t} theme={theme} monthly={monthly} recentSales={recentSales} totals={{ totalQty, revenue, commission, tax }} />
        </section>
      </main>
      <footer className="mt-16 py-10 text-center bg-white/70 backdrop-blur border-t">
        <p className="text-sm">© {new Date().getFullYear()} JalSetu • जलसेतु • ஜல்சேது • জলসেতু</p>
      </footer>
    </div>
  );
}
