import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="mt-10 border-t border-slate-200">
      <div className="container-wrap py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo SNDP" className="h-8 w-auto" />
            <div>
              <p className="text-sm font-semibold">{t('brand.name')}</p>
              <p className="text-xs text-slate-600">{t('footer.rights')}</p>
            </div>
          </div>
          <nav className="flex items-center gap-4 text-sm text-slate-700">
            <a href="#" className="hover:text-[--color-primary]">{t('footer.legal')}</a>
            <a href="#" className="hover:text-[--color-primary]">{t('footer.privacy')}</a>
            <a href="mailto:contact@sndp.cm" className="hover:text-[--color-primary]">{t('footer.email')}</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
