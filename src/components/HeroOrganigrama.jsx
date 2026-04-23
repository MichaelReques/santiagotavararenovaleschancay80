export default function HeroOrganigrama() {
    return (
        <section className=" relative h-[500px] flex items-end overflow-hidden " data-aos="fade-down">

            {/* Imagen de fondo — cambia esta URL por la que quieras */}
            <div className="absolute inset-0 z-0">
                <img
                    src="orga.jpg"
                    alt="Bomberos Chancay"
                    className="w-full h-full object-cover object-top brightness-[0.35] pt-10"
                />
                {/* Gradiente de izquierda */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/9 via-black/5 to-transparent"></div>
                {/* Gradiente de abajo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
            {/* Contenido */}
            <div className="relative z-10 max-w-screen-2xl mx-auto px-8 pb-16 w-full">

                {/* Línea decorativa + etiqueta */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-[2px] bg-[#c1272d]"></div>
                    <span className="text-[#ffb3ae] font-headline font-bold uppercase tracking-[0.25em] text-xs">
                        Compañía Chancay N° 80
                    </span>
                </div>

                {/* Título */}
                <h1 className="font-headline font-black tracking-tighter leading-none text-white pt-10">
                    <span className="block text-6xl md:text-8xl text-xl">ESTRUCTURA</span>
                    <span className="block text-6xl md:text-8xl text-[#c1272d]">OPERATIVA</span>
                </h1>

                {/* Descripción con borde izquierdo */}
                <div className="border-l-2 border-[#c1272d] pl-4 max-w-xl">
                    <p className="text-zinc-300 text-base leading-relaxed font-body">
                        Organigrama jerárquico de la Compañía de Bomberos Voluntarios Chancay N° 80.
                        Liderazgo local para la seguridad ciudadana.
                    </p>
                </div>

                {/* Stats rápidas */}
                <div className="flex gap-10 mt-8">
                    <div>
                        <span className="block text-3xl font-headline font-black text-[#c1272d]">35</span>
                        <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Años de servicio</span>
                    </div>
                    <div className="w-px bg-white/10"></div>
                    <div>
                        <span className="block text-3xl font-headline font-black text-[#c1272d]">24/7</span>
                        <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Disponibilidad</span>
                    </div>
                    
                   
                </div>

            </div>

            

        </section>
    );
}