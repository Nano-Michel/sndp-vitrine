const steps = [
  { title: '1. Expression de besoin', desc: 'Contact via formulaire ou WhatsApp' },
  { title: '2. Sélection du terrain', desc: 'Propositions ciblées selon usage et budget' },
  { title: '3. Vérifications & dossiers juridiques', desc: 'Notaire, cadastre, titres' },
  { title: '4. Signature & accompagnement', desc: 'Contrats, paiement, suivi post-achat' },
]

export default function Process() {
  return (
    <section id="process" className="section bg-[--color-graybg]">
      <div className="container-wrap">
        <h2 className="section-title">Un processus simple en 4 étapes</h2>
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
