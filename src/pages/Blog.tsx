
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParallaxSection from '@/components/ParallaxSection';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';
import { blogPosts } from '@/data/blogPosts';

const Blog = () => {
  useEffect(() => {
    document.title = 'Studio Cutrullà | Blog';
  }, []);

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <ParallaxSection
          backgroundImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          height="h-[50vh]"
          overlayOpacity={70}
        >
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Il Nostro Blog</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Approfondimenti, novità e consigli dal mondo fiscale e aziendale
            </p>
          </div>
        </ParallaxSection>

        {/* Blog Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content */}
              <div className="lg:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.map((post, index) => (
                    <ScrollReveal key={post.id} direction="bottom" delay={100 * index}>
                      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }}></div>
                        <div className="p-6">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-accountBlue font-medium px-2 py-1 bg-accountBlue-light rounded-full">
                              {post.category}
                            </span>
                            <span className="text-sm text-accountGray">{post.date}</span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                          <p className="text-accountGray-dark mb-4">{post.excerpt}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-accountGray">Di {post.author}</span>
                            <Link to={`/blog/${post.slug}`} className="text-accountBlue hover:text-accountBlue-dark font-medium">
                              Leggi l'articolo →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
                
                {/* Pagination */}
                <div className="mt-12 flex justify-center">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/3">
                <ScrollReveal>
                  <div className="bg-accountBlue-light rounded-lg p-6 shadow-md mb-8">
                    <h3 className="text-xl font-semibold text-accountBlue mb-4">Cerca nel Blog</h3>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Cerca articoli..."
                        className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accountBlue"
                      />
                      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-accountGray hover:text-accountBlue">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                  <div className="bg-accountBlue-light rounded-lg p-6 shadow-md mb-8">
                    <h3 className="text-xl font-semibold text-accountBlue mb-4">Categorie</h3>
                    <ul className="space-y-2">
                      {categories.map((category, index) => (
                        <li key={index}>
                          <Link to={`/blog/categoria/${category.toLowerCase()}`} className="flex justify-between items-center hover:text-accountBlue transition-colors">
                            <span>{category}</span>
                            <span className="bg-white text-accountBlue px-2 py-1 rounded-full text-xs">
                              {blogPosts.filter(post => post.category === category).length}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <div className="bg-accountBlue-light rounded-lg p-6 shadow-md mb-8">
                    <h3 className="text-xl font-semibold text-accountBlue mb-4">Articoli Popolari</h3>
                    <div className="space-y-4">
                      {blogPosts.slice(0, 3).map((post, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-16 h-16 flex-shrink-0 bg-cover bg-center rounded" style={{ backgroundImage: `url(${post.image})` }}></div>
                          <div>
                            <h4 className="font-medium hover:text-accountBlue transition-colors">
                              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                            </h4>
                            <p className="text-sm text-accountGray">{post.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <div className="bg-accountBlue rounded-lg p-6 shadow-md text-white">
                    <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
                    <p className="mb-4">Iscriviti alla nostra newsletter per ricevere aggiornamenti e novità fiscali</p>
                    <div className="space-y-4">
                      <input
                        type="email"
                        placeholder="Inserisci la tua email"
                        className="w-full py-2 px-4 border border-white bg-transparent rounded-md placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                      />
                      <Button className="w-full bg-white text-accountBlue hover:bg-gray-100">
                        Iscriviti
                      </Button>
                    </div>
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

export default Blog;
