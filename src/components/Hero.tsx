import { perfil } from '@/data/perfil';

export function Hero() {
  return (
    <section id="inicio" className="mx-auto grid w-full max-w-5xl items-center gap-12 px-5 pb-16 pt-20 sm:px-8 md:grid-cols-[1fr_auto] md:pt-28">
      <div>
        <p className="font-mono text-sm text-acento">Olá, eu sou</p>
        <h1 className="mt-3 text-5xl font-extrabold leading-[1.05] sm:text-6xl">{perfil.nomeCurto}</h1>
        <p className="mt-3 text-xl font-medium text-suave sm:text-2xl">{perfil.cargo}</p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-suave">{perfil.resumo}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contato" className="rounded-full bg-acento px-6 py-3 font-medium text-white transition-colors hover:bg-acento-claro">Falar comigo →</a>
          <a href="#projetos" className="rounded-full border border-borda bg-cartao px-6 py-3 font-medium transition-colors hover:border-acento">Ver projetos</a>
        </div>
        <ul className="mt-8 flex gap-5 text-sm text-suave">
          <li><a className="underline-offset-4 hover:text-acento hover:underline" href={perfil.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a className="underline-offset-4 hover:text-acento hover:underline" href={perfil.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a className="underline-offset-4 hover:text-acento hover:underline" href={perfil.whatsappLink} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
        </ul>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/luiz.jpg"
        alt={`Foto de ${perfil.nomeCurto}`}
        width={600}
        height={600}
        className="mx-auto h-48 w-48 rounded-full object-cover shadow-xl shadow-acento/20 ring-4 ring-cartao sm:h-60 sm:w-60"
      />
    </section>
  );
}
