import type { FormEvent } from 'react'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()
  return (
    <section id="hero" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      <div className="container-wrap relative z-10 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase text-white animate-fade-up">
            {t('hero.title')}
          </h1>
          <p className="mt-4 text-white/90 text-base sm:text-lg animate-fade-up" style={{animationDelay: '.05s'}}>
            {t('hero.subtitle')}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 animate-fade-up" style={{animationDelay: '.1s'}}>
            <a
              href="#terrains"
              className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold leading-6 text-white bg-[#0B3B6E] hover:bg-[#0D477F] active:bg-[#093056] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3B6E]"
            >
              {t('cta.viewTerrains')}
            </a>
            <a href="#proposer" className="btn btn-outline bg-white/10 text-white border-white/30 hover:bg-white/20">
              {t('cta.propose')}
            </a>
          </div>
          <form
            onSubmit={(e: FormEvent) => { e.preventDefault(); const el=document.getElementById('terrains'); if(el) el.scrollIntoView({behavior:'smooth'}) }}
            className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5 bg-white/90 backdrop-blur rounded-xl shadow-lg p-4 md:p-5 animate-fade-up"
            style={{animationDelay: '.15s'}}
          >
            <div className="space-y-1">
              <label htmlFor="s-location" className="sr-only">{t('search.location')}</label>
              <input id="s-location" name="location" placeholder={t('search.location') as string} className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary]" />
            </div>
            <div className="space-y-1">
              <label htmlFor="s-type" className="sr-only">{t('search.type')}</label>
              <select id="s-type" name="type" className="w-full rounded-md border border-slate-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[--color-primary]">
                <option value="">{t('search.any')}</option>
                <option value="residential">{t('search.types.residential')}</option>
                <option value="agro">{t('search.types.agro')}</option>
                <option value="industrial">{t('search.types.industrial')}</option>
                <option value="tourism">{t('search.types.tourism')}</option>
              </select>
            </div>
            <div className="space-y-1">
              <label htmlFor="s-min" className="sr-only">{t('search.minPrice')}</label>
              <input id="s-min" name="min" type="number" inputMode="numeric" placeholder={t('search.minPrice') as string} className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary]" />
            </div>
            <div className="space-y-1">
              <label htmlFor="s-max" className="sr-only">{t('search.maxPrice')}</label>
              <input id="s-max" name="max" type="number" inputMode="numeric" placeholder={t('search.maxPrice') as string} className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary]" />
            </div>
            <div className="sm:col-span-2 lg:col-span-1 flex">
              <button type="submit" className="inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-semibold leading-6 text-white bg-[#0B3B6E] hover:bg-[#0D477F] active:bg-[#093056] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3B6E]">
                {t('search.button')}
              </button>
            </div>
          </form>
          <p className="mt-4 text-sm text-white/80">
            {t('hero.foot')}
          </p>
        </div>
      </div>
    </section>
  )
}
