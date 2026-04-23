import { useEffect, useRef, useState } from "react";
import { CountUp } from "countup.js";

const stats = [
  {
    value: 12482,
    label: "Incendios Controlados",
    className: "bg-[#1b1c1c] p-10 border-l-4 border-[#c1272d]",
    valueClass: "text-6xl font-headline font-black block mb-2 text-[#c1272d]",
  },
  {
    value: 35901,
    label: "Emergencias Médicas",
    className: "bg-[#1b1c1c] p-10 border-l-4 border-[#cdcd00]",
    valueClass: "text-6xl font-headline font-black block mb-2 text-[#cdcd00]",
  },
  {
    value: 8115,
    label: "Rescates Exitosos",
    className: "bg-[#1b1c1c] p-10 border-l-4 border-[#b3c5ff]",
    valueClass: "text-6xl font-headline font-black block mb-2 text-[#b3c5ff]",
  },
  {
    value: 35,
    label: "Años de Servicio",
    className: "bg-[#1b1c1c] p-10 border-l-4 border-zinc-400",
    valueClass: "text-6xl font-headline font-black block mb-2 text-white",
  },
];

function StatCard({ stat, index, isVisible }) {
  const ref = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    counterRef.current = new CountUp(ref.current, stat.value, {
      duration: 2.5,
      separator: ",",
      useEasing: true,
    });
  }, [stat.value]);

  useEffect(() => {
    if (isVisible && counterRef.current && !counterRef.current.error) {
      const delay = index * 150; // cada tarjeta arranca con un pequeño retraso
      setTimeout(() => counterRef.current.start(), delay);
    }
  }, [isVisible, index]);

  return (
    <div className={stat.className}>
      <span ref={ref} className={stat.valueClass}>
        0
      </span>
      <p className="text-zinc-400 font-headline font-bold uppercase tracking-tighter text-sm">
        {stat.label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // se dispara solo una vez
        }
      },
      { threshold: 0.2 } // inicia cuando el 20% de la sección es visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div
        data-aos="fade-right"
        className="max-w-screen-2xl mx-auto px-8 relative z-10"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-[#c1272d]"></div>
              <span className="font-headline font-bold uppercase tracking-widest text-xs text-red-600">
                Estadísticas Nacionales
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-red-500 leading-none">
              ATENCIONES 2025
            </h2>
          </div>
          <p className="text-zinc-500 font-body max-w-md text-right">
            Registro actualizado de las operaciones realizadas por nuestra
            compañía en Chancay.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1"
        >
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
