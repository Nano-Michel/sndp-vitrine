import type { FormEvent } from 'react'

export default function ProposerTerrain() {
  function onSubmit(e: FormEvent) {
    e.preventDefault()
    alert('Merci, votre terrain a été soumis à l\'étude. Un conseiller vous recontactera.')
  }

  return (
    <section id="proposer" className="section">
      <div className="container-wrap">
        <h2 className="section-title">Vous souhaitez vendre un terrain à SNDP ?</h2>
        <p className="section-subtitle">SNDP étudie l’acquisition de terrains et domaines partout au Cameroun.</p>
        <form onSubmit={onSubmit} className="mt-8 grid gap-6 lg:grid-cols-2 animate-fade-up">
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm font-medium text-slate-700">Nom & prénom</label>
            <input id="name" name="name" required className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary]" />
          </div>
          <div className="space-y-1">
            <label htmlFor="phone" className="text-sm font-medium text-slate-700">Téléphone / WhatsApp</label>
            <input id="phone" name="phone" type="tel" required className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary]" />
          </div>
          <div className="space-y-1">
            <label htmlFor="region" className="text-sm font-medium text-slate-700">Région / localité</label>
            <input id="region" name="region" required className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary]" />
          </div>
          <div className="space-y-1">
            <label htmlFor="superficie" className="text-sm font-medium text-slate-700">Superficie approximative</label>
            <input id="superficie" name="superficie" required className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary]" />
          </div>
          <div className="space-y-1">
            <label htmlFor="type" className="text-sm font-medium text-slate-700">Type de terrain</label>
            <select id="type" name="type" className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary]">
              <option>Champ</option>
              <option>Domaine</option>
              <option>Terrain nu</option>
              <option>Lot urbain</option>
              <option>Autre</option>
            </select>
          </div>
          <div className="space-y-1 lg:col-span-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-700">Informations complémentaires</label>
            <textarea id="message" name="message" rows={4} className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary]"></textarea>
          </div>
          <div className="space-y-1 lg:col-span-2">
            <label htmlFor="fichiers" className="text-sm font-medium text-slate-700">Fichiers (photos, plans)</label>
            <input id="fichiers" name="fichiers" type="file" multiple className="w-full rounded-md border border-slate-300 px-3 py-2 bg-white" />
          </div>
          <div className="lg:col-span-2">
            <button type="submit" className="btn bg-[#0B3B6E] text-white hover:bg-[#0D477F] active:bg-[#093056]">Envoyer mon terrain à l’étude</button>
          </div>
        </form>
      </div>
    </section>
  )
}
