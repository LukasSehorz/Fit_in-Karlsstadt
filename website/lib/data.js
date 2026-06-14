export const contact = {
  praxis: "Fit-in Gesundheitszentrum",
  name: "Fit-in Physiotherapie",
  rollen: "Physiotherapie · Reha · Rehasport",
  strasse: "Am Steinlein 6",
  ort: "97753 Karlstadt",
  telefon: "0 93 53 / 99 61 01",
  telefonHref: "tel:+499353996101",
  // Allgemeine Zentrale des Fit-in Gesundheitszentrums
  mobil: "0 93 53 / 99 61 00",
  mobilHref: "tel:+499353996100",
  email: "kg@fit-in-karlstadt.de",
  emailHref: "mailto:kg@fit-in-karlstadt.de",
  web: "www.fit-in-karlstadt.de",
  webHref: "https://www.fit-in-karlstadt.de",
};

export const leistungsGruppen = [
  {
    id: "physiotherapie",
    nummer: "01",
    titel: "Physiotherapie",
    claim: "Ihre verordnete Therapie in den besten Händen",
    intro:
      "Wir sind ein Team aus zahlreichen Physiotherapeuten und einer Masseurin mit dem Ziel, die Ihnen verordnete Therapie bestmöglich umzusetzen und dabei auf Ihre speziellen Probleme und Wünsche einzugehen. Unser Leistungsspektrum umfasst die Fachbereiche Orthopädie, Neurologie und Sportmedizin sowie die chirurgisch-traumatologische Nachsorge und die Nachbehandlung operativer Eingriffe.",
    bild: "/images/manuelle-therapie.png",
    bildAlt: "Manuelle Therapie am Rücken einer Patientin",
    leistungen: [
      {
        name: "Manuelle Therapie",
        text: "Eine gezielte, gelenkschonende und schmerzfreie Behandlungstechnik bei Funktionsstörungen der Gelenke, Muskeln und neuralen Strukturen, die wir ergänzend zur Krankengymnastik anwenden.",
      },
      {
        name: "Gerätegestützte Krankengymnastik",
        text: "Nach schweren Verletzungen, Operationen oder bei chronischen Schmerzzuständen gleichen wir Defizite gezielt aus. Muskelkraft, Koordination und Beweglichkeit verbessern wir mit Hilfe von Kraft- und Kleingeräten.",
      },
      {
        name: "Schlingentischbehandlung",
        text: "Unter Abnahme der Eigenschwere behandeln wir Gelenke der Wirbelsäule, des Rumpfes und der Extremitäten, um die Beweglichkeit zu verbessern sowie Muskelkraft aufzubauen und zu stabilisieren.",
      },
      {
        name: "Behandlung auf neurophysiologischer Basis (Bobath)",
        text: "Für neurologisch erkrankte Patienten suchen und analysieren wir Einschränkungen aus dem täglichen Leben, um diese Alltagssituationen wieder zu erleichtern.",
      },
      {
        name: "Sportphysiotherapie",
        text: "Bei Reiz- und Überlastungsbeschwerden, schmerzhaften Bewegungseinschränkungen und nach Sportverletzungen stehen wir Ihnen rund um die Rehabilitation und das Wiedereingliedern ins Training zur Seite.",
      },
      {
        name: "Manuelle Lymphdrainage",
        text: "Als Teil der Komplexen Entstauungstherapie entstaut die MLD ödematöse Körperregionen, die etwa nach Traumata, Operationen oder einer Lymphknotenentfernung entstehen können.",
      },
    ],
  },
  {
    id: "reha-training",
    nummer: "02",
    titel: "Reha-Training",
    claim: "Der sichere Übergang von der Reha ins Training",
    intro:
      "Um den Übergang von der Krankengymnastik- bzw. Rehaphase in eine allgemeine, „normale“ Trainingsphase zu ermöglichen, bieten wir Ihnen an dieser Schnittstelle einen besonderen Service: In enger Absprache mit unseren Physiotherapeuten erstellen die Verantwortlichen für den Fitnessbereich einen fortführenden Trainingsplan.",
    bild: "/images/trainingstherapie.png",
    bildAlt: "Geführtes Training mit dem Widerstandsband auf der Therapiebank",
    leistungen: [
      {
        name: "Schnittstelle Reha & Fitness",
        text: "An der Schnittstelle Ihres gezielten Trainingsaufbaus arbeiten Therapie und Fitnessbereich Hand in Hand, damit der bis dahin erzielte Rehaerfolg nicht verloren geht.",
      },
      {
        name: "Fortführender Trainingsplan",
        text: "Die Verantwortlichen für den Fitnessbereich erstellen einen individuellen, fortführenden Trainingsplan, der Ihren Rehaerfolg auf eine stabile Basis stellt.",
      },
      {
        name: "Begleiteter Wiedereinstieg",
        text: "Auf Wunsch begleiten wir Sie über die Reha hinaus in ein dauerhaftes, auf Ihre Bedürfnisse zugeschnittenes Training im Fit-in.",
      },
    ],
  },
  {
    id: "rehasportverein",
    nummer: "03",
    titel: "Rehasportverein",
    claim: "Präventions- und Rehasport in der Gemeinschaft",
    intro:
      "Über den Präventions- und Rehasportverein Karlstadt e.V. mit Geschäftsstelle im Fit-in bieten wir Rehabilitations- und Präventionssport in der Gruppe an. Weitere Informationen finden Sie unter rehasport-karlstadt.de.",
    bild: "/images/hero-behandlung.png",
    bildAlt: "Bewegung in der Gruppe in ruhiger Atmosphäre",
    leistungen: [
      {
        name: "Rehabilitationssport",
        text: "Ärztlich verordneter Rehasport in der Gruppe – für mehr Kraft, Ausdauer, Beweglichkeit und Koordination unter qualifizierter Anleitung.",
      },
      {
        name: "Präventionssport",
        text: "Vorbeugende Bewegungsangebote, die helfen, Beschwerden gar nicht erst entstehen zu lassen und Ihre Gesundheit langfristig zu erhalten.",
      },
      {
        name: "Verein & Geschäftsstelle",
        text: "Die Geschäftsstelle des Präventions- und Rehasportvereins Karlstadt e.V. befindet sich direkt im Fit-in, Am Steinlein 6. Mehr unter rehasport-karlstadt.de.",
      },
    ],
  },
  {
    id: "spiraldynamik",
    nummer: "04",
    titel: "Spiraldynamik®",
    claim: "Die Gebrauchsanweisung für den menschlichen Körper",
    intro:
      "Spiraldynamik® ist ein evolutionsgeschichtlich und anatomisch begründetes Bewegungs- und Therapiekonzept. Aus dem natürlichen Bauprinzip der Verschraubung lässt sich ein koordinierter, gesunder Gebrauch des Körpers von Kopf bis Fuß ableiten – so wird gesunde Bewegung verständlich und lernbar.",
    bild: "/images/kinesiology.png",
    bildAlt: "Analyse und Schulung gesunder Bewegungsmuster",
    leistungen: [
      {
        name: "Analyse & neue Bewegungsqualität",
        text: "Wir analysieren die Entstehung von Schmerzen und Fehlbelastungen exakt und vermitteln Ihnen neue, gesunde Bewegungsqualitäten von Kopf bis Fuß.",
      },
      {
        name: "Für nahezu alle Beschwerden des Bewegungssystems",
        text: "Geeignet bei Schmerz, Verspannung und vorzeitiger Abnutzung. Je früher, desto präventiver – je später, desto therapeutischer.",
      },
      {
        name: "4-Stufen-Plan",
        text: "Wahrnehmung schulen, anatomisch sinnvolle Bewegungsmuster anbahnen, variantenreich üben und schließlich in den Alltag integrieren.",
      },
      {
        name: "Therapie & Beratung",
        text: "Selbstzahlerleistung mit Privatrezept: 98,50 € für 60 Minuten inklusive Dokumentation. Ihre Ansprechpartnerinnen sind Beate Schalling und Angelika Pfahls.",
      },
    ],
  },
];

