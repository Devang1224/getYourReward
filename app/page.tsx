import CaptureButton from "./CaptureButton";

const DEALS = [
  { store: "TechMart", discount: "20% OFF", code: "SAVE20", tag: "Electronics" },
  { store: "Fashion Hub", discount: "₹500 OFF", code: "STYLE500", tag: "Fashion" },
  { store: "Home & Living", discount: "15% OFF", code: "HOME15", tag: "Furniture" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 to-orange-50 dark:from-zinc-950 dark:to-zinc-900">
      {/* Header */}
      <header className="border-b border-amber-200/60 bg-white/80 backdrop-blur-sm dark:border-amber-900/40 dark:bg-zinc-900/80">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-lg font-bold text-white shadow-md">
              S
            </span>
            <span className="text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
              SavvyDeals
            </span>
          </div>
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800 dark:bg-amber-900/50 dark:text-amber-200">
            Live deals
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8">
        {/* Hero */}
        <section className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Exclusive for you
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Today&apos;s top coupons
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Claim your deals in one tap. Limited time only.
          </p>
        </section>

        {/* Featured claim card - uses CaptureButton */}
        <section className="mb-8">
          <div className="overflow-hidden rounded-2xl border-2 border-dashed border-amber-400 bg-white shadow-xl dark:border-amber-600 dark:bg-zinc-800">
            <div className="border-b border-amber-100 bg-linear-to-r from-amber-50 to-orange-50 px-6 py-4 dark:border-amber-900/40 dark:from-amber-950/30 dark:to-orange-950/20">
              <span className="inline-block rounded-full bg-amber-500 px-3 py-0.5 text-xs font-bold uppercase text-white">
                Best value
              </span>
              <h2 className="mt-2 text-xl font-bold text-zinc-900 dark:text-zinc-50">
                Mega savings — up to 50% off
              </h2>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Verify once to unlock this exclusive coupon. No code needed.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 px-6 py-6">
              <CaptureButton variant="coupon" />
            </div>
          </div>
        </section>

        {/* Other coupon cards (visual only) */}
        <section>
          <h2 className="mb-4 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
            More deals for you
          </h2>
          <ul className="grid gap-4 sm:grid-cols-3">
            {DEALS.map((deal) => (
              <li
                key={deal.code}
                className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800"
              >
                <div className="border-b border-dashed border-zinc-200 px-4 py-3 dark:border-zinc-600">
                  <span className="text-xs font-medium text-amber-600 dark:text-amber-400">
                    {deal.tag}
                  </span>
                  <p className="mt-1 font-semibold text-zinc-900 dark:text-zinc-50">
                    {deal.store}
                  </p>
                </div>
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-lg font-bold text-amber-600 dark:text-amber-400">
                    {deal.discount}
                  </span>
                  <span className="rounded bg-zinc-100 px-2 py-1 font-mono text-xs text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300">
                    {deal.code}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Trust footer */}
        <p className="mt-10 text-center text-xs text-zinc-500 dark:text-zinc-500">
          Secure verification • 2,400+ coupons claimed today
        </p>
      </main>
    </div>
  );
}
