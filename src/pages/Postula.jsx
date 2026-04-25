import { useState } from "react";


const requisitos = [
    {
        num: "01",
        title: "Edad y Ciudadanía",
        desc: "Tener entre 15 y 29 años de edad. Ser peruano de nacimiento.",
    },
    {
        num: "02",
        title: "Trabajar y/o estudiar",
        desc: "Obligatorio uno de los dos o ambos.",
    },
    {
        num: "03",
        title: "Salud y Condición",
        desc: "Aptitud física y psicológica certificada. Estatura mínima (Varones 1.65m / Damas 1.60m).",
    },
    {
        num: "04",
        title: "Antecedentes",
        desc: "No contar de antecedentes policiales, penales y judiciales.",
    },
];

const proceso = [
    { icon: "description", label: "1. Registro y Evaluación de Perfil" },
    { icon: "psychology", label: "3. Examen de Aptitud Física" },
    { icon: "fitness_center", label: "2. Entrevista Personal" },
    { icon: "school", label: "4. Etapa de postulantado" },
];

const inputClass = "w-full bg-[#2a2a2a] border-0 border-b border-white/10 focus:outline-none focus:border-[#c1272d] text-white py-3 px-0 placeholder:text-zinc-700 transition-all text-sm px-2";
const labelClass = "text-[10px] font-bold uppercase tracking-widest text-zinc-500";

