import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/5 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-12 gap-8 max-w-screen-2xl mx-auto">
        {/* Logo y dirección */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <img src="logo.png" alt="Bomberos Chancay" className="h-14 w-auto" />
          <p className=" text-xs font-body text-center md:text-left leading-relaxed">
            Santiago Távara Renovales — Chancay N° 80<br />
            Chancay, Lima, Perú
          </p>
        </div>

        {/* Emergencias destacada */}
        <div className="flex flex-col items-center gap-1">
          <span className=" text-xs font-body uppercase tracking-widest">Emergencias</span>
          <a
            href="tel:017221738"
            className="text-[#c1272d] font-headline font-extrabold text-4xl tracking-tighter hover:text-[#ff4444] transition-colors"
          >
            LLAMANOS
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
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@bomberoschancay80"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/30 transition-all"
              aria-label="TikTok"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
              </svg>
            </a>

          </div>
          <p className="text-white text-xs font-body text-center md:text-right leading-relaxed">
            © 2026 CGBVP — Compañía de Bomberos Chancay N° 80<br />
            Hecho por el Ärea de Instruccion 2026 <br />
            Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer >
  );
}