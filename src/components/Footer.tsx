export default function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200">
      <div className="container-wrap py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo SNDP" className="h-8 w-auto" />
            <div>
              <p className="text-sm font-semibold">SNDP – Société Nationale des Domaines Privés</p>
              <p className="text-xs text-slate-600">© SNDP – Tous droits réservés.</p>
            </div>
          </div>
          <nav className="flex items-center gap-4 text-sm text-slate-700">
            <a href="#" className="hover:text-[--color-primary]">Mentions légales</a>
            <a href="#" className="hover:text-[--color-primary]">Politique de confidentialité</a>
            <a href="mailto:contact@sndp.cm" className="hover:text-[--color-primary]">Email de contact</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
