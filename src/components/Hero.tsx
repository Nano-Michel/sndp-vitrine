export default function Hero() {
  return (
    <section id="hero" className="section bg-[--color-graybg]">
      <div className="container-wrap grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase text-slate-900 animate-fade-up">
            SNDP – Société Nationale des Domaines Privés
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg animate-fade-up" style={{animationDelay: '.05s'}}>
            Acquisition, sécurisation et mise en valeur de terrains au Cameroun, pour les résidents et la diaspora.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 animate-fade-up" style={{animationDelay: '.1s'}}>
            <a
              href="#terrains"
              className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold leading-6 text-white bg-[#0B3B6E] hover:bg-[#0D477F] active:bg-[#093056] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3B6E]"
            >
              Voir les terrains disponibles
            </a>
            <a href="#proposer" className="btn btn-outline">Proposer un terrain à SNDP</a>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Titres sécurisés – Accompagnement notarial – Processus transparent
          </p>
        </div>
        <div className="hidden md:block">
          <div className="relative w-full aspect-[4/3] rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden animate-fade-up" style={{animationDelay: '.15s'}}>
            <svg aria-hidden viewBox="0 0 400 300" className="absolute inset-0 h-full w-full">
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#E2E8F0"/>
                  <stop offset="100%" stopColor="#F8FAFC"/>
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="400" height="300" fill="url(#g1)" />
              <g stroke="#0B3B6E" strokeWidth="2" fill="none" opacity="0.6">
                <path d="M120 40c60 20 120 20 160 0 10 30 10 80 0 110-40 20-100 20-160 0-12-28-12-85 0-110z"/>
                <path d="M140 70c40 15 80 15 110 0 7 20 7 55 0 75-30 14-70 14-110 0-8-20-8-55 0-75z"/>
              </g>
              <text x="200" y="155" textAnchor="middle" className="fill-slate-500" fontSize="14">Illustration Cameroun / Domaines</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
