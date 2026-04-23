import React, { useState } from "react";
import HeroOrganigrama from "../components/HeroOrganigrama";

// ─── Estilos que Tailwind no cubre (valores exactos de color/sombra) ──────────
const customStyles = {
  glowPrimary:   { boxShadow: "0 0 20px rgba(193,39,45,.15)" },
  glowSecondary: { boxShadow: "0 0 20px rgba(42,67,134,.15)" },
  orgLineV:      { width: "2px", background: "linear-gradient(to bottom, #c4c6cf, #e6e6e6)" },
};

// ─── Material Symbol ──────────────────────────────────────────────────────────
const Icon = ({ name, className = "" }) => (
  <span className={`material-symbols-outlined ${className}`}>{name}</span>
);

// ─── Tarjeta de departamento ──────────────────────────────────────────────────
const DeptCard = ({ icon, title, grado, nombre }) => (
  <div className="flex flex-col items-center">
    {/* conector vertical — oculto en móvil */}
    <div style={customStyles.orgLineV} className="hidden sm:block h-10 mb-4" />

    <div className="group w-full bg-white border border-gray-200 border-t-4 border-t-[#c1272d] rounded-sm p-4 md:p-6 shadow-sm hover:-translate-y-1 transition-transform duration-300">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 bg-red-50 rounded flex items-center justify-center shrink-0">
          <Icon name={icon} className="text-[#c1272d] text-xl" />
        </div>
        <h5 className="font-headline font-extrabold text-sm uppercase text-[#1a1c1e] tracking-tight leading-snug whitespace-pre-line">
          {title}
        </h5>
      </div>
      <div className="border-t border-gray-100 pt-3">
        <p className="text-[10px] font-bold text-[#c1272d] uppercase tracking-widest mb-0.5">{grado}</p>
        <p className="text-xs text-[#1a1c1e] font-semibold">{nombre}</p>
      </div>
    </div>
  </div>
);

const departamentos = [
  { icon: "inventory_2",      title: "Jefe de\nAdministración y Voluntariado", grado: "SECCIONARIO CBP",  nombre: "Gianella Yanac Villareal"  },
  { icon: "groups",           title: "Jefe\nde\nImagen",                        grado: "SUBTENIENTE CBP", nombre: "Martín Morales Ramos"       },
  { icon: "fire_truck",       title: "Jefe\nde\nMaquinas",                      grado: "TENIENTE CBP",    nombre: "Teófilo Tafur Cerda"        },
  { icon: "engineering",      title: "Jefe de\nServicios\nGenerales",           grado: "SECCIONARIO CBP", nombre: "Hans Vargas Vásquez"        },
  { icon: "school",           title: "Jefe de\nInstrucción y Entrenamiento",    grado: "TNTE. BRIG. CBP", nombre: "Gabriel Dulando Vega"       },
  { icon: "medical_services", title: "Jefe de\nAtención Pre-Hospitalaria",      grado: "SUBTENIENTE CBP", nombre: "Katerine Marín Espinoza"    },
];

