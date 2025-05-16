
import ScrollReveal from '@/components/ScrollReveal';

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-accountBlue mb-8 text-center">La Nostra Esperienza</h2>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal direction="bottom" delay={100}>
              <p className="text-accountGray-dark leading-relaxed">
                Lo Studio Cutrullà vanta una consolidata esperienza nell'assistenza e nella gestione di realtà imprenditoriali di ogni dimensione e natura giuridica, operanti nei più diversi settori economici. L'attività si estende a imprese individuali, società di persone, società di capitali, gruppi societari e strutture complesse, incluse realtà con assetto internazionale o operanti in ambiti regolamentati.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="bottom" delay={200}>
              <p className="text-accountGray-dark leading-relaxed">
                Grazie a un approccio trasversale e multidisciplinare, lo Studio affianca i propri clienti nella gestione ordinaria e straordinaria, contribuendo al corretto presidio degli aspetti fiscali, civilistici, contabili e organizzativi. Particolare attenzione è rivolta anche ai profili di governance e compliance, alla redazione di bilanci e documentazione societaria, alle attività valutative e alla predisposizione di perizie tecniche.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="bottom" delay={300}>
              <p className="text-accountGray-dark leading-relaxed">
                Lo Studio ha inoltre maturato una significativa esperienza nell'ambito della revisione legale dei conti e nella partecipazione a Collegi Sindacali, anche in contesti complessi e strutturati, garantendo indipendenza, rigore metodologico e piena aderenza ai principi professionali di riferimento.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="bottom" delay={400}>
              <p className="text-accountGray-dark leading-relaxed">
                Operiamo con competenza, riservatezza e visione strategica, adattando ogni intervento alle specifiche esigenze operative e gestionali del cliente, con l'obiettivo di fornire un supporto concreto, affidabile e di lungo periodo.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
