import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

function Feature({ title, desc, icon }: { title: string; desc: string; icon: ReactNode }) {
  return (
    <div className="card p-6 hover-lift">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-lg bg-[rgba(11,59,110,0.1)] text-[--color-primary] flex items-center justify-center">{icon}</div>
        <div>
          <h3 className="text-base font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm text-slate-600">{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default function Pourquoi() {
  const { t } = useTranslation()
  return (
    <section id="pourquoi" className="section bg-[--color-graybg]">
      <div className="container-wrap">
        <h2 className="section-title">{t('why.title')}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Feature
            title={t('why.secure.title')}
            desc={t('why.secure.desc')}
            icon={<ShieldIcon />}
          />
          <Feature
            title={t('why.longterm.title')}
            desc={t('why.longterm.desc')}
            icon={<ClockIcon />}
          />
          <Feature
            title={t('why.local.title')}
            desc={t('why.local.desc')}
            icon={<MapPinIcon />}
          />
          <Feature
            title={t('why.transparency.title')}
            desc={t('why.transparency.desc')}
            icon={<ListCheckIcon />}
          />
        </div>
      </div>
    </section>
  )
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" d="M12 3l7 4v5c0 5-3 7-7 9-4-2-7-4-7-9V7l7-4z"/></svg>
  )
}
function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9" strokeWidth="2"/><path d="M12 7v5l3 3" strokeWidth="2"/></svg>
  )
}
function MapPinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" d="M12 21s-6-5.33-6-10a6 6 0 1112 0c0 4.67-6 10-6 10z"/><circle cx="12" cy="11" r="2" strokeWidth="2"/></svg>
  )
}
function ListCheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" d="M9 7h11M9 12h11M9 17h11"/><path strokeWidth="2" d="M4 7l1.5 1.5L7 7M4 12l1.5 1.5L7 12M4 17l1.5 1.5L7 17"/></svg>
  )
}
