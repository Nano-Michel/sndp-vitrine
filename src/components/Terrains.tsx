import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { useTranslation } from 'react-i18next'

type Terrain = {
  nom: string
  localisation: string
  superficie: string
  usage: string
  statut: 'available' | 'reserved' | 'underReview'
  images?: string[]
}

const terrains: Terrain[] = [
  { nom: 'Domaine Ntui – Bloc A', localisation: 'Ntui, Région du Centre', superficie: '50 hectares', usage: 'Agro / Résidentiel', statut: 'available', images: ['https://picsum.photos/seed/ntui1/800/450','https://picsum.photos/seed/ntui2/800/450'] },
  { nom: 'Domaine Nkoteng – Parcelle 3', localisation: 'Nkoteng, Région du Centre', superficie: '30 hectares', usage: 'Agro / Mixte', statut: 'underReview', images: ['https://picsum.photos/seed/nkoteng1/800/450'] },
  { nom: 'Domaine Edea – Secteur Nord', localisation: 'Edéa, Littoral', superficie: '80 hectares', usage: 'Industriel / Mixte', statut: 'reserved', images: ['https://picsum.photos/seed/edea1/800/450','https://picsum.photos/seed/edea2/800/450','https://picsum.photos/seed/edea3/800/450'] },
  { nom: 'Domaine Mbankomo – Zone B', localisation: 'Mbankomo, Centre', superficie: '20 hectares', usage: 'Résidentiel', statut: 'available', images: ['https://picsum.photos/seed/mbankomo1/800/450'] },
  { nom: 'Domaine Kribi – Extension', localisation: 'Kribi, Sud', superficie: '65 hectares', usage: 'Tourisme / Résidentiel', statut: 'underReview', images: ['https://picsum.photos/seed/kribi1/800/450','https://picsum.photos/seed/kribi2/800/450'] },
  { nom: 'Domaine Bafia – Vallon', localisation: 'Bafia, Centre', superficie: '42 hectares', usage: 'Agro', statut: 'available', images: ['https://picsum.photos/seed/bafia1/800/450'] },
]

function StatutBadge({ statut }: { statut: Terrain['statut'] }) {
  const { t } = useTranslation()
  const map: Record<Terrain['statut'], string> = {
    available: 'bg-green-100 text-green-700',
    reserved: 'bg-amber-100 text-amber-700',
    underReview: 'bg-slate-100 text-slate-700'
  }
  const labelKey: Record<Terrain['statut'], string> = {
    available: 'status.available',
    reserved: 'status.reserved',
    underReview: 'status.underReview'
  }
  return <span className={`badge ${map[statut]}`}>{t(labelKey[statut])}</span>
}

export default function Terrains() {
  const { t } = useTranslation()
  return (
    <section id="terrains" className="section">
      <div className="container-wrap">
        <h2 className="section-title">{t('terrains.title')}</h2>
        <p className="section-subtitle">{t('terrains.subtitle')}</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {terrains.map((item) => (
            <article key={item.nom} className="group card flex flex-col overflow-hidden hover-lift">
              <div className="relative w-full aspect-[16/9] bg-slate-100">
                <div className="absolute left-3 top-3 z-10"><StatutBadge statut={item.statut} /></div>
                <button aria-label={t('ui.addFavorite')} className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow hover:bg-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-6.716-4.27-9.193-7.402C1.31 11.83 1.2 8.9 3.05 7.05c1.85-1.85 4.85-1.85 6.7 0L12 9.3l2.25-2.25c1.85-1.85 4.85-1.85 6.7 0 1.85 1.85 1.74 4.78.243 6.548C18.716 16.73 12 21 12 21z"/></svg>
                </button>
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  className="h-full"
                
                >
                  {(item.images && item.images.length > 0) ? (
                    item.images.map((src, idx) => (
                      <SwiperSlide key={idx}>
                        <img src={src} alt={`${item.nom} - ${idx + 1}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      </SwiperSlide>
                    ))
                  ) : (
                    <SwiperSlide>
                      <div className="absolute inset-0 grid place-items-center text-slate-500 text-xs">
                        <div className="flex items-center gap-2">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="5" width="18" height="14" rx="2" ry="2" strokeWidth="2"/><circle cx="8.5" cy="11.5" r="2.5" strokeWidth="2"/><path d="M21 16l-5-5-4 4-2-2-5 5" strokeWidth="2"/></svg>
                          <span>{t('image.placeholder')}</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  )}
                </Swiper>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-slate-900">{item.nom}</h3>
                  <StatutBadge statut={item.statut} />
                </div>
                <dl className="mt-3 space-y-1 text-sm text-slate-600">
                  <div className="flex justify-between"><dt className="font-medium">{t('terrains.location')}</dt><dd>{item.localisation}</dd></div>
                  <div className="flex justify-between"><dt className="font-medium">{t('terrains.area')}</dt><dd>{item.superficie}</dd></div>
                  <div className="flex justify-between"><dt className="font-medium">{t('terrains.usage')}</dt><dd>{item.usage}</dd></div>
                </dl>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <a href="#" className="btn btn-outline w-full">{t('terrains.viewSheet')}</a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#contact" className="btn btn-outline">{t('cta.viewAllTerrains')}</a>
        </div>
      </div>
    </section>
  )
}