// ─── Organigrama ──────────────────────────────────────────────────────────────
const OrgChart = () => (
  <section className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-8 py-12 md:py-24">
    <div className="relative">

      {/* ── Nivel 1 – Primer Jefe ── */}
      <div data-aos="fade-right" className="flex flex-col items-center mb-8">
        <div
          style={customStyles.glowPrimary}
          className="bg-white p-2 rounded-sm border border-red-100 overflow-hidden w-full max-w-lg"
        >
          <div className="bg-[#c1272d] p-4 md:p-6 flex items-center gap-4 md:gap-8 text-white flex-wrap">
            <div className="relative shrink-0">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-white/20 rounded-full flex items-center justify-center border-4 border-white/30 overflow-hidden">
                <Icon name="person" className="text-4xl md:text-5xl text-white/40" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-md">
                <Icon name="verified" className="text-[#c1272d] text-base" />
              </div>
            </div>
            <div>
              <h2 className="font-headline font-extrabold text-lg md:text-2xl uppercase tracking-tighter">
                Primer Jefe de Unidad
              </h2>
              <p className="font-body text-sm text-white/90 font-bold uppercase tracking-widest mt-1">
                Tnt. Brig. CBP. Rafael Dulanto Vega
              </p>
            </div>
          </div>
        </div>
        <div style={customStyles.orgLineV} className="h-12" />
      </div>

      {/* ── Nivel 2 – Segundo Jefe ── */}
      <div data-aos="fade-right" className="flex flex-col items-center mb-8">
        <div
          style={customStyles.glowPrimary}
          className="bg-white p-2 rounded-sm border border-red-100 overflow-hidden w-full max-w-lg"
        >
          <div className="bg-[#2a4386] p-4 md:p-6 flex items-center gap-4 md:gap-8 text-white flex-wrap">
            <div className="relative shrink-0">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-white/20 rounded-full flex items-center justify-center border-4 border-white/30 overflow-hidden">
                <Icon name="person" className="text-4xl md:text-5xl text-white/40" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-md">
                <Icon name="verified" className="text-[#c1272d] text-base" />
              </div> 
            </div>
            <div>
              <h2 className="font-headline font-extrabold text-lg md:text-2xl uppercase tracking-tighter">
                Segundo Jefe de Unidad
              </h2>
              <p className="font-body text-sm text-white/90 font-bold uppercase tracking-widest mt-1">
                Tnt. CBP. Magaly Villalobos Reyes
              </p>
            </div>
          </div>
        </div>
        <div style={customStyles.orgLineV} className="h-12" />
      </div>

      {/* ── Nivel 3 – Jefes de Sección ── */}
      <div data-aos="fade-right" className="flex flex-col items-center mb-8 md:mb-16 relative">
        <div className="bg-white/95 backdrop-blur-md px-6 py-4 md:p-6 min-w-[200px] md:min-w-[280px] text-center border-t-4 border-[#6b6b00] rounded-sm shadow-sm">
          <h4 className="font-headline font-extrabold text-base md:text-lg text-[#1a1c1e] uppercase tracking-tight">
            Jefes de sección
          </h4>
          <div className="h-px w-12 bg-gray-200 mx-auto mt-2" />
        </div>

        {/* línea vertical */}
        <div style={customStyles.orgLineV} className="h-8 md:h-16" />

        {/* barra horizontal — solo sm+ */}
        <div className="absolute bottom-0 w-full hidden sm:flex justify-center">
          <div className="h-0.5 bg-[#c4c6cf] w-[85%]" />
        </div>
      </div>

      {/* ── Nivel 4 – Departamentos ── */}
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto"
      >
        {departamentos.map((d) => (
          <DeptCard key={d.icon} {...d} />
        ))}
      </div>

    </div>
  </section>
);

// ─── Tarjeta Misión / Visión ──────────────────────────────────────────────────
const MisionVisionCard = ({ label, text }) => (
  <div className="group relative bg-white border border-gray-100 rounded-lg p-8 shadow-sm overflow-hidden">
    <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 group-hover:bg-red-100 rounded-bl-full -mr-8 -mt-8 transition-colors duration-300" />
    <h6 className="font-headline font-black text-[#c1272d] uppercase text-xs tracking-widest mb-3">{label}</h6>
    <p className="font-body text-sm text-[#44474e] leading-relaxed">{text}</p>
  </div>
);

// ─── Sección Info ─────────────────────────────────────────────────────────────
const InfoSection = () => (
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

// ─── Página ───────────────────────────────────────────────────────────────────
export default function Organigrama() {
  return (
    <div className="relative min-h-screen bg-[#f8f9fa] text-[#1a1c1e] font-body overflow-hidden">
      {/* fondo de puntos */}
      <div
        className="absolute inset-0 z-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <HeroOrganigrama />
      <OrgChart />
      <InfoSection />
    </div>
  );
}
