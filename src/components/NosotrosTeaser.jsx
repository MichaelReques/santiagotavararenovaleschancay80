import { NavLink } from "react-router-dom";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { LiaEyeSolid } from "react-icons/lia";


export default function NosotrosTeaser() {
  return (
    <section className="py-24 bg-[#1b1c1c]">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Imagen */}
          <div className="lg:col-span-7 relative">
            <div className="aspect-video relative overflow-hidden rounded-sm group">
              <img
                src="/img2.png"
                alt="Estación de bomberos histórica"
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#c1272d]/10 mix-blend-overlay"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#c1272d] -z-10 opacity-20 blur-3xl"></div>
          </div>

          {/* Contenido */}
          <div className="lg:col-span-5 space-y-8">

            <div className="flex items-center gap-3">
              <div className="w-1 h-6 bg-[#c1272d]"></div>
              <span className="font-headline font-bold uppercase tracking-widest text-xs text-[#ffb3ae]">
                Nuestra Identidad
              </span>
            </div>

            <h2 className="text-5xl font-headline font-black text-white leading-none">
              HONOR Y SACRIFICIO AL SERVICIO DE LA SOCIEDAD
            </h2>

            <p className="text-zinc-400 leading-relaxed font-body text-lg">
              Somos voluntarios de Chancay, unidos por el compromiso de servir y proteger a 
              nuestra comunidad. Desde 1991, trabajamos con entrega y valentía para responder 
              ante emergencias y cuidar a quienes más lo necesitan.
            </p>

            <div className="space-y-4">
              {/* Misión */}
              <div className="flex items-start gap-4">
                <RiVerifiedBadgeLine className="text-[#ffb3ae] text-2xl"/>
                <div>
                  <h4 className="text-white font-headline font-bold uppercase text-sm">Misión</h4>
                  <p className="text-zinc-500 text-sm">
                    Prevenir y combatir incendios, realizar rescates y salvar vidas y bienes.
                  </p>
                </div>
              </div>

              {/* Visión */}
              <div className="flex items-start gap-4">
                <LiaEyeSolid className="text-[#ffb3ae] text-4xl"/>
                <div>
                  <h4 className="text-white font-headline font-bold uppercase text-sm">Visión</h4>
                  <p className="text-zinc-500 text-sm">
                    Ser una compañía referente en Chancay por su capacidad de respuesta, modernización constante y compromiso con la seguridad de la comunidad.
                  </p>
                </div>
              </div>
            </div>

            <NavLink
              to="/nosotros"
              className="inline-block border-b border-[#ffb3ae] text-[#ffb3ae] font-headline font-bold text-sm tracking-widest hover:text-white hover:border-white transition-all uppercase"
            >
              Conoce más sobre nosotros →
            </NavLink>

          </div>
        </div>
      </div>
    </section>
  );
}