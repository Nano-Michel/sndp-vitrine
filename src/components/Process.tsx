import { useTranslation } from 'react-i18next'

export default function Process() {
  const { t } = useTranslation()
  const steps = t('process.steps', { returnObjects: true }) as Array<{ title: string; desc: string }>
  return (
    <section id="process" className="section bg-[--color-graybg]">
      <div className="container-wrap">
        <h2 className="section-title">{t('process.title')}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="card p-6 hover-lift animate-fade-up" style={{animationDelay: `${i * 0.05}s`}}>
              <div className="h-10 w-10 rounded-full bg-[--color-primary] text-white flex items-center justify-center font-bold">{i+1}</div>
              <h3 className="mt-3 text-base font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
