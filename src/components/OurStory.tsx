"use client";

import { motion } from "framer-motion";

export function OurStory() {
  return (
    <section className="bg-white px-6 py-24 text-zinc-900 transition-colors md:py-32 dark:bg-zinc-950 dark:text-zinc-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
          Nossa História
        </p>
        <h2 className="mb-10 font-serif text-4xl italic leading-tight md:text-5xl lg:text-6xl">
          De um olhar a uma vida inteira
        </h2>

        <div className="mx-auto mb-10 h-px w-24 bg-zinc-300 dark:bg-zinc-700" />

        <div className="space-y-6 text-base leading-relaxed text-zinc-700 md:text-lg dark:text-zinc-300">
          <p>
            Tudo começou de um jeito simples — daqueles encontros que parecem
            banais, mas que o tempo se encarrega de transformar em destino. Um
            sorriso tímido, uma conversa que não queria acabar, e a sensação
            estranha de estar em casa pela primeira vez.
          </p>
          <p>
            Entre risadas, viagens, jantares improvisados e madrugadas
            dividindo planos, descobrimos que o amor não precisa ser barulhento
            para ser inteiro. Aprendemos um com o outro, crescemos juntos, e
            escolhemos, todos os dias, continuar escolhendo.
          </p>
          <p>
            No dia <strong>06 de setembro de 2026</strong>, em Itamarati, vamos
            celebrar não o fim de uma história, mas o início do capítulo mais
            bonito dela — cercados de quem faz parte da nossa caminhada.
          </p>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-zinc-400 dark:bg-zinc-600" />
          <span className="font-serif text-lg italic text-zinc-600 dark:text-zinc-400">
            Júlia &amp; Davydson
          </span>
          <div className="h-px w-12 bg-zinc-400 dark:bg-zinc-600" />
        </div>
      </motion.div>
    </section>
  );
}
