import { Phone } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative py-32 bg-gradient-to-br from-primary-700 to-primary-900 text-white overflow-hidden"
    >
      <div className="absolute inset-0  bg-[url('/public/Banner.jpeg')] bg-cover bg-center opacity-30"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          Specialist in dakbedekking en dakrenovatie
        </h1>

        <p className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-95">
          Vakkundig advies en uitvoering voor nieuwbouw, renovatie en onderhoud
          van platte en licht hellende daken
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={scrollToContact}
            className="bg-accent text-white px-10 py-4 rounded-md text-lg font-bold hover:bg-accent-600 transition-all shadow-lg"
          >
            Offerte aanvragen
          </button>
          <a
            href="tel:0613474842"
            className="border-2 border-white text-white px-10 py-4 rounded-md text-lg font-bold hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            06 13 47 48 42
          </a>
        </div>
      </div>
    </section>
  );
}
