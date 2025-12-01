type Terrain = {
  nom: string
  localisation: string
  superficie: string
  usage: string
  statut: 'Disponible' | 'Réservé' | 'En étude'
}

const terrains: Terrain[] = [
  { nom: 'Domaine Ntui – Bloc A', localisation: 'Ntui, Région du Centre', superficie: '50 hectares', usage: 'Agro / Résidentiel', statut: 'Disponible' },
  { nom: 'Domaine Nkoteng – Parcelle 3', localisation: 'Nkoteng, Région du Centre', superficie: '30 hectares', usage: 'Agro / Mixte', statut: 'En étude' },
  { nom: 'Domaine Edea – Secteur Nord', localisation: 'Edéa, Littoral', superficie: '80 hectares', usage: 'Industriel / Mixte', statut: 'Réservé' },
  { nom: 'Domaine Mbankomo – Zone B', localisation: 'Mbankomo, Centre', superficie: '20 hectares', usage: 'Résidentiel', statut: 'Disponible' },
  { nom: 'Domaine Kribi – Extension', localisation: 'Kribi, Sud', superficie: '65 hectares', usage: 'Tourisme / Résidentiel', statut: 'En étude' },
  { nom: 'Domaine Bafia – Vallon', localisation: 'Bafia, Centre', superficie: '42 hectares', usage: 'Agro', statut: 'Disponible' },
]

function StatutBadge({ statut }: { statut: Terrain['statut'] }) {
  const map = {
    'Disponible': 'bg-green-100 text-green-700',
    'Réservé': 'bg-amber-100 text-amber-700',
    'En étude': 'bg-slate-100 text-slate-700'
  }
  return <span className={`badge ${map[statut]}`}>{statut}</span>
}

export default function Terrains() {
  return (
    <section id="terrains" className="section">
      <div className="container-wrap">
        <h2 className="section-title">Quelques domaines actuellement disponibles</h2>
        <p className="section-subtitle">Aperçu de nos offres. Contactez-nous pour une sélection détaillée selon votre usage et votre budget.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {terrains.map((t) => (
            <article key={t.nom} className="card flex flex-col overflow-hidden hover-lift">
              <div className="relative w-full aspect-[16/9] bg-slate-100">
                <div className="absolute inset-0 grid place-items-center text-slate-500 text-xs">
                  <div className="flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="5" width="18" height="14" rx="2" ry="2" strokeWidth="2"/><circle cx="8.5" cy="11.5" r="2.5" strokeWidth="2"/><path d="M21 16l-5-5-4 4-2-2-5 5" strokeWidth="2"/></svg>
                    <span>Espace image (ajouter plus tard)</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-slate-900">{t.nom}</h3>
                  <StatutBadge statut={t.statut} />
                </div>
                <dl className="mt-3 space-y-1 text-sm text-slate-600">
                  <div className="flex justify-between"><dt className="font-medium">Localisation</dt><dd>{t.localisation}</dd></div>
                  <div className="flex justify-between"><dt className="font-medium">Superficie</dt><dd>{t.superficie}</dd></div>
                  <div className="flex justify-between"><dt className="font-medium">Usage recommandé</dt><dd>{t.usage}</dd></div>
                </dl>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <a href="#" className="btn btn-outline w-full">Voir la fiche</a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#contact" className="btn btn-outline">Voir tous les terrains</a>
        </div>
      </div>
    </section>
  )
}
