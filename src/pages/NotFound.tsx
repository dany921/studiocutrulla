
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Studio Commercialisti Associati | Pagina Non Trovata";
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-accountBlue mb-6">404</h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-8">Oops! Pagina non trovata</p>
          <p className="text-lg text-accountGray-dark mb-10 max-w-lg mx-auto">
            La pagina che stai cercando potrebbe essere stata rimossa, rinominata o temporaneamente non disponibile.
          </p>
          <Button asChild className="bg-accountBlue hover:bg-accountBlue-dark">
            <Link to="/">Torna alla Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
