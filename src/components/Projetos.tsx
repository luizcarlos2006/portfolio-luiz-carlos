'use client';

import { useState } from 'react';
import { Secao } from './Secao';
import { projetos, type Projeto } from '@/data/curriculo';

const filtros: Array<'Todos' | Projeto['tipo']> = ['Todos', 'Site', 'Plataforma', 'IA & Automação'];

export function Projetos() {
  const [filtro, setFiltro] = useState<(typeof filtros)[number]>('Todos');
  const lista = projetos.filter((p) => filtro === 'Todos' || p.tipo === filtro);

  return (
    <Secao id="projetos" rotulo="04 · Trabalhos" titulo="Projetos">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar projetos">
        {filtros.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={f === filtro}
            onClick={() => setFiltro(f)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${f === filtro ? 'border-acento bg-acento text-white' : 'border-borda bg-cartao text-suave hover:border-acento'}`}
          >
            {f}
          </button>
        ))}
      </div>
      <ul className="mt-8 grid gap-5 md:grid-cols-2">
        {lista.map((p) => (
          <li key={p.nome} className="flex flex-col rounded-2xl border border-borda bg-cartao p-6 transition-shadow hover:shadow-lg hover:shadow-acento/10">
            <p className="font-mono text-xs uppercase tracking-wider text-acento">{p.tipo}</p>
            <h3 className="mt-1 text-xl font-semibold">{p.nome}</h3>
            <p className="mt-2 flex-1 leading-relaxed text-suave">{p.texto}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.tecnologias.map((t) => <li key={t} className="rounded-md bg-acento/10 px-2.5 py-1 font-mono text-xs text-acento">{t}</li>)}
            </ul>
            {p.link && (
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="mt-5 text-sm font-medium text-acento underline-offset-4 hover:underline">
                Ver no ar →
              </a>
            )}
          </li>
        ))}
      </ul>
    </Secao>
  );
}
