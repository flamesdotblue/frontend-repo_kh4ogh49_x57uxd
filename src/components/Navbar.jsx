import { Globe, Anchor } from 'lucide-react';

export default function Navbar({ lang, setLang, t, theme }) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-[var(--ocean)] flex items-center justify-center" style={{ ['--ocean']: theme.ocean }}>
            <Anchor className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <div className="font-extrabold text-xl" style={{ color: theme.ocean }}>JalSetu</div>
            <div className="text-[10px] text-slate-500">जलसेतु • ஜல்சேது • জলসেতু</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <LanguageSelect lang={lang} setLang={setLang} />
          <a href="#roles" className="hidden sm:inline-block px-4 py-2 rounded-full text-white font-medium shadow" style={{ backgroundColor: theme.coral }}>
            {t('getStarted')}
          </a>
        </div>
      </div>
    </header>
  );
}

function LanguageSelect({ lang, setLang }) {
  return (
    <div className="flex items-center gap-2">
      <Globe className="w-5 h-5 text-slate-600" />
      <select
        aria-label="Language selector"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        className="bg-white border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
      >
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
        <option value="ta">தமிழ்</option>
        <option value="bn">বাংলা</option>
      </select>
    </div>
  );
}
