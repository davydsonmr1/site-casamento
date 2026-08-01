"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { RsvpClosedModal } from "./RsvpClosedModal";

export function RsvpSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="bg-zinc-50 px-6 py-24 text-zinc-900 transition-colors md:py-32 dark:bg-zinc-900 dark:text-zinc-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
          Confirme sua Presença
        </p>
        <h2 className="mb-6 font-serif text-3xl italic leading-tight md:text-5xl">
          Preencha o formulário até dia 01 de agosto
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-zinc-600 md:text-lg dark:text-zinc-400">
          Sua confirmação é muito importante para a organização do nosso grande
          dia. Reserve um minutinho e preencha o formulário abaixo.
        </p>

        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-white shadow-lg transition-all hover:scale-105 hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          <Calendar size={18} />
          Confirmar Presença
        </button>

        <p className="mt-6 text-xs text-zinc-500 dark:text-zinc-500">
          Prazo final: 01 de agosto de 2026
        </p>
      </motion.div>

      <RsvpClosedModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
