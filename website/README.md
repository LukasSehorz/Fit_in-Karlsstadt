# Fit-in Gesundheitszentrum · Webseite

Webseite der Physiotherapie im Fit-in Gesundheitszentrum (Fit-in GmbH) in Karlstadt.

## Technik

- Next.js 16 (App Router, statisch generiert)
- Tailwind CSS 4
- Framer Motion für Animationen, Lenis für sanftes Scrollen
- Schriften Sentient und Switzer über Fontshare

## Befehle

```bash
npm install      # Abhängigkeiten installieren
npm run dev      # Entwicklung auf http://localhost:3000
npm run build    # Produktions-Build
npm run start    # Produktions-Server
```

## Seiten

| Pfad | Inhalt |
| --- | --- |
| `/` | Landing Page mit Hero, Philosophie, Leistungsüberblick, Praxis und Kontakt |
| `/leistungen` | Die vier Leistungsbereiche: Physiotherapie, Reha-Training, Rehasportverein, Spiraldynamik® |
| `/ueber-uns` | Das Team, der Behandlungsablauf und die Fachbereiche |
| `/impressum`, `/datenschutz` | Rechtliches, vor Veröffentlichung fachlich prüfen |

## Inhalte pflegen

Alle Texte, Leistungen und Kontaktdaten liegen zentral in `lib/data.js`.
Bilder liegen in `public/images`. Die vorhandenen Bilder stammen aus dem
Vorlagen-Projekt und sollten vor dem Livegang durch echte Fotos des Fit-in
Gesundheitszentrums (inkl. Logo) ersetzt werden.

## Hinweise vor Livegang

- Echtes Fit-in-Logo statt des Text-Wortmarks in `components/Navbar.jsx` einbinden
- Praxisfotos in `public/images` ergänzen
- Impressum um Umsatzsteuer-Angaben und Aufsichtsbehörde ergänzen
- Datenschutzerklärung juristisch prüfen lassen
- Fontshare-Schriften bei Bedarf lokal einbinden (DSGVO)
