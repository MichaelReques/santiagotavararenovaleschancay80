const tips = [
  {
    icon: "1",
    question: "¿Qué está pasando?",

  },
  {
    icon: "2",
    question: "Danos tu ubicación exacta",

  },
  {
    icon: "3",
    question: "¿Hay heridos o personas enriesgos,cuántos?",

  },
];

export default function SeguridadSection() {
  return (
    <section className="py-24">
      <div className="flex flex-col md:flex-row items-center mx-auto md:w-[70%] md:justify-center gap-10 md:gap-15">
        <video
          src="comoLlamar.mp4"
          controls
          playsInline
          className="w-sm  rounded-sm"
          data-aos="fade-down"
        />

        <div className="text-center">
          <h2 className="text-5xl font-bold" data-aos="fade-up-right">¿No sabes cómo llamarnos?<span className="text-red-600 font-black italic">¡Sigue estos pasos!</span></h2>
          <br />
          <div className="flex flex-col gap-5 text-center justify-center items-center w-d">
            <p className="bg-red-400 text-white font-bold text-xl rounded-2xl p-4 w-fit shadow-md" data-aos="fade-left">¿Qué está pasando?</p>
            <p className="bg-red-400 text-white font-bold text-xl rounded-2xl p-4 w-fit shadow-md" data-aos="fade-right">Danos tu ubicación exacta</p>
            <p className="bg-red-400 text-white font-bold text-xl rounded-2xl p-4 w-fit shadow-md" data-aos="fade-left">¿Hay heridos o personas enriesgos,cuántos?</p>
          </div>
        </div>
      </div>
    </section>
  );
}