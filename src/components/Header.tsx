import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Header() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="container-wrap flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo SNDP" className="h-8 w-auto" />
          <span className="text-lg font-semibold tracking-wide">SNDP</span>
          <span className="sr-only">{t('nav.home')}</span>
        </a>
        <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-6">
          <a href="#terrains" className="text-sm font-medium text-slate-700 hover:text-[--color-primary] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-primary] rounded">{t('nav.terrains')}</a>
          <a href="#pourquoi" className="text-sm font-medium text-slate-700 hover:text-[--color-primary] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-primary] rounded">{t('nav.why')}</a>
          <a href="#diaspora" className="text-sm font-medium text-slate-700 hover:text-[--color-primary] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-primary] rounded">{t('nav.diaspora')}</a>
          <a href="#contact" className="text-sm font-medium text-slate-700 hover:text-[--color-primary] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-primary] rounded">{t('nav.contact')}</a>
          <div className="flex items-center gap-2 ml-2">
            <button
              type="button"
              aria-label="Français"
              onClick={() => i18n.changeLanguage('fr')}
              className={`h-8 px-2 rounded border text-xs ${i18n.language === 'fr' ? 'bg-[#0B3B6E] text-white border-[#0B3B6E]' : 'bg-white text-slate-700 border-slate-300 hover:text-[--color-primary]'}`}
            >FR</button>
            <button
              type="button"
              aria-label="English"
              onClick={() => i18n.changeLanguage('en')}
              className={`h-8 px-2 rounded border text-xs ${i18n.language === 'en' ? 'bg-[#0B3B6E] text-white border-[#0B3B6E]' : 'bg-white text-slate-700 border-slate-300 hover:text-[--color-primary]'}`}
            >EN</button>
          </div>
          <a
            href="https://wa.me/237000000000?text=Bonjour%20SNDP"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold leading-6 text-white bg-[#0B3B6E] hover:bg-[#0D477F] active:bg-[#093056] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3B6E]"
          >
            {t('cta.whatsapp')}
          </a>
        </nav>
        <button aria-label={t('nav.openMenu')} className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-slate-200" onClick={() => setOpen(v => !v)}>
          <span className="sr-only">{t('nav.openMenu')}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-slate-700"><path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200">
          <div className="container-wrap py-3 flex flex-col gap-2">
            <a onClick={() => setOpen(false)} href="#terrains" className="py-2 text-sm font-medium text-slate-700">{t('nav.terrains')}</a>
            <a onClick={() => setOpen(false)} href="#pourquoi" className="py-2 text-sm font-medium text-slate-700">{t('nav.why')}</a>
            <a onClick={() => setOpen(false)} href="#diaspora" className="py-2 text-sm font-medium text-slate-700">{t('nav.diaspora')}</a>
            <a onClick={() => setOpen(false)} href="#contact" className="py-2 text-sm font-medium text-slate-700">{t('nav.contact')}</a>
            <a
              href="https://wa.me/237000000000?text=Bonjour%20SNDP"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold leading-6 text-white bg-[#0B3B6E] hover:bg-[#0D477F] active:bg-[#093056] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3B6E] mt-2"
            >
              {t('cta.whatsapp')}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
