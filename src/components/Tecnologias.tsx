import { Secao } from './Secao';
import { stack, habilidades } from '@/data/curriculo';

export function Tecnologias() {
  return (
    <Secao id="tecnologias" rotulo="03 · Stack" titulo="Tecnologias e habilidades">
      <div className="grid gap-5 sm:grid-cols-2">
        {stack.map((g) => (
          <div key={g.grupo} className="rounded-2xl border border-borda bg-cartao p-5">
            <h3 className="font-semibold">{g.grupo}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {g.itens.map((i) => <li key={i} className="rounded-md bg-acento/10 px-2.5 py-1 font-mono text-xs text-acento">{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <ol className="mt-12 grid gap-5 md:grid-cols-2">
        {habilidades.map((h, i) => (
          <li key={h.titulo} className="flex gap-4">
            <span className="font-mono text-2xl font-bold text-acento/40">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <h3 className="font-semibold">{h.titulo}</h3>
              <p className="mt-1 leading-relaxed text-suave">{h.texto}</p>
            </div>
          </li>
        ))}
      </ol>
    </Secao>
  );
}
