
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParallaxSection from '@/components/ParallaxSection';
import ScrollReveal from '@/components/ScrollReveal';
import ExperienceSection from '@/components/ExperienceSection';

const ChiSiamo = () => {
  useEffect(() => {
    document.title = 'Studio Cutrullà | Chi Siamo';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero */}
        <ParallaxSection 
          backgroundImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
          height="h-[300px] md:h-[400px]"
          overlayOpacity={60}
        >
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Chi Siamo</h1>
            <p className="text-xl md:text-2xl">Esperienza, professionalità e soluzioni personalizzate per le vostre esigenze</p>
          </div>
        </ParallaxSection>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl font-bold mb-8 text-accountBlue">Il Nostro Studio</h2>
              </ScrollReveal>
              
              <div className="space-y-6">
                <ScrollReveal direction="bottom" delay={100}>
                  <p className="text-accountGray-dark leading-relaxed">
                    Lo Studio Cutrullà è una realtà professionale multidisciplinare composta da Dottori Commercialisti, Revisori Legali e Avvocati, con una consolidata esperienza nella consulenza tributaria, societaria e legale, sia in ambito nazionale che internazionale.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal direction="bottom" delay={200}>
                  <p className="text-accountGray-dark leading-relaxed">
                    Ci distinguiamo per un approccio riservato, concreto e orientato alla soluzione, con l'obiettivo di affiancare imprese, professionisti e privati in tutte le fasi della loro attività. La nostra struttura, snella e dinamica, consente di offrire un'assistenza puntuale, personalizzata e di elevata qualità, costruendo con i clienti rapporti fiduciari solidi e duraturi.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal direction="bottom" delay={300}>
                  <p className="text-accountGray-dark leading-relaxed">
                    Il nostro team opera in sinergia per fornire risposte tempestive e affidabili, integrando competenze contabili, fiscali e legali, con particolare attenzione alle esigenze specifiche di ogni assistito.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal direction="bottom" delay={400}>
                  <p className="text-accountGray-dark leading-relaxed">
                    La nostra attività si fonda su aggiornamento costante, rigore tecnico e capacità di adattare le soluzioni alle reali esigenze operative e strategiche del cliente.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <ExperienceSection />

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <h2 className="text-3xl font-bold mb-8 text-accountBlue text-center">I Nostri Valori</h2>
              </ScrollReveal>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ScrollReveal direction="left">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 text-accountBlue">Competenza</h3>
                    <p className="text-accountGray-dark">
                      Aggiornamento costante e formazione continua per garantire consulenze sempre in linea con le evoluzioni normative e le best practice.
                    </p>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal direction="right">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 text-accountBlue">Riservatezza</h3>
                    <p className="text-accountGray-dark">
                      Massima attenzione alla privacy e alla tutela delle informazioni sensibili dei nostri clienti.
                    </p>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal direction="left" delay={200}>
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 text-accountBlue">Personalizzazione</h3>
                    <p className="text-accountGray-dark">
                      Soluzioni su misura per rispondere alle reali esigenze di ogni cliente, sia a livello strategico che operativo.
                    </p>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal direction="right" delay={200}>
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 text-accountBlue">Affidabilità</h3>
                    <p className="text-accountGray-dark">
                      Relazioni di lungo periodo basate sulla fiducia e sulla capacità di offrire supporto concreto e puntuale.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 bg-accountBlue-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <h2 className="text-3xl font-bold mb-6 text-accountBlue">La Nostra Sede</h2>
                <p className="text-xl text-accountGray-dark mb-8">
                  UNICA SEDE: Via Padre Reginaldo Giuliani, 4, 20900 Monza MB
                </p>
                <div className="flex justify-center">
                  <a 
                    href="https://wa.link/474rzg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accountBlue hover:bg-accountBlue-dark text-white px-6 py-3 rounded-md transition-colors"
                  >
                    Contattaci su WhatsApp
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ChiSiamo;
