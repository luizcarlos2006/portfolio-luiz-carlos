import { Secao } from './Secao';
import { perfil } from '@/data/perfil';

export function Contato() {
  const botao = 'rounded-full px-6 py-3 font-medium transition-colors';
  return (
    <Secao id="contato" rotulo="05 · Contato" titulo="Vamos conversar?">
      <p className="max-w-xl text-lg leading-relaxed text-suave">
        Estou aberto a oportunidades de estágio, projetos e parcerias. Me chame por onde for melhor para você.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a className={`${botao} bg-acento text-white hover:bg-acento-claro`} href={perfil.whatsappLink} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <a className={`${botao} border border-borda bg-cartao hover:border-acento`} href={`mailto:${perfil.email}`}>{perfil.email}</a>
        <a className={`${botao} border border-borda bg-cartao hover:border-acento`} href={perfil.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className={`${botao} border border-borda bg-cartao hover:border-acento`} href={perfil.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </Secao>
  );
}
