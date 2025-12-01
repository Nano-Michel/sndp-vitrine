import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="container-wrap flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo SNDP" className="h-8 w-auto" />
          <span className="text-lg font-semibold tracking-wide">SNDP</span>
          <span className="sr-only">Aller à l'accueil</span>
        </a>
        <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-8">
          <a href="#terrains" className="text-sm font-medium text-slate-700 hover:text-[--color-primary] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-primary] rounded">Terrains</a>
          <a href="#pourquoi" className="text-sm font-medium text-slate-700 hover:text-[--color-primary] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-primary] rounded">Pourquoi SNDP ?</a>
          <a href="#diaspora" className="text-sm font-medium text-slate-700 hover:text-[--color-primary] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-primary] rounded">Diaspora</a>
          <a href="#contact" className="text-sm font-medium text-slate-700 hover:text-[--color-primary] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-primary] rounded">Contact</a>
          <a
            href="https://wa.me/237000000000?text=Bonjour%20SNDP"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold leading-6 text-white bg-[#0B3B6E] hover:bg-[#0D477F] active:bg-[#093056] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3B6E]"
          >
            Discuter sur WhatsApp
          </a>
        </nav>
        <button aria-label="Ouvrir le menu" className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-slate-200" onClick={() => setOpen(v => !v)}>
          <span className="sr-only">Ouvrir le menu</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-slate-700"><path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200">
          <div className="container-wrap py-3 flex flex-col gap-2">
            <a onClick={() => setOpen(false)} href="#terrains" className="py-2 text-sm font-medium text-slate-700">Terrains</a>
            <a onClick={() => setOpen(false)} href="#pourquoi" className="py-2 text-sm font-medium text-slate-700">Pourquoi SNDP ?</a>
            <a onClick={() => setOpen(false)} href="#diaspora" className="py-2 text-sm font-medium text-slate-700">Diaspora</a>
            <a onClick={() => setOpen(false)} href="#contact" className="py-2 text-sm font-medium text-slate-700">Contact</a>
            <a
              href="https://wa.me/237000000000?text=Bonjour%20SNDP"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold leading-6 text-white bg-[#0B3B6E] hover:bg-[#0D477F] active:bg-[#093056] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B3B6E] mt-2"
            >
              Discuter sur WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
