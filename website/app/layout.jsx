import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "Fit-in Gesundheitszentrum · Physiotherapie, Reha & Rehasport in Karlstadt",
    template: "%s · Fit-in Gesundheitszentrum Karlstadt",
  },
  description:
    "Physiotherapie im Fit-in Gesundheitszentrum in Karlstadt. Ein Team aus zahlreichen Physiotherapeuten und einer Masseurin: Manuelle Therapie, Lymphdrainage, Schlingentisch, Bobath, Sportphysiotherapie, Reha-Training, Präventions- und Rehasport sowie Spiraldynamik®.",
  keywords: [
    "Physiotherapie Karlstadt",
    "Fit-in Gesundheitszentrum",
    "Reha-Training Karlstadt",
    "Rehasport Karlstadt",
    "Manuelle Therapie",
    "Spiraldynamik",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=sentient@300,301,400,401,500,501&f[]=switzer@400,401,500,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
