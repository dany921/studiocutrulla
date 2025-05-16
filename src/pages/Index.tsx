
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParallaxSection from '@/components/ParallaxSection';
import ScrollReveal from '@/components/ScrollReveal';
import ServiceCard from '@/components/ServiceCard';
import ExperienceSection from '@/components/ExperienceSection';
import TeamSection from '@/components/TeamSection';
import PartnershipSection from '@/components/PartnershipSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    document.title = 'Studio Cutrullà | Home';
  }, []);

  const whatsappLink = "https://wa.link/474rzg";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />

        {/* About Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-accountBlue">Chi Siamo</h2>
                  <p className="text-accountGray-dark">
                    Lo Studio Cutrullà è una realtà professionale multidisciplinare composta da Dottori Commercialisti, Revisori Legali e Avvocati, con una consolidata esperienza nella consulenza tributaria, societaria e legale, sia in ambito nazionale che internazionale.
                  </p>
                  <p className="text-accountGray-dark">
                    Ci distinguiamo per un approccio riservato, concreto e orientato alla soluzione, con l'obiettivo di affiancare imprese, professionisti e privati in tutte le fasi della loro attività.
                  </p>
                  <Button asChild className="bg-accountBlue hover:bg-accountBlue-dark">
                    <Link to="/chi-siamo">Scopri di più sul nostro Studio</Link>
                  </Button>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={300}>
                <div className="relative">
                  <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-xl bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center"></div>
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accountBlue rounded-lg shadow-lg"></div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <ExperienceSection />

        {/* Services Section */}
        <section className="py-20 bg-accountBlue-light">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-accountBlue mb-4">I Nostri Servizi</h2>
                <p className="text-accountGray-dark">
                  Lo Studio Cutrullà vanta una consolidata esperienza in ambito fiscale, societario e legale. Offriamo un supporto completo, 
                  competente e aggiornato per accompagnare imprese, professionisti e privati in ogni esigenza operativa e strategica.
                </p>
              </ScrollReveal>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollReveal direction="bottom" delay={100}>
                <ServiceCard
                  title="Consulenza"
                  description="Revisione legale dei bilanci, consulenza societaria e fiscale, operazioni straordinarie, assistenza nei ricorsi tributari e pianificazione finanziaria internazionale."
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                  }
                  link={whatsappLink}
                  isExternal={true}
                />
              </ScrollReveal>
              
              <ScrollReveal direction="bottom" delay={200}>
                <ServiceCard
                  title="Contabilità"
                  description="Elaborazione di dichiarazioni fiscali, tenuta e gestione contabile per società in contabilità ordinaria e semplificata, ditte individuali, lavoratori autonomi e associazioni."
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                    </svg>
                  }
                  link={whatsappLink}
                  isExternal={true}
                />
              </ScrollReveal>
              
              <ScrollReveal direction="bottom" delay={300}>
                <ServiceCard
                  title="Altri Servizi"
                  description="Assistenza presso gli uffici pubblici come Agenzia delle Entrate, INPS, INAIL e Camere di Commercio. Supporto nella costituzione di società e gestione pratiche amministrative."
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  }
                  link={whatsappLink}
                  isExternal={true}
                />
              </ScrollReveal>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild className="bg-accountBlue hover:bg-accountBlue-dark">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Contattaci su WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <TeamSection />

        {/* Partnership Section */}
        <PartnershipSection />

        {/* Parallax Quote Section - REMOVED as requested */}
        <ParallaxSection 
          backgroundImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
          height="h-[400px]"
          overlayOpacity={70}
        >
          <div className="max-w-3xl mx-auto text-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-12 h-12 mx-auto mb-6 opacity-50" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zm106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="text-2xl md:text-3xl font-light italic mb-6">
              "La prima consulenza iniziale è gratuita."
            </p>
            <div className="flex items-center justify-center">
              <Button asChild className="bg-white text-accountBlue hover:bg-gray-100">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Contattaci
                </a>
              </Button>
            </div>
          </div>
        </ParallaxSection>

        {/* Blog Preview Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-accountBlue mb-4">Dal Nostro Blog</h2>
                <p className="text-accountGray-dark max-w-3xl mx-auto">
                  Rimani aggiornato con le ultime novità fiscali, approfondimenti e consigli utili dal nostro team di esperti.
                </p>
              </ScrollReveal>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal direction="bottom" delay={100}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1722&q=80')] bg-cover bg-center"></div>
                  <div className="p-6">
                    <p className="text-sm text-accountGray mb-2">12 Maggio 2025</p>
                    <h3 className="text-xl font-semibold mb-2">Novità Fiscali 2025: Cosa Cambia per Privati e Aziende</h3>
                    <p className="text-accountGray-dark mb-4">Una panoramica completa delle principali novità fiscali introdotte dalla nuova legge di bilancio.</p>
                    <Link to="/blog/novita-fiscali-2025" className="text-accountBlue hover:text-accountBlue-dark font-medium">Leggi l'articolo →</Link>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="bottom" delay={200}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center"></div>
                  <div className="p-6">
                    <p className="text-sm text-accountGray mb-2">28 Aprile 2025</p>
                    <h3 className="text-xl font-semibold mb-2">5 Strategie per Ottimizzare la Tassazione Aziendale</h3>
                    <p className="text-accountGray-dark mb-4">Scopri le strategie legali più efficaci per ridurre il carico fiscale della tua azienda.</p>
                    <Link to="/blog/strategie-ottimizzazione-fiscale" className="text-accountBlue hover:text-accountBlue-dark font-medium">Leggi l'articolo →</Link>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="bottom" delay={300}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center"></div>
                  <div className="p-6">
                    <p className="text-sm text-accountGray mb-2">15 Aprile 2025</p>
                    <h3 className="text-xl font-semibold mb-2">Guida Completa alle Detrazioni Fiscali per le Ristrutturazioni</h3>
                    <p className="text-accountGray-dark mb-4">Tutto ciò che devi sapere sulle detrazioni fiscali per ristrutturazioni edilizie e riqualificazione energetica.</p>
                    <Link to="/blog/detrazioni-ristrutturazioni" className="text-accountBlue hover:text-accountBlue-dark font-medium">Leggi l'articolo →</Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild variant="outline" className="border-accountBlue text-accountBlue hover:bg-accountBlue hover:text-white">
                <Link to="/blog">Esplora tutti gli articoli</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-accountBlue text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <ScrollReveal>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto per una Consulenza Specializzata?</h2>
                  <p className="text-xl text-gray-200 mb-8">
                    Contattaci oggi per una consulenza personalizzata e scopri come lo Studio Cutrullà può offrirti assistenza puntuale e concreta per le tue esigenze.
                  </p>
                  <p className="text-xl text-gray-200 mb-8">
                    La prima consulenza iniziale è gratuita.
                  </p>
                  <Button asChild className="bg-white text-accountBlue hover:bg-gray-100">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      Contattaci su WhatsApp
                    </a>
                  </Button>
                </ScrollReveal>
              </div>
              <ScrollReveal direction="right">
                <div className="lg:ml-auto">
                  <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
                    <h3 className="text-2xl font-semibold mb-4 text-center">Informazioni di Contatto</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 flex-shrink-0">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        <span>039 915 0040</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 flex-shrink-0">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <span>info@studiocutrulla.it</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 flex-shrink-0">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <span>Via Padre Reginaldo Giuliani, 4, 20900 Monza MB</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 flex-shrink-0">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Lun-Ven: 9:00-18:00</span>
                      </div>
                    </div>
                  </div>
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

export default Index;
