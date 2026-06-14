import LeistungenContent from "@/components/leistungen/LeistungenContent";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Leistungen",
  description:
    "Unsere vier Leistungsbereiche im Fit-in Gesundheitszentrum in Karlstadt: Physiotherapie (u. a. Manuelle Therapie, Lymphdrainage, Schlingentisch, Bobath), Reha-Training, Präventions- und Rehasport sowie Spiraldynamik®.",
};

export default function LeistungenPage() {
  return (
    <>
      <LeistungenContent />
      <ContactSection />
    </>
  );
}
