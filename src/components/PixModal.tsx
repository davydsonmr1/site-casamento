"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy, ShieldCheck, X } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { PIX_KEY, PIX_RECIPIENT } from "@/lib/pix";
import { formatBRL, type Gift } from "@/lib/gifts";

type Props = {
  gift: Gift | null;
  onClose: () => void;
};

export function PixModal({ gift, onClose }: Props) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!gift) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [gift, onClose]);

  async function copyKey() {
    try {
      await navigator.clipboard.writeText(PIX_KEY);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard pode estar bloqueado em iframes; ignora silenciosamente */
    }
  }

  return (
    <AnimatePresence>
      {gift && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="pix-modal-title"
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
                Presentear
              </p>
              <h3
                id="pix-modal-title"
                className="mt-1 font-serif text-2xl italic"
              >
                {gift.name}
              </h3>
              <p className="mt-1 text-lg font-light text-white/80">
                {formatBRL(gift.priceCents)}
              </p>
            </div>

            <div className="mt-6 flex justify-center">
              <div className="rounded-2xl bg-white p-4 shadow-inner">
                <QRCodeSVG
                  value={PIX_KEY}
                  size={180}
                  level="M"
                  bgColor="#ffffff"
                  fgColor="#0a0a0a"
                />
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                Chave PIX
              </p>
              <div className="mt-2 flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2">
                <span className="flex-1 truncate font-mono text-sm">
                  {PIX_KEY}
                </span>
                <button
                  type="button"
                  onClick={copyKey}
                  aria-label="Copiar chave PIX"
                  className="flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-black transition active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check size={14} /> copiado
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> copiar
                    </>
                  )}
                </button>
              </div>
              <p className="mt-2 text-center text-xs text-white/60">
                Destinatário: {PIX_RECIPIENT}
              </p>
              
              <p className="mt-5 text-center text-xs leading-relaxed text-white/70">
                Caso queira comprar diretamente, aqui está o link: {""}
                <a
                  href={gift.purchaseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-white underline underline-offset-4 transition hover:text-white/80"
                >
                  abrir produto
                </a>
              </p>
            
            </div>


            <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-white/50">
              <ShieldCheck size={14} />
              <span>Pagamento direto aos noivos</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
