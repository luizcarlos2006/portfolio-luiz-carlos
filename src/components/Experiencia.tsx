import { Secao } from './Secao';
import { experiencias, cursos } from '@/data/curriculo';

export function Experiencia() {
  return (
    <Secao id="experiencia" rotulo="02 · Trajetória" titulo="Experiência e cursos">
      <ol className="space-y-6 border-l-2 border-borda pl-6">
        {experiencias.map((e) => (
          <li key={e.empresa} className="relative">
            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-acento ring-4 ring-fundo" />
            <p className="font-mono text-sm text-acento">{e.periodo}</p>
            <h3 className="text-xl font-semibold">{e.empresa}</h3>
            <p className="text-suave">{e.cargo}</p>
            <p className="mt-2 max-w-2xl leading-relaxed text-suave">{e.texto}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {e.tags.map((t) => <li key={t} className="rounded-md bg-acento/10 px-2.5 py-1 font-mono text-xs text-acento">{t}</li>)}
            </ul>
          </li>
        ))}
      </ol>
      <h3 className="mt-14 text-xl font-semibold">Cursos e certificações</h3>
      <ul className="mt-5 grid gap-4 sm:grid-cols-3">
        {cursos.map((c) => (
          <li key={c.nome} className="rounded-2xl border border-borda bg-cartao p-5">
            <p className="font-medium leading-snug">{c.nome}</p>
            <p className="mt-2 text-sm text-suave">{c.origem} · {c.ano} · {c.horas}</p>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
