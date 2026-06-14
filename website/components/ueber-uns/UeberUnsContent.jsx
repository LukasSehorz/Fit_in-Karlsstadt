"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { steckbrief, werdegang, fachbereiche, contact } from "@/lib/data";
import { FadeUp, SplitWords, EASE } from "@/components/motion";
import Grasses from "@/components/Grasses";

export default function UeberUnsContent() {
  return (
    <>
      {/* Kopfbereich mit Bild */}
      <section className="relative overflow-hidden px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-44">
        <Grasses className="pointer-events-none absolute -left-10 top-32 hidden h-64 w-auto -scale-x-100 text-sage-deep lg:block" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
              className="text-kicker mb-8 text-pine"
            >
              Über uns
            </motion.p>
            <SplitWords
              as="h1"
              text="Ein Team, das Ihre Therapie in eine *Hand* legt."
              className="font-display text-display-xl text-ink"
              delay={0.4}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1, ease: EASE }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-mist"
            >
              Wir sind ein Team aus zahlreichen Physiotherapeuten und einer
              Masseurin im Fit-in Gesundheitszentrum in Karlstadt. Unser Ziel
              ist es, die Ihnen verordnete Therapie zu Ihrer Genesung
              bestmöglich umzusetzen und dabei auf Ihre speziellen Probleme und
              Wünsche einzugehen.
            </motion.p>

            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="mt-12 space-y-4 border-t hairline pt-8"
            >
              {steckbrief.map((eintrag, i) => (
                <motion.div
                  key={eintrag.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 1.4 + i * 0.08, ease: EASE }}
                  className="grid grid-cols-[120px_1fr] gap-4 text-sm sm:grid-cols-[160px_1fr]"
                >
                  <dt className="text-kicker pt-0.5 text-mist">{eintrag.label}</dt>
                  <dd className="leading-relaxed text-ink">{eintrag.wert}</dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <motion.div
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 1.4, delay: 0.5, ease: EASE }}
              className="arch relative aspect-[3/4] overflow-hidden bg-paper"
            >
              <motion.div
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.8, delay: 0.5, ease: EASE }}
                className="h-full w-full"
              >
                <Image
                  src="/images/hero-behandlung.png"
                  alt="Physiotherapeutische Behandlung im Fit-in Gesundheitszentrum"
                  fill
                  priority
                  sizes="(min-width: 1024px) 38vw, 90vw"
                  className="object-cover object-top"
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.4, ease: EASE }}
              className="absolute -bottom-6 -right-2 rounded-2xl border hairline bg-paper px-6 py-4 shadow-xl shadow-forest/10 md:-right-6"
            >
              <p className="font-display text-lg text-ink">{contact.praxis}</p>
              <p className="text-sm text-mist">{contact.strasse} · {contact.ort}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Unser Anspruch */}
      <section className="bg-paper px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-4xl">
          <FadeUp>
            <p className="text-kicker mb-6 text-pine">Unser Anspruch</p>
          </FadeUp>
          <SplitWords
            as="h2"
            text="Ihre Behandlung in der Hand eines einzelnen *Therapeuten.*"
            className="font-display text-display-md text-ink"
          />
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <FadeUp delay={0.15}>
              <p className="leading-relaxed text-mist">
                Wir legen Wert darauf, dass Sie während Ihrer Behandlungsserie in
                der Hand eines einzelnen Therapeuten sind, so dass sich dieser
                genau mit Ihnen und Ihrem Körper befassen kann. Unser
                Leistungsspektrum umfasst die Fachbereiche Orthopädie,
                Neurologie und Sportmedizin sowie die chirurgisch-traumatologische
                Nachsorge und die Nachbehandlung operativer Eingriffe.
              </p>
            </FadeUp>
            <FadeUp delay={0.25}>
              <p className="leading-relaxed text-mist">
                An der Schnittstelle Ihrer Rehabilitation zum Fitnesstraining
                erfolgt auf Wunsch eine enge Absprache und Zusammenarbeit mit
                unseren Verantwortlichen für den Fitnessbereich. Neben der
                Physiotherapie bieten wir Ihnen darüber hinaus einige
                Wellnessangebote, damit Sie sich bei uns rundum wohlfühlen.
              </p>
            </FadeUp>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-16 md:gap-8">
            <FadeUp delay={0.15}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/anspruch-1.png"
                  alt="Therapeutische Hände begleiten eine Patientin behutsam durch die Behandlung"
                  fill
                  sizes="(min-width: 640px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.25}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:mt-10">
                <Image
                  src="/images/anspruch-2.png"
                  alt="Ruhiges Beratungsgespräch zwischen Therapeutin und Patientin"
                  fill
                  sizes="(min-width: 640px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* So läuft Ihre Behandlung */}
      <section className="px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16">
            <FadeUp>
              <p className="text-kicker mb-6 text-pine">Ihr Weg bei uns</p>
            </FadeUp>
            <SplitWords
              as="h2"
              text="So läuft Ihre *Behandlung.*"
              className="font-display text-display-lg text-ink"
            />
          </div>

          <ol className="relative border-l hairline pl-8 md:pl-12">
            {werdegang.map((station, i) => (
              <motion.li
                key={station.zeit}
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: EASE }}
                className="relative pb-12 last:pb-0"
              >
                <span className="absolute -left-[37px] top-1.5 size-3 rounded-full border-2 border-leaf bg-cream md:-left-[55px]" />
                <p className="text-kicker text-leaf">{station.zeit}</p>
                <h3 className="mt-2 font-display text-2xl text-ink">{station.titel}</h3>
                <p className="mt-3 max-w-xl leading-relaxed text-mist">{station.text}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Fachbereiche */}
      <section className="relative overflow-hidden bg-forest px-5 py-24 text-cream md:px-8 md:py-36">
        <Grasses className="pointer-events-none absolute -right-6 bottom-0 h-72 w-auto text-leaf-soft/15" />
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <FadeUp>
              <p className="text-kicker mb-6 text-leaf-soft">Unsere Fachbereiche</p>
            </FadeUp>
            <SplitWords
              as="h2"
              text="Ein breites Therapiespektrum unter einem *Dach.*"
              className="font-display text-display-lg"
            />
            <FadeUp delay={0.15}>
              <p className="mt-8 leading-relaxed text-cream/75">
                Vom akuten Beschwerdebild bis zur Nachsorge nach einer Operation
                begleiten wir Sie mit einem breit aufgestellten Team und einer
                Vielzahl an Therapieformen – immer abgestimmt auf Ihren
                persönlichen Befund.
              </p>
            </FadeUp>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {fachbereiche.map((bereich, i) => (
              <motion.div
                key={bereich.wert + bereich.detail}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
                className="rounded-2xl border hairline-light bg-pine/40 p-8"
              >
                <LeafIcon className="size-7 text-leaf-soft" />
                <p className="mt-5 font-display text-2xl">{bereich.wert}</p>
                <p className="mt-1 text-sm text-cream/65">{bereich.detail}</p>
              </motion.div>
            ))}
          </div>

          <FadeUp delay={0.2} className="mt-16 max-w-3xl border-l-2 border-leaf-soft pl-6 md:pl-8">
            <p className="font-display text-2xl italic leading-snug text-cream/90 md:text-3xl">
              „Wir hoffen, dass Sie sich in unseren Händen gut aufgehoben und
              betreut fühlen."
            </p>
            <p className="mt-4 text-sm text-cream/60">Ihr Team der {contact.praxis}</p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

function LeafIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 21c0-9 6-15 18-15 0 9-6 15-15 15-1 0-3 0-3 0Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18C9 13 13 10 18 8" />
    </svg>
  );
}
