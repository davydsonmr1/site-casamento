"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export function CinematicHero() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scale = useTransform(progress, [0, 0.8], [1, 15]);
  const xFocus = useTransform(progress, [0, 0.8], ["0%", "-10%"]);
  const yFocus = useTransform(progress, [0, 0.8], ["0%", "-20%"]);
  const textOpacity = useTransform(progress, [0, 0.3], [1, 0]);
  const fadeToWhite = useTransform(progress, [0.85, 1], [0, 1]);

  return (
    <section ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale, x: xFocus, y: yFocus }}
          className="absolute inset-0 z-0 will-change-transform"
        >
          {/* Coloque sua foto em public/fundo.jpg. O fallback abaixo aparece se
              a imagem não existir e dá um clima cinematográfico mesmo assim. */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_65%,#3a2a1a,#0a0606_70%)]"
          />
          <picture>
            <img
              src="/fundo.jpg"
              alt="Aliança"
              className="absolute inset-0 h-full w-full object-cover brightness-50 grayscale"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </picture>
        </motion.div>

        <motion.div
          style={{ opacity: textOpacity }}
          className="relative z-10 space-y-4 px-4 text-center"
        >
          <h1 className="font-serif text-5xl italic tracking-tighter md:text-8xl">
            Anderson &amp; Juliana
          </h1>
          <div className="mx-auto h-px w-40 bg-white/50" />
          <p className="text-lg font-light uppercase tracking-[0.3em] md:text-2xl">
            21 de Novembro de 2026
          </p>
          <p className="text-sm font-light opacity-80 md:text-lg">
            São Paulo &mdash; SP
          </p>
        </motion.div>

        <motion.div
          aria-hidden
          style={{ opacity: fadeToWhite, pointerEvents: "none" }}
          className="absolute inset-0 bg-white"
        />
      </div>
    </section>
  );
}
