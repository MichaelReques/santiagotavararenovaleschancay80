import { NavLink } from "react-router-dom";

const historia = [
  { year: "1990",        title: "El inicio del sueño",      desc: "Se conforma la Comisión Pro Bomberos de Chancay, liderada por James de la Puente junto a vecinos comprometidos. La comunidad transforma una necesidad en acción.", img: "n1.png", reverse: false },
  { year: "1991",        title: "Fundación de la Compañía", desc: 'El 4 de mayo se oficializa la creación de la Compañía de Bomberos "Santiago Tavares Renovales N°80". Se nombra como Primer Jefe a Manuel Muñoz Nájar Nuñez y Segundo Jefe a Fernando Parodi Tong.', img: "n2.png", reverse: true },
  { year: "1991 - 1992", title: "Primeros pasos",           desc: "Años marcados por el esfuerzo y la solidaridad. Se cede un terreno para iniciar las operaciones y brindar servicio a la comunidad.", img: "n3.png", reverse: false },
  { year: "1992 - 1993", title: "Establecimiento",          desc: "La compañía se traslada frente al Palacio Municipal de Chancay. En 1993 se establece en su actual ubicación: Miguel Grau 272, incorporando línea telefónica y radio base.", img: "n4.png", reverse: true },
  { year: "1994",        title: "Crecimiento y apoyo",      desc: "Se obtiene la primera ambulancia gracias a gestión pública. Además, se apoya en la reactivación de la Compañía de Bomberos de Huaral. Se recibe una nueva unidad: Nissan Safari.", img: "n5.png", reverse: false },
  { year: "1995",        title: "Modernización",            desc: "Se construyen las escaleras al segundo piso y se instala la primera central de comunicaciones del Norte Chico.", img: "n6.png", reverse: true },
  { year: "1996",        title: "Construcción",             desc: "Se inicia la edificación del segundo piso gracias al apoyo de la comunidad, fortaleciendo la infraestructura de la compañía.", img: "n7.png", reverse: false },
  { year: "2002",        title: "Nueva Etapa",              desc: "Asume como Primer Jefe Alfonso Rosas Vargas, manteniendo el nivel de servicio. Se inaugura la sala de máquinas techada, albergando múltiples unidades operativas.", img: "n8.png", reverse: true },
];

function HistoriaEvent({ year, title, desc, img, reverse }) {
  const imgBlock = (
    <div className="hidden md:block overflow-hidden rounded-sm h-64 shadow-2xl">
      <img src={img} className="w-full h-full object-cover" alt={title} />
    </div>
  );
  const textBlock = (
    <div className="bg-zinc-50 p-6 md:p-10 border border-zinc-100 hover:shadow-xl transition-shadow duration-500">
      <div className="text-[#c1272d] font-black text-3xl mb-2 font-headline">{year}</div>
      <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">{title}</h4>
      <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
  return (
    <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-20 items-center">
      <div className="absolute left-0 md:left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-[#c1272d]" />
      {reverse ? <>{imgBlock}{textBlock}</> : <>{textBlock}{imgBlock}</>}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden pt-16" data-aos="fade-down">
      <div className="absolute inset-0 z-0">
        <img src="mack-autobomba.jpg" alt="Bomberos Heroico" className="w-full h-full md:object-cover md:opacity-40 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#131314] via-[#131314]/80 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-12 bg-[#c1272d]" />
          <span className="text-[#c1272d] font-headline font-bold uppercase tracking-[0.3em] text-xs">Nuestra Identidad</span>
        </div>
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-black font-headline tracking-tighter mb-4 leading-none text-white">
          HONOR Y <br />
          <span className="text-[#c1272d]">DISCIPLINA</span>
        </h1>
        <p className="text-base md:text-xl text-white md:text-zinc-400 max-w-xl leading-relaxed">
          Salvaguardando vidas y propiedades desde hace más de siglo y medio. El Cuerpo General de Bomberos Voluntarios del Perú representa el máximo sacrificio y vocación de servicio.
        </p>
      </div>
    </section>
  );
}
function MisionVisionCard({ label, text }) {
  return (
    <div className="bg-white border border-gray-200 border-t-4 border-t-[#c1272d] p-6 rounded-sm shadow-sm">
      <h3 className="font-headline font-extrabold text-lg uppercase text-[#c1272d] mb-3">{label}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed">{text}</p>
    </div>
  );
}
// ─── Sección Info ─────────────────────────────────────────────────────────────
function InfoSection() {
  return (
    <section className="relative z-10 px-4 sm:px-8 py-12 md:py-24 bg-white/60 backdrop-blur-sm border-t border-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-headline font-extrabold text-2xl md:text-4xl tracking-tighter text-[#1a1c1e] mb-4 md:mb-6">
          Funciones Institucionales
        </h2>
        <p className="font-body text-[#44474e] text-base md:text-lg leading-relaxed mb-8 md:mb-10">
          La B-80 Chancay opera bajo los estándares del CGBVP, adaptando su estructura para una respuesta rápida ante emergencias en la zona portuaria y urbana.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <MisionVisionCard
            label="Misión"
            text="Salvaguardar la vida y propiedad de los ciudadanos de Chancay mediante la prevención, combate de incendios y atención de emergencias médicas."
          />
          <MisionVisionCard
            label="Visión"
            text="Ser una unidad de vanguardia tecnológica y operativa, referente en la costa central del país y pilar del desarrollo de Chancay."
          />
        </div>
      </div>
    </section>
  );
}
function HistoriaSection() {
  return (
    <section className="bg-white text-zinc-900 py-16 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto" data-aos="fade-left">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="h-1 w-12 bg-[#c1272d] mb-6" />
            <h2 className="text-4xl md:text-6xl font-black font-headline tracking-tighter uppercase leading-none">
              Nuestra Historia
            </h2>
            <p className="text-zinc-500 mt-6 font-medium">Un legado forjado en el fragor de la batalla contra el fuego y el servicio a la nación.</p>
          </div>
          <div className="text-8xl md:text-[12rem] font-black text-zinc-100 leading-none select-none">80</div>
        </div>
        <div className="relative border-l-2 border-zinc-100 ml-2 md:ml-0 space-y-16 md:space-y-24">
          {historia.map((e) => <HistoriaEvent key={e.year} {...e} />)}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto bg-zinc-900 text-white p-6 md:p-12 lg:p-20 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 rounded-sm shadow-2xl">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-black font-headline tracking-tight mb-4">
            ¿QUIERES SER PARTE DE LA <span className="text-[#c1272d]">HISTORIA</span>?
          </h2>
          <p className="text-zinc-400 max-w-xl">Buscamos hombres y mujeres comprometidos con el servicio desinteresado. El proceso de admisión está abierto para ciudadanos con vocación de servicio.</p>
        </div>
        <div className="flex gap-4 shrink-0">
          <NavLink to="/postula" className="bg-[#c1272d] text-white px-8 py-4 text-center font-bold uppercase tracking-widest text-sm hover:bg-[#a01f24] transition-all">
            Postular Ahora
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default function Nosotros() {
  return (
    <div>
      <HeroSection />
      <InfoSection />
      <HistoriaSection />
      <CTASection />
    </div>
  );
}