
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParallaxSection from '@/components/ParallaxSection';
import ScrollReveal from '@/components/ScrollReveal';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Calculator, 
  Briefcase, 
  FileSearch, 
  FilePen, 
  Settings
} from "lucide-react";

const Servizi = () => {
  useEffect(() => {
    document.title = 'Studio Commercialisti Associati | Servizi';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <ParallaxSection
          backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          height="h-[50vh]"
          overlayOpacity={70}
        >
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cosa Facciamo</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Lo Studio Cutrullà vanta una consolidata esperienza in ambito fiscale, societario e legale. Offriamo un supporto completo, competente e aggiornato per accompagnare imprese, professionisti e privati in ogni esigenza operativa e strategica.
            </p>
          </div>
        </ParallaxSection>

        {/* Main Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-16">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-accountBlue mb-6 text-center">I Nostri Servizi</h2>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Consulenza Card */}
              <ScrollReveal direction="bottom" delay={100}>
                <ServiceCard
                  title="Consulenza"
                  description="Servizi professionali di consulenza fiscale, societaria e legale per imprese e privati."
                  icon={<FileSearch className="w-8 h-8" />}
                  link="/servizi/consulenza"
                  className="bg-white hover:bg-accountBlue-light/20"
                />
              </ScrollReveal>

              {/* Contabilità Card */}
              <ScrollReveal direction="bottom" delay={200}>
                <ServiceCard
                  title="Contabilità"
                  description="Elaborazione dichiarazioni fiscali e gestione contabile per aziende e professionisti."
                  icon={<Calculator className="w-8 h-8" />}
                  link="/servizi/contabilita"
                  className="bg-white hover:bg-accountBlue-light/20"
                />
              </ScrollReveal>

              {/* Altri Servizi Card */}
              <ScrollReveal direction="bottom" delay={300}>
                <ServiceCard
                  title="Altri Servizi"
                  description="Assistenza presso uffici pubblici e supporto nella costituzione e gestione di società."
                  icon={<Settings className="w-8 h-8" />}
                  link="/servizi/altri-servizi"
                  className="bg-white hover:bg-accountBlue-light/20"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Consulenza Section */}
        <section className="py-16 bg-accountBlue-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="flex items-center mb-6">
                  <FileSearch className="w-10 h-10 text-accountBlue mr-4" />
                  <h2 className="text-3xl font-bold text-accountBlue">Consulenza</h2>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-accountBlue rounded-full p-1 mr-3 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">Revisione legale dei bilanci</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accountBlue rounded-full p-1 mr-3 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">Consulenza societaria e fiscale:</span> controllo e redazione di bilanci, dichiarazioni fiscali, assistenza strategica e operativa
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accountBlue rounded-full p-1 mr-3 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">Operazioni straordinarie:</span> assistenza in fusioni, scissioni, conferimenti, liquidazioni
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accountBlue rounded-full p-1 mr-3 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">Assistenza nei ricorsi tributari</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accountBlue rounded-full p-1 mr-3 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">Perizie di stima</span> per valutazioni aziendali e patrimoni
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accountBlue rounded-full p-1 mr-3 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">Pianificazione finanziaria internazionale</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accountBlue rounded-full p-1 mr-3 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">Analisi di bilancio:</span> a fini consuntivi, previsionali, di risanamento e sviluppo
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accountBlue rounded-full p-1 mr-3 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">Consulenza e assistenza contrattuale</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Contabilità Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="flex items-center mb-6">
                  <Calculator className="w-10 h-10 text-accountBlue mr-4" />
                  <h2 className="text-3xl font-bold text-accountBlue">Contabilità</h2>
                </div>
                <div className="bg-accountBlue-light rounded-lg shadow-lg p-8">
                  <p className="mb-6 font-medium">Elaborazione e presentazione di tutte le dichiarazioni fiscali previste dalla normativa vigente</p>
                  
                  <h3 className="text-xl font-bold mb-4 text-accountBlue">Tenuta e gestione contabile per:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-accountBlue rounded-full p-1 mr-3 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>Società in contabilità ordinaria</div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accountBlue rounded-full p-1 mr-3 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>Società in contabilità semplificata</div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accountBlue rounded-full p-1 mr-3 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>Ditte individuali</div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accountBlue rounded-full p-1 mr-3 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>Lavoratori autonomi (medici, avvocati, consulenti, ecc.)</div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accountBlue rounded-full p-1 mr-3 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>Associazioni ed enti non commerciali</div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accountBlue rounded-full p-1 mr-3 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>Regime forfettario</div>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Altri Servizi Section */}
        <section className="py-16 bg-accountBlue-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="flex items-center mb-6">
                  <Settings className="w-10 h-10 text-accountBlue mr-4" />
                  <h2 className="text-3xl font-bold text-accountBlue">Altri Servizi</h2>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-accountBlue rounded-full p-1 mr-3 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">Assistenza presso gli uffici pubblici:</span> Agenzia delle Entrate, INPS, INAIL, Camere di Commercio
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accountBlue rounded-full p-1 mr-3 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">Supporto nella costituzione di società</span> e nella gestione delle pratiche amministrative
                      </div>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <ParallaxSection
          backgroundImage="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          height="h-[400px]"
          overlayOpacity={70}
        >
          <div className="max-w-3xl mx-auto text-center text-white">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Richiedi una Consulenza Personalizzata</h2>
              <p className="text-xl mb-8">
                Il nostro team di esperti è pronto ad aiutarti a trovare le soluzioni più adatte alle tue esigenze specifiche.
              </p>
              <Button asChild className="bg-white text-accountBlue hover:bg-gray-100">
                <Link to="/contatti">Contattaci Ora</Link>
              </Button>
            </ScrollReveal>
          </div>
        </ParallaxSection>
      </main>
      <Footer />
    </div>
  );
};

export default Servizi;
