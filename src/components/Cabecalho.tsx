import { perfil } from '@/data/perfil';

const links = [
  ['Início', '#inicio'],
  ['Sobre', '#sobre'],
  ['Experiência', '#experiencia'],
  ['Tecnologias', '#tecnologias'],
  ['Projetos', '#projetos'],
  ['Contato', '#contato'],
];

export function Cabecalho() {
  return (
    <header className="sticky top-0 z-20 border-b border-borda bg-fundo/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#inicio" className="font-mono text-sm font-semibold text-acento">{'<'}{perfil.iniciais}{' />'}</a>
        <nav aria-label="Seções" className="hidden gap-6 text-sm text-suave md:flex">
          {links.map(([nome, href]) => (
            <a key={href} href={href} className="transition-colors hover:text-acento">{nome}</a>
          ))}
        </nav>
        <a href={perfil.cv} download className="rounded-full border border-acento px-4 py-1.5 text-sm font-medium text-acento transition-colors hover:bg-acento hover:text-white">
          Baixar CV
        </a>
      </div>
      <nav aria-label="Seções" className="flex gap-5 overflow-x-auto px-5 pb-2 text-sm text-suave md:hidden">
        {links.map(([nome, href]) => (
          <a key={href} href={href} className="whitespace-nowrap py-1">{nome}</a>
        ))}
      </nav>
    </header>
  );
}
