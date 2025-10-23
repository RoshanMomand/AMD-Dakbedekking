import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsVisible(window.scrollY > heroBottom - 200);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToContact}
      className="fixed bottom-8 right-8 bg-accent hover:bg-accent-600 text-white px-6 py-4 rounded-full font-bold shadow-2xl transition-all transform hover:scale-105 z-40 flex items-center gap-2"
      aria-label="Offerte aanvragen"
    >
      <Phone className="w-5 h-5" />
      <span className="hidden sm:inline">Offerte aanvragen</span>
    </button>
  );
}