export default function Postula() {
    const [form, setForm] = useState({
        nombre: "",
        dni: "",
        email: "",
        telefono: "",
        talla: "",
        peso: "",
        nacimiento: "",
        residencia: "",
        grado: "",
        motivacion: "",
        cv: null,
        check1: false,
        check2: false,
    });
    const [enviado, setEnviado] = useState(false);

    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setForm(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!form.nombre || !form.dni || !form.email || !form.telefono) {
            alert("Por favor completa todos los campos obligatorios.");
            return ;
        }
        if (!form.check1 || !form.check2) {
            alert("Debes aceptar las declaraciones para continuar.");
            return;
        }
        setEnviado(true);
    }

    return (

        // color del fondo
        <div style={{ background: "#131314" }} className="pt-24 pb-20">

            {/* ── Hero ───────────────────────────────────────────────── */}
            <section className="relative h-[409px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="postulantes.jpg"
                        alt="Bomberos"
                        className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #131314, transparent)" }}></div>
                </div>
                <div className="relative z-10 text-center px-6">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="w-12 h-[2px] bg-[#c1272d]"></span>
                        <span className="text-[#ffb3ae] font-headline font-bold tracking-[0.2em] text-xs uppercase">
                            Convocatoria Nacional
                        </span>
                        <span className="w-12 h-[2px] bg-[#c1272d]"></span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter mb-4 text-white">
                        FORJA TU <span className="text-[#c1272d]">LEGADO</span>
                    </h1>
                    <p className="text-zinc-400 max-w-xl mx-auto text-lg leading-relaxed">
                        Únete a la fuerza más noble del país. El Cuerpo General de Bomberos Voluntarios del Perú busca
                        ciudadanos con vocación de servicio.
                    </p>
                </div>
            </section>

            {/* ── Grid principal ─────────────────────────────────────── */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-[-60px] relative z-20">

                {/* ── Columna izquierda ──────────────────────────────── */}
                <div className="lg:col-span-5 space-y-8">

                    {/* Requisitos */}
                    <div className="bg-[#1b1c1c] p-8 rounded-sm shadow-2xl border-l-4 border-[#c1272d]">
                        <h3 className="font-headline font-bold text-2xl mb-6 flex items-center gap-3 text-white">
                            <span className="material-symbols-outlined text-[#ffb3ae]">verified_user</span>
                            REQUISITOS MÍNIMOS
                        </h3>
                        <ul className="space-y-6">
                            {requisitos.map((r) => (
                                <li key={r.num} className="flex items-start gap-4">
                                    <span className="text-[#cdcd00] font-bold font-headline mt-1">{r.num}</span>
                                    <div>
                                        <p className="font-bold text-white">{r.title}</p>
                                        <p className="text-sm text-zinc-500">{r.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Proceso */}
                    <div className="bg-[#1b1c1c] p-8 rounded-sm border-l-4 border-[#2a4386]">
                        <h3 className="font-headline font-bold text-2xl mb-6 text-white">EL PROCESO</h3>
                        <div className="space-y-4">
                            {proceso.map((p, i) => (
                                <div key={i} className={`flex items-center gap-4 bg-[#131314]/50 p-4 rounded-sm ${i < proceso.length - 1 ? "border-b border-white/5" : ""}`}>
                                    <span className="material-symbols-outlined text-zinc-500">{p.icon}</span>
                                    <span className="text-sm font-medium text-white">{p.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                            
                    {/* Testimonial */}
                    <div className="relative group rounded-sm overflow-hidden h-64">
                        <img
                            src="bosque80.jpeg"
                            alt="Chancay80"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#c1272d]/40 mix-blend-multiply"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                            <p className="font-headline font-bold text-lg leading-tight text-white mb-1">
                                "NO BUSCAMOS HÉROES, BUSCAMOS VOCACIÓN."
                            </p>
                        </div>
                    </div>

                </div>

                {/* ── Columna derecha — Formulario ───────────────────── */}
                <div className="lg:col-span-7">
                    <div className="bg-[#1f2020] p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden">

                        {/* Icono decorativo fondo */}
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <span className="material-symbols-outlined" style={{ fontSize: "6rem" }}>assignment_ind</span>
                        </div>

                        <div className="relative z-10">
                            {enviado ? (
                                <div className="text-center py-16">
                                    <span className="material-symbols-outlined text-[#c1272d]" style={{ fontSize: "4rem" }}>check_circle</span>
                                    <h2 className="font-headline font-extrabold text-3xl mt-4 mb-2 text-white">¡Postulación Enviada!</h2>
                                    <p className="text-zinc-400">Nuestro equipo revisará tu solicitud y se comunicará contigo pronto.</p>
                                </div>
                            ) : (
                                <>
                                    <h2 className="font-headline font-extrabold text-3xl mb-2 text-white">FORMULARIO DE POSTULACIÓN</h2>
                                    <p className="text-zinc-500 mb-10">Completa todos los campos con información verídica para iniciar tu proceso.</p>

                                    <form onSubmit={handleSubmit} className="space-y-8">

                                        {/* Información Personal */}
                                        <div>
                                            <h4 className="text-xs font-headline font-bold text-[#ffb3ae] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                                                <span className="w-4 h-[1px] bg-[#ffb3ae]"></span>
                                                Información Personal
                                            </h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-1">
                                                    <label className={labelClass}>Nombre Completo</label>
                                                    <input name="nombre" value={form.nombre} onChange={handleChange} className={inputClass} placeholder="Ej. Juan Pérez" type="text" />
                                                </div>
                                                <div className="space-y-1">
                                                    <label className={labelClass}>Documento de Identidad (DNI)</label>
                                                    <input name="dni" value={form.dni} onChange={handleChange} className={inputClass} placeholder="8 dígitos" type="text" maxLength={8} />
                                                </div>
                                                <div className="space-y-1">
                                                    <label className={labelClass}>Correo Electrónico</label>
                                                    <input name="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="usuario@email.com" type="email" />
                                                </div>
                                                <div className="space-y-1">
                                                    <label className={labelClass}>Teléfono / WhatsApp</label>
                                                    <input name="telefono" value={form.telefono} onChange={handleChange} className={inputClass} placeholder="+51 900 000 000" type="tel" />
                                                </div>
                                                <div className="space-y-1">
                                                    <label className={labelClass}>Talla(cm)</label>
                                                    <input name="talla" value={form.talla} onChange={handleChange} className={inputClass} placeholder="Ejem: 165" type="text" />
                                                </div>
                                                <div className="space-y-1">
                                                    <label className={labelClass}>Peso(Kg)</label>
                                                    <input name="peso" value={form.peso} onChange={handleChange} className={inputClass} placeholder="Ejm: 75" type="text" />
                                                </div>
                                                <div className="space-y-1">
                                                    <label className={labelClass}>Fecha de Nacimineto</label>
                                                    <input name="nacimiento" value={form.nacimiento} onChange={handleChange} className={inputClass} type="date" />
                                                </div>
                                                <div className="space-y-1">
                                                    <label className={labelClass}>Lugar de Residencia</label>
                                                    <input name="residencia" value={form.residencia} onChange={handleChange} className={inputClass} type="text" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Perfil y Motivación */}
                                        <div>
                                            <h4 className="text-xs font-headline font-bold text-[#ffb3ae] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                                                <span className="w-4 h-[1px] bg-[#ffb3ae]"></span>
                                                Perfil y Motivación
                                            </h4>
                                            <div className="space-y-6">
                                                <div className="space-y-1">
                                                    <label className={labelClass}>Grado Académico / Ocupación</label>
                                                    <select name="grado" value={form.grado} onChange={handleChange} className={inputClass} style={{ appearance: "none" }}>
                                                        <option value="">Seleccione una opción</option>
                                                        <option>Cursando Secundaria</option>
                                                        <option>Estudiante Superior</option>
                                                        <option>Técnico Completo</option>
                                                        <option>Universitario Completo</option>
                                                        <option>Empleado / Independiente</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-1">
                                                    <label className={labelClass}>¿Por qué deseas ser bombero voluntario?</label>
                                                    <textarea
                                                        name="motivacion"
                                                        value={form.motivacion}
                                                        onChange={handleChange}
                                                        className={inputClass}
                                                        placeholder="Describe brevemente tu vocación de servicio..."
                                                        rows={4}
                                                        style={{ resize: "none" }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-1">
                                                <label className={labelClass}>Curriculum Vitae</label>
                                                <input
                                                    name="cv"
                                                    onChange={(e) => setForm({ ...form, cv: e.target.files[0] })}
                                                    className={inputClass}
                                                    type="file"
                                                    accept=".pdf,.doc,.docx"
                                                />
                                            </div>
                                        </div>

                                        {/* Declaraciones */}
                                        <div className="p-4 bg-[#0e0e0e]/50 border border-white/5 space-y-4">
                                            <label className="flex items-center gap-3 cursor-pointer group">
                                                <input name="check1" checked={form.check1} onChange={handleChange} className="rounded-sm border-white/20 bg-transparent accent-[#c1272d]" type="checkbox" />
                                                <span className="text-xs text-zinc-400 group-hover:text-white transition-colors">
                                                    Declaro no tener antecedentes penales ni policiales.
                                                </span>
                                            </label>
                                            <label className="flex items-center gap-3 cursor-pointer group">
                                                <input name="check2" checked={form.check2} onChange={handleChange} className="rounded-sm border-white/20 bg-transparent accent-[#c1272d]" type="checkbox" />
                                                <span className="text-xs text-zinc-400 group-hover:text-white transition-colors">
                                                    Acepto los términos del proceso de selección y política de datos.
                                                </span>
                                            </label>
                                        </div>

                                        {/* Botón submit */}
                                        <button
                                            type="submit"
                                            className="w-full bg-[#c1272d] text-white font-headline font-extrabold py-5 rounded-sm hover:brightness-110 hover:shadow-xl transition-all duration-300 uppercase tracking-widest"
                                        >
                                            Enviar Postulación
                                        </button>

                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}