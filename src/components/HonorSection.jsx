export default function HonorSection() {
    return (
        <section class="relative h-[716px] flex items-end overflow-hidden">
            <div class="absolute inset-0 z-0">
                <img class="w-full h-full object-cover"
                    data-alt="Cinematic wide shot of a vintage red fire engine parked inside a historic fire station with dramatic lighting and smoke"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqN1z2VBFfhxOlJbwuc3Sfg_jnCYpIMsmdMzT6jlz5pbH64S3Fcpv5SlyDcCRK8VyJWal9ZmJU_cfcFUkySNGPPCqYK4-0pUVG-8ctVOp15U-JgJDepYhuud_6Zj5Xmr8aMX-b3X-LFro08RrhcwRt4AFtXEJZ-7jZ45ZGoyWWWOtCb7HIZZ2amPNTDLh33ddGI90Jv7qeJ0uxXckyyo_svMs-9nos2qA3IyEoxuRDkH9v_YeK9tWpCuRub3da5TrhtiZ-4kmikebV" />
                <div class="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
                <div class="absolute inset-0 scrim-gradient"></div>
            </div>
            <div class="relative z-10 max-w-screen-2xl mx-auto px-8 pb-16 w-full">
                <div class="inline-block border-l-4 border-primary-container pl-6 mb-4">
                    <span class="font-headline font-bold tracking-widest text-xs uppercase text-primary">Nuestra
                        Identidad</span>
                    <h1 class="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter text-on-surface mt-2">
                        HONOR Y <br /> <span class="text-primary-container">DISCIPLINA</span>
                    </h1>
                </div>
                <p class="max-w-2xl text-lg text-zinc-400 leading-relaxed font-light">
                    Salvaguardando vidas y propiedades desde hace más de siglo y medio. El Cuerpo General de Bomberos
                    Voluntarios del Perú representa el máximo sacrificio y vocación de servicio.
                </p>
            </div>
        </section>
    );
}