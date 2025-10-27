export default function DemoStats({ t, theme, monthly, recentSales, totals }) {
  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center">{t('demoStats')}</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-4">
        <StatCard label={t('totalFish')} value={`${totals.totalQty.toLocaleString()} kg`} color={theme.ocean} />
        <StatCard label={t('revenue')} value={`₹${totals.revenue.toLocaleString()}`} color={theme.coral} />
        <StatCard label={t('commission')} value={`₹${totals.commission.toFixed(0).toLocaleString()}`} color="#0ea5e9" />
        <StatCard label={t('tax')} value={`₹${totals.tax.toFixed(0).toLocaleString()}`} color="#10b981" />
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="bg-white rounded-2xl border shadow p-4">
          <h3 className="font-semibold mb-3">{t('monthlySales')}</h3>
          <div className="flex items-end gap-2 h-48">
            {monthly.map((v, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div className="w-full rounded-t-md" style={{ height: `${Math.max(10, (v / Math.max(...monthly)) * 100)}%`, backgroundColor: i % 2 === 0 ? theme.ocean : '#38bdf8' }} />
                <span className="mt-2 text-[10px] text-slate-500">{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border shadow p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">{t('salesTable')}</h3>
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 text-sm rounded-md text-white"
              style={{ backgroundColor: theme.coral }}
            >
              {t('download')}
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-slate-600">
                  <th className="py-2 pr-4">{t('sellerName')}</th>
                  <th className="py-2 pr-4">{t('buyerName')}</th>
                  <th className="py-2 pr-4">{t('fishType')}</th>
                  <th className="py-2 pr-4">{t('quantity')}</th>
                  <th className="py-2 pr-4">{t('cost')}</th>
                  <th className="py-2 pr-4">{t('date')}</th>
                </tr>
              </thead>
              <tbody>
                {recentSales.map((r, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="py-2 pr-4">{r.seller}</td>
                    <td className="py-2 pr-4">{r.buyer}</td>
                    <td className="py-2 pr-4">{r.fish}</td>
                    <td className="py-2 pr-4">{r.qty}</td>
                    <td className="py-2 pr-4">₹{r.total.toLocaleString()}</td>
                    <td className="py-2 pr-4">{r.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value, color }) {
  return (
    <div className="bg-white rounded-2xl border shadow p-4">
      <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-2 text-2xl font-bold">{value}</div>
      <div className="mt-4 h-2 rounded-full overflow-hidden bg-slate-100">
        <div className="h-full" style={{ width: '70%', backgroundColor: color }} />
      </div>
    </div>
  );
}
