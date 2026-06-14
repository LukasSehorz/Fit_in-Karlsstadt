import UeberUnsContent from "@/components/ueber-uns/UeberUnsContent";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Über uns",
  description:
    "Die Physiotherapie im Fit-in Gesundheitszentrum in Karlstadt: ein Team aus zahlreichen Physiotherapeuten und einer Masseurin. Behandlung in der Hand eines Therapeuten, von Orthopädie über Neurologie bis zur sportmedizinischen Nachsorge.",
};

export default function UeberUnsPage() {
  return (
    <>
      <UeberUnsContent />
      <ContactSection />
    </>
  );
}
