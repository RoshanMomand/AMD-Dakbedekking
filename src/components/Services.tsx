import { Home, RefreshCw, Wrench, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Nieuwbouw dakbedekking',
    description: 'Professionele dakbedekking voor nieuwbouwprojecten. Wij verzorgen de complete installatie met hoogwaardige materialen en vakkundige afwerking.'
  },
  {
    icon: RefreshCw,
    title: 'Dakrenovatie',
    description: 'Renovatie van oude of beschadigde daken. Van kleine reparaties tot complete vernieuwing, wij brengen uw dak weer in optimale staat.'
  },
  {
    icon: Wrench,
    title: 'Onderhoud platte daken',
    description: 'Preventief en curatief onderhoud van platte en licht hellende daken. Regelmatige inspectie en onderhoud verlengt de levensduur aanzienlijk.'
  },
  {
    icon: ShieldCheck,
    title: 'Kunststof & bitumen',
    description: 'Specialist in kunststof en bitumen dakbedekkingen. Duurzame oplossingen met uitstekende waterdichtheid en lange levensduur.'
  }
];

export default function Services() {
  return (
    <section id="diensten" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Onze diensten</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professionele ondersteuning voor uw dakprojecten
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-accent-50 rounded-full p-4 flex-shrink-0">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
