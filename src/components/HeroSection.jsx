import { NavLink } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative h-[972px] flex items-center justify-start overflow-hidden" data-aos="fade-up">

      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0 pt-20">
        <img
          src="/image.png"
          alt="Bomberos en acción"
          className="w-full h-full object-cover object-[center_0%] grayscale-[0.2] brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#131314] via-[#131314]/40 to-transparent"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full">
        <div className="max-w-3xl space-y-6">

          {/* Subtítulo */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-[2px] bg-[#c1272d]"></div>
            <span className="font-headline font-bold uppercase tracking-[0.2em] text-[#ffb3ae] text-sm">
              Dios · Patria · Humanidad
            </span>
          </div>

          {/* Título principal */}
          <h1 className="text-6xl md:text-8xl font-headline font-black tracking-tighter leading-none text-white italic">
            "35 AÑOS SALVANDO VIDAS Y BIENES"
          </h1>

          {/* Descripción */}
          <p className="text-xl text-zinc-300 max-w-xl font-body leading-relaxed">
            Desde nuestra fundación, los bomberos de Chancay Nº80 han brindado coraje
            inquebrantable y respuesta de emergencia a cada familia de nuestro distrito.
          </p>

          {/* Botones */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="tel:+51017221738">
              <button className="bg-[#c1272d] text-white px-10 py-4 rounded-sm font-headline font-black text-lg flex items-center gap-3 hover:brightness-110 transition-all">
                <span className="material-symbols-outlined">call</span>
                LLÁMANOS
              </button>
            </a>
            <NavLink
              to="/nosotros"
              className="border border-white/30 text-white px-10 py-4 rounded-sm font-headline font-bold text-lg hover:bg-white/5 transition-all"
            >
              Conoce nuestra labor
            </NavLink>
          </div>

        </div>
      </div>

    </section>
  );
}