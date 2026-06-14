"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { contact } from "@/lib/data";
import { EASE, SplitWords } from "@/components/motion";
import Grasses from "@/components/Grasses";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-44">
      {/* Hintergrundbild der Hero-Section */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, delay: 0.2, ease: EASE }}
          className="h-full w-full"
        >
          <Image
            src="/images/hero-bg.png"
            alt="Physiotherapeutische Behandlung im Fit-in Gesundheitszentrum"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center lg:object-right"
          />
        </motion.div>
        {/* Overlay für Lesbarkeit des Textes */}
        <div className="absolute inset-0 bg-gradient-to-b from-paper/92 via-paper/70 to-paper/40 lg:bg-gradient-to-r lg:from-paper lg:via-paper/85 lg:to-transparent" />
      </div>

      <Grasses className="pointer-events-none absolute -left-10 top-24 hidden h-72 w-auto -scale-x-100 text-sage-deep lg:block" />

      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
            className="text-kicker mb-8 text-pine"
          >
            Physiotherapie · Reha · Rehasport · Karlstadt
          </motion.p>

          <SplitWords
            as="h1"
            text="Gesunde *Bewegung* ist unser Ziel und Ihr Weg."
            className="font-display text-display-xl text-ink"
            delay={0.5}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease: EASE }}
            className="mt-8 max-w-lg text-lg leading-relaxed text-mist"
          >
            In der Physiotherapie des Fit-in Gesundheitszentrums setzt ein
            eingespieltes Team aus Physiotherapeuten und einer Masseurin Ihre
            verordnete Therapie um. Während Ihrer gesamten Behandlungsserie
            sind Sie dabei in der Hand eines einzelnen Therapeuten.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.3, ease: EASE }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a href={contact.telefonHref} className="btn btn-primary btn-lg">
              Termin vereinbaren
            </a>
            <Link href="/leistungen" className="btn btn-outline btn-lg group">
              Leistungen entdecken
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="mt-16 flex gap-10 border-t hairline pt-6"
          >
            <div>
              <dt className="text-kicker text-mist">Leistungen</dt>
              <dd className="mt-1 font-display text-2xl text-ink">4 Bereiche</dd>
            </div>
            <div>
              <dt className="text-kicker text-mist">Verfahren</dt>
              <dd className="mt-1 font-display text-2xl text-ink">6 Methoden</dd>
            </div>
            <div className="hidden sm:block">
              <dt className="text-kicker text-mist">Betreuung</dt>
              <dd className="mt-1 font-display text-2xl text-ink">Eine Hand</dd>
            </div>
          </motion.dl>
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12l-7.5 7.5M21 12H3" />
    </svg>
  );
}
