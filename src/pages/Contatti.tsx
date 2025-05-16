
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParallaxSection from '@/components/ParallaxSection';
import ScrollReveal from '@/components/ScrollReveal';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contatti = () => {
  useEffect(() => {
    document.title = 'Studio Cutrullà | Contatti';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <ParallaxSection
          backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          height="h-[50vh]"
          overlayOpacity={70}
        >
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contattaci</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Siamo a tua disposizione per qualsiasi informazione o consulenza
            </p>
          </div>
        </ParallaxSection>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-accountBlue mb-6">Informazioni di Contatto</h2>
                    <p className="text-accountGray-dark mb-8">
                      Siamo a tua disposizione per qualsiasi informazione o consulenza. Contattaci tramite uno dei seguenti metodi per ricevere una risposta personalizzata.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-accountBlue-light rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-accountBlue" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-accountBlue">Sede di Monza</h3>
                          <p className="text-accountGray-dark">Via Padre Reginaldo Giuliani, 4</p>
                          <p className="text-accountGray-dark">20900 Monza MB</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-accountBlue-light rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-accountBlue" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-accountBlue">Telefono</h3>
                          <p className="text-accountGray-dark">
                            <a href="tel:+390399150040" className="hover:text-accountBlue transition-colors">039 915 0040</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-accountBlue-light rounded-full flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-accountBlue" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-accountBlue">Email</h3>
                          <p className="text-accountGray-dark">
                            <a href="mailto:info@studiocutrulla.it" className="hover:text-accountBlue transition-colors">info@studiocutrulla.it</a>
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-accountBlue-light rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-accountBlue" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-accountBlue">Orari di Apertura</h3>
                          <p className="text-accountGray-dark">Lunedì - Venerdì: 9:00 - 18:00</p>
                          <p className="text-accountGray-dark">Sabato e Domenica: Chiuso</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-8">
                    <h3 className="text-xl font-semibold text-accountBlue mb-4">Seguici</h3>
                    <div className="flex space-x-4">
                      <a href="#" aria-label="Facebook" className="w-10 h-10 bg-accountBlue text-white rounded-full flex items-center justify-center hover:bg-accountBlue-dark transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      </a>
                      <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-accountBlue text-white rounded-full flex items-center justify-center hover:bg-accountBlue-dark transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </a>
                      <a href="#" aria-label="Twitter" className="w-10 h-10 bg-accountBlue text-white rounded-full flex items-center justify-center hover:bg-accountBlue-dark transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                      <a href="#" aria-label="Instagram" className="w-10 h-10 bg-accountBlue text-white rounded-full flex items-center justify-center hover:bg-accountBlue-dark transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="pb-20 bg-white">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-accountBlue mb-8 text-center">La Nostra Sede</h2>
              <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
                <iframe
                  title="Studio Cutrullà Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.6624981929263!2d9.271048876553991!3d45.58547337107606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786b9dd0bb565a5%3A0x477ae3b7b229ca38!2sVia%20Padre%20Reginaldo%20Giuliani%2C%204%2C%2020900%20Monza%20MB%2C%20Italia!5e0!3m2!1sit!2sit!4v1715876284391!5m2!1sit!2sit"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-accountBlue-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-accountBlue mb-4">Domande Frequenti</h2>
                <p className="text-accountGray-dark max-w-3xl mx-auto">
                  Trova risposte alle domande più comuni sui nostri servizi
                </p>
              </ScrollReveal>
            </div>

            <div className="max-w-3xl mx-auto">
              <ScrollReveal direction="bottom" delay={100}>
                <div className="bg-white rounded-lg p-6 shadow-md mb-4">
                  <h3 className="text-xl font-semibold text-accountBlue mb-2">Come posso richiedere una consulenza?</h3>
                  <p className="text-accountGray-dark">
                    Puoi richiedere una consulenza chiamandoci al numero 039 915 0040 o inviando una mail a info@studiocutrulla.it. Ti risponderemo entro 24 ore lavorative.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="bottom" delay={200}>
                <div className="bg-white rounded-lg p-6 shadow-md mb-4">
                  <h3 className="text-xl font-semibold text-accountBlue mb-2">Quali documenti devo portare al primo appuntamento?</h3>
                  <p className="text-accountGray-dark">
                    Per il primo appuntamento è utile portare la documentazione relativa alla situazione fiscale da esaminare, come dichiarazioni dei redditi precedenti, eventuali visure camerali, documenti societari e ogni altro documento rilevante per la tua specifica situazione.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="bottom" delay={300}>
                <div className="bg-white rounded-lg p-6 shadow-md mb-4">
                  <h3 className="text-xl font-semibold text-accountBlue mb-2">Quanto costa una consulenza iniziale?</h3>
                  <p className="text-accountGray-dark">
                    La prima consulenza conoscitiva è gratuita. Durante questo incontro valuteremo le tue esigenze e ti proporremo un preventivo personalizzato per i servizi di cui hai bisogno.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="bottom" delay={400}>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-semibold text-accountBlue mb-2">Lavorate anche con clienti di altre città?</h3>
                  <p className="text-accountGray-dark">
                    Sì, lavoriamo con clienti in tutta Italia. Oltre alla consulenza in presenza presso i nostri uffici di Monza, offriamo consulenze online tramite video conferenza e possiamo gestire pratiche e documenti in formato digitale.
                  </p>
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

export default Contatti;
