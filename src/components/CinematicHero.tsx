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
  const RING_X = "58%";
  const RING_Y = "64%";

  const scale = useTransform(progress, [0, 0.85], [1, 18]);
  const textOpacity = useTransform(progress, [0, 0.3], [1, 0]);
  const fadeToWhite = useTransform(progress, [0.88, 1], [0, 1]);
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.02], [1, 0]);

  return (
    <section ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <motion.div
          role="img"
          aria-label="Mão dos noivos com a aliança"
          style={{
            scale,
            transformOrigin: `${RING_X} ${RING_Y}`,
            backgroundImage: "url('/fundo.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: `${RING_X} ${RING_Y}`,
            backgroundRepeat: "no-repeat",
          }}
          className="absolute inset-0 z-0 will-change-transform"
        >
          {/* Vinheta para legibilidade do texto sem queimar o centro da foto. */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_58%_64%,transparent_25%,rgba(0,0,0,0.55)_75%,rgba(0,0,0,0.85)_100%)]"
          />
        </motion.div>

        <motion.div
          style={{ opacity: textOpacity }}
          className="relative z-10 w-full max-w-[92vw] space-y-3 px-6 text-center text-white sm:space-y-4"
        >
          <h1 className="font-serif text-4xl italic leading-[0.95] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            Júlia &amp; Davydson
          </h1>
          <div className="mx-auto h-px w-24 bg-white/50 sm:w-40" />
          <p className="text-sm font-light uppercase tracking-[0.2em] sm:text-lg sm:tracking-[0.3em] md:text-2xl">
            06 de Setembro de 2026
          </p>
          <p className="text-xs font-light opacity-80 sm:text-sm md:text-lg">
            Itamarati - Chácara Shekinah &mdash; MG
          </p>
        </motion.div>

        <motion.div
          aria-hidden
          style={{ opacity: fadeToWhite, pointerEvents: "none" }}
          className="absolute inset-0 bg-white"
        />

        <motion.div
          aria-hidden
          style={{ opacity: arrowOpacity }}
          className="pointer-events-none absolute bottom-8 left-1/2 z-20 -translate-x-1/2 sm:bottom-12"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-white/80"
          >
            <span className="text-[10px] font-light uppercase tracking-[0.3em] sm:text-xs">
              Role para baixo
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
