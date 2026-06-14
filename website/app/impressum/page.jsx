import { contact } from "@/lib/data";

export const metadata = {
  title: "Impressum",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <section className="px-5 pb-24 pt-32 md:px-8 md:pt-44">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-display-lg text-ink">Impressum</h1>

        <div className="mt-12 space-y-10 leading-relaxed text-mist">
          <div>
            <h2 className="text-kicker mb-4 text-pine">Angaben gemäß § 5 DDG</h2>
            <p className="text-ink">
              Fit-in GmbH
              <br />
              {contact.strasse}
              <br />
              {contact.ort}
            </p>
          </div>

          <div>
            <h2 className="text-kicker mb-4 text-pine">Kontakt</h2>
            <p>
              Telefon {contact.mobil}
              <br />
              Telefax 0 93 53 / 99 61 02
              <br />
              Physiotherapie {contact.telefon}
              <br />
              E-Mail{" "}
              <a href="mailto:post@fit-in-karlstadt.de" className="link-quiet text-ink underline decoration-leaf/40 underline-offset-4">
                post@fit-in-karlstadt.de
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-kicker mb-4 text-pine">Vertretung & Registereintrag</h2>
            <p>
              Geschäftsführer: Jochen Schmied
              <br />
              Registergericht: Amtsgericht Würzburg, HRB 6106
              <br />
              Steuernummer: 231/126/50059
              <br />
              Inhaltlich verantwortlich: Jochen Schmied
            </p>
          </div>

          <div>
            <h2 className="text-kicker mb-4 text-pine">Berufsbezeichnung</h2>
            <p>
              Physiotherapeutinnen und Physiotherapeuten, Berufsbezeichnung
              verliehen in der Bundesrepublik Deutschland. Es gelten die
              berufsrechtlichen Regelungen des Masseur- und
              Physiotherapeutengesetzes (MPhG).
            </p>
          </div>

          <div>
            <h2 className="text-kicker mb-4 text-pine">Hinweis</h2>
            <p>
              Diese Angaben sind vor Veröffentlichung der Seite zu prüfen und
              gegebenenfalls um Umsatzsteuer-Identifikationsnummer sowie
              Aufsichtsbehörde zu ergänzen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
