export function Secao({ id, rotulo, titulo, children }: { id: string; rotulo: string; titulo: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8">
      <p className="font-mono text-sm tracking-wide text-acento">{rotulo}</p>
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{titulo}</h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}
