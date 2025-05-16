
import { Card, CardContent } from '@/components/ui/card';
import ScrollReveal from '@/components/ScrollReveal';

const TeamSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-accountBlue mb-4">I Nostri Professionisti</h2>
            <p className="text-accountGray-dark max-w-2xl mx-auto">
              Un team di esperti dedicati alla vostra assistenza fiscale, aziendale e legale.
            </p>
          </ScrollReveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ScrollReveal direction="left" delay={100}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 bg-[url('https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3')] bg-cover bg-center"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-accountBlue mb-1">Dott. Mario Rossi</h3>
                <p className="text-sm text-accountGray mb-4">Commercialista e Revisore Legale</p>
                <p className="text-accountGray-dark">
                  Esperto in consulenza fiscale e societaria, con oltre 15 anni di esperienza nell'assistenza a imprese nazionali e internazionali.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
          
          <ScrollReveal direction="bottom" delay={200}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3')] bg-cover bg-center"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-accountBlue mb-1">Avv. Laura Bianchi</h3>
                <p className="text-sm text-accountGray mb-4">Avvocato</p>
                <p className="text-accountGray-dark">
                  Specializzata in diritto societario e commerciale, offre consulenza legale strategica per la gestione e lo sviluppo d'impresa.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={300}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 bg-[url('https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3')] bg-cover bg-center"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-accountBlue mb-1">Dott. Paolo Verdi</h3>
                <p className="text-sm text-accountGray mb-4">Commercialista</p>
                <p className="text-accountGray-dark">
                  Consulente fiscale con particolare competenza in pianificazione tributaria e operazioni straordinarie d'impresa.
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
