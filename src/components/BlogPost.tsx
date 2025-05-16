
import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParallaxSection from '@/components/ParallaxSection';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, Calendar, User, FileText } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find((post) => post.slug === slug);
  
  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Studio Cutrullà`;
    } else {
      document.title = 'Articolo non trovato | Studio Cutrullà';
      navigate('/blog');
    }
  }, [post, navigate]);
  
  if (!post) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <ParallaxSection
          backgroundImage={post.image}
          height="h-[40vh]"
          overlayOpacity={70}
        >
          <div className="text-center text-white">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-accountBlue rounded-full">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </ParallaxSection>

        {/* Article Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content */}
              <div className="lg:w-2/3">
                <Card className="border-none shadow-none">
                  <CardContent className="p-0">
                    <ScrollReveal>
                      <div className="prose max-w-none">
                        <p className="text-xl text-accountGray-dark mb-8 font-medium">
                          {post.excerpt}
                        </p>
                        
                        {post.slug === 'novita-fiscali-2025' && (
                          <>
                            <h2>Le principali novità fiscali del 2025</h2>
                            <p>
                              La legge di bilancio 2025 introduce importanti cambiamenti nel panorama fiscale italiano,
                              coinvolgendo sia i privati che le aziende. Ecco un'analisi dettagliata delle principali novità.
                            </p>
                            
                            <h3>Riforma dell'IRPEF</h3>
                            <p>
                              La riforma dell'IRPEF prevede una rimodulazione delle aliquote e degli scaglioni di reddito,
                              con l'obiettivo di ridurre il carico fiscale per i redditi medio-bassi. In particolare:
                            </p>
                            <ul>
                              <li>Riduzione dell'aliquota per il primo scaglione dal 23% al 21%</li>
                              <li>Ampliamento del secondo scaglione con benefici per i redditi fino a 55.000 euro</li>
                              <li>Revisione delle detrazioni fiscali con un sistema più semplice e lineare</li>
                            </ul>
                            
                            <h3>Incentivi per le imprese</h3>
                            <p>
                              Per favorire la competitività delle imprese italiane, sono stati introdotti o potenziati
                              diversi incentivi:
                            </p>
                            <ul>
                              <li>Credito d'imposta per investimenti in beni strumentali 4.0</li>
                              <li>Agevolazioni per l'assunzione di giovani e donne</li>
                              <li>Potenziamento del Patent Box per la valorizzazione della proprietà intellettuale</li>
                            </ul>
                            
                            <h3>Novità per il settore immobiliare</h3>
                            <p>
                              Il settore immobiliare vede una rimodulazione degli incentivi per le ristrutturazioni 
                              e il risparmio energetico, con particolare attenzione alla sostenibilità ambientale.
                            </p>
                            
                            <h3>Conclusioni</h3>
                            <p>
                              Le novità fiscali 2025 mirano a stimolare la crescita economica attraverso una riduzione
                              della pressione fiscale sui contribuenti e incentivi mirati per le imprese. È importante 
                              consultare un professionista per valutare l'impatto specifico delle nuove disposizioni
                              sulla propria situazione personale o aziendale.
                            </p>
                          </>
                        )}
                        
                        {post.slug === 'strategie-ottimizzazione-fiscale' && (
                          <>
                            <h2>Strategie legali per ottimizzare il carico fiscale aziendale</h2>
                            <p>
                              L'ottimizzazione fiscale rappresenta un obiettivo primario per ogni impresa che intende
                              massimizzare i propri risultati economici. Vediamo le principali strategie legali per
                              ridurre il carico fiscale senza incorrere in pratiche elusive o evasive.
                            </p>
                            
                            <h3>1. Pianificazione fiscale preventiva</h3>
                            <p>
                              La pianificazione preventiva consente di valutare in anticipo l'impatto fiscale delle
                              operazioni aziendali e di scegliere le soluzioni più vantaggiose dal punto di vista tributario.
                              Questo approccio richiede:
                            </p>
                            <ul>
                              <li>Analisi approfondita della normativa fiscale applicabile</li>
                              <li>Simulazione di scenari alternativi</li>
                              <li>Valutazione costi-benefici delle diverse opzioni</li>
                            </ul>
                            
                            <h3>2. Scelta della forma giuridica ottimale</h3>
                            <p>
                              La forma giuridica dell'impresa influenza significativamente il carico fiscale. Società di capitali,
                              società di persone e ditte individuali presentano regimi fiscali differenti, che possono risultare
                              più o meno vantaggiosi a seconda delle caratteristiche dell'attività.
                            </p>
                            
                            <h3>3. Utilizzo di incentivi e agevolazioni fiscali</h3>
                            <p>
                              Il sistema fiscale italiano prevede numerosi incentivi e agevolazioni per le imprese che effettuano 
                              determinati investimenti o adottano specifiche politiche. Tra le principali:
                            </p>
                            <ul>
                              <li>Crediti d'imposta per ricerca e sviluppo</li>
                              <li>Incentivi per la patrimonializzazione (ACE)</li>
                              <li>Agevolazioni per investimenti in beni strumentali</li>
                            </ul>
                            
                            <h3>4. Gestione efficiente dei costi deducibili</h3>
                            <p>
                              Una corretta gestione dei costi aziendali consente di massimizzare le deduzioni fiscali,
                              riducendo così la base imponibile. È fondamentale:
                            </p>
                            <ul>
                              <li>Documentare adeguatamente tutte le spese</li>
                              <li>Verificare la corretta imputazione temporale dei costi</li>
                              <li>Valutare l'inerenza delle spese all'attività d'impresa</li>
                            </ul>
                            
                            <h3>5. Pianificazione internazionale</h3>
                            <p>
                              Per le imprese che operano a livello internazionale, è possibile ottimizzare il carico fiscale
                              attraverso una pianificazione che tenga conto delle diverse normative fiscali nazionali,
                              sempre nel rispetto delle regole anti-elusione e anti-evasione.
                            </p>
                            
                            <h3>Conclusioni</h3>
                            <p>
                              L'ottimizzazione fiscale è un processo complesso che richiede competenze specifiche e un
                              costante aggiornamento normativo. Affidarsi a professionisti qualificati è essenziale per
                              identificare le soluzioni più adatte alle esigenze della propria azienda.
                            </p>
                          </>
                        )}
                        
                        {post.slug === 'detrazioni-ristrutturazioni' && (
                          <>
                            <h2>Tutto sulle detrazioni fiscali per le ristrutturazioni</h2>
                            <p>
                              Le detrazioni fiscali per interventi di ristrutturazione edilizia e riqualificazione
                              energetica rappresentano un'importante opportunità per i proprietari di immobili.
                              Questa guida illustra le principali agevolazioni disponibili e come accedervi.
                            </p>
                            
                            <h3>Detrazione per ristrutturazioni edilizie</h3>
                            <p>
                              La detrazione per interventi di recupero del patrimonio edilizio consente di recuperare
                              una percentuale delle spese sostenute per lavori di manutenzione ordinaria (solo per parti
                              comuni condominiali), straordinaria, restauro, risanamento conservativo e ristrutturazione.
                            </p>
                            <p>
                              Attualmente, la detrazione è pari al 50% delle spese sostenute, con un limite massimo di
                              96.000 euro per unità immobiliare, da ripartire in 10 quote annuali di pari importo.
                            </p>
                            
                            <h3>Ecobonus per la riqualificazione energetica</h3>
                            <p>
                              L'Ecobonus prevede detrazioni per interventi finalizzati al miglioramento dell'efficienza
                              energetica degli edifici esistenti. Le percentuali di detrazione variano dal 50% all'85%
                              in base al tipo di intervento:
                            </p>
                            <ul>
                              <li>Sostituzione di infissi e schermature solari: 50%</li>
                              <li>Installazione di caldaie a condensazione: 50% o 65%</li>
                              <li>Interventi di isolamento termico: 65%</li>
                              <li>Interventi condominiali con miglioramento della prestazione energetica: fino all'85%</li>
                            </ul>
                            
                            <h3>Bonus mobili ed elettrodomestici</h3>
                            <p>
                              Per chi effettua interventi di ristrutturazione edilizia, è possibile usufruire anche di una
                              detrazione del 50% sulle spese sostenute per l'acquisto di mobili e grandi elettrodomestici
                              destinati all'arredo dell'immobile oggetto di ristrutturazione.
                            </p>
                            
                            <h3>Documentazione necessaria</h3>
                            <p>
                              Per accedere alle detrazioni, è fondamentale conservare tutta la documentazione relativa
                              agli interventi effettuati:
                            </p>
                            <ul>
                              <li>Fatture e ricevute dei pagamenti (effettuati con bonifico "parlante")</li>
                              <li>Eventuali autorizzazioni amministrative richieste</li>
                              <li>Comunicazioni all'ENEA (per interventi di riqualificazione energetica)</li>
                              <li>Dichiarazione di conformità per impianti</li>
                            </ul>
                            
                            <h3>Conclusioni</h3>
                            <p>
                              Le detrazioni fiscali rappresentano un'opportunità significativa per chi intende
                              ristrutturare o migliorare l'efficienza energetica della propria abitazione.
                              Data la complessità della normativa, è consigliabile rivolgersi a un professionista
                              per valutare correttamente le agevolazioni applicabili al proprio caso specifico.
                            </p>
                          </>
                        )}
                        
                        {post.slug === 'regime-forfettario-analisi' && (
                          <>
                            <h2>Regime forfettario: analisi completa di vantaggi e limitazioni</h2>
                            <p>
                              Il regime forfettario rappresenta un'opzione fiscale semplificata e vantaggiosa per molti
                              lavoratori autonomi e piccoli imprenditori. Questa analisi esamina in dettaglio caratteristiche,
                              requisiti, vantaggi e limitazioni di questo regime.
                            </p>
                            
                            <h3>Requisiti di accesso</h3>
                            <p>
                              Per accedere al regime forfettario è necessario rispettare determinati requisiti:
                            </p>
                            <ul>
                              <li>Ricavi o compensi non superiori a 85.000 euro annui</li>
                              <li>Spese per personale dipendente non superiori a 20.000 euro</li>
                              <li>Assenza di partecipazioni in società di persone, associazioni professionali o SRL trasparenti</li>
                              <li>Svolgimento di attività non escluse specificamente dalla normativa</li>
                            </ul>
                            
                            <h3>Principali vantaggi</h3>
                            <p>
                              Il regime forfettario offre numerosi vantaggi fiscali e amministrativi:
                            </p>
                            <ul>
                              <li>Tassazione con aliquota sostitutiva del 15% (ridotta al 5% per i primi cinque anni di attività)</li>
                              <li>Determinazione del reddito imponibile mediante l'applicazione di coefficienti di redditività</li>
                              <li>Esonero dall'applicazione dell'IVA</li>
                              <li>Semplificazione degli adempimenti contabili</li>
                              <li>Esclusione dagli studi di settore e dagli indicatori sintetici di affidabilità fiscale</li>
                            </ul>
                            
                            <h3>Limitazioni e svantaggi</h3>
                            <p>
                              Nonostante i numerosi vantaggi, il regime forfettario presenta anche alcune limitazioni:
                            </p>
                            <ul>
                              <li>Impossibilità di detrarre l'IVA sugli acquisti</li>
                              <li>Limitazioni nelle deduzioni di costi specifici</li>
                              <li>Impossibilità di avere personale dipendente oltre certi limiti</li>
                              <li>Restrizioni per chi svolge attività prevalentemente per l'ex datore di lavoro</li>
                              <li>Limiti nell'accesso a determinate detrazioni e deduzioni IRPEF</li>
                            </ul>
                            
                            <h3>A chi conviene realmente</h3>
                            <p>
                              Il regime forfettario è particolarmente vantaggioso per:
                            </p>
                            <ul>
                              <li>Professionisti e lavoratori autonomi con limitate spese per acquisti</li>
                              <li>Attività con alta marginalità</li>
                              <li>Startup nei primi anni di attività</li>
                              <li>Attività con clientela principalmente composta da privati</li>
                            </ul>
                            
                            <h3>Confronto con il regime ordinario</h3>
                            <p>
                              La scelta tra regime forfettario e ordinario dipende da numerosi fattori, tra cui:
                            </p>
                            <ul>
                              <li>Volume d'affari previsto</li>
                              <li>Entità delle spese deducibili</li>
                              <li>Tipologia di clientela (B2B o B2C)</li>
                              <li>Prospettive di crescita dell'attività</li>
                            </ul>
                            
                            <h3>Conclusioni</h3>
                            <p>
                              Il regime forfettario può rappresentare un'opportunità significativa di risparmio fiscale,
                              ma la sua convenienza deve essere valutata caso per caso, considerando le specificità
                              della propria attività. Una consulenza professionale è sempre consigliabile per
                              individuare il regime fiscale più vantaggioso.
                            </p>
                          </>
                        )}
                        
                        {post.slug === 'finanza-agevolata-pmi' && (
                          <>
                            <h2>Opportunità di finanza agevolata per le PMI</h2>
                            <p>
                              La finanza agevolata rappresenta uno strumento fondamentale per sostenere lo sviluppo e la
                              competitività delle piccole e medie imprese italiane. Questo articolo esplora le principali
                              misure disponibili e come accedervi efficacemente.
                            </p>
                            
                            <h3>Contributi a fondo perduto</h3>
                            <p>
                              I contributi a fondo perduto sono erogazioni che non devono essere restituite e vengono
                              concessi per specifici progetti:
                            </p>
                            <ul>
                              <li>Bandi regionali per lo sviluppo imprenditoriale</li>
                              <li>Incentivi per l'innovazione tecnologica</li>
                              <li>Misure per la digitalizzazione</li>
                              <li>Agevolazioni per l'imprenditoria giovanile e femminile</li>
                            </ul>
                            
                            <h3>Finanziamenti a tasso agevolato</h3>
                            <p>
                              Questi finanziamenti prevedono tassi di interesse inferiori rispetto a quelli di mercato
                              e condizioni più favorevoli:
                            </p>
                            <ul>
                              <li>Finanziamenti SACE-SIMEST per l'internazionalizzazione</li>
                              <li>Fondo di Garanzia per le PMI</li>
                              <li>Prestiti BEI (Banca Europea per gli Investimenti)</li>
                              <li>Microcredito per startup e microimprese</li>
                            </ul>
                            
                            <h3>Crediti d'imposta</h3>
                            <p>
                              I crediti d'imposta rappresentano una forma indiretta di finanziamento attraverso la
                              riduzione del carico fiscale:
                            </p>
                            <ul>
                              <li>Credito d'imposta per ricerca e sviluppo</li>
                              <li>Credito d'imposta per investimenti in beni strumentali</li>
                              <li>Credito d'imposta per la formazione 4.0</li>
                              <li>Credito d'imposta per la quotazione in borsa</li>
                            </ul>
                            
                            <h3>Fondi europei</h3>
                            <p>
                              L'Unione Europea mette a disposizione diversi programmi di finanziamento per le PMI:
                            </p>
                            <ul>
                              <li>Horizon Europe per l'innovazione e la ricerca</li>
                              <li>COSME per la competitività</li>
                              <li>InvestEU per investimenti strategici</li>
                              <li>Fondi strutturali gestiti a livello regionale</li>
                            </ul>
                            
                            <h3>Come accedere alle agevolazioni</h3>
                            <p>
                              Per massimizzare le possibilità di accesso alle agevolazioni è consigliabile:
                            </p>
                            <ul>
                              <li>Monitorare costantemente i bandi pubblicati</li>
                              <li>Preparare in anticipo la documentazione necessaria</li>
                              <li>Sviluppare progetti coerenti con gli obiettivi dei bandi</li>
                              <li>Affidarsi a consulenti specializzati</li>
                              <li>Verificare la propria bancabilità e rating creditizio</li>
                            </ul>
                            
                            <h3>Conclusioni</h3>
                            <p>
                              La finanza agevolata offre opportunità significative per le PMI che intendono investire,
                              innovare e crescere. La complessità delle procedure di accesso e la varietà delle misure
                              disponibili rendono consigliabile un supporto professionale per individuare e ottenere
                              le agevolazioni più adatte alle specifiche esigenze aziendali.
                            </p>
                          </>
                        )}
                        
                        {post.slug === 'successioni-donazioni-fiscalita' && (
                          <>
                            <h2>Successioni e donazioni: aspetti fiscali e strategie di pianificazione</h2>
                            <p>
                              La pianificazione patrimoniale rappresenta un aspetto fondamentale per tutelare e
                              trasmettere efficacemente il proprio patrimonio. Questo articolo analizza gli aspetti
                              fiscali delle successioni e delle donazioni, proponendo strategie per ottimizzarne
                              l'impatto tributario.
                            </p>
                            
                            <h3>Imposta di successione: caratteristiche e aliquote</h3>
                            <p>
                              L'imposta di successione si applica sul valore netto dell'eredità, con aliquote e franchigie
                              che variano in base al grado di parentela:
                            </p>
                            <ul>
                              <li>Coniuge e parenti in linea retta: aliquota 4% con franchigia di 1 milione di euro per erede</li>
                              <li>Fratelli e sorelle: aliquota 6% con franchigia di 100.000 euro per erede</li>
                              <li>Altri parenti fino al 4° grado: aliquota 6% senza franchigia</li>
                              <li>Altri soggetti: aliquota 8% senza franchigia</li>
                            </ul>
                            
                            <h3>Imposta di donazione</h3>
                            <p>
                              L'imposta di donazione segue le stesse aliquote e franchigie dell'imposta di successione,
                              applicandosi al valore dei beni donati. È importante considerare che le donazioni effettuate
                              in vita vengono considerate nel calcolo della successione futura.
                            </p>
                            
                            <h3>Strategie di pianificazione successoria</h3>
                            <p>
                              Una pianificazione successoria efficace può consentire di ottimizzare il carico fiscale
                              e facilitare il trasferimento patrimoniale:
                            </p>
                            <ul>
                              <li>Donazioni in vita, sfruttando le franchigie disponibili</li>
                              <li>Patti di famiglia per il trasferimento di aziende</li>
                              <li>Utilizzo di trust e fondazioni</li>
                              <li>Polizze assicurative sulla vita</li>
                              <li>Costituzione di società semplici per la gestione del patrimonio immobiliare</li>
                            </ul>
                            
                            <h3>Casi particolari</h3>
                            <p>
                              Alcuni beni e situazioni godono di un trattamento fiscale particolare:
                            </p>
                            <ul>
                              <li>Trasferimento di aziende e partecipazioni societarie</li>
                              <li>Immobili situati all'estero</li>
                              <li>Beni culturali vincolati</li>
                              <li>Successioni transnazionali</li>
                            </ul>
                            
                            <h3>Adempimenti e procedure</h3>
                            <p>
                              In caso di successione, è necessario presentare la dichiarazione di successione entro
                              12 mesi dalla data del decesso. Per le donazioni di beni immobili o diritti reali immobiliari,
                              è richiesto l'atto pubblico. È fondamentale rispettare le procedure e le tempistiche previste
                              dalla normativa per evitare sanzioni.
                            </p>
                            
                            <h3>Conclusioni</h3>
                            <p>
                              Una pianificazione patrimoniale anticipata e consapevole consente di ottimizzare il passaggio
                              generazionale dei beni, riducendo l'impatto fiscale e prevenendo possibili controversie tra
                              gli eredi. Data la complessità della materia, è sempre consigliabile affidarsi a professionisti
                              esperti per definire la strategia più adatta alle proprie esigenze.
                            </p>
                          </>
                        )}
                      </div>
                    </ScrollReveal>
                    
                    <div className="flex justify-between items-center mt-10 pt-8 border-t">
                      <Button variant="outline" asChild className="flex items-center">
                        <Link to="/blog">
                          <ChevronLeft className="mr-2 h-4 w-4" />
                          Torna al Blog
                        </Link>
                      </Button>
                      
                      <div className="flex space-x-4">
                        <Button variant="outline" className="flex items-center">
                          <FileText className="mr-2 h-4 w-4" />
                          Condividi
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Sidebar */}
              <div className="lg:w-1/3">
                <ScrollReveal>
                  <div className="bg-accountBlue-light rounded-lg p-6 shadow-md mb-8">
                    <h3 className="text-xl font-semibold text-accountBlue mb-4">Categorie</h3>
                    <ul className="space-y-2">
                      {Array.from(new Set(blogPosts.map(p => p.category))).map((category, index) => (
                        <li key={index}>
                          <Link to={`/blog/categoria/${category.toLowerCase()}`} className="flex justify-between items-center hover:text-accountBlue transition-colors">
                            <span>{category}</span>
                            <span className="bg-white text-accountBlue px-2 py-1 rounded-full text-xs">
                              {blogPosts.filter(p => p.category === category).length}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                  <div className="bg-accountBlue-light rounded-lg p-6 shadow-md mb-8">
                    <h3 className="text-xl font-semibold text-accountBlue mb-4">Articoli Correlati</h3>
                    <div className="space-y-4">
                      {blogPosts
                        .filter(p => p.category === post.category && p.id !== post.id)
                        .slice(0, 3)
                        .map((relatedPost, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-16 h-16 flex-shrink-0 bg-cover bg-center rounded" style={{ backgroundImage: `url(${relatedPost.image})` }}></div>
                            <div>
                              <h4 className="font-medium hover:text-accountBlue transition-colors">
                                <Link to={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                              </h4>
                              <p className="text-sm text-accountGray">{relatedPost.date}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <div className="bg-accountBlue rounded-lg p-6 shadow-md text-white">
                    <h3 className="text-xl font-semibold mb-4">Consulenza Fiscale</h3>
                    <p className="mb-6">Hai bisogno di assistenza su questi temi? Il nostro team di esperti è a tua disposizione per una consulenza personalizzata.</p>
                    <Button asChild className="w-full bg-white text-accountBlue hover:bg-gray-100">
                      <Link to="/contatti">Contattaci</Link>
                    </Button>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-accountBlue text-white">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Hai Domande Specifiche?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Il nostro team di esperti è pronto a rispondere a tutte le tue domande fiscali e aziendali. La prima consulenza è gratuita.
              </p>
              <Button asChild className="bg-white text-accountBlue hover:bg-gray-100">
                <Link to="/contatti">Contattaci</Link>
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
