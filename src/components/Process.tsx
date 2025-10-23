import { CheckCircle, FileText, Hammer, Phone } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Contact & advies",
    description:
      "Neem contact met ons op voor een vrijblijvend gesprek. We bespreken uw wensen en geven deskundig advies.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Offerte op maat",
    description:
      "Na een inspectie ter plaatse ontvangt u een duidelijke offerte met transparante prijzen en planning.",
  },
  {
    icon: Hammer,
    number: "03",
    title: "Professionele uitvoering",
    description:
      "Ons ervaren team voert het werk vakkundig uit met oog voor detail en kwaliteit.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Oplevering & nazorg",
    description:
      "Na oplevering zorgen we voor een schone werkplek en blijven beschikbaar voor eventuele vragen.",
  },
];

export default function Process() {
  return (
    <section id="werkwijze" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Onze werkwijze
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Van eerste contact tot oplevering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="bg-accent rounded-full p-6 w-20 h-20 mx-auto flex items-center justify-center">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-5 -right-2 bg-white text-accent font-bold text-sm rounded-full w-10 h-10 flex items-center justify-center border-2 border-accent left-1/2 transform -translate-x-1/2">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-700">
            <span className="font-bold">Offerte op maat</span> – elk project is
            uniek, daarom maken we graag een persoonlijke offerte
          </p>
        </div>
      </div>
    </section>
  );
}
