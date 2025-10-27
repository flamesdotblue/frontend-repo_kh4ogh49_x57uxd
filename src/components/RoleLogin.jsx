import { useState } from 'react';
import { Shield, Fish, ShoppingCart } from 'lucide-react';

const roles = [
  { key: 'authority', icon: Shield, color: 'from-sky-500 to-sky-700' },
  { key: 'seller', icon: Fish, color: 'from-orange-400 to-orange-600' },
  { key: 'buyer', icon: ShoppingCart, color: 'from-emerald-400 to-emerald-600' },
];

export default function RoleLogin({ t, theme }) {
  const [active, setActive] = useState(null);

  return (
    <section id="roles" className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center">{t('rolesTitle')}</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {roles.map(({ key, icon: Icon, color }) => (
          <div key={key} className="bg-white rounded-2xl shadow border overflow-hidden">
            <div className={`h-28 bg-gradient-to-br ${color} p-4 text-white flex items-end justify-between`}>
              <div>
                <h3 className="text-xl font-semibold">{t(key)}</h3>
                <p className="text-sm opacity-90">
                  {key === 'authority' && t('authorityDesc')}
                  {key === 'seller' && t('sellerDesc')}
                  {key === 'buyer' && t('buyerDesc')}
                </p>
              </div>
              <Icon className="w-10 h-10 opacity-90" />
            </div>
            <div className="p-4">
              {active === key ? (
                <LoginForm t={t} onClose={() => setActive(null)} theme={theme} roleKey={key} />
              ) : (
                <button
                  className="w-full px-4 py-2 rounded-xl font-medium text-white"
                  style={{ backgroundColor: theme.ocean }}
                  onClick={() => setActive(key)}
                >
                  {t('login')}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LoginForm({ t, onClose, theme, roleKey }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setMessage(`Logged in as ${roleKey}. This is a demo preview.`);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="space-y-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('email')}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
        />
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={t('password')}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
        />
        <div className="flex gap-2">
          <button type="submit" className="flex-1 px-4 py-2 rounded-lg text-white font-medium" style={{ backgroundColor: theme.coral }}>
            {t('continue')}
          </button>
          <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg border font-medium">
            ✕
          </button>
        </div>
      </form>
      {message && <DashboardPreview roleKey={roleKey} theme={theme} />}
    </div>
  );
}

function DashboardPreview({ roleKey, theme }) {
  return (
    <div className="mt-4 border rounded-lg p-4 bg-slate-50">
      {roleKey === 'authority' && (
        <ul className="text-sm space-y-1">
          <li>• View real-time sales and revenue.</li>
          <li>• Track 2.5% commission and tax.</li>
          <li>• Filter by date, location, seller.</li>
        </ul>
      )}
      {roleKey === 'seller' && (
        <ul className="text-sm space-y-1">
          <li>• Post catches with photos and price/kg.</li>
          <li>• Manage Available/Sold listings.</li>
          <li>• View earnings net of 2.5% commission.</li>
        </ul>
      )}
      {roleKey === 'buyer' && (
        <ul className="text-sm space-y-1">
          <li>• Browse fish by type, region, freshness.</li>
          <li>• Add to cart with auto tax + commission.</li>
          <li>• Download invoice PDF for orders.</li>
        </ul>
      )}
      <div className="mt-3 text-xs text-slate-500">
        Demo only — no real authentication. Visual flow for hackathon.
      </div>
      <div className="mt-3 h-2 rounded-full overflow-hidden bg-white border">
        <div className="h-full" style={{ width: '70%', backgroundColor: theme.ocean }} />
      </div>
    </div>
  );
}
