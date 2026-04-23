const tips = [
  {
    icon: "detector_status",
    title: "Instala Detectores de Humo",
    description: "Un detector de humo operativo reduce en un 50% las probabilidades de fatalidad en un incendio residencial.",
  },
  {
    icon: "fire_extinguisher",
    title: "Mantenimiento de Extintores",
    description: "Verifica la carga y fecha de vencimiento mensualmente. Ubícalos en lugares visibles y accesibles.",
  },
  {
    icon: "electric_bolt",
    title: "Revisión Eléctrica",
    description: "Evita sobrecargar los tomacorrientes y realiza una revisión técnica de tus cables cada 5 años.",
  },
];

export default function SeguridadSection() {
  return (
    <section style={{ background: "#0e0e0e", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }} className="py-24">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Columna izquierda — Tips */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div style={{ background: "#cdcd00" }} className="w-1 h-8"></div>
              <span style={{ color: "#cdcd00" }} className="font-headline font-bold uppercase tracking-widest text-xs">
                Prevención de Riesgos
              </span>
            </div>
            <h2 className="text-5xl font-headline font-black text-white mb-8">
              SEGURIDAD EN EL HOGAR
            </h2>
            <div className="space-y-6">
              {tips.map((tip, i) => (
                <div
                  key={i}
                  style={{ background: "rgba(31,32,32,0.6)", backdropFilter: "blur(12px)", borderLeft: "2px solid rgba(205,205,0,0.4)" }}
                  className="p-6 rounded-sm flex gap-6 items-start"
                >
                  <span style={{ color: "#cdcd00", fontSize: "2rem" }} className="material-symbols-outlined flex-shrink-0">
                    {tip.icon}
                  </span>
                  <div>
                    <h4 className="text-white font-headline font-bold text-lg mb-2">{tip.title}</h4>
                    <p className="text-zinc-400 text-sm">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha — Imagen */}
          <div className="relative flex items-center justify-center overflow-visible">
            <div style={{ background: "#1f2020" }} className="relative z-10 p-2 rounded-sm rotate-2 w-full max-w-lg">
              <img
                src="/img3.png"
                alt="Equipos de seguridad"
                className="w-full rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div style={{ background: "#c1272d", top: "-2.5rem", left: "-2.5rem", transform: "rotate(-6deg)" }} className="absolute z-20 text-white p-6 font-headline font-black text-4xl shadow-2xl whitespace-nowrap">
              ¿QUÉ HACER?
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}