import type { FormEvent } from 'react'

export default function Contact() {
  function onSubmit(e: FormEvent) {
    e.preventDefault()
    alert('Merci pour votre message. Nous vous recontacterons très vite.')
  }
  return (
    <section id="contact" className="section bg-[--color-graybg]">
      <div className="container-wrap">
        <h2 className="section-title">Contact SNDP</h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="card p-6 animate-fade-up">
            <dl className="text-sm text-slate-700 space-y-2">
              <div><dt className="font-semibold">WhatsApp</dt><dd><a className="text-[--color-primary] hover:underline" href="https://wa.me/237000000000" target="_blank" rel="noreferrer">+237 000 000 000</a></dd></div>
              <div><dt className="font-semibold">Téléphone</dt><dd>+237 000 000 000</dd></div>
              <div><dt className="font-semibold">Email</dt><dd><a className="text-[--color-primary] hover:underline" href="mailto:contact@sndp.cm">contact@sndp.cm</a></dd></div>
              <div><dt className="font-semibold">Localisation</dt><dd>Yaoundé, Cameroun</dd></div>
            </dl>
            <div className="mt-4">
              <a className="btn bg-[#0B3B6E] text-white hover:bg-[#0D477F] active:bg-[#093056]" href="https://wa.me/237000000000?text=Bonjour%20SNDP" target="_blank" rel="noreferrer">Discuter sur WhatsApp</a>
            </div>
          </div>
          <form onSubmit={onSubmit} className="card p-6 grid gap-4 animate-fade-up" style={{animationDelay: '.05s'}}>
            <div className="space-y-1">
              <label htmlFor="c-name" className="text-sm font-medium text-slate-700">Nom</label>
              <input id="c-name" name="name" required className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary]" />
            </div>
            <div className="space-y-1">
              <label htmlFor="c-email" className="text-sm font-medium text-slate-700">Email</label>
              <input id="c-email" type="email" name="email" required className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary]" />
            </div>
            <div className="space-y-1">
              <label htmlFor="c-message" className="text-sm font-medium text-slate-700">Message</label>
              <textarea id="c-message" name="message" rows={4} required className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary]"></textarea>
            </div>
            <div>
              <button type="submit" className="btn bg-[#0B3B6E] text-white hover:bg-[#0D477F] active:bg-[#093056]">Envoyer</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