export const featuredLeistungen = [
  {
    name: "Physiotherapie",
    text: "Ein Team aus Physiotherapeuten und einer Masseurin setzt Ihre verordnete Therapie individuell um.",
    bild: "/images/manuelle-therapie.png",
    bildAlt: "Manuelle Therapie am Rücken",
    href: "/leistungen#physiotherapie",
  },
  {
    name: "Reha-Training",
    text: "Der begleitete Übergang von der Rehaphase in ein dauerhaftes, individuelles Training.",
    bild: "/images/trainingstherapie.png",
    bildAlt: "Training mit Widerstandsband",
    href: "/leistungen#reha-training",
  },
  {
    name: "Rehasportverein",
    text: "Präventions- und Rehabilitationssport in der Gruppe über den Verein mit Sitz im Fit-in.",
    bild: "/images/hero-behandlung.png",
    bildAlt: "Bewegung in der Gruppe",
    href: "/leistungen#rehasportverein",
  },
  {
    name: "Spiraldynamik®",
    text: "Ein Bewegungs- und Therapiekonzept, das gesunde Bewegung verständlich und lernbar macht.",
    bild: "/images/kinesiology.png",
    bildAlt: "Schulung gesunder Bewegungsmuster",
    href: "/leistungen#spiraldynamik",
  },
];

