import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/",            label: "Inicio"      },
  { to: "/nosotros",    label: "Nosotros"    },
  { to: "/vehiculos",   label: "Vehículos"   },
  { to: "/organigrama", label: "Organigrama" },
];

const navLinkClass = ({ isActive }) =>
  isActive
    ? "text-[#ffb3ae] border-b-2 border-[#c1272d] pb-1 font-bold font-headline transition-all duration-300"
    : "text-zinc-400 hover:text-white transition-colors font-headline";

const mobileNavLinkClass = ({ isActive }) =>
  isActive
    ? "block px-4 py-3 text-[#ffb3ae] font-bold font-headline border-l-4 border-[#c1272d] bg-white/5"
    : "block px-4 py-3 text-zinc-400 hover:text-white font-headline border-l-4 border-transparent hover:border-white/20 transition-all";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Cierra el menú cada vez que cambia la ruta
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 z-50 w-full bg-[#131314]/80 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-white/5">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo CGBVP" className="h-14 w-auto" />
        </NavLink>

        {/* Nav Links — desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} className={navLinkClass}>{label}</NavLink>
          ))}
        </nav>

        {/* Derecha: CTA + hamburguesa */}
        <div className="flex items-center gap-4">
          <NavLink
            to="/postula"
            className="bg-[#c1272d] text-white px-6 py-2 rounded-sm font-headline font-bold text-sm tracking-tight scale-95 active:scale-90 hover:brightness-110 transition-all"
          >
            Postula Aquí
          </NavLink>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-sm hover:bg-white/10 transition-colors"
            aria-label="Menú"
          >
            <span className={`block h-0.5 bg-white transition-all duration-300 ${open ? "w-5 rotate-45 translate-y-2" : "w-5"}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0 w-0" : "w-4"}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${open ? "w-5 -rotate-45 -translate-y-2" : "w-5"}`} />
          </button>
        </div>

      </div>

      {/* Menú móvil desplegable */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="flex flex-col py-2 border-t border-white/5 bg-[#131314]/95">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} className={mobileNavLinkClass}>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}