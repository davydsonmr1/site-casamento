"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, QrCode, ShieldCheck } from "lucide-react";
import { GIFTS, formatBRL, type Gift } from "@/lib/gifts";
import { PixModal } from "./PixModal";

export function GiftSection() {
  const [selected, setSelected] = useState<Gift | null>(null);

  return (
    <section className="min-h-screen bg-white px-6 py-24 text-zinc-900">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl italic md:text-5xl">
            Lista de Presentes
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-500">
            Sua presença é nosso maior presente. Mas se desejar nos presentear,
            escolha um item abaixo e contribua via PIX.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {GIFTS.map((gift) => (
            <motion.div
              key={gift.id}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50 shadow-sm"
            >
              <div className="relative h-64 w-full overflow-hidden bg-zinc-200">
                <picture>
                  <img
                    src={gift.image}
                    alt={gift.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.visibility =
                        "hidden";
                    }}
                  />
                </picture>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-zinc-300/40 to-zinc-500/40 mix-blend-multiply" />
              </div>

              <div className="p-6 text-center">
                <h3 className="mb-1 text-lg font-medium">{gift.name}</h3>
                <p className="mb-6 text-zinc-600">{formatBRL(gift.priceCents)}</p>

                <button
                  type="button"
                  onClick={() => setSelected(gift)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-black py-3 text-white transition-all hover:bg-zinc-800 active:scale-95"
                >
                  <QrCode size={18} />
                  Presentear via PIX
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex items-center justify-center gap-2 text-sm text-zinc-400">
          <ShieldCheck size={16} />
          <span> Pagamento Direto aos Noivos</span>
        </div>

        <a
          href="https://www.google.com/maps/dir/?api=1&destination=-21.427418942411286,-42.80509050167631"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-6 flex items-center justify-center gap-2 text-sm text-zinc-600 transition hover:text-zinc-900"
        >
          <MapPin size={16} className="transition group-hover:scale-110" />
          <span className="underline-offset-4 group-hover:underline">
            Itamarati &mdash; Chácara Shekinah, MG
          </span>
          <span className="text-xs text-zinc-400">(traçar rota)</span>
        </a>

        <p className="mt-10 text-center text-xs uppercase tracking-[0.3em] text-zinc-400">
          Desenvolvido por Davydson
        </p>
      </div>

      <PixModal gift={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
