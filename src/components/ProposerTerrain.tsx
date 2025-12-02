import type { FormEvent } from 'react'
import { useTranslation } from 'react-i18next'

export default function ProposerTerrain() {
  const { t } = useTranslation()
  function onSubmit(e: FormEvent) {
    e.preventDefault()
    alert(t('propose.submitted'))
  }

  return (
    <section id="proposer" className="section">
      <div className="container-wrap">
        <h2 className="section-title">{t('propose.title')}</h2>
        <p className="section-subtitle">{t('propose.subtitle')}</p>
        <form onSubmit={onSubmit} className="mt-8 grid gap-6 lg:grid-cols-2 animate-fade-up">
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm font-medium text-slate-700">{t('propose.name')}</label>
            <input id="name" name="name" required className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary]" />
          </div>
          <div className="space-y-1">
            <label htmlFor="phone" className="text-sm font-medium text-slate-700">{t('propose.phone')}</label>
            <input id="phone" name="phone" type="tel" required className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary]" />
          </div>
          <div className="space-y-1">
            <label htmlFor="region" className="text-sm font-medium text-slate-700">{t('propose.region')}</label>
            <input id="region" name="region" required className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary]" />
          </div>
          <div className="space-y-1">
            <label htmlFor="superficie" className="text-sm font-medium text-slate-700">{t('propose.area')}</label>
            <input id="superficie" name="superficie" required className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary]" />
          </div>
          <div className="space-y-1">
            <label htmlFor="type" className="text-sm font-medium text-slate-700">{t('propose.type')}</label>
            <select id="type" name="type" className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary]">
              <option>{t('propose.types.field')}</option>
              <option>{t('propose.types.estate')}</option>
              <option>{t('propose.types.bare')}</option>
              <option>{t('propose.types.lot')}</option>
              <option>{t('propose.types.other')}</option>
            </select>
          </div>
          <div className="space-y-1 lg:col-span-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-700">{t('propose.info')}</label>
            <textarea id="message" name="message" rows={4} className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary]"></textarea>
          </div>
          <div className="space-y-1 lg:col-span-2">
            <label htmlFor="fichiers" className="text-sm font-medium text-slate-700">{t('propose.files')}</label>
            <input id="fichiers" name="fichiers" type="file" multiple className="w-full rounded-md border border-slate-300 px-3 py-2 bg-white" />
          </div>
          <div className="lg:col-span-2">
            <button type="submit" className="btn bg-[#0B3B6E] text-white hover:bg-[#0D477F] active:bg-[#093056]">{t('cta.sendTerrain')}</button>
          </div>
        </form>
      </div>
    </section>
  )
}
