import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-12 gap-8 max-w-screen-2xl mx-auto">
        {/* Logo y dirección */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <img src="logo.png" alt="Bomberos Chancay" className="h-14 w-auto" />
          <p className="text-zinc-500 text-xs font-body text-center md:text-left leading-relaxed">
            Santiago Távara Renovales — Chancay N° 80<br />
            Chancay, Lima, Perú
          </p>
        </div>

        {/* Emergencias destacada */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-zinc-600 text-xs font-body uppercase tracking-widest">Emergencias</span>
          <a
            href="tel:116"
            className="text-[#c1272d] font-headline font-extrabold text-4xl tracking-tighter hover:text-[#ff4444] transition-colors"
          >
            116
          </a>
        </div>

        {/* Redes sociales y copyright */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4">

            {/* Facebook */}
            <a
              href="https://www.facebook.com/BomberosdeChancay"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/30 transition-all"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/bomberoschancay80/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/30 transition-all"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>

          </div>
          <p className="text-zinc-600 text-xs font-body text-center md:text-right leading-relaxed">
            © 2026 CGBVP — Compañía de Bomberos Chancay N° 80<br />
            Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}