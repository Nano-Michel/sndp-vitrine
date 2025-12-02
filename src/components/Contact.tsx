import type { FormEvent } from 'react'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  function onSubmit(e: FormEvent) {
    e.preventDefault()
    alert(t('contact.thanks'))
  }
  return (
    <section id="contact" className="section bg-[--color-graybg]">
      <div className="container-wrap">
        <h2 className="section-title">{t('contact.title')}</h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="card p-6 animate-fade-up">
            <dl className="text-sm text-slate-700 space-y-2">
              <div><dt className="font-semibold">{t('contact.whatsapp')}</dt><dd><a className="text-[--color-primary] hover:underline" href="https://wa.me/237000000000" target="_blank" rel="noreferrer">+237 000 000 000</a></dd></div>
              <div><dt className="font-semibold">{t('contact.phone')}</dt><dd>+237 000 000 000</dd></div>
              <div><dt className="font-semibold">{t('contact.email')}</dt><dd><a className="text-[--color-primary] hover:underline" href="mailto:contact@sndp.cm">contact@sndp.cm</a></dd></div>
              <div><dt className="font-semibold">{t('contact.location')}</dt><dd>Yaoundé, Cameroun</dd></div>
            </dl>
            <div className="mt-4">
              <a className="btn bg-[#0B3B6E] text-white hover:bg-[#0D477F] active:bg-[#093056]" href="https://wa.me/237000000000?text=Bonjour%20SNDP" target="_blank" rel="noreferrer">{t('cta.whatsapp')}</a>
            </div>
          </div>
          <form onSubmit={onSubmit} className="card p-6 grid gap-4 animate-fade-up" style={{animationDelay: '.05s'}}>
            <div className="space-y-1">
              <label htmlFor="c-name" className="text-sm font-medium text-slate-700">{t('contact.name')}</label>
              <input id="c-name" name="name" required className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary]" />
            </div>
            <div className="space-y-1">
              <label htmlFor="c-email" className="text-sm font-medium text-slate-700">{t('contact.email')}</label>
              <input id="c-email" type="email" name="email" required className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary]" />
            </div>
            <div className="space-y-1">
              <label htmlFor="c-message" className="text-sm font-medium text-slate-700">{t('contact.message')}</label>
              <textarea id="c-message" name="message" rows={4} required className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary]"></textarea>
            </div>
            <div>
              <button type="submit" className="btn bg-[#0B3B6E] text-white hover:bg-[#0D477F] active:bg-[#093056]">{t('cta.send')}</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
