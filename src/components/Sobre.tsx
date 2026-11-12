import { Secao } from './Secao';
import { perfil } from '@/data/perfil';
import { numeros, destaques } from '@/data/curriculo';

export function Sobre() {
  return (
    <Secao id="sobre" rotulo="01 · Sobre mim" titulo="Quem sou eu">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4 text-lg leading-relaxed text-suave">
          {perfil.sobre.map((p) => <p key={p}>{p}</p>)}
        </div>
        <div className="space-y-4">
          {destaques.map((d) => (
            <div key={d.titulo} className="rounded-2xl border border-borda bg-cartao p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-acento">{d.titulo}</p>
              <p className="mt-1 font-semibold">{d.linha1}</p>
              <p className="text-sm text-suave">{d.linha2}</p>
            </div>
          ))}
        </div>
      </div>
      <dl className="mt-10 grid gap-4 sm:grid-cols-3">
        {numeros.map((n) => (
          <div key={n.rotulo} className="rounded-2xl border border-borda bg-cartao p-5">
            <dt className="text-4xl font-extrabold text-acento">{n.valor}</dt>
            <dd className="mt-1 text-sm text-suave">{n.rotulo}</dd>
          </div>
        ))}
      </dl>
    </Secao>
  );
}