export const alleLeistungenNamen = leistungsGruppen.flatMap((g) =>
  g.leistungen.map((l) => l.name)
);

export const steckbrief = [
  { label: "Praxis", wert: "Fit-in Gesundheitszentrum in Karlstadt" },
  { label: "Team", wert: "Zahlreiche Physiotherapeuten und eine Masseurin" },
  { label: "Fachbereiche", wert: "Orthopädie, Neurologie, Sportmedizin, Nachsorge" },
  { label: "Leistungen", wert: "Physiotherapie, Reha-Training, Rehasport, Spiraldynamik®" },
  { label: "Besonderheit", wert: "Ihre Behandlung in der Hand eines Therapeuten" },
];

export const werdegang = [
  {
    zeit: "Schritt 01",
    titel: "Verordnung & erstes Kennenlernen",
    text: "Mit Ihrer ärztlichen Verordnung vereinbaren Sie einen Termin bei uns. Wir nehmen uns Zeit für Ihre Beschwerden, Wünsche und Ziele.",
  },
  {
    zeit: "Schritt 02",
    titel: "Individuelle Befundung",
    text: "Wir betrachten Ihre Beschwerden im Zusammenhang mit Haltung, Bewegung und Alltag und legen gemeinsam den passenden Therapieweg fest.",
  },
  {
    zeit: "Schritt 03",
    titel: "Behandlung in einer Hand",
    text: "Während Ihrer gesamten Behandlungsserie sind Sie in der Hand eines einzelnen Therapeuten, der sich genau mit Ihnen und Ihrem Körper befassen kann.",
  },
  {
    zeit: "Schritt 04",
    titel: "Enge Absprache mit dem Fitnessbereich",
    text: "An der Schnittstelle zur Reha- und Trainingsphase stimmen wir uns auf Wunsch eng mit unseren Verantwortlichen für den Fitnessbereich ab.",
  },
  {
    zeit: "Schritt 05",
    titel: "Optimaler Übergang ins Training",
    text: "So gelingt der Übergang zu einem anschließenden, auf Ihre individuellen Bedürfnisse zugeschnittenen Training im Fit-in.",
  },
  {
    zeit: "Auch danach",
    titel: "Wellness & Wohlfühlen",
    text: "Neben der Physiotherapie bieten wir Ihnen einige Wellnessangebote, damit Sie sich bei uns rundum wohlfühlen.",
  },
];

export const fachbereiche = [
  { wert: "Orthopädie", detail: "Gelenke, Wirbelsäule und Bewegungsapparat" },
  { wert: "Neurologie", detail: "Behandlung u. a. auf Basis des Bobath-Konzepts" },
  { wert: "Sportmedizin", detail: "Rehabilitation nach Sportverletzungen" },
  { wert: "Nachsorge", detail: "Chirurgisch-traumatologisch und nach Operationen" },
];

export const stats = [
  { zahl: 4, suffix: "", label: "Leistungsbereiche von Physiotherapie bis Rehasport" },
  { zahl: 6, suffix: "", label: "spezielle physiotherapeutische Verfahren" },
  { zahl: 4, suffix: "", label: "Fachbereiche unter einem Dach" },
  { zahl: 1, suffix: "", label: "fester Therapeut für Ihre gesamte Behandlung" },
];
