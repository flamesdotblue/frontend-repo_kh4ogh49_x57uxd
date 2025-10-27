export default function Hero({ t, theme }) {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              <span style={{ color: theme.ocean }}>JalSetu</span>
              <span className="block text-slate-800 mt-2">जलसेतु • ஜல்சேது • জলসেতু</span>
            </h1>
            <p className="mt-4 text-slate-600 text-lg">{t('tagline')}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full text-sm" style={{ background: theme.sand }}>Wholesale Marketplace</span>
              <span className="px-3 py-1 rounded-full text-sm text-white" style={{ background: theme.ocean }}>Fishermen • Buyers • Authority</span>
              <span className="px-3 py-1 rounded-full text-sm text-white" style={{ background: theme.coral }}>Multilingual</span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl shadow-lg overflow-hidden bg-gradient-to-br from-sky-100 to-orange-50">
              <WaveCanvas />
            </div>
          </div>
        </div>
      </div>
      <svg aria-hidden="true" className="absolute bottom-0 left-0 w-full" height="60" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0 C300,100 900,0 1200,100 L1200,120 L0,120 Z" fill="#ffffff" />
      </svg>
    </section>
  );
}

function WaveCanvas() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="sea" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#00A8E8" />
          <stop offset="100%" stopColor="#0077B6" />
        </linearGradient>
        <linearGradient id="sun" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#FFB703" />
          <stop offset="100%" stopColor="#FF7E00" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#sea)" />
      <circle cx="320" cy="60" r="28" fill="url(#sun)" opacity="0.9" />
      <g fill="white" opacity="0.9">
        <path d="M0 210 Q40 190 80 210 T160 210 T240 210 T320 210 T400 210 V300 H0 Z" opacity="0.2" />
        <path d="M0 230 Q50 210 100 230 T200 230 T300 230 T400 230 V300 H0 Z" opacity="0.25" />
        <path d="M0 250 Q60 230 120 250 T240 250 T360 250 T480 250 V300 H0 Z" opacity="0.3" />
      </g>
      <g transform="translate(80,160)">
        <polygon points="0,40 80,40 70,30 10,30" fill="#FDF6EC" stroke="#0ea5e9" strokeWidth="2" />
        <rect x="20" y="20" width="40" height="20" fill="#FF7E00" />
        <circle cx="25" cy="28" r="3" fill="#0ea5e9" />
        <line x1="60" y1="20" x2="90" y2="-10" stroke="#FDF6EC" strokeWidth="3" />
      </g>
    </svg>
  );
}
