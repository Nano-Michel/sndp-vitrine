export default function Diaspora() {
  return (
    <section id="diaspora" className="section">
      <div className="container-wrap">
        <h2 className="section-title">Vous vivez au Canada, en Europe ou aux États-Unis ?</h2>
        <p className="section-subtitle">Achat de parcelles à distance, dossiers complets pour les banques et accompagnement à chaque étape.</p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          <li className="card p-5 text-sm text-slate-700 hover-lift animate-fade-up">Dossiers complets pour les banques</li>
          <li className="card p-5 text-sm text-slate-700 hover-lift animate-fade-up" style={{animationDelay: '.05s'}}>Communication WhatsApp, email, visio</li>
          <li className="card p-5 text-sm text-slate-700 hover-lift animate-fade-up" style={{animationDelay: '.1s'}}>Visites et reportages photos/vidéos sur demande</li>
        </ul>
        <div className="mt-8">
          <a
            href="https://wa.me/237000000000?text=Bonjour%20SNDP%2C%20je%20suis%20dans%20la%20diaspora%20et%20souhaite%20des%20informations."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold leading-6 text-white bg-[#0B3B6E] hover:bg-[#0D477F] active:bg-[#093056] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3B6E]"
          >
            Parler à un conseiller diaspora
          </a>
        </div>
      </div>
    </section>
  )
}
