import { Cabecalho } from '@/components/Cabecalho';
import { Hero } from '@/components/Hero';
import { Sobre } from '@/components/Sobre';
import { Experiencia } from '@/components/Experiencia';
import { Tecnologias } from '@/components/Tecnologias';
import { Projetos } from '@/components/Projetos';
import { Contato } from '@/components/Contato';
import { perfil } from '@/data/perfil';

export default function Pagina() {
  return (
    <>
      <Cabecalho />
      <main>
        <Hero />
        <Sobre />
        <Experiencia />
        <Tecnologias />
        <Projetos />
        <Contato />
      </main>
      <footer className="border-t border-borda py-8 text-center text-sm text-suave">
        © {new Date().getFullYear()} {perfil.nome} · {perfil.cidade}
      </footer>
    </>
  );
}
