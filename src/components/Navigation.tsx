import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Diensten", href: "#diensten" },
  { label: "Waarom AMD", href: "#waarom" },
  { label: "Werkwijze", href: "#werkwijze" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-white"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 w-full overflow-hidden">
            <button
              onClick={() => scrollToSection("#hero")}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img
                src="/amd-high-resolution-logo.png"
                alt="AMD Dakbedekking"
                className="h-30 w-36 "
              />
            </button>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-accent font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}

              <a
                href="tel:0613474842"
                className="bg-accent hover:bg-accent-600 text-white px-6 py-2.5 rounded-md font-bold transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
              >
                <Phone className="w-4 h-4" />
                Bel direct
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-900 hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-gray-700 hover:text-accent font-medium py-2 transition-colors"
                >
                  {item.label}
                </button>
              ))}

              <a
                href="tel:0613474842"
                className="block w-full bg-accent hover:bg-accent-600 text-white px-6 py-3 rounded-md font-bold text-center transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Phone className="w-4 h-4" />
                Bel direct
              </a>
            </div>
          </div>
        )}
      </nav>

      <div className="h-20"></div>
    </>
  );
}
