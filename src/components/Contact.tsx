import { AlertCircle, CheckCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { submitContactRequest } from "../lib/supabase";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    description: "",
    preferred_period: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      await submitContactRequest(formData);
      setStatus("success");
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        description: "",
        preferred_period: "",
      });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        "Er is iets misgegaan. Probeer het opnieuw of neem telefonisch contact op."
      );
      console.error("Form submission error:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Offerte aanvragen
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Neem vrijblijvend contact met ons op voor advies of een offerte op
            maat
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              action="mailto:r.momand@outlook.com"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors"
                    placeholder="Uw naam"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Bedrijf *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors"
                    placeholder="Uw bedrijfsnaam"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Telefoon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors"
                    placeholder="naam@bedrijf.nl"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Omschrijving werkzaamheden *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors resize-none"
                  placeholder="Beschrijf uw project of vraag..."
                />
              </div>

              <div>
                <label
                  htmlFor="preferred_period"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Gewenste periode
                </label>
                <input
                  type="text"
                  id="preferred_period"
                  name="preferred_period"
                  value={formData.preferred_period}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-colors"
                  placeholder="Bijv. week 15-16 of zo snel mogelijk"
                />
              </div>

              {status === "success" && (
                <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-900 mb-1">
                      Aanvraag verzonden!
                    </h4>
                    <p className="text-sm text-green-700">
                      We nemen zo snel mogelijk contact met u op.
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-900 mb-1">
                      Er is iets misgegaan
                    </h4>
                    <p className="text-sm text-red-700">{errorMessage}</p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-accent hover:bg-accent-600 disabled:bg-gray-400 text-white px-8 py-4 rounded-md text-lg font-bold transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Verzenden...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Verstuur aanvraag
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                Uw gegevens worden enkel gebruikt voor contact over uw aanvraag
                en worden niet gedeeld met derden.
              </p>
            </form>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Telefoon</h4>
              <a
                href="tel:0613474842"
                className="text-accent hover:text-accent-600 font-semibold"
              >
                06 13 47 48 42
              </a>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Email</h4>
              <a
                href="mailto:info@amddekbedekking.nl"
                className="text-accent hover:text-accent-600 font-semibold"
              >
                info@amddekbedekking.nl
              </a>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Locatie</h4>
              <p className="text-gray-600 font-semibold">Rotterdam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
