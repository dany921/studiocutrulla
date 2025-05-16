
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-accountBlue-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Studio Cutrullà</h3>
            <p className="text-sm text-gray-300">
              Offriamo servizi professionali di consulenza fiscale, tributaria e aziendale per aziende e privati.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-white hover:text-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white hover:text-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-white hover:text-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-300 transition-colors">Home</Link></li>
              <li><Link to="/chi-siamo" className="hover:text-blue-300 transition-colors">Chi Siamo</Link></li>
              <li><Link to="/servizi" className="hover:text-blue-300 transition-colors">Servizi</Link></li>
              <li><Link to="/blog" className="hover:text-blue-300 transition-colors">Blog</Link></li>
              <li><Link to="/contatti" className="hover:text-blue-300 transition-colors">Contatti</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servizi</h3>
            <ul className="space-y-2">
              <li><Link to="/servizi/consulenza-fiscale" className="hover:text-blue-300 transition-colors">Consulenza Fiscale</Link></li>
              <li><Link to="/servizi/consulenza-aziendale" className="hover:text-blue-300 transition-colors">Consulenza Aziendale</Link></li>
              <li><Link to="/servizi/dichiarazioni-fiscali" className="hover:text-blue-300 transition-colors">Dichiarazioni Fiscali</Link></li>
              <li><Link to="/servizi/contabilita" className="hover:text-blue-300 transition-colors">Contabilità</Link></li>
              <li><Link to="/servizi/revisione" className="hover:text-blue-300 transition-colors">Revisione Contabile</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contatti</h3>
            <address className="not-italic">
              <p className="mb-2">Via Padre Reginaldo Giuliani, 4</p>
              <p className="mb-2">20900 Monza MB</p>
              <p className="mb-2">
                <a href="tel:+390399150040" className="hover:text-blue-300 transition-colors">039 915 0040</a>
              </p>
              <p>
                <a href="mailto:info@studiocutrulla.it" className="hover:text-blue-300 transition-colors">info@studiocutrulla.it</a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Studio Cutrullà. Tutti i diritti riservati.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/termini-condizioni" className="text-sm text-gray-400 hover:text-white transition-colors">Termini e Condizioni</Link>
              <Link to="/cookie-policy" className="text-sm text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
