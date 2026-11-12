export const numeros = [
  { valor: '8º', rotulo: 'período de Ciência da Computação' },
  { valor: '7', rotulo: 'projetos neste portfólio' },
  { valor: '1', rotulo: 'pipeline de IA rodando todo dia' },
];

export const destaques = [
  { titulo: 'Formação', linha1: 'Ciência da Computação', linha2: 'Universidade Estácio · Manaus/AM · 2023 – atual' },
  { titulo: 'Idiomas', linha1: 'Inglês intermediário', linha2: 'Embassy / IPT-Light · em andamento' },
];

export const experiencias = [
  {
    empresa: 'Lógica Certa',
    cargo: 'Estagiário — Desenvolvimento de Sistemas Web',
    periodo: '2024',
    texto:
      'Desenvolvimento de sistemas web com Java, JavaScript, HTML e CSS.',
    tags: ['Java', 'JavaScript', 'HTML', 'CSS'],
  },
];

export const cursos = [
  { nome: 'Fundamentos de IA Generativa e Chats Inteligentes', origem: 'Samsung Ocean', ano: '2026', horas: '6h' },
  { nome: 'Ciência de Dados para Digital Health', origem: 'Samsung Ocean', ano: '2025', horas: '8h' },
  { nome: 'Desenvolvimento Ágil', origem: 'Samsung Ocean', ano: '2025', horas: '3h' },
];

export const stack = [
  { grupo: 'Web', itens: ['HTML', 'CSS', 'JavaScript', 'Java', 'Node.js'] },
  { grupo: 'IA & Automação', itens: ['AI Builder', 'Agentes de IA', 'Automação de processos', 'Integração com APIs'] },
  { grupo: 'Dados', itens: ['MySQL'] },
  { grupo: 'Deploy & Ferramentas', itens: ['Git', 'GitHub (branch, PR, merge)', 'Vercel', 'Cloudflare', 'Oracle Cloud', 'Scrum'] },
];

export const habilidades = [
  { titulo: 'Sites que vendem', texto: 'Landing pages e sites institucionais responsivos, pensados para o celular e para levar o cliente ao WhatsApp.' },
  { titulo: 'IA aplicada', texto: 'Agentes de IA e automações que resolvem tarefas reais, do início ao fim.' },
  { titulo: 'Integração com APIs', texto: 'Dados ao vivo de outros sistemas, com plano B para o site nunca ficar em branco.' },
  { titulo: 'Fluxo de equipe', texto: 'Git, branches, Pull Requests e revisão antes de cada publicação.' },
  { titulo: 'Deploy em produção', texto: 'Publicação na Vercel, Cloudflare e Oracle Cloud, com domínio próprio.' },
];

export type Projeto = {
  nome: string;
  tipo: 'Site' | 'Plataforma' | 'IA & Automação';
  texto: string;
  tecnologias: string[];
  link?: string;
};

export const projetos: Projeto[] = [
  {
    nome: 'Bora Correr',
    tipo: 'Plataforma',
    texto: 'Plataforma para uma comunidade de corredores: site com domínio próprio, notificações e conteúdo para os membros.',
    tecnologias: ['Oracle Cloud', 'Automação', 'Notificações'],
    link: 'https://boracorrerbrasil.com.br',
  },
  {
    nome: 'Sistema de Licitações com IA',
    tipo: 'IA & Automação',
    texto: 'Pipeline de agentes de IA que busca licitações, analisa o edital, precifica e monta a documentação, rodando todos os dias.',
    tecnologias: ['Agentes de IA', 'Automação', 'APIs'],
  },
  {
    nome: 'Aulas com o Lance',
    tipo: 'Site',
    texto: 'Site para divulgar e captar alunos de aulas de futevôlei, do desenvolvimento ao deploy.',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    link: 'https://aulas-com-o-lance.vercel.app',
  },
  {
    nome: 'Jullyana Doces',
    tipo: 'Site',
    texto: 'Site de doces artesanais com cardápio e montagem de pedido, que envia a lista pronta para o WhatsApp da vendedora.',
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'WhatsApp', 'Vercel'],
    link: 'https://jullyanadoces.vercel.app',
  },
  {
    nome: 'Cardápio digital ao vivo',
    tipo: 'Site',
    texto: 'Protótipo de cardápio para cafeteria: lê o menu em tempo real de uma API, tem sacola, adicionais e fecha o pedido pelo WhatsApp.',
    tecnologias: ['JavaScript', 'API ao vivo', 'Cloudflare', 'Testes'],
  },
  {
    nome: 'Casa Tucumã',
    tipo: 'Site',
    texto: 'Modelo de cardápio para restaurante, com pedido pelo WhatsApp e mesa por QR code. Marca fictícia, feita para demonstração.',
    tecnologias: ['JavaScript', 'WhatsApp', 'Vercel'],
    link: 'https://restaurante-casa-tucuma.vercel.app',
  },
  {
    nome: 'Dom Navalha',
    tipo: 'Site',
    texto: 'Modelo de site para barbearia, com marca fictícia, feito para demonstração.',
    tecnologias: ['JavaScript', 'Vercel'],
    link: 'https://barbearia-dom-navalha.vercel.app',
  },
];
