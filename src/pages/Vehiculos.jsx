import { NavLink } from "react-router-dom";
import { IoIosWater } from "react-icons/io";
import { MdMedicalServices, MdMonitorHeart, MdConstruction, MdHeight, MdLocalFireDepartment } from "react-icons/md";


const vehicles = [
  {
    id: 1,
    badge: "M80-1",
    name: "Maquina 80-1",
    description: "Autobomba moderna y multipropósito, diseñada para una respuesta rápida y eficiente en emergencias, equipada con tecnología y seguridad de alto nivel.",
    image: "m80-1.png",
    icons: [IoIosWater, MdLocalFireDepartment],
  },
  {
    id: 2,
    badge: "AMB-80",
    name: "Ambulancia-80",
    description: "Ambulancia de tipo II. Cuenta con un equipo especializado para traslados medicos.",
    image: "amb-80.png",
    icons: [MdMedicalServices, MdMonitorHeart],
  },
  {
    id: 3,
    badge: "AUX-80",
    name: "AUXILIAR-80",
    description: "Vehículo ligero de apoyo, diseñado para acceso rápido y transporte de personal y equipos en zonas de difícil alcance.",
    image: "auxiliar.jpeg",
    icons: [MdConstruction, MdHeight],
  },
];

// ─── Hero ────────────────────────────────────────────────────────────────────
function VehiculosHero() {
  return (
    <section className="px-8 max-w-screen-2xl mx-auto mb-20">
      <div className="relative overflow-hidden bg-[#1b1c1c] md:p-12 lg:p-20 rounded-4xl  p-3">
        {/* Línea izquierda */}
        <div className="absolute left-0 top-0 w-1 h-full bg-[#c1272d]"></div>

        {/* Contenido */}
        <div className="max-w-3xl relative z-10">
          <span className="text-xs font-bold tracking-[0.2em] text-[#ffb3ae] uppercase mb-4 block font-headline">
            Flota Operativa
          </span>
          <h1 className="text-5xl lg:text-7xl font-black font-headline tracking-tighter mb-6 text-white">
            FUERZA EN <span className="text-[#c1272d]">MOVIMIENTO</span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed mb-8 font-body">
            Nuestra flota está compuesta por unidades especializadas , diseñadas para
            responder ante incendios, rescates complejos y emergencias médicas en todo Chancay.
          </p>
          <div className="flex gap-4 items-center">
            <div className="flex flex-col">
              <span className="text-4xl font-black font-headline text-[#c1272d]">24/7</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Disponibilidad</span>
            </div>
          </div>
        </div>

        {/* Imagen de fondo decorativa */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none grayscale contrast-125"
          style={{
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBeXjaN71DFHxwGK-T0UpfIM3_8zjCEf3sMoFxBL4Tu36L-D7Zl5sO5xXVYBSbbBS900aq7tP_G9M4y2CVNs82UQGKaS3r6r1-w2_GSYJURJ0TujsevURQfAS4uKmtkJxrDpwzwYBY8k0jvU3YMd7ElfmwhYr2Kx76ncTUfpZ26U-jqLAuF7d9GkR4pIIdtKxRAV8JMvWVB2QL6yhlGyQG7LfP1en5NftAoAae48nAfaXLsTMoFYP2qsuz-gjtDjgfB-R7rEjd7NSoC')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </section>
  );
}

// ─── Vehicle Grid ─────────────────────────────────────────────────────────────
function VehicleGrid() {
  return (
    <section className="px-8 max-w-screen-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {vehicles.map((v) => (
          <div key={v.id} className="group relative bg-[#1b1c1c] rounded-sm overflow-hidden flex flex-col shadow-xl">
            {/* Imagen */}
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src={v.image}
                alt={v.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-[#c1272d] text-white text-[10px] font-bold px-3 py-1 tracking-widest uppercase">
                {v.badge}
              </div>
            </div>

            {/* Contenido */}
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-black font-headline tracking-tight mb-3 uppercase text-white">
                {v.name}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-body">
                {v.description}
              </p>
              <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center">
                <div className="flex gap-3">
                  {v.icons.map((IconComponent, i) => (
                    <IconComponent key={i} className="text-2xl text-[#ffb3ae]" />
                  ))}
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────
function VehiculosCTA() {
  return (
    <section className="px-8 max-w-screen-2xl mx-auto mt-24">
      <div className="bg-[#c1272d] p-12 lg:p-16 rounded-sm text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(circle at center, white, transparent)" }}></div>
        <h2 className="text-4xl lg:text-5xl font-black font-headline tracking-tighter text-white mb-6 relative z-10">
          MÁS QUE MÁQUINAS, ES <span className="text-white/70">SERVICIO</span>
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-10 text-lg relative z-10">
          Nuestros vehículos son herramientas vitales, pero el valor real reside en los hombres y mujeres
          voluntarios que los operan con valentía cada día.
        </p>

      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Vehiculos() {
  return (
    <div className="pt-32 pb-24" data-aos="fade-up">
      <VehiculosHero />
      <VehicleGrid />
      <VehiculosCTA />

    </div>
  );
}