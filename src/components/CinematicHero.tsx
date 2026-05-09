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

  // Coordenadas da pedra da aliança em fração da imagem original.
  // Tanto object-position quanto transform-origin usam o mesmo ponto:
  // assim a pedra fica fixa no viewport (em qualquer aspect ratio) e o
  // zoom acontece exatamente em cima dela.
  const RING_X = "52%";
  const RING_Y = "65%";

  const scale = useTransform(progress, [0, 0.85], [1, 18]);
  const textOpacity = useTransform(progress, [0, 0.3], [1, 0]);
  const fadeToWhite = useTransform(progress, [0.88, 1], [0, 1]);

  return (
    <section ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale, transformOrigin: `${RING_X} ${RING_Y}` }}
          className="absolute inset-0 z-0 will-change-transform"
        >
          {/* Fallback caso /fundo.jpeg some, mantém clima cinematográfico. */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_52%_65%,#3a2a1a,#0a0606_70%)]"
          />
          <picture>
            <img
              src="/fundo.jpeg"
              alt="Aliança"
              className="absolute inset-0 h-full w-full object-cover brightness-50"
              style={{ objectPosition: `${RING_X} ${RING_Y}` }}
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
            Davydson &amp; Júlia
          </h1>
          <div className="mx-auto h-px w-40 bg-white/50" />
          <p className="text-lg font-light uppercase tracking-[0.3em] md:text-2xl">
            11 de Julho de 2026
          </p>
          <p className="text-sm font-light opacity-80 md:text-lg">
            Itamarati - Chácara Shekinah &mdash; MG
          </p>
          <p className="text-sm font-light opacity-40">
            Coordenadas para o Google Maps: -21.42749715476446, -42.805411838939634
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
