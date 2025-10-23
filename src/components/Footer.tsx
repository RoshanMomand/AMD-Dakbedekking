import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="/amd-white-logo.png"
              alt="AMD Dakwerken"
              className="h-36 w-fit mb-4 brightness-100 invert-0"
            />
            <p className="text-gray-300 leading-relaxed">
              Specialist in dakbedekking en dakrenovatie. Vakkundig advies en
              uitvoering voor nieuwbouw, renovatie en onderhoud.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:0613474842"
                className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
                06 13 47 48 42
              </a>
              <a
                href="mailto:info@amddakwerken.nl"
                className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                info@amddakwerken.nl
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                Rotterdam
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Diensten</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Nieuwbouw dakbedekking</li>
              <li>Dakrenovatie</li>
              <li>Onderhoud platte daken</li>
              <li>Kunststof & bitumen</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} AMD Dakbedekking. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
