import { Award, Users, Clock, ThumbsUp, Shield, Wrench } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: 'Vakmanschap',
    description: 'Jarenlange ervaring in dakbedekking en dakrenovatie. Hoogwaardige kwaliteit en oog voor detail in elk project.'
  },
  {
    icon: Users,
    title: 'Professioneel team',
    description: 'Gedreven en ervaren vakmensen die uw dak behandelen alsof het hun eigen dak is. Persoonlijke service van begin tot eind.'
  },
  {
    icon: Clock,
    title: 'Snelle service',
    description: 'Korte levertijden en flexibele planning. Wij denken graag met u mee voor de beste oplossing.'
  },
  {
    icon: ThumbsUp,
    title: 'Betrouwbaar',
    description: 'Duidelijke communicatie en afspraken waar u op kunt vertrouwen. Vakkundig advies op maat voor uw situatie.'
  },
  {
    icon: Shield,
    title: 'Garantie & zekerheid',
    description: 'Wij staan garant voor de kwaliteit van ons werk. Duurzame oplossingen met lange levensduur.'
  },
  {
    icon: Wrench,
    title: 'Complete service',
    description: 'Van advies tot realisatie en nazorg. Wij ontlasten u volledig en zorgen voor een zorgeloos proces.'
  }
];

export default function Why() {
  return (
    <section id="waarom" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Waarom AMD Dakwerken</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-accent-50 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Icon className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
