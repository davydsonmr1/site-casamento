"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function RsvpClosedModal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="rsvp-closed-title"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

          <motion.div
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8 text-white shadow-2xl backdrop-blur-2xl"
            initial={{ scale: 0.92, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 10, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar"
              className="absolute right-4 top-4 rounded-full p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Confirmação
              </p>
              <h3
                id="rsvp-closed-title"
                className="mt-1 font-serif text-2xl italic"
              >
                Oi, tudo bem?
              </h3>
            </div>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/80">
              <p>
                O prazo de confirmação do nosso casamento encerrou dia 01/08 e,
                como não recebemos sua confirmação, não foi possível reservar
                seu lugar — fechamos com o fornecedor um número limitado de
                convidados.
              </p>
              <p>
                Sentimos muito por isso e esperamos que compreenda. Fica o
                desejo de comemorar com você em outro momento!
              </p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                Com carinho,
              </p>
              <p className="mt-1 font-serif text-xl italic">
                Júlia &amp; Davydson
              </p>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-white/50">
              <Heart size={14} />
              <span>Obrigado pelo seu carinho</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
